(ns rvb.ai
  (:use [rvb.model :only [find-target dist target-angle]]
        [rvb.util :only [angle-direction abs-angle-diff]]))

(defn animate [tank op arg] {:tank-id (:id tank) :op op :arg arg})

(defn enemy-tanks [tank tank-coll]
  (remove #(= (:team tank) (:team %)) tank-coll))

(defn red-ai [tank tank-coll speed {:keys [event info] :as control-args}]
  (let [closest (find-target tank tank-coll)
        target-dist (dist tank closest)
        angle-to-target (.ceil js/Math (target-angle tank closest))
        angle-diff (abs-angle-diff (:angle tank) angle-to-target)
        turn-type (angle-direction (:angle tank) angle-to-target)
        turn-type (if (= :left turn-type) :turn-left :turn-right)
        action (if-not (seq (enemy-tanks tank tank-coll))
                 :victory
                 (if (= event :collision)
                   :after-collision
                   (if (and (< target-dist 150) (< angle-diff 2))
                     :fire
                     :move)))]
    (condp = action
      :victory [(animate tank :turn-right 15) (animate tank :turn-left 15)]
      :after-collision (let [roll (rand)]
                         (condp >= roll
                           0.8 (let [tank-hit (first info)
                                     angle-to-collision (target-angle tank tank-hit)
                                     angle-diff (abs-angle-diff (:angle tank) angle-to-collision)
                                     to-move (if (<= angle-diff 90) :reverse :move)
                                     to-turn (condp = (angle-direction (:angle tank) angle-to-collision)
                                               :right :turn-left
                                               :left :turn-right)]
                                 (condp = to-move
                                   :move [(animate tank to-move 5)]
                                   :reverse [(animate tank :reverse 10)
                                             (animate tank to-turn 50)
                                             (animate tank :move 30)]))
                           0.9 [(animate tank :move 10)]
                           1.0 [(animate tank :reverse 10)]))
      :fire [(animate tank :fire 1)]
      :move (let [turns-required (min (.floor js/Math angle-diff) (get speed turn-type))
                  turn-perc (/ turns-required (get speed :turn-right))
                  moves-allowed (.floor js/Math (* (get speed :move) (- 1 turn-perc)))]
              [(animate tank turn-type turns-required)
               (animate tank :move moves-allowed)]))))

(defn blue-ai [tank tank-coll speed {:keys [event info] :as control-args}]
  (let [closest (find-target tank tank-coll)
        target-dist (dist tank closest)
        angle-to-target (.ceil js/Math (target-angle tank closest))
        angle-diff (abs-angle-diff (:angle tank) angle-to-target)
        turn-type (angle-direction (:angle tank) angle-to-target)
        turn-type (if (= :left turn-type) :turn-left :turn-right)
        action (if-not (seq (enemy-tanks tank tank-coll))
                 :victory
                 (if (= event :collision)
                   :after-collision
                   (if (and (< target-dist 150) (< angle-diff 2))
                     :fire
                     :move)))]
    (condp = action
      :victory [(animate tank :turn-right 15) (animate tank :turn-left 15)]
      :after-collision [(animate tank :move 5)]
      :fire [(animate tank :fire 1)]
      :move (let [turns-required (min (.floor js/Math angle-diff) (get speed turn-type))
                  turn-perc (/ turns-required (get speed :turn-right))
                  moves-allowed (.floor js/Math (* (get speed :move) (- 1 turn-perc)))]
              [(animate tank turn-type turns-required)
               (animate tank :move moves-allowed)]))))

(defn dispatch-on-team [tank & more] (:team tank))
(defmulti make-decisions dispatch-on-team)
(defmethod make-decisions :red [tank & more] (apply red-ai tank more))
(defmethod make-decisions :blue [tank & more] (apply blue-ai tank more))
