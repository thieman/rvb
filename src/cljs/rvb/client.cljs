(ns rvb.client
  (:use [rvb.model :only [->Canvas ->Tank ->Bullet construct render! erase!
                          move orient find-target dist target-angle
                          turret-endpoint fire collides? take-damage die!]]
        [rvb.util :only [abs-angle-diff angle-direction tanks-but-me*
                         replace-tank update-tank remove-tank get-tank-by-id*]]
        [rvb.ai :only [make-decisions]]
        [cljs.core.async :only [chan close! sliding-buffer dropping-buffer timeout >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (construct (->Canvas)))
(def *next-tank-id* (atom 0))
(def *tanks* (atom []))

(def speed {:move 30 :reverse 20 :turn-left 25 :turn-right 25 :fire 0.3 :bullet 40})

(def tanks-but-me (partial tanks-but-me* *tanks*))
(def get-tank-by-id (partial get-tank-by-id* *tanks*))

(defn get-collisions [obj coll]
  (let [nearby? (fn [target]
                  (and (>= 40 (.abs js/Math (- (:x obj) (:x target))))
                       (>= 40 (.abs js/Math (- (:y obj) (:y target))))))
        nearby-coll (filter nearby? coll)]
    (filter (partial collides? obj) nearby-coll)))

(defn new-tank-position [canvas team]
  (let [seedX (if (= :red team) 200 700)
        startX (+ seedX (* (rand-int -2) (rand-int 100)))
        startY (+ 20 (rand-int 750))
        tank (construct (->Tank -1 nil nil nil canvas startX startY 20 3 team))]
    (if (first (get-collisions tank @*tanks*))
      (recur canvas team)
      [startX startY])))

(defn add-bullet [team coords degree]
  (let [[x y] coords
        bullet (construct (->Bullet canvas x y team degree))]
    (go (loop [bullet bullet]
          ; kill the bullet once it's outside the canvas
          (when (and (<= 0 x (:width canvas))
                     (<= 0 y (:height canvas)))
            (let [new-bullet (move bullet 3)
                  hit-tank (first (get-collisions new-bullet @*tanks*))]
              (erase! bullet)
              (if hit-tank
                (>! (:events hit-tank) {:op :hit :tank hit-tank})
                (do (render! new-bullet)
                    (<! (timeout (/ 1000 (get speed :bullet))))
                    (recur new-bullet)))))))))

(defn animate-tank [old-tank new-tank step]
  (erase! old-tank)
  (when (get-tank-by-id (:id new-tank)) ;; am I still alive?
    (swap! *tanks* update-tank (:id new-tank)
           (select-keys new-tank [:corners :straight-corners :center :angle :x :y]))
    (render! new-tank)
    (when (= (:op step) :fire)
      (add-bullet (:team new-tank) (turret-endpoint new-tank) (:angle new-tank)))))

(defn process-animation-command [op old-tank]
  (condp = op
    :move (move old-tank 1)
    :reverse (move old-tank -1)
    :turn-left (orient old-tank (dec (:angle old-tank)))
    :turn-right (orient old-tank (inc (:angle old-tank)))
    :fire (fire old-tank)))

(defn add-tank [team]
  (let [[startX startY] (new-tank-position canvas team)
        animation (chan (dropping-buffer 10))
        control (chan (sliding-buffer 1))
        events (chan (dropping-buffer 10))
        t (construct (->Tank @*next-tank-id* canvas control animation events startX startY 20 3 team))
        tank-id (:id t)]

    (swap! *next-tank-id* inc)
    (swap! *tanks* replace-tank t)

    ;; control/AI goroutine
    (go (loop []
          (when-let [control-args (<! control)]
            (when-let [t (get-tank-by-id tank-id)]
              (let [turn-actions (remove #(zero? (:arg %)) (make-decisions t @*tanks* speed control-args))]
                (>! animation turn-actions)
                (recur))))))

    ;; event handler goroutine
    (go (loop []
          (when-let [{:keys [op tank] :as event} (<! events)]
            (condp = op
              :start (>! control {})
              :hit (let [new-tank (take-damage tank 1)]
                     (when (pos? (:health new-tank))
                       (erase! new-tank)
                       (render! new-tank))
                     (swap! *tanks* replace-tank new-tank)
                     (if (zero? (:health new-tank))
                       (>! (:events new-tank) {:op :die :tank new-tank})))
              :die (do (swap! *tanks* remove-tank tank)
                       (die! tank)))
            (recur))))

    ;; animation goroutine
    (go (loop []
          (when-let [steps (<! animation)]
            (loop [next-steps (rest steps)
                   {:keys [tank-id op arg] :as step} (first steps)]
              (when-let [old-tank (get-tank-by-id tank-id)]
                (let [new-tank (process-animation-command op old-tank)
                      collisions (get-collisions new-tank (tanks-but-me new-tank))]
                  ;; if this move causes a collision, abort move and penalize the tank
                  (if (seq collisions)
                    (do (<! (timeout 500))
                        (>! control {:event :collision :info collisions}))
                    (do (animate-tank old-tank new-tank step)
                        (<! (timeout (/ 1000 (get speed op))))
                        (if (> arg 1)
                          (recur next-steps {:tank-id (:id new-tank) :op op :arg (dec arg)})
                          (if (seq next-steps)
                            (recur (rest next-steps) (merge (first next-steps) {:tank-id (:id new-tank)}))
                            (>! control {}))))))))
                (recur))))))

(doseq [team (repeat 25 :red)] (add-tank team))
(doseq [team (repeat 25 :blue)] (add-tank team))

(go (doseq [tank @*tanks*]
      (>! (:events tank) {:op :start :tank tank})))
