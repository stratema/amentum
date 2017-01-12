(ns amentum.doc.core
  (:require
   [hoplon.core :as h]))

(h/defelem example [{:keys [title] :as attr} kids]
  ((h/div :class "example"
     (h/when-tpl title (h/h4 :class "ui header" title))) attr kids))
