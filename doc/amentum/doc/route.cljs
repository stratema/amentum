(ns amentum.doc.route
  (:require
   [cljs.core.match :refer-macros [match]]
   [javelin.core :refer-macros [defc defc= dosync]]
   [secretary.core :as sec]
   [amentum.doc.views.main :as main]
   [amentum.doc.views.elements :as elements]
   [amentum.doc.views.collections :as collections]))

(defc resource nil)
(defc action nil)
(defc stage nil)
(defc path nil)

(def routes
  ["/"
   "/:resource"
   "/:resource/:action"
   "/:resource/:action/:stage"])

(defn add-routes [routes]
  (let [f (fn [context]
            (dosync
              (reset! resource (keyword (:resource context)))
              (reset! action (keyword (:action context)))
              (reset! stage (keyword (:stage context)))))]
    (doseq [route routes] (sec/add-route! route f))))

(defc= view
  (match resource
    :main main/view
    :elements elements/view
    :collections collections/view
    :else main/view))
