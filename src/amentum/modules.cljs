(ns amentum.modules
  (:require
   [clojure.string :as s :refer [starts-with? lower-case]]
   [hoplon.core :as h :refer-macros [defelem for-tpl if-tpl when-tpl]]
   [javelin.core :as j :refer [cell] :refer-macros [cell=]]))

(defelem dropdown [{:keys [id state default values icon search class]
                    :or {search false class ""} :as attrs}]
  (let [active (cell false)
        query (cell "")
        toggle #(swap! active not)
        vn (reduce (fn [m v] (assoc m (:value v) v)) {} values)
        vs (cell= (if (empty? query)
                    values
                    (filter #(s/starts-with? (-> % :name s/lower-case) query)
                      values)))
        selection (cell= (get vn state))
        update! #(j/dosync (reset! state %) (reset! query ""))]
    ((h/div
       :class (cell= {:ui true :search search :dropdown true
                      :selection true :active active})
       (h/i :class "dropdown icon" :click toggle)
       (when-tpl search
         (h/input :class {:search search} :value query
           :autocomplete "off" :tabindex "0"
           :input #(reset! query @%)
           :click #(reset! active true)))
       (h/div :class (cell= {:default (and (nil? state) (empty? query))
                             :text true
                             :filtered (and active (not-empty query))})
         (if-tpl selection
           [(h/i :class (cell= (:icon selection)))
            (h/text (:name selection))]
           (h/text default)))
       (h/div :class "menu" :toggle active :tabindex "-1"
         (for-tpl [{:keys [value name icon]} vs]
           (h/div :class (cell= {:item true :active (= state value)})
             :data-value value :click #(do (update! @value) (toggle))
             (when-tpl icon (h/i :attr (cell= {:class icon})))
             (h/text "~{name} ~{icon}")))))
     :class class)))
