(ns amentum.elements
  (:require
   [clojure.string :as s]
   [hoplon.core :as h :refer-macros [defelem for-tpl when-tpl with-dom]]
   [javelin.core :as j :refer [cell] :refer-macros [cell=]]
   [amentum.common :refer [->map]]))

;; Non-UI Elements
(defelem icon [attrs name]
  ((h/i :class (str (first name) " icon")) attrs))
(defelem label [attr kids] ((h/div :class "ui label") attr kids))
(defelem header [attr kids] ((h/div :class "header") attr kids))

;; UI Elements
(defelem segment [attr kids] ((h/div :class "ui segment") attr kids))
(defelem container [attr kids] ((h/div :class "ui container") attr kids))
(defelem buttons [attr kids] ((h/div :class "ui buttons") attr kids))

(defelem button [{:keys [class color href tabindex type]
                  :or {class {}} :as attr} kids]
  ((let [iname (:icon attr)
         tag (cond type h/button href h/a :else h/div)]
     (-> attr
       (dissoc :color :icon)
       (assoc :class (-> {:ui true :button true :icon iname}
                       (cond-> color (assoc (keyword color) true))))
       (tag (when iname (icon iname)))))
   :class class kids))
