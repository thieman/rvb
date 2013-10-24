(ns rvb.util)

(defn deg->rad [deg] (* deg (/ Math.PI 180)))
(defn rad->deg [rad] (mod (* rad (/ 180 Math.PI)) 360))

(defn abs-angle-diff [a1 a2]
  (min (- 360 (.abs js/Math (- a1 a2))) (.abs js/Math (- a1 a2))))

(defn angle-direction [a1 a2]
  ;; TODO: figure out how to do this with math rather than science
  (if (> (abs-angle-diff a1 a2) (abs-angle-diff (inc a1) a2)) :right :left))

(defn tanks-but-me* [tanks-atom me] (remove #(= (:id me) (:id %)) (deref tanks-atom)))

(defn replace-tank [curr-val {:keys [id] :as this-tank}]
  (conj (remove #(= id (:id %)) curr-val) this-tank))

(defn update-tank [curr-val tank-id m]
  (let [curr-tank (first (filter #(= tank-id (:id %)) curr-val))]
    (if curr-tank
      (replace-tank curr-val (merge curr-tank m))
      curr-val)))

(defn remove-tank [curr-val {:keys [id] :as this-tank}]
  (remove #(= id (:id %)) curr-val))

(defn get-tank-by-id* [tanks-atom tank-id]
  (some #(when (= tank-id (:id %)) %) (deref tanks-atom)))
