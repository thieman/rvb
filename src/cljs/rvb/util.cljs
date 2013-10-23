(ns rvb.util)

(defn deg->rad [deg] (* deg (/ Math.PI 180)))
(defn rad->deg [rad] (mod (* rad (/ 180 Math.PI)) 360))

(defn abs-angle-diff [a1 a2]
  (min (- 360 (.abs js/Math (- a1 a2))) (.abs js/Math (- a1 a2))))

(defn angle-direction [a1 a2]
  ;; TODO: figure out how to do this properly
  (if (> (abs-angle-diff a1 a2) (abs-angle-diff (inc a1) a2)) :right :left))
