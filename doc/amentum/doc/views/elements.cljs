(ns amentum.doc.views.elements
  (:require
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.collections :as c]
   [amentum.elements :as e]))

(h/defelem view []
  (h/div :class "ui vertical segment"
    (c/grid
      (c/row (c/column :wide 8 "a column"))
      (c/row (e/button "Boring button"))
      (c/row (e/button :icon "wifi" :color "green" "blah"))
      (c/row (e/button :color "green" "This should be a green button"))
      (c/row (e/button :class "large facebook" :icon "facebook" "Like me!"))
      (c/row (c/column (e/button :class "fluid positive" "Large!")))
      (c/row (let [c (j/cell "blah")]
               [(c/column :width 8 (c/input :state c))
                (c/column :width 8 (h/text "Value of c: ~{c}"))])))))
