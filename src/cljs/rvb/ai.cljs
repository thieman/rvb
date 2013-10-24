(ns rvb.ai
  (:use [rvb.model :only [find-target dist target-angle target-dist]]
        [rvb.util :only [angle-direction abs-angle-diff]]))

(defn animate [tank op arg] {:tank-id (:id tank) :op op :arg arg})

(defn enemy-tanks [tank tank-coll]
  (remove #(= (:team tank) (:team %)) tank-coll))

(defn make-decisions* [tank tank-coll speed]
  (let [closest (find-target tank tank-coll)
        target-dist (dist tank closest)
        angle-to-target (.ceil js/Math (target-angle tank closest))
        angle-diff (abs-angle-diff (:angle tank) angle-to-target)
        turn-type (angle-direction (:angle tank) angle-to-target)
        turn-type (if (= :left turn-type) :turn-left :turn-right)]
    (if-not (seq (enemy-tanks tank tank-coll))
      [(animate tank :turn-right 10) (animate tank :turn-left 10)] ;; on victory, dance
      (if (and (< target-dist 150) (< angle-diff 2))
        [(animate tank :fire 1)]
        (let [turns-required (min (.floor js/Math angle-diff) (get speed turn-type))
              turn-perc (/ turns-required (get speed :turn-right))
              moves-allowed (.floor js/Math (* (get speed :move) (- 1 turn-perc)))]
          [(animate tank turn-type turns-required)
           (animate tank :move moves-allowed)])))))

(defn dispatch-on-team [tank & args] (:team tank))
(defmulti make-decisions dispatch-on-team)
(defmethod make-decisions :red [tank tank-coll speed] (make-decisions* tank tank-coll speed))
(defmethod make-decisions :blue [tank tank-coll speed] (make-decisions* tank tank-coll speed))
