(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.228-2"   :scope "test"]
                  [adzerk/boot-reload        "0.4.13"   :scope "test"]
                  [adzerk/bootlaces          "0.1.13"   :scope "test"]
                  [hoplon/hoplon             "6.0.0-alpha17"]
                  [org.clojure/clojure       "1.8.0"]
                  [org.clojure/clojurescript "1.9.293"]
                  [org.clojure/core.match    "0.3.0-alpha4"]
                  [tailrecursion/boot-jetty  "0.1.3"]]
  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
  '[adzerk.bootlaces         :refer :all]
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(def +version+ "0.1.0-SNAPSHOT")
(bootlaces! +version+)

(deftask dev
  "Build Amentum for local development."
  []
  (comp
    (watch)
    (hoplon)
    (cljs)
    (build-jar)))

(deftask doc
  "Build Amentum Documentation"
  []
  (set-env! :source-paths #(conj % "doc"))
  (comp
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs)
    (serve)))

(deftask prod
  "Build Amentum for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (target :dir #{"target"})))


(task-options!
  pom    {:project     'stratema/amentum
          :version     +version+
          :description "Amentum, a toolkit for Hoplon Web Development"
          :url         "https://github.com/stratema/amentum"
          :scm         {:url "https://github.com/stratema/amentum"}
          :license     {"Eclipse Public License"
                        "http://www.eclipse.org/legal/epl-v10.html"}}
  ;; test   {:namespaces '#{amentum.app-test}}
  serve  {:port 3020}
  target {:dir #{"target"}})
