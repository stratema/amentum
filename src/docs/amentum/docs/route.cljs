(ns amentum.docs.route
  (:require
   [javelin.core :refer-macros [defc defc= dosync]]
   [secretary.core :as sec]))

(defc path [])

(def routes
  ["/"
   "/:type"
   "/:type/:component"
   "/:type/:component/:tab"])

(defn add-routes [routes]
  (let [f (fn [{:keys [type component tab]}]
            (reset! path (mapv keyword [type component tab])))]
    (doseq [route routes] (sec/add-route! route f))))
