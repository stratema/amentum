(ns amentum.docs.core
  (:require
   [clojure.string :as s]
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.elements :as e]))

(h/defelem section [{title :title} kids]
  (h/div :class "ui basic vertical segment"
    (h/h2 :class "ui dividing header" title)
    kids))

(h/defelem example [{:keys [title source] :as attr} kids]
  (let [show (when source (j/cell false))
        [body examples] (split-at (- (count kids) (:count source 0)) kids)
        anchor (and title (-> title s/lower-case (s/replace #" " "-")))
        source-text (:text source)
        attr (dissoc attr :title :source)]
    ((h/div :class "example"
       (h/when-tpl title (e/h4 title))
       (h/when-tpl source (e/icon "code" :click #(swap! show not)))
       (h/when-tpl anchor (h/a :class "anchor" :id anchor))
       body
       (h/div :class (j/cell= {:html true :ui show :top show :attached show
                               :segment show})
         examples
         (e/label :class "top attached" "Example"
           (e/icon "copy link")))
       (h/div :class (j/cell= {:annotation true :transition true
                               :visible show :hidden (not show)})
         (e/segment :class "instructive bottom attached"
           (h/pre (h/code :class "code" :html source-text)))))
     attr)))
