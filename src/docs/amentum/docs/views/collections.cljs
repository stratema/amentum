(ns amentum.docs.views.collections
  (:require
   [hoplon.core :as h]
   [javelin.core :as j]
   [amentum.modules :as m]
   [amentum.docs.core :refer [example]]
   [amentum.docs.data :refer [countries-nv genders]]))

(h/defelem form [])
(h/defelem grid [])
(h/defelem menu [])
