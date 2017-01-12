(ns amentum.common
  (:require
   [clojure.string :as s]))

(defn ->map [kvs]
  (let [m #(zipmap % (repeat true))]
    (if (map? kvs)
      kvs
      (m (if (string? kvs) (s/split kvs #"\s+") (seq kvs))))))
