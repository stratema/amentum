// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.docs.core.section = (function() { 
var amentum$docs$core$section__delegate = function (args__13756__auto__){
var vec__14309 = hoplon.core.parse_args(args__13756__auto__);
var map__14312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14309,(0),null);
var map__14312__$1 = ((((!((map__14312 == null)))?((((map__14312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14312):map__14312);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14312__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14309,(1),null);
var G__14316 = cljs.core.cst$kw$class;
var G__14317 = "ui basic vertical segment";
var G__14318 = (function (){var G__14320 = cljs.core.cst$kw$class;
var G__14321 = "ui dividing header";
var G__14322 = title;
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__14320,G__14321,G__14322) : hoplon.core.h2.call(null,G__14320,G__14321,G__14322));
})();
var G__14319 = kids;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14316,G__14317,G__14318,G__14319) : hoplon.core.div.call(null,G__14316,G__14317,G__14318,G__14319));
};
var amentum$docs$core$section = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14343__i = 0, G__14343__a = new Array(arguments.length -  0);
while (G__14343__i < G__14343__a.length) {G__14343__a[G__14343__i] = arguments[G__14343__i + 0]; ++G__14343__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14343__a,0);
} 
return amentum$docs$core$section__delegate.call(this,args__13756__auto__);};
amentum$docs$core$section.cljs$lang$maxFixedArity = 0;
amentum$docs$core$section.cljs$lang$applyTo = (function (arglist__14346){
var args__13756__auto__ = cljs.core.seq(arglist__14346);
return amentum$docs$core$section__delegate(args__13756__auto__);
});
amentum$docs$core$section.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$core$section__delegate;
return amentum$docs$core$section;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.core.example = (function() { 
var amentum$docs$core$example__delegate = function (args__13756__auto__){
var vec__14413 = hoplon.core.parse_args(args__13756__auto__);
var map__14416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14413,(0),null);
var map__14416__$1 = ((((!((map__14416 == null)))?((((map__14416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14416):map__14416);
var attr = map__14416__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14416__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14413,(1),null);
return (function (){var G__14428 = cljs.core.cst$kw$class;
var G__14429 = "example";
var G__14430 = (function (){var con__13794__auto__ = (new cljs.core.Delay(((function (G__14428,G__14429,vec__14413,map__14416,map__14416__$1,attr,title,kids){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14438 = cljs.core.cst$kw$class;
var G__14439 = "ui header";
var G__14440 = title;
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$3(G__14438,G__14439,G__14440) : hoplon.core.h4.call(null,G__14438,G__14439,G__14440));
})(),(function (){var G__14443 = cljs.core.cst$kw$class;
var G__14444 = "anchor";
var G__14445 = cljs.core.cst$kw$id;
var G__14446 = clojure.string.replace(clojure.string.lower_case(title),/ /,"-");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__14443,G__14444,G__14445,G__14446) : hoplon.core.a.call(null,G__14443,G__14444,G__14445,G__14446));
})()], null);
});})(G__14428,G__14429,vec__14413,map__14416,map__14416__$1,attr,title,kids))
,null));
var alt__13795__auto__ = (new cljs.core.Delay(((function (con__13794__auto__,G__14428,G__14429,vec__14413,map__14416,map__14416__$1,attr,title,kids){
return (function (){
return null;
});})(con__13794__auto__,G__14428,G__14429,vec__14413,map__14416,map__14416__$1,attr,title,kids))
,null));
var tpl__13796__auto__ = ((function (con__13794__auto__,alt__13795__auto__,G__14428,G__14429,vec__14413,map__14416,map__14416__$1,attr,title,kids){
return (function (p__13797__auto__){
var G__14466 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13797__auto__)?con__13794__auto__:alt__13795__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14466) : cljs.core.deref.call(null,G__14466));
});})(con__13794__auto__,alt__13795__auto__,G__14428,G__14429,vec__14413,map__14416,map__14416__$1,attr,title,kids))
;
return javelin.core.formula(tpl__13796__auto__).call(null,title);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14428,G__14429,G__14430) : hoplon.core.div.call(null,G__14428,G__14429,G__14430));
})().call(null,attr,kids);
};
var amentum$docs$core$example = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14532__i = 0, G__14532__a = new Array(arguments.length -  0);
while (G__14532__i < G__14532__a.length) {G__14532__a[G__14532__i] = arguments[G__14532__i + 0]; ++G__14532__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14532__a,0);
} 
return amentum$docs$core$example__delegate.call(this,args__13756__auto__);};
amentum$docs$core$example.cljs$lang$maxFixedArity = 0;
amentum$docs$core$example.cljs$lang$applyTo = (function (arglist__14535){
var args__13756__auto__ = cljs.core.seq(arglist__14535);
return amentum$docs$core$example__delegate(args__13756__auto__);
});
amentum$docs$core$example.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$core$example__delegate;
return amentum$docs$core$example;
})()
;
