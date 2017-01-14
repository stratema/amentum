(ns amentum.doc.views.elements
  (:require
   [clojure.string :as s]
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.collections :as c]
   [amentum.elements :as e]
   [amentum.doc.core :refer [section example]]))

(def colors ["red" "orange" "yellow" "olive" "green" "teal" "blue"
             "violet" "purple" "pink" "brown" "grey" "black"])

(h/defelem button []
  [(section :title "Types"

    (example :title "Button"
      (h/p "A standard button")
      (let [c (j/cell false)]
        (e/button :class (j/cell= {:active c})
          :click #(swap! c not)
          (j/cell= (if c "Following" "Follow")))))

    (example
      (h/div :class "ui ignored warning message"
        "Although any tag can be used for a button, it will only be
        keyboard focusable if you use a <button> tag or you add the
        property tabindex="0". Keyboard accessible buttons will
        preserve focus styles after click, which may be visually
        jarring.")
      (e/button :type "button" "Button")
      (e/button :tabindex 0 "Focusable"))

    (example :title "Emphasis"
      (h/p "A button can be formatted to show different levels of emphasis")
      (h/div :class "ui ignored info message"
        "Setting your brand colors to primary and secondary color
         variables in " (h/a :href "semantic-ui.com/usage/theming.html"
                          (h/code "site-variables"))
        " will allow you to use your color theming for UI elements")
      (e/button :class "primary" "Save")
      (e/button "Discard"))

    (example
      (e/button :class "secondary" "Okay")
      (e/button "Cancel"))

    (example :title "Animated"
      (h/p "A button can animate to show hidden content")
      (h/div :class "ui ignored message"
        "The button will be automatically sized according to the
      visible content size. Make sure there is enough room for the
      hidden content to show")
      (e/button :class "animated"
        (h/div :class "visible content" "Next")
        (h/div :class "hidden content"
          (h/i :class "right arrow icon")))

      (e/button :class "vertical animated" :tabindex 0
        (h/div :class "visible content" "Shop")
        (h/div :class "hidden content"
          (h/i :class "shop icon")))

      (e/button :class "animated fade" :tabindex 0
        (h/div :class "visible content" "Sign up for a Pro account")
        (h/div :class "hidden content" "$12.99 a month")))

    (example :title "Labeled"
      (h/p "A button can appear alongside a "
        (h/a :href "/elements/label" "Label"))
      (e/button :class "labeled" :tabindex 0
        (e/button (e/icon "heart") "Like")
        (e/label :class "basic" "2,048"))

      (e/button :class "left labeled" :tabindex 0
        (e/label :class "basic right pointing" "2,048")
        (e/button
          (e/icon "heart") "Like"))

      (e/button :class "left labeled" :tabindex 0
        (e/label :class "basic" "1,048")
        (e/button :class "icon"
          (e/icon "fork"))))

    (example
      (e/button :class "labeled" :tabindex 0
        (e/button :class "red" (e/icon "heart") "Like")
        (e/label :class "basic" "2,048"))

      (e/button :class "left labeled" :tabindex 0
        (e/button :class "basic blue" (e/icon "fork") "Fork")
        (e/label :class "basic left pointing blue" "1,048")
        ))

    (example :title "Icon"
      (h/p "A button can have only an icon")
      (e/button :icon "cloud"))

    (example :title "Labeled Icon"
      (h/p "A button can use an icon as a label")
      (e/button :class "labeled icon" :icon "pause" "Pause")
      (e/button :class "right labeled icon" :icon "right arrow" "Next"))

    ;; TODO: Don't add 'icon' class when basic
    (example :title "Basic" :class "another spaced"
      (h/p "A basic button is less pronounced")
      (e/button :class "basic":icon "user" "Add Friend"))

    (let [c ["primary" "secondary" "positive" "negative"]]
      (example :class "another spaced"
        (map #(e/button :class (str % " basic") (s/capitalize %)) c)))

    (example :class "another spaced"
      (map #(e/button :color % :class "basic" (s/capitalize %)) colors))

    (example :title "Inverted" :class "another spaced"
      (h/p "A button can be formatted to appear on dark backgrounds")
      (e/segment :class "inverted"
        (map #(e/button :color % :class "inverted" (s/capitalize %)) colors)))

    (example :class "another spaced"
      (e/segment :class "inverted"
        (map #(e/button :color % :class "inverted basic"
                (str "Basic " (s/capitalize %))) colors))))

   (section :title "Groups"

     (example :title "Buttons"
       (h/p "Buttons can exist together as a group")
       (e/buttons (map #(e/button (s/capitalize %)) ["one" "two" "three"])))

     (example :title "Icon Buttons"
       (h/p "Button groups can show groups of icons")
       (e/buttons (map #(e/button :icon (str "align " %))
                    ["left" "center" "right" "justify"]))
       (e/buttons (map #(e/button :icon (str "align " %))
                    ["bold" "underline" "text width"]))))

   (section :title "Content"
     (example :title "Conditionals"
       (h/p "Button groups can contain conditionals")
       (e/buttons
         (e/button "Cancel")
         (h/div :class "or")
         (e/button :class "positive" "Save"))))

   (section :title "States"
     (example :title "Active"
       (h/p ))

     )




   ]


  )

;; (c/grid

;;   (c/row )
;;   (c/row (e/button :icon "wifi" :color "green" "blah"))
;;   (c/row (e/button :color "green" "This should be a green button"))
;;   (c/row (e/button :class "large facebook" :icon "facebook" "Like me!"))
;;   (c/row (c/column (e/button :class "fluid positive" "Large!")))
;;   (c/row (let [c (j/cell "blah")]
;;            [(c/column :width 8 (c/input :state c))
;;             (c/column :width 8 (h/text "Value of c: ~{c}"))])))

(h/defelem container [])

(h/defelem icon [])

(h/defelem header [])
