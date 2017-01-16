(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.228-2" :scope "test"]
                  [adzerk/boot-reload        "0.4.13"    :scope "test"]
                  [adzerk/bootlaces          "0.1.13"    :scope "test"]
                  [hoplon/hoplon             "6.0.0-alpha17"]
                  [secretary                 "1.2.3"]
                  [org.clojure/clojure       "1.8.0"]
                  [org.clojure/clojurescript "1.9.293"]
                  [org.clojure/core.match    "0.3.0-alpha4"]
                  [tailrecursion/boot-jetty  "0.1.3"]

                  [mvxcvi/puget "1.0.1"]
                  [adzerk/boot-cljs-repl   "0.3.3"];; latest release
                  [com.cemerick/piggieback "0.2.1"  :scope "test"]
                  [weasel                  "0.7.0"  :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]]
  :source-paths #{"src/main"}
  :asset-paths  #{"assets"})

(require
  '[adzerk.bootlaces         :refer :all]
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl cljs-repl-env start-repl]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(def +version+ "0.1.0-SNAPSHOT")
(bootlaces! +version+ :dont-modify-paths? true)

(deftask dev
  "Build Amentum for local development."
  []
  (comp
    (watch)
    (hoplon)
    (cljs)
    (build-jar)))

(deftask docs
  "Build Amentum Documentation"
  []
  (set-env! :source-paths #(conj % "src/docs"))
  (comp
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs)
    (cljs-repl-env)
    (serve)))

(deftask gh-docs
  "Build Amentum Documentation for hosting on Github"
  []
  (set-env! :source-paths #(conj % "src/docs"))
  (comp
    (hoplon)
    (cljs :optimizations :advanced
      :compiler-options {:asset-path "/index.html.out"
                         :parallel-build true})
    (prerender)
    (target :dir #{"docs"})))



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
