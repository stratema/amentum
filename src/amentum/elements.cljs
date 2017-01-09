(ns amentum.elements
  (:require
   [clojure.string :as s]
   [hoplon.core :as h :refer-macros [defelem for-tpl when-tpl with-dom]]
   [javelin.core :as j :refer [cell] :refer-macros [cell=]]
   [amentum.common :refer [->map]]))

(defelem button [{:keys [class color icon href] :or {class {}} :as attr} kids]
  ((let [tag (if href h/a h/div)]
     (-> attr
       (dissoc :color :icon)
       (assoc :class (-> {:ui true :button true :icon icon}
                       (cond-> color (assoc (keyword color) true))))
       (tag (when icon (h/i :class (->map [icon "icon"]))))))
   :class class kids))
