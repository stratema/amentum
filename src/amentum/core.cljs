(ns amentum.core
  (:require
   [clojure.string :as s]))

(defn ->map [kvs]
  (let [m #(zipmap % (repeat true))]
    (if (map? kvs)
      kvs
      (m (if (string? kvs) (s/split kvs #"\s+") (seq kvs))))))

(def numbers
  {1 "one" 2 "two" 3 "three" 4 "four" 5 "five" 6 "six"
   7 "seven" 8 "eight" 9 "nine" 10 "ten" 11 "eleven" 12 "twelve"
   13 "thirteen" 14 "fourteen" 15 "fifteen" 16 "sixteen"})
