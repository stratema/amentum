(ns amentum.views
  (:require
   [hoplon.core :as h]))

(h/defelem item [attr kids] ((h/a :class "item") attr kids))
