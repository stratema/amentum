(ns amentum.docs.views.elements
  (:require
   [clojure.string :as s]
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.collections :as c]
   [amentum.elements :as e]
   [amentum.docs.core :refer [section example]]))

(def colors ["red" "orange" "yellow" "olive" "green" "teal" "blue"
             "violet" "purple" "pink" "brown" "grey" "black"])

(def lorem "Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Curabitur a orci ac ante ultricies mattis. Nunc elementum quam
  et mauris iaculis viverra. Morbi pretium, dui in interdum malesuada,
  ipsum dui feugiat quam, vitae egestas leo urna in leo. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur
  ridiculus mus.")

(def networks
  [["facebook" "Facebook"]
   ["twitter" "Twitter"]
   ["google plus" "Google Plus"]
   ["vk" "VK"]
   ["linkedin" "LinkedIn"]
   ["instagram" "Instagram"]
   ["youtube" "YouTube"]])

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
         (e/label :class "basic left pointing blue" "1,048")))

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
       (h/p "A button can show it is currently the active user selection")
       (e/button :class "active" :icon "user" "Follow"))

     (example :title "Disabled"
       (h/p "A button can show it is currently unable to be interacted with")
       (e/button :class "disabled" :icon "user" "Followed"))

     (example :title "Loading"
       (h/p "A button can show a loading indicator")
       (map #(e/button :class (str "ui " % " loading") "Loading")
         ["" "basic" "primary" "sceonday"])))

   (section :title "Variations"
     (example :title "Social" :class "spaced"
       (h/p "A button can be formatted to link to a social website")
       (map (fn [[n l]] (e/button :class n :icon n l)) networks))

     (example :title "Size" :class "spaced"
       (h/p "A button can have different sizes")
       (let [sizes ["mini" "tiny" "small" "medium" "large" "big"
                    "huge" "massive"]]
         (map #(e/button :class % (s/capitalize %)) sizes)))

     (example :title "Floated"
       (h/p "A button can be aligned to the left or right of its container")
       (e/button :class "right floated" "Right Floated")
       (e/button :class "left floated" "Left Floated"))

     (example :title "Colored" :class "spaced"
       (h/p "A button can have different colors")
       (map #(e/button :class % (s/capitalize %)) colors))

     (example :title "Compact"
       (h/p "A button can reduce its padding to fit into tighter spaces")
       (e/button :class "compact" "Hold")
       (e/button :class "compact" :icon "pause")
       ;; TODO: Fix logic on when to add 'icon' class to button
       (e/button :class "compact icon labeled" :icon "pause" "Pause"))

     (example :title "Toggle"
       (h/p "A button can be formatted to toggle on and off")
       (let [c (j/cell false)]
         (e/button :class (j/cell= {:toggle true :active c})
           :click #(swap! c not)
           (j/cell= (if c "Voted" "Vote")))))

     (example :title "Positive"
       (h/p "A button can hint towards a positive consequence")
       (e/button :class "positive" "Positive Button"))

     (example :title "Negative"
       (h/p "A button can hint towards a negative consequence")
       (e/button :class "negative" "Positive Button"))

     (example :title "Fluid"
       (h/p "A button can take the width of its container")
       (e/button :class "fluid" "Fits container"))

     (example :title "Circular"
       (h/p "A button can be circular")
       (e/button :class "circular" :icon "settings"))

     (example :class "another spaced"
       (h/p "A button can be formatted to link to a social website")
       (map (fn [[n l]] (e/button :class (str "circular " n) :icon n))
         (take 4 networks)))

     (example :title "Vertically Attached"
       (h/p "A button can be attached to the top or bottom of other content")
       (e/button :class "top attached" :tabindex 0 "Top")
       (e/segment :class "attached" (h/p lorem))
       (e/button :class "bottom attached" :tabindex 0 "Bottom"))

     (example :class "another"
       (e/buttons :class "two top attached"
         (e/button "One") (e/button "Two"))
       (e/segment :class "attached" (h/p lorem))
       (e/buttons :class "two bottom attached"
         (e/button "One") (e/button "Two")))

     (example :title "Horizontally Attached"
       (h/p "A button can be attached to the left or right of other content")
       (e/button :class "left attached" "Left")
       (e/button :class "right attached" "Right")))


   (section :title "Group Variations"
     (example :title "Vertical Buttons"
       (h/p "Groups can be formatted to appear vertically")
       (e/buttons :class "vertical"
         (map #(e/button %) ["Feed" "Messages" "Events" "Photos"])))

     (example :title "Icon Buttons"
       (h/p "Groups can be formatted as icons")
       (e/buttons :class "icon"
         (map #(e/button :icon %) ["play" "pause" "shuffle"])))

     (example :title "Labeled Icon Buttons"
       (h/p "Groups can be formatted as labeled icons")
       (e/buttons :class "vertical labeled icon"
         (map #(e/button :icon % (s/capitalize %))
           ["play" "pause" "shuffle"])))

     (example :title "Mixed Group"
       (h/p "Groups can be formatted to use multiple button types together")
       (e/buttons
         (e/button :class "labeled icon" :icon "left chevron" "Back")
         (e/button :icon "stop" "Stop")
         (e/button :class "right labeled icon" :icon "right chevron" "Back")))

     (example :title "Equal Width"
       (h/p "Groups can have their widths divided evenly")
       (let [s ["Overview" "Specs" "Warranty" "Reviews" "Support"]]
         [(e/buttons :class "five"
            (map #(e/button %) (take 5 s)))
          (e/buttons :class "three"
            (map #(e/button %) (take 3 s)))]))

     (example :title "Colored Buttons"
       (h/p "Groups can have a shared color")
       (e/buttons :class "blue"
         (map #(e/button %) ["One" "Two" "Three"])))

     (example :title "Basic Buttons"
       (h/p "A button group can be less pronounced")
       (let [n ["One" "Two" "Three"]]
         [(e/buttons :class "basic" (map #(e/button %) n))
          (h/div :class "class ui divider")
          (e/buttons :class "vertical basic" (map #(e/button %) n))]))

     (example :class "another"
       (let [n [["red" "One"] ["blue" "Two"] ["green" "Three"]]]
         (e/buttons
           (map (fn [[c l]] (e/button :class "basic" :color c l)) n))))

     (example :title "Group Sizes"
       (h/p "Groups can have a shared size")
       (e/buttons :class "large"
         (map #(e/button %) ["One" "Two" "Three"])))

     (example :class "another"
       (e/buttons :class "small basic"
         (map #(e/button :icon %) ["file" "save" "upload" "download"])))

     (example :class "another"
       (e/buttons :class "large"
         (e/button "One")
         (h/div :class "or")
         (e/button "Two"))))])

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
