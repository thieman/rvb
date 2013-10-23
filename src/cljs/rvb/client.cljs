(ns rvb.client
  (:use [rvb.model :only [->Canvas ->Tank ->Bullet construct render! erase!
                          move orient find-target dist target-angle
                          turret-endpoint fire collides? take-damage die!]]
        [rvb.util :only [abs-angle-diff angle-direction]]
        [cljs.core.async :only [chan close! sliding-buffer dropping-buffer timeout >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go alts!]]))

(def canvas (construct (->Canvas)))
(def *next-tank-id* (atom 0))
(def *tanks* (atom []))

(def speed {:move 20 :turn-left 15 :turn-right 15 :fire 0.3 :bullet 40})

(defn tanks-but-me [me] (remove #(= (:id me) (:id %)) @*tanks*))

(defn replace-tank [curr-val {:keys [id] :as this-tank}]
  (conj (remove #(= id (:id %)) curr-val) this-tank))

(defn update-tank [curr-val tank-id m]
  (let [curr-tank (first (filter #(= tank-id (:id %)) curr-val))]
    (if curr-tank
      (replace-tank curr-val (merge curr-tank m))
      curr-val)))

(defn remove-tank [curr-val {:keys [id] :as this-tank}]
  (remove #(= id (:id %)) curr-val))

(defn get-tank-by-id [tank-id]
  (some #(when (= tank-id (:id %)) %) @*tanks*))

(defn animate [tank op arg] {:tank-id (:id tank) :op op :arg arg})

(defn add-bullet [team coords degree]
  (let [[x y] coords
        bullet (construct (->Bullet canvas x y team degree))]
    (go (loop [bullet bullet]
          (let [new-bullet (move bullet 3)
                hit-tank (first (filter (partial collides? new-bullet) @*tanks*))]
            (erase! bullet)
            (if hit-tank
              (>! (:events hit-tank) {:op :hit :tank hit-tank})
              (do (render! new-bullet)
                  (<! (timeout (/ 1000 (get speed :bullet))))
                  (recur new-bullet))))))))

(defn new-tank-position [canvas team]
  (let [seedX (if (= :red team) 150 450)
        startX (+ seedX (* (rand-int -2) (rand-int 100)))
        startY (+ 100 (rand-int 200))
        tank (construct (->Tank -1 nil nil nil canvas startX startY 20 3 team))]
    (if (some true? (map (partial collides? tank) @*tanks*))
      (recur canvas team)
      [startX startY])))

(defn add-tank [team]
  (let [[startX startY] (new-tank-position canvas team)
        animation (chan (dropping-buffer 10))
        control (chan (sliding-buffer 1))
        events (chan (dropping-buffer 10))
        t (construct (->Tank @*next-tank-id* canvas control animation events startX startY 20 3 team))]

    (swap! *next-tank-id* inc)
    (swap! *tanks* replace-tank t)

    ;; AI goroutine
    (go (loop []
          (when-let [tank-id (<! control)]
            (when-let [t (get-tank-by-id tank-id)]
              (let [curr-tanks @*tanks*
                    closest (find-target t curr-tanks)
                    target-dist (dist t closest)
                    angle-to-target (.ceil js/Math (target-angle t closest))
                    angle-diff (abs-angle-diff (:angle t) angle-to-target)
                    turn-type (angle-direction (:angle t) angle-to-target)
                    turn-type (if (= :left turn-type) :turn-left :turn-right)
                    turn-actions (if (and (< target-dist 150) (< angle-diff 2))
                                   [(animate t :fire 1)]
                                   (let [turns-required (min (.floor js/Math angle-diff) (get speed turn-type))
                                         turn-perc (/ turns-required (get speed :turn-right))
                                         moves-allowed (.floor js/Math (* (get speed :move) (- 1 turn-perc)))]
                                     [(animate t turn-type turns-required)
                                      (animate t :move moves-allowed)]))
                    filtered-actions (remove #(zero? (:arg %)) turn-actions)]
                (>! animation filtered-actions)
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
                   {:keys [tank-id op arg]} (first steps)]
              (when-let [old (get-tank-by-id tank-id)]
                (let [new-t (condp = op
                              :move (move old 1)
                              :turn-left (orient old (dec (:angle old)))
                              :turn-right (orient old (inc (:angle old)))
                              :fire (fire old))]
                  ;; if this move causes a collision, abort move and penalize the tank
                  (if (some true? (map (partial collides? new-t) (tanks-but-me new-t)))
                    (do (<! (timeout 500))
                        (>! control (:id old)))
                    (do (erase! old)
                        (when (get-tank-by-id (:id new-t)) ;; am I still alive?
                          (swap! *tanks* update-tank (:id new-t)
                                 (select-keys new-t [:corners :straight-corners :center :angle]))
                          (render! new-t)
                          (when (= op :fire)
                            (add-bullet (:team new-t) (turret-endpoint new-t) (:angle new-t)))
                          (<! (timeout (/ 1000 (get speed op))))
                            (if (pos? arg)
                              (recur next-steps {:tank-id (:id new-t) :op op :arg (dec arg)})
                              (if (seq next-steps)
                                (recur (rest next-steps) (merge (first next-steps) {:tank-id (:id new-t)}))
                                (>! control (:id new-t))))))))))
                (recur))))))

(doseq [team (repeat 10 :red)] (add-tank team))
(doseq [team (repeat 10 :blue)] (add-tank team))

(go (doseq [tank @*tanks*]
      (>! (:events tank) {:op :start :tank tank})))
