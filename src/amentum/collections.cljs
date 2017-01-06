(ns amentum.collections
  (:require
   [clojure.string :as s]
   [hoplon.core :as h :refer-macros [defelem for-tpl when-tpl with-dom]]
   [javelin.core :as j :refer [cell] :refer-macros [cell=]]
   [amentum.core :refer [numbers]]))

;; Grid
(defelem grid [attr kids] ((h/div :class "ui grid") attr kids))
(defelem column [attr kids] ((h/div :class "column") attr kids))
(defelem row [attr kids] ((h/div :class "row") attr kids))

(defmethod h/do! :width
  [elem key val]
  (when-let [v (-> val numbers)]
    (h/do! elem :class (str v " wide"))))

(defmethod h/do! :count
  [elem key val]
  (when-let [v (-> val numbers)]
    (h/do! elem :class val)))

;; Form
(defelem field [attr kids] ((h/div :class "field") attr kids))

(defelem input [{:keys [id label state value] :as attr} kids]
  (field [(when label (h/label :for id label))
          (-> attr
            (dissoc :label :state)
            (assoc :value (or value state)
              :change (:change attr #(reset! state @%))
              :type (:type attr "text"))
            (h/input))]))
