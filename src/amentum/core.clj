(ns amentum.core
  (:require
   [cljs.core.match :as m]
   [hoplon.core :as h]
   [javelin.core :as j]))

(defmacro ^:private safe-deref [expr] `(deref (or ~expr (atom))))

(defmacro match-tpl
  "Template. Accepts a number of `clauses` cell-template pairs and returns a
  cell with the value produced by the matching clause:

    (match-tpl expr
      pattern-a (span \"A\")
      pattern-b (span \"B\")
      :else     (span \"Default\"))
  "
  [expr & clauses]
  (assert (even? (count clauses)))
  (let [[patterns tpls] (apply map vector (partition 2 clauses))
        syms            (take (count patterns) (repeatedly gensym))]
    `(let [~@(interleave syms (map (fn [x] `(fn []
                                              (or (j/cell? ~x)
                                                (delay (~x))))) tpls))
           tpl# (fn [& rest#]
                  (let [r# ((m/match (vec rest#) ~@(interleave patterns syms)))]
                    (safe-deref r#)))]
       ((j/formula tpl#) ~@expr))))
