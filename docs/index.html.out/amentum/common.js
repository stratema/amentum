// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.common');
goog.require('cljs.core');
goog.require('clojure.string');
amentum.common.__GT_map = (function amentum$common$__GT_map(kvs){
var m = (function (p1__13685_SHARP_){
return cljs.core.zipmap(p1__13685_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return m(((typeof kvs === 'string')?clojure.string.split.cljs$core$IFn$_invoke$arity$2(kvs,/\s+/):cljs.core.seq(kvs)));
}
});
