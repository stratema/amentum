// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.elements');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('amentum.common');
/**
 * @param {...*} var_args
 */
amentum.elements.icon = (function() { 
var amentum$elements$icon__delegate = function (args__13782__auto__){
var vec__14330 = hoplon.core.parse_args(args__13782__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14330,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14330,(1),null);
return (function (){var G__14338 = cljs.core.cst$kw$class;
var G__14339 = [cljs.core.str(cljs.core.first(name)),cljs.core.str(" icon")].join('');
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14338,G__14339) : hoplon.core.i.call(null,G__14338,G__14339));
})().call(null,attrs);
};
var amentum$elements$icon = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14354__i = 0, G__14354__a = new Array(arguments.length -  0);
while (G__14354__i < G__14354__a.length) {G__14354__a[G__14354__i] = arguments[G__14354__i + 0]; ++G__14354__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14354__a,0);
} 
return amentum$elements$icon__delegate.call(this,args__13782__auto__);};
amentum$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$elements$icon.cljs$lang$applyTo = (function (arglist__14357){
var args__13782__auto__ = cljs.core.seq(arglist__14357);
return amentum$elements$icon__delegate(args__13782__auto__);
});
amentum$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$icon__delegate;
return amentum$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.label = (function() { 
var amentum$elements$label__delegate = function (args__13782__auto__){
var vec__14369 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(1),null);
return (function (){var G__14375 = cljs.core.cst$kw$class;
var G__14376 = "ui label";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14375,G__14376) : hoplon.core.div.call(null,G__14375,G__14376));
})().call(null,attr,kids);
};
var amentum$elements$label = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14379__i = 0, G__14379__a = new Array(arguments.length -  0);
while (G__14379__i < G__14379__a.length) {G__14379__a[G__14379__i] = arguments[G__14379__i + 0]; ++G__14379__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14379__a,0);
} 
return amentum$elements$label__delegate.call(this,args__13782__auto__);};
amentum$elements$label.cljs$lang$maxFixedArity = 0;
amentum$elements$label.cljs$lang$applyTo = (function (arglist__14381){
var args__13782__auto__ = cljs.core.seq(arglist__14381);
return amentum$elements$label__delegate(args__13782__auto__);
});
amentum$elements$label.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$label__delegate;
return amentum$elements$label;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.header = (function() { 
var amentum$elements$header__delegate = function (args__13782__auto__){
var vec__14397 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14397,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14397,(1),null);
return (function (){var G__14405 = cljs.core.cst$kw$class;
var G__14406 = "header";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14405,G__14406) : hoplon.core.div.call(null,G__14405,G__14406));
})().call(null,attr,kids);
};
var amentum$elements$header = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14417__i = 0, G__14417__a = new Array(arguments.length -  0);
while (G__14417__i < G__14417__a.length) {G__14417__a[G__14417__i] = arguments[G__14417__i + 0]; ++G__14417__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14417__a,0);
} 
return amentum$elements$header__delegate.call(this,args__13782__auto__);};
amentum$elements$header.cljs$lang$maxFixedArity = 0;
amentum$elements$header.cljs$lang$applyTo = (function (arglist__14424){
var args__13782__auto__ = cljs.core.seq(arglist__14424);
return amentum$elements$header__delegate(args__13782__auto__);
});
amentum$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$header__delegate;
return amentum$elements$header;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.segment = (function() { 
var amentum$elements$segment__delegate = function (args__13782__auto__){
var vec__14432 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14432,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14432,(1),null);
return (function (){var G__14438 = cljs.core.cst$kw$class;
var G__14439 = "ui segment";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14438,G__14439) : hoplon.core.div.call(null,G__14438,G__14439));
})().call(null,attr,kids);
};
var amentum$elements$segment = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14446__i = 0, G__14446__a = new Array(arguments.length -  0);
while (G__14446__i < G__14446__a.length) {G__14446__a[G__14446__i] = arguments[G__14446__i + 0]; ++G__14446__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14446__a,0);
} 
return amentum$elements$segment__delegate.call(this,args__13782__auto__);};
amentum$elements$segment.cljs$lang$maxFixedArity = 0;
amentum$elements$segment.cljs$lang$applyTo = (function (arglist__14450){
var args__13782__auto__ = cljs.core.seq(arglist__14450);
return amentum$elements$segment__delegate(args__13782__auto__);
});
amentum$elements$segment.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$segment__delegate;
return amentum$elements$segment;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.container = (function() { 
var amentum$elements$container__delegate = function (args__13782__auto__){
var vec__14470 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14470,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14470,(1),null);
return (function (){var G__14473 = cljs.core.cst$kw$class;
var G__14474 = "ui container";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14473,G__14474) : hoplon.core.div.call(null,G__14473,G__14474));
})().call(null,attr,kids);
};
var amentum$elements$container = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14494__i = 0, G__14494__a = new Array(arguments.length -  0);
while (G__14494__i < G__14494__a.length) {G__14494__a[G__14494__i] = arguments[G__14494__i + 0]; ++G__14494__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14494__a,0);
} 
return amentum$elements$container__delegate.call(this,args__13782__auto__);};
amentum$elements$container.cljs$lang$maxFixedArity = 0;
amentum$elements$container.cljs$lang$applyTo = (function (arglist__14495){
var args__13782__auto__ = cljs.core.seq(arglist__14495);
return amentum$elements$container__delegate(args__13782__auto__);
});
amentum$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$container__delegate;
return amentum$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.buttons = (function() { 
var amentum$elements$buttons__delegate = function (args__13782__auto__){
var vec__14505 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(1),null);
return (function (){var G__14509 = cljs.core.cst$kw$class;
var G__14510 = "ui buttons";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14509,G__14510) : hoplon.core.div.call(null,G__14509,G__14510));
})().call(null,attr,kids);
};
var amentum$elements$buttons = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14525__i = 0, G__14525__a = new Array(arguments.length -  0);
while (G__14525__i < G__14525__a.length) {G__14525__a[G__14525__i] = arguments[G__14525__i + 0]; ++G__14525__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14525__a,0);
} 
return amentum$elements$buttons__delegate.call(this,args__13782__auto__);};
amentum$elements$buttons.cljs$lang$maxFixedArity = 0;
amentum$elements$buttons.cljs$lang$applyTo = (function (arglist__14527){
var args__13782__auto__ = cljs.core.seq(arglist__14527);
return amentum$elements$buttons__delegate(args__13782__auto__);
});
amentum$elements$buttons.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$buttons__delegate;
return amentum$elements$buttons;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h1 = (function() { 
var amentum$elements$h1__delegate = function (args__13782__auto__){
var vec__14541 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541,(1),null);
return (function (){var G__14545 = cljs.core.cst$kw$class;
var G__14546 = "ui header";
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$2(G__14545,G__14546) : hoplon.core.h1.call(null,G__14545,G__14546));
})().call(null,attr,kids);
};
var amentum$elements$h1 = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14559__i = 0, G__14559__a = new Array(arguments.length -  0);
while (G__14559__i < G__14559__a.length) {G__14559__a[G__14559__i] = arguments[G__14559__i + 0]; ++G__14559__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14559__a,0);
} 
return amentum$elements$h1__delegate.call(this,args__13782__auto__);};
amentum$elements$h1.cljs$lang$maxFixedArity = 0;
amentum$elements$h1.cljs$lang$applyTo = (function (arglist__14560){
var args__13782__auto__ = cljs.core.seq(arglist__14560);
return amentum$elements$h1__delegate(args__13782__auto__);
});
amentum$elements$h1.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h1__delegate;
return amentum$elements$h1;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h2 = (function() { 
var amentum$elements$h2__delegate = function (args__13782__auto__){
var vec__14583 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583,(1),null);
return (function (){var G__14592 = cljs.core.cst$kw$class;
var G__14593 = "ui header";
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$2(G__14592,G__14593) : hoplon.core.h2.call(null,G__14592,G__14593));
})().call(null,attr,kids);
};
var amentum$elements$h2 = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14601__i = 0, G__14601__a = new Array(arguments.length -  0);
while (G__14601__i < G__14601__a.length) {G__14601__a[G__14601__i] = arguments[G__14601__i + 0]; ++G__14601__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14601__a,0);
} 
return amentum$elements$h2__delegate.call(this,args__13782__auto__);};
amentum$elements$h2.cljs$lang$maxFixedArity = 0;
amentum$elements$h2.cljs$lang$applyTo = (function (arglist__14604){
var args__13782__auto__ = cljs.core.seq(arglist__14604);
return amentum$elements$h2__delegate(args__13782__auto__);
});
amentum$elements$h2.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h2__delegate;
return amentum$elements$h2;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h3 = (function() { 
var amentum$elements$h3__delegate = function (args__13782__auto__){
var vec__14610 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14610,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14610,(1),null);
return (function (){var G__14613 = cljs.core.cst$kw$class;
var G__14614 = "ui header";
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(G__14613,G__14614) : hoplon.core.h3.call(null,G__14613,G__14614));
})().call(null,attr,kids);
};
var amentum$elements$h3 = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14618__i = 0, G__14618__a = new Array(arguments.length -  0);
while (G__14618__i < G__14618__a.length) {G__14618__a[G__14618__i] = arguments[G__14618__i + 0]; ++G__14618__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14618__a,0);
} 
return amentum$elements$h3__delegate.call(this,args__13782__auto__);};
amentum$elements$h3.cljs$lang$maxFixedArity = 0;
amentum$elements$h3.cljs$lang$applyTo = (function (arglist__14623){
var args__13782__auto__ = cljs.core.seq(arglist__14623);
return amentum$elements$h3__delegate(args__13782__auto__);
});
amentum$elements$h3.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h3__delegate;
return amentum$elements$h3;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h4 = (function() { 
var amentum$elements$h4__delegate = function (args__13782__auto__){
var vec__14630 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630,(1),null);
return (function (){var G__14633 = cljs.core.cst$kw$class;
var G__14634 = "ui header";
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$2(G__14633,G__14634) : hoplon.core.h4.call(null,G__14633,G__14634));
})().call(null,attr,kids);
};
var amentum$elements$h4 = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14652__i = 0, G__14652__a = new Array(arguments.length -  0);
while (G__14652__i < G__14652__a.length) {G__14652__a[G__14652__i] = arguments[G__14652__i + 0]; ++G__14652__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14652__a,0);
} 
return amentum$elements$h4__delegate.call(this,args__13782__auto__);};
amentum$elements$h4.cljs$lang$maxFixedArity = 0;
amentum$elements$h4.cljs$lang$applyTo = (function (arglist__14654){
var args__13782__auto__ = cljs.core.seq(arglist__14654);
return amentum$elements$h4__delegate(args__13782__auto__);
});
amentum$elements$h4.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h4__delegate;
return amentum$elements$h4;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h5 = (function() { 
var amentum$elements$h5__delegate = function (args__13782__auto__){
var vec__14674 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,(1),null);
return (function (){var G__14681 = cljs.core.cst$kw$class;
var G__14682 = "ui header";
return (hoplon.core.h5.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$2(G__14681,G__14682) : hoplon.core.h5.call(null,G__14681,G__14682));
})().call(null,attr,kids);
};
var amentum$elements$h5 = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14706__i = 0, G__14706__a = new Array(arguments.length -  0);
while (G__14706__i < G__14706__a.length) {G__14706__a[G__14706__i] = arguments[G__14706__i + 0]; ++G__14706__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14706__a,0);
} 
return amentum$elements$h5__delegate.call(this,args__13782__auto__);};
amentum$elements$h5.cljs$lang$maxFixedArity = 0;
amentum$elements$h5.cljs$lang$applyTo = (function (arglist__14708){
var args__13782__auto__ = cljs.core.seq(arglist__14708);
return amentum$elements$h5__delegate(args__13782__auto__);
});
amentum$elements$h5.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h5__delegate;
return amentum$elements$h5;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h6 = (function() { 
var amentum$elements$h6__delegate = function (args__13782__auto__){
var vec__14724 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(1),null);
return (function (){var G__14727 = cljs.core.cst$kw$class;
var G__14728 = "ui header";
return (hoplon.core.h6.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h6.cljs$core$IFn$_invoke$arity$2(G__14727,G__14728) : hoplon.core.h6.call(null,G__14727,G__14728));
})().call(null,attr,kids);
};
var amentum$elements$h6 = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14749__i = 0, G__14749__a = new Array(arguments.length -  0);
while (G__14749__i < G__14749__a.length) {G__14749__a[G__14749__i] = arguments[G__14749__i + 0]; ++G__14749__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14749__a,0);
} 
return amentum$elements$h6__delegate.call(this,args__13782__auto__);};
amentum$elements$h6.cljs$lang$maxFixedArity = 0;
amentum$elements$h6.cljs$lang$applyTo = (function (arglist__14754){
var args__13782__auto__ = cljs.core.seq(arglist__14754);
return amentum$elements$h6__delegate(args__13782__auto__);
});
amentum$elements$h6.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h6__delegate;
return amentum$elements$h6;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.button = (function() { 
var amentum$elements$button__delegate = function (args__13782__auto__){
var vec__14815 = hoplon.core.parse_args(args__13782__auto__);
var map__14818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(0),null);
var map__14818__$1 = ((((!((map__14818 == null)))?((((map__14818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14818):map__14818);
var attr = map__14818__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14818__$1,cljs.core.cst$kw$class,cljs.core.PersistentArrayMap.EMPTY);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14818__$1,cljs.core.cst$kw$color);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14818__$1,cljs.core.cst$kw$href);
var tabindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14818__$1,cljs.core.cst$kw$tabindex);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14818__$1,cljs.core.cst$kw$type);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(1),null);
return (function (){var iname = cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(attr);
var tag = (cljs.core.truth_(type)?hoplon.core.button:(cljs.core.truth_(href)?hoplon.core.a:hoplon.core.div
));
var G__14826 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$color,cljs.core.array_seq([cljs.core.cst$kw$icon], 0)),cljs.core.cst$kw$class,(function (){var G__14828 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$button,true,cljs.core.cst$kw$icon,(function (){var and__6830__auto__ = iname;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.empty_QMARK_(kids);
} else {
return and__6830__auto__;
}
})()], null);
if(cljs.core.truth_(color)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14828,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color),true);
} else {
return G__14828;
}
})());
var G__14827 = (cljs.core.truth_(iname)?amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iname], 0)):null);
return (tag.cljs$core$IFn$_invoke$arity$2 ? tag.cljs$core$IFn$_invoke$arity$2(G__14826,G__14827) : tag.call(null,G__14826,G__14827));
})().call(null,cljs.core.cst$kw$class,class$,kids);
};
var amentum$elements$button = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14834__i = 0, G__14834__a = new Array(arguments.length -  0);
while (G__14834__i < G__14834__a.length) {G__14834__a[G__14834__i] = arguments[G__14834__i + 0]; ++G__14834__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14834__a,0);
} 
return amentum$elements$button__delegate.call(this,args__13782__auto__);};
amentum$elements$button.cljs$lang$maxFixedArity = 0;
amentum$elements$button.cljs$lang$applyTo = (function (arglist__14835){
var args__13782__auto__ = cljs.core.seq(arglist__14835);
return amentum$elements$button__delegate(args__13782__auto__);
});
amentum$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$button__delegate;
return amentum$elements$button;
})()
;
