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
  {:title "Amentum"
   :sub-header "A toolkit for building apps with Hoplon"
   :content
   (section :title "Introduction"
     #_(example :title "Example" :source {:text "blah2" :count 2}
       (h/p "A standard button")
       (h/div :class "ui ignored warning message"
         "Although any tag can be used for a button, it will only be
        keyboard focusable if you use a <button> tag or you add the
        property tabindex=\"0\". Keyboard accessible buttons will
        preserve focus styles after click, which may be visually
        jarring.")
       (e/button :type "button" "Button1")
       (e/button :type "button" "Button2"))

     (example-with-source :title "two buttons"
       (h/p "this is two buttons")
       [(e/button :type "button" "one")
        (e/button :type "button" "two")]))})
