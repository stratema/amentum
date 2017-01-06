(ns amentum.elements
  (:require
   [clojure.string :as s]
   [hoplon.core :as h :refer-macros [defelem for-tpl when-tpl with-dom]]
   [javelin.core :as j :refer [cell] :refer-macros [cell=]]
   [amentum.core :refer [->map]]))

(defelem button [{:keys [class color icon] :or {class {}} :as attr} kids]
  ((-> attr
     (dissoc :color :icon)
     (assoc :class (-> {:ui true :button true}
                     (cond-> color (assoc (keyword color) true))))
     (h/div (when icon (h/i :class (->map [icon "icon"])))))
   :class class kids))
