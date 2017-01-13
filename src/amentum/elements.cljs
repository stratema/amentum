(ns amentum.elements
  (:require
   [clojure.string :as s]
   [hoplon.core :as h :refer-macros [defelem for-tpl when-tpl with-dom]]
   [javelin.core :as j :refer [cell] :refer-macros [cell=]]
   [amentum.common :refer [->map]]))

;; Non-UI Elements
(defn icon [type] (h/i :class (str type " icon")))
(defelem header [attr kids] ((h/div :class "header") attr kids))

;; UI Elements
(defelem segment [attr kids] ((h/div :class "ui segment") attr kids))
(defelem container [attr kids] ((h/div :class "ui container") attr kids))

(defelem button [{:keys [class color href] :or {class {}} :as attr} kids]
  ((let [iname (:icon attr)
         tag (if href h/a h/div)]
     (-> attr
       (dissoc :color :icon)
       (assoc :class (-> {:ui true :button true :icon icon}
                       (cond-> color (assoc (keyword color) true))))
       (tag (when iname (icon iname)))))
   :class class kids))
