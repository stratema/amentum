(ns amentum.docs.views.start
  (:require
   [amentum.docs.core :refer-macros [example-with-source]]
   [clojure.string :as s]
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.collections :as c]
   [amentum.elements :as e]
   [amentum.docs.core :refer [section example]]))

(defn view []
  {:header "Amentum"
   :sub-header "A toolkit for building apps with Hoplon and Javelin"
   :content
   [(section :title "Introduction"

      (example-with-source :title "two buttons"
        (h/p "this is two buttons")
        [(e/button :type "button" "one")
         (e/button :type "button" "two")]))]})
