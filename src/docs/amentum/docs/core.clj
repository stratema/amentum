(ns amentum.docs.core
  (:require
   ;; [puget.printer :as pp]
   [clojure.pprint :as pp]
   [hoplon.core :as h]
   [javelin.core :as j]))

;; Puget
;; (let [out (java.io.StringWriter.)]
;;   (doseq [f l]
;;     (.write out (pp/cprint-str f opts)))
;;   (.toString out))

;; Clojure pprint

(defmacro example-with-source [& body]
  (let [l (last body)
        l (if (vector? l) l [l])
        opts {:color-markup :html-inline}
        source {:count (count l)
                :text (let [out (java.io.StringWriter.)]
                        (pp/with-pprint-dispatch pp/code-dispatch
                          (doseq [f l] (pp/pprint f out)))
                        (.toString out))}]
    `(amentum.docs.core/example :source ~source ~@body)))

;; TODO: Amend this so that it if the last top level form in body is a
;; let, then wrap the example with that let, replacing the last form
;; outer with a do
(defmacro example-with-state [& body]
  (let [l (last body)
        l (if (vector? l) l [l])
        opts {:color-markup :html-inline}
        source {:count (count l)
                :text (let [out (java.io.StringWriter.)]
                        (pp/with-pprint-dispatch pp/code-dispatch
                          (doseq [f l] (pp/pprint f out)))
                        (.toString out))}]
    `(let [~'state (j/cell nil)]
       (amentum.docs.core/example :source ~source :state ~'state ~@body))))
