(ns amentum.collections
  (:require
   [clojure.string :as s]
   [hoplon.core :as h :refer-macros [defelem if-tpl for-tpl when-tpl]]))

(def numbers
  {1 "one" 2 "two" 3 "three" 4 "four" 5 "five" 6 "six"
   7 "seven" 8 "eight" 9 "nine" 10 "ten" 11 "eleven" 12 "twelve"
   13 "thirteen" 14 "fourteen" 15 "fifteen" 16 "sixteen"})

;; Grid ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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

;; Form ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defelem form  [attr kids] ((h/div :class "ui form") attr kids))
(defelem field [attr kids] ((h/div :class "field") attr kids))
(defelem input [{:keys [id label state value] :as attr} kids]
  (field [(when label (h/label :for id label))
          (-> attr
            (dissoc :label :state)
            (assoc :value (or value state)
              :change (:change attr #(reset! state @%))
              :type (:type attr "text"))
            (h/input))]))

;; Table ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; TODO: don't use, wip
(defelem table [{:keys [headers body footers] :as attr} kids]
  (h/table :class "ui table"
    (when-tpl headers
      (h/thead (h/tr (for-tpl [h headers] (h/th h)))))
    (if-tpl body
      (h/tbody
       (for-tpl [row body]
         (h/tr
           (for-tpl [col row] (h/td col)))))
      (h/tbody kids))
    (when-tpl footers
      (h/thead (h/tr (for-tpl [f footers] (h/th f)))))))
