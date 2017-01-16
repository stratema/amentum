(ns amentum.docs.core
  (:require
   [puget.printer :as pp]
   [hoplon.core :as h]
   [javelin.core :as j]))


(defmacro example-with-source [& body]
  (let [l (last body)
        l (if (vector? l) l [l])
        opts {:color-markup :html-inline}
        source {:count (count l)
                :text (let [out (java.io.StringWriter.)]
                        (doseq [f l]
                          (.write out (pp/cprint-str f opts)))
                        (.toString out))}]
    `(amentum.docs.core/example :source ~source ~@body)))
