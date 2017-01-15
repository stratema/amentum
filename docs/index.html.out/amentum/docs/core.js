// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.docs.core.section = (function() { 
var amentum$docs$core$section__delegate = function (args__13752__auto__){
var vec__14339 = hoplon.core.parse_args(args__13752__auto__);
var map__14342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14339,(0),null);
var map__14342__$1 = ((((!((map__14342 == null)))?((((map__14342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14342):map__14342);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14342__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14339,(1),null);
var G__14348 = cljs.core.cst$kw$class;
var G__14349 = "ui basic vertical segment";
var G__14350 = (function (){var G__14352 = cljs.core.cst$kw$class;
var G__14353 = "ui dividing header";
var G__14354 = title;
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__14352,G__14353,G__14354) : hoplon.core.h2.call(null,G__14352,G__14353,G__14354));
})();
var G__14351 = kids;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14348,G__14349,G__14350,G__14351) : hoplon.core.div.call(null,G__14348,G__14349,G__14350,G__14351));
};
var amentum$docs$core$section = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14395__i = 0, G__14395__a = new Array(arguments.length -  0);
while (G__14395__i < G__14395__a.length) {G__14395__a[G__14395__i] = arguments[G__14395__i + 0]; ++G__14395__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14395__a,0);
} 
return amentum$docs$core$section__delegate.call(this,args__13752__auto__);};
amentum$docs$core$section.cljs$lang$maxFixedArity = 0;
amentum$docs$core$section.cljs$lang$applyTo = (function (arglist__14396){
var args__13752__auto__ = cljs.core.seq(arglist__14396);
return amentum$docs$core$section__delegate(args__13752__auto__);
});
amentum$docs$core$section.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$core$section__delegate;
return amentum$docs$core$section;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.core.example = (function() { 
var amentum$docs$core$example__delegate = function (args__13752__auto__){
var vec__14462 = hoplon.core.parse_args(args__13752__auto__);
var map__14465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14462,(0),null);
var map__14465__$1 = ((((!((map__14465 == null)))?((((map__14465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14465):map__14465);
var attr = map__14465__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14465__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14462,(1),null);
return (function (){var G__14478 = cljs.core.cst$kw$class;
var G__14479 = "example";
var G__14480 = (function (){var con__13790__auto__ = (new cljs.core.Delay(((function (G__14478,G__14479,vec__14462,map__14465,map__14465__$1,attr,title,kids){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14484 = cljs.core.cst$kw$class;
var G__14485 = "ui header";
var G__14486 = title;
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$3(G__14484,G__14485,G__14486) : hoplon.core.h4.call(null,G__14484,G__14485,G__14486));
})(),(function (){var G__14490 = cljs.core.cst$kw$class;
var G__14491 = "anchor";
var G__14492 = cljs.core.cst$kw$id;
var G__14493 = clojure.string.replace(clojure.string.lower_case(title),/ /,"-");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__14490,G__14491,G__14492,G__14493) : hoplon.core.a.call(null,G__14490,G__14491,G__14492,G__14493));
})()], null);
});})(G__14478,G__14479,vec__14462,map__14465,map__14465__$1,attr,title,kids))
,null));
var alt__13791__auto__ = (new cljs.core.Delay(((function (con__13790__auto__,G__14478,G__14479,vec__14462,map__14465,map__14465__$1,attr,title,kids){
return (function (){
return null;
});})(con__13790__auto__,G__14478,G__14479,vec__14462,map__14465,map__14465__$1,attr,title,kids))
,null));
var tpl__13792__auto__ = ((function (con__13790__auto__,alt__13791__auto__,G__14478,G__14479,vec__14462,map__14465,map__14465__$1,attr,title,kids){
return (function (p__13793__auto__){
var G__14499 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13793__auto__)?con__13790__auto__:alt__13791__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14499) : cljs.core.deref.call(null,G__14499));
});})(con__13790__auto__,alt__13791__auto__,G__14478,G__14479,vec__14462,map__14465,map__14465__$1,attr,title,kids))
;
return javelin.core.formula(tpl__13792__auto__).call(null,title);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14478,G__14479,G__14480) : hoplon.core.div.call(null,G__14478,G__14479,G__14480));
})().call(null,attr,kids);
};
var amentum$docs$core$example = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14560__i = 0, G__14560__a = new Array(arguments.length -  0);
while (G__14560__i < G__14560__a.length) {G__14560__a[G__14560__i] = arguments[G__14560__i + 0]; ++G__14560__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14560__a,0);
} 
return amentum$docs$core$example__delegate.call(this,args__13752__auto__);};
amentum$docs$core$example.cljs$lang$maxFixedArity = 0;
amentum$docs$core$example.cljs$lang$applyTo = (function (arglist__14565){
var args__13752__auto__ = cljs.core.seq(arglist__14565);
return amentum$docs$core$example__delegate(args__13752__auto__);
});
amentum$docs$core$example.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$core$example__delegate;
return amentum$docs$core$example;
})()
;
