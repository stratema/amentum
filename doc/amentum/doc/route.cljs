(ns amentum.doc.route
  (:require
   [javelin.core :refer-macros [defc defc= dosync]]
   [secretary.core :as sec]
   [amentum.doc.views.main :as main]
   [amentum.doc.views.elements :as elements]
   [amentum.doc.views.collections :as collections]))

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
