(ns amentum.core
  (:require
   [cljs.core.match :as m]
   [hoplon.core :as h]
   [javelin.core :as j]))

#_(defmacro cond-tpl
  "Template. Accepts a number of `clauses` cell-template pairs and returns a
  cell with the value produced by the matching clause:

    (cond-tpl
      clause-a (span \"A\")
      clause-b (span \"B\")
      :else    (span \"Default\"))
  "
  [& clauses]
  (assert (even? (count clauses)))
  (let [[conds tpls] (apply map vector (partition 2 clauses))
        syms1        (take (count conds) (repeatedly gensym))
        syms2        (take (count conds) (repeatedly gensym))]
    `(let [~@(interleave syms1 (map (fn [x] `(delay ~x)) tpls))
           tpl# (fn [~@syms2] (safe-deref (cond ~@(interleave syms2 syms1))))]
       ((j/formula tpl#) ~@conds))))

#_(defmacro case-tpl
  "Template. Accepts an `expr` cell and a number of `clauses` and returns a
  cell with the value produced by the matching clause:

    (case-tpl expr
      :a (span \"A\")
      :b (span \"B\")
      (span \"Default\"))

  "
  [expr & clauses]
  (let [[cases tpls] (apply map vector (partition 2 clauses))
        default      (when (odd? (count clauses)) (last clauses))
        syms         (take (inc (count cases)) (repeatedly gensym))]
    `(let [~@(interleave syms (map (fn [x] `(delay ~x)) (conj tpls default)))
           tpl# (fn [expr#] (safe-deref (case expr# ~@(interleave cases syms) ~(last syms))))]
       ((j/formula tpl#) ~expr))))

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
                                              (or (j/cell? ~x) (delay (~x))))) tpls))
           tpl# (fn [& rest#]
                  (let [r# ((m/match (vec rest#) ~@(interleave patterns syms)))]
                    (safe-deref r#)))]
       ((j/formula tpl#) ~@expr))))
