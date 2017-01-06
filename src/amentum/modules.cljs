(ns amentum.modules
  (:require
   [clojure.string :as s]
   [hoplon.core :as h :refer-macros [defelem for-tpl when-tpl with-dom]]
   [javelin.core :as j :refer [cell] :refer-macros [cell=]]))

(defelem dropdown [{:keys [id state default values icon search class]
                    :or {search false class ""} :as attrs}]
  (let [active (cell false)
        query (cell "")
        toggle #(swap! active not)
        vn (reduce (fn [m {:keys [name value]}] (assoc m value name)) {} values)
        vs (cell= (filter #(s/starts-with? (:name %) query) values))
        text (cell= (get vn state))
        update! #(j/dosync (reset! state %) (reset! query ""))]
    ((h/div
       :class (cell= {:ui true :search search :dropdown true
                      :selection true :active active})
       (h/i :class "dropdown icon" :click toggle)
       (when-tpl search
           (h/input :class {:search search} :value query
             :css (when (not search) {:display "none"})
             :autocomplete "off" :tabindex "0"
             :input #(reset! query @%)
             :click #(reset! active true)))
       (h/div :class (cell= {:default (and (nil? state) (empty? query))
                             :text true
                             :filtered (and active (not-empty query))})
         (h/text (or text default)))
       (h/div :class "menu" :toggle active :tabindex "-1"
         (for-tpl [{:keys [value name]} vs]
           (h/div :class (cell= {:item true :active (= state value)})
             :data-value value :click #(do (update! @value) (toggle))
             (h/text "~{name}")))))
     :class class)))
