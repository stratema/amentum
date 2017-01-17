(ns amentum.docs.views.modules
  (:require
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.docs.core :refer-macros [example-with-state]]
   [amentum.modules :as m]
   [amentum.docs.core :refer [example]]
   [amentum.docs.data :refer [countries-nv genders]]))

(defn dropdown []
  {:header "Dropdown"
   :sub-header ""
   :content
   (h/div :class "ui vertical segment"
    (h/h2 :class "ui dividing header" "Types")

    (example :title "Dropdown"
      (h/p "A dropdown")
      (h/p "TODO: Allow dropdown to use provided set of item elements
              rather than generating from a dataset"))

    (example-with-state :title "Selection"
      (h/p "A dropdown can be used to select between choices in a form")
      (m/dropdown :state state :values genders :default "Gender"))

    (example-with-state :title "Search Selection"
      (h/p "A selection dropdown can allow a user to search through a
              large list of choices.")
      (m/dropdown :class "fluid" :state state :values countries-nv
        :search true :default "Select Country"))

    (example-with-state :class "another"
      (m/dropdown :state state :values genders :search true :default "Gender"))

    (example :title "Multiple Selection"
      (h/p "A selection dropdown can allow multiple selections")
      (h/p "TODO"))

    (example :title "Multiple Search Selection"
      (h/p "A selection dropdown can allow multiple search selections")
      (h/p "TODO ")))} )

(h/defelem sidebar [])
