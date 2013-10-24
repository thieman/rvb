(ns rvb.ai
  (:use [rvb.model :only [find-target dist target-angle target-dist]]
        [rvb.util :only [angle-direction abs-angle-diff]]))

(defn animate [tank op arg] {:tank-id (:id tank) :op op :arg arg})

(defn enemy-tanks [tank tank-coll]
  (remove #(= (:team tank) (:team %)) tank-coll))

(defn make-decisions* [tank tank-coll speed {:keys [event info] :as control-args}]
  (let [closest (find-target tank tank-coll)
        target-dist (dist tank closest)
        angle-to-target (.ceil js/Math (target-angle tank closest))
        angle-diff (abs-angle-diff (:angle tank) angle-to-target)
        turn-type (angle-direction (:angle tank) angle-to-target)
        turn-type (if (= :left turn-type) :turn-left :turn-right)
        action (if-not (seq (enemy-tanks tank tank-coll))
                 :victory
                 (if (= event :collision)
                   :flail
                   (if (and (< target-dist 150) (< angle-diff 2))
                     :fire
                     :move)))]
    (condp = action
      :victory [(animate tank :turn-right 10) (animate tank :turn-left 10)]
      :flail (let [roll (rand)]
                (condp >= roll
                  0.4 [(animate tank :move -5)]
                  0.8 [(animate tank :move 5)]
                  0.9 [(animate tank :turn-right 10)]
                  [(animate tank :turn-left 10)]))
      :fire [(animate tank :fire 1)]
      :move (let [turns-required (min (.floor js/Math angle-diff) (get speed turn-type))
                  turn-perc (/ turns-required (get speed :turn-right))
                  moves-allowed (.floor js/Math (* (get speed :move) (- 1 turn-perc)))]
              [(animate tank turn-type turns-required)
               (animate tank :move moves-allowed)]))))

(defn dispatch-on-team [tank & more] (:team tank))
(defmulti make-decisions dispatch-on-team)
(defmethod make-decisions :red [tank & more] (apply make-decisions* tank more))
(defmethod make-decisions :blue [tank & more] (apply make-decisions* tank more))
