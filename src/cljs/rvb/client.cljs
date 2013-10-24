(ns rvb.client
  (:use [rvb.model :only [->Canvas ->Tank ->Bullet construct render! erase!
                          move orient find-target dist target-angle
                          turret-endpoint fire collides? take-damage die!]]
        [rvb.util :only [abs-angle-diff angle-direction tanks-but-me*
                         replace-tank update-tank remove-tank get-tank-by-id*]]
        [cljs.core.async :only [chan close! sliding-buffer dropping-buffer timeout >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go alts!]]))

(def canvas (construct (->Canvas)))
(def *next-tank-id* (atom 0))
(def *tanks* (atom []))

(def speed {:move 20 :turn-left 15 :turn-right 15 :fire 0.3 :bullet 40})

(def tanks-but-me (partial tanks-but-me* *tanks*))
(def get-tank-by-id (partial get-tank-by-id* *tanks*))

(defn animate [tank op arg] {:tank-id (:id tank) :op op :arg arg})

(defn get-first-collision [obj coll]
  (let [nearby? (fn [target] (or (>= 50 (.abs js/Math (- (:x obj) (:x target))))
                                 (>= 50 (.abs js/Math (- (:y obj) (:y target))))))
        nearby-coll (filter nearby? coll)]
    (first (filter (partial collides? obj) nearby-coll))))

(defn new-tank-position [canvas team]
  (let [seedX (if (= :red team) 150 450)
        startX (+ seedX (* (rand-int -2) (rand-int 100)))
        startY (+ 100 (rand-int 200))
        tank (construct (->Tank -1 nil nil nil canvas startX startY 20 3 team))]
    (if (get-first-collision tank @*tanks*)
      (recur canvas team)
      [startX startY])))

(defn add-bullet [team coords degree]
  (let [[x y] coords
        bullet (construct (->Bullet canvas x y team degree))]
    (go (loop [bullet bullet]
          (let [new-bullet (move bullet 3)
                hit-tank (get-first-collision new-bullet @*tanks*)]
            (erase! bullet)
            (if hit-tank
              (>! (:events hit-tank) {:op :hit :tank hit-tank})
              (do (render! new-bullet)
                  (<! (timeout (/ 1000 (get speed :bullet))))
                  (recur new-bullet))))))))

(defmulti make-decisions :team)
(declare make-decisions*)
(defmethod make-decisions :red [tank] (make-decisions* tank))
(defmethod make-decisions :blue [tank] (make-decisions* tank))

(defn make-decisions* [tank]
  (let [curr-tanks @*tanks*
        closest (find-target tank curr-tanks)
        target-dist (dist tank closest)
        angle-to-target (.ceil js/Math (target-angle tank closest))
        angle-diff (abs-angle-diff (:angle tank) angle-to-target)
        turn-type (angle-direction (:angle tank) angle-to-target)
        turn-type (if (= :left turn-type) :turn-left :turn-right)]
    (if (and (< target-dist 150) (< angle-diff 2))
      [(animate tank :fire 1)]
      (let [turns-required (min (.floor js/Math angle-diff) (get speed turn-type))
            turn-perc (/ turns-required (get speed :turn-right))
            moves-allowed (.floor js/Math (* (get speed :move) (- 1 turn-perc)))]
        [(animate tank turn-type turns-required)
         (animate tank :move moves-allowed)]))))

(defn animate-tank [old-tank new-tank step]
  (do (erase! old-tank)
      (when (get-tank-by-id (:id new-tank)) ;; am I still alive?
        (swap! *tanks* update-tank (:id new-tank)
               (select-keys new-tank [:corners :straight-corners :center :angle]))
        (render! new-tank)
        (when (= (:op step) :fire)
          (add-bullet (:team new-tank) (turret-endpoint new-tank) (:angle new-tank))))))

(defn add-tank [team]
  (let [[startX startY] (new-tank-position canvas team)
        animation (chan (dropping-buffer 10))
        control (chan (sliding-buffer 1))
        events (chan (dropping-buffer 10))
        t (construct (->Tank @*next-tank-id* canvas control animation events startX startY 20 3 team))]

    (swap! *next-tank-id* inc)
    (swap! *tanks* replace-tank t)

    ;; control/AI goroutine
    (go (loop []
          (when-let [tank-id (<! control)]
            (when-let [t (get-tank-by-id tank-id)]
              (let [turn-actions (remove #(zero? (:arg %)) (make-decisions t))]
                (>! animation turn-actions)
                (recur))))))

    ;; event handler goroutine
    (go (loop []
          (when-let [{:keys [op tank] :as event} (<! events)]
            (condp = op
              :start (>! control (:id tank))
              :hit (let [new-tank (take-damage tank 1)]
                     (when (pos? (:health new-tank))
                       (erase! new-tank)
                       (render! new-tank))
                     (swap! *tanks* replace-tank new-tank)
                     (if (zero? (:health new-tank))
                       (>! (:events new-tank) {:op :die :tank new-tank})
                       (>! control (:id new-tank))))
              :die (do (swap! *tanks* remove-tank tank)
                       (die! tank)))
            (recur))))

    ;; animation goroutine
    (go (loop []
          (when-let [steps (<! animation)]
            (loop [next-steps (rest steps)
                   {:keys [tank-id op arg] :as step} (first steps)]
              (when-let [old-tank (get-tank-by-id tank-id)]
                (let [new-tank (condp = op
                                 :move (move old-tank 1)
                                 :turn-left (orient old-tank (dec (:angle old-tank)))
                                 :turn-right (orient old-tank (inc (:angle old-tank)))
                                 :fire (fire old-tank))]
                  ;; if this move causes a collision, abort move and penalize the tank
                  (if (get-first-collision new-tank (tanks-but-me new-tank))
                    (do (<! (timeout 500))
                        (>! control (:id old-tank)))
                    (do (animate-tank old-tank new-tank step)
                        (<! (timeout (/ 1000 (get speed op))))
                        (if (pos? arg)
                          (recur next-steps {:tank-id (:id new-tank) :op op :arg (dec arg)})
                          (if (seq next-steps)
                            (recur (rest next-steps) (merge (first next-steps) {:tank-id (:id new-tank)}))
                            (>! control (:id new-tank)))))))))
                (recur))))))

(doseq [team (repeat 15 :red)] (add-tank team))
(doseq [team (repeat 15 :blue)] (add-tank team))

(go (doseq [tank @*tanks*]
      (>! (:events tank) {:op :start :tank tank})))
