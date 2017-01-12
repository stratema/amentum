(ns amentum.doc.views.collections
  (:require
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.modules :as m]
   [amentum.doc.core :refer [example]]
   [amentum.doc.data :refer [countries-nv genders]]))

(h/defelem view []
  (h/div :class "ui vertical segment"
    (h/h2 :class "ui dividing header" "Types")

    (example :title "Dropdown"
      (h/p "A dropdown")
      (h/p "TODO: Allow dropdown to use provided set of item elements
              rather than generating from a dataset"))

    (example :title "Selection"
      (h/p "A dropdown can be used to select between choices in a form")
      (let [state (j/cell nil)]
        (m/dropdown :state state :values genders :default "Gender")))

    (example :title "Search Selection"
      (h/p "A selection dropdown can allow a user to search through a
              large list of choices.")

      (let [state (j/cell nil)]
        (m/dropdown :class "fluid" :state state :values countries-nv
          :search true :default "Select Country")))

    (example
      (let [state (j/cell nil)]
        (m/dropdown
          :state state :values genders :search true :default "Gender")))

    (example :title "Multiple Selection"
      (h/p "A selection dropdown can allow multiple selections")
      (h/p "TODO"))

    (example :title "Multiple Search Selection"
      (h/p "A selection dropdown can allow multiple search selections")
      (h/p "TODO "))



    ))
