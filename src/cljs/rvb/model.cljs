(ns rvb.model
  (:use [rvb.util :only [deg->rad rad->deg]]
        [cljs.core.async :only [close!]]))

(defprotocol Constructable
  (construct [this]))

(defprotocol Renderable
  (render! [this])
  (erase! [this]))

(defprotocol Collideable
  (bounds [this])
  (collides? [this object]))

(defprotocol Movable
  (move [this length]))

(defprotocol DeathIncarnate
  (orient [this degree])
  (dist [this target])
  (target-angle [this target])
  (find-target [this objects])
  (turret-endpoint [this])
  (fire [this])
  (take-damage [this damage])
  (die! [this]))

(defrecord Canvas []
  Constructable
  (construct [this]
    (let [canvas-object (.getElementById js/document "game")]
      (merge this {:canvas canvas-object
                   :bg-color "white"
                   :context (.getContext canvas-object "2d")}))))

(defrecord Tank [id canvas control animation events x y size health team]

  Constructable
  (construct [this]
    (let [width size
          height (* 0.7 size)
          straight-corners [[x y] [(+ x width) y]
                            [(+ x width) (+ y height)] [x (+ y height)]]]
    (merge this {:width width
                 :height height
                 :color (if (= team :red) "red" "blue")
                 :center [(+ x (/ width 2)) (+ y (/ height 2))]
                 :angle (if (= team :red) 0 180)
                 :straight-corners straight-corners
                 :corners straight-corners})))

  Renderable
  (render! [{:keys [color corners center angle width health] :as this}]
    (let [context (:context canvas)
          rad (deg->rad angle)
          [startX startY] (first corners)
          [centerX centerY] center
          [turretX turretY] (turret-endpoint this)
          dirX (.cos js/Math rad)
          dirY (.sin js/Math rad)]
      (set! (.-strokeStyle context) color)
      (if (= color (:bg-color canvas))
        (set! (.-lineWidth context) 6)
        (set! (.-lineWidth context) health))
      (.beginPath context)
      (.moveTo context startX startY)
      (doseq [[x y] (rest corners)] (.lineTo context x y))
      (.closePath context)
      (.stroke context)
      (if (= color (:bg-color canvas))
        (set! (.-lineWidth context) 6)
        (set! (.-lineWidth context) 2))
      (.beginPath context)
      (if (= color (:bg-color canvas))
        (do (.moveTo context (- centerX dirX) (- centerY dirY))
            (.lineTo context (+ turretX dirX) (+ turretY dirY)))
        (do (.moveTo context centerX centerY)
            (.lineTo context turretX turretY)))
      (.closePath context)
      (.stroke context)))

  (erase! [this]
    (render! (merge this {:color (:bg-color canvas)})))

  Collideable
  (bounds [{:keys [corners] :as this}]
    ;; add a bit of a buffer to the tanks so they stay spaced out
    (let [buffer 2
          minX (- (apply min (map first corners)) buffer)
          maxX (+ (apply max (map first corners)) buffer)
          minY (- (apply min (map second corners)) buffer)
          maxY (+ (apply max (map second corners)) buffer)]
      [minX maxX minY maxY]))

  (collides? [this object]
    (let [[my-min-x my-max-x my-min-y my-max-y] (bounds this)
          [obj-min-x obj-max-x obj-min-y obj-max-y] (bounds object)]
      (not (or (> my-min-x obj-max-x)
               (> my-min-y obj-max-y)
               (< my-max-x obj-min-x)
               (< my-max-y obj-min-y)))))

  Movable
  (move [{:keys [center corners straight-corners angle] :as this} length]
    (let [rad (deg->rad angle)
          diffX (* length (.cos js/Math rad))
          diffY (* length (.sin js/Math rad))]
      (merge this {:corners (mapv #(apply mapv + [% [diffX diffY]]) corners)
                   :straight-corners (mapv #(apply mapv + [% [diffX diffY]]) straight-corners)
                   :center (apply mapv + [center [diffX diffY]])})))

  DeathIncarnate
  (orient [{:keys [straight-corners center] :as this} degree]
    (let [rad (deg->rad degree)
          rotate (fn [[x y] corner] [(- (* x (.cos js/Math rad)) (* y (.sin js/Math rad)))
                                     (+ (* y (.cos js/Math rad)) (* x (.sin js/Math rad)))])
          transposed (mapv #(apply mapv - [% center]) straight-corners)
          oriented (mapv rotate transposed)]
      (merge this {:corners (mapv #(apply mapv + [% center]) oriented)
                   :straight-corners (mapv #(apply mapv + [% center]) transposed)
                   :angle (mod degree 360)})))

  (dist [{:keys [center] :as this} target]
    (let [[myX myY] center
          [targetX targetY] (:center target)]
      (Math/sqrt (+ (Math/pow (- myX targetX) 2) (Math/pow (- myY targetY) 2)))))

  (target-angle [{:keys [center] :as this} target]
    (let [[myX myY] center
          [targetX targetY] (:center target)
          atan (.atan2 js/Math (- targetY myY) (- targetX myX))]
      (rad->deg atan)))

  (find-target [{:keys [team] :as this} objects]
    (let [targets (remove #(= team (:team %)) objects)]
      (apply min-key (partial dist this) targets)))

  (turret-endpoint [{:keys [angle width center] :as this}]
    (let [rad (deg->rad angle)
          [centerX centerY] center
          turret-length (* width 0.8)]
      [(+ centerX (* turret-length (.cos js/Math rad)))
       (+ centerY (* turret-length (.sin js/Math rad)))]))

  (fire [this] this)

  (take-damage [this damage]
    (merge this {:health (dec health)}))

  (die! [this]
    (close! control)
    (close! events)
    (close! animation)
    (erase! this)))

(defrecord Bullet [canvas x y team angle]

  Constructable
  (construct [this]
    (merge this {:size 5
                 :color (if (= team :red) "red" "blue")}))

  Renderable
  (render! [{:keys [size color] :as this}]
    (let [context (:context canvas)
          rad (deg->rad angle)
          backX (* -1 (.cos js/Math rad))
          backY (* -1 (.sin js/Math rad))
          diffX (* size (.cos js/Math rad))
          diffY (* size (.sin js/Math rad))]
      (set! (.-strokeStyle context) color)
      (if (= color (:bg-color canvas))
        (set! (.-lineWidth context) 6)
        (set! (.-lineWidth context) 4))
      (.beginPath context)
      (if (= color (:bg-color canvas))
        (.moveTo context (+ x backX) (+ y backY)) ; stupid antialiasing shit
        (.moveTo context x y))
      (.lineTo context (+ x diffX) (+ y diffY))
      (.closePath context)
      (.stroke context)))

  (erase! [this]
    (render! (merge this {:color (:bg-color canvas)})))

  Collideable
  (bounds [{:keys [size] :as this}]
    (let [rad (deg->rad angle)
          extX (+ x (* size (.cos js/Math rad)))
          extY (+ y (* size (.sin js/Math rad)))
          minX (min x extX)
          maxX (max x extX)
          minY (min y extY)
          maxY (max y extY)]
      [minX maxX minY maxY]))

  (collides? [this object]
    (let [[my-min-x my-max-x my-min-y my-max-y] (bounds this)
          [obj-min-x obj-max-x obj-min-y obj-max-y] (bounds object)]
      (not (or (> my-min-x obj-max-x)
               (> my-min-y obj-max-y)
               (< my-max-x obj-min-x)
               (< my-max-y obj-min-y)))))

  Movable
  (move [{:keys [angle] :as this} length]
    (let [rad (deg->rad angle)
          diffX (* length (.cos js/Math rad))
          diffY (* length (.sin js/Math rad))]
      (merge this {:x (+ x diffX) :y (+ y diffY)}))))
