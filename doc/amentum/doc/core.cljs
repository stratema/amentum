(ns amentum.doc.core
  (:require
   [clojure.string :as s]
   [hoplon.core :as h]))

(h/defelem section [{title :title} kids]
  (h/div :class "ui basic vertical segment"
    (h/h2 :class "ui dividing header" title)
    kids))

(h/defelem example [{:keys [title] :as attr} kids]
  ((h/div :class "example"
     (h/when-tpl title
       [(h/h4 :class "ui header" title)
        (h/a :class "anchor" :id (-> title s/lower-case (s/replace #" " "-")))]))
   attr kids))
