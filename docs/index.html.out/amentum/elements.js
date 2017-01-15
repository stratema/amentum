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
var amentum$elements$icon__delegate = function (args__13752__auto__){
var vec__14319 = hoplon.core.parse_args(args__13752__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14319,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14319,(1),null);
return (function (){var G__14329 = cljs.core.cst$kw$class;
var G__14330 = [cljs.core.str(cljs.core.first(name)),cljs.core.str(" icon")].join('');
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14329,G__14330) : hoplon.core.i.call(null,G__14329,G__14330));
})().call(null,attrs);
};
var amentum$elements$icon = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14355__i = 0, G__14355__a = new Array(arguments.length -  0);
while (G__14355__i < G__14355__a.length) {G__14355__a[G__14355__i] = arguments[G__14355__i + 0]; ++G__14355__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14355__a,0);
} 
return amentum$elements$icon__delegate.call(this,args__13752__auto__);};
amentum$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$elements$icon.cljs$lang$applyTo = (function (arglist__14356){
var args__13752__auto__ = cljs.core.seq(arglist__14356);
return amentum$elements$icon__delegate(args__13752__auto__);
});
amentum$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$icon__delegate;
return amentum$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.label = (function() { 
var amentum$elements$label__delegate = function (args__13752__auto__){
var vec__14374 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14374,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14374,(1),null);
return (function (){var G__14380 = cljs.core.cst$kw$class;
var G__14381 = "ui label";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14380,G__14381) : hoplon.core.div.call(null,G__14380,G__14381));
})().call(null,attr,kids);
};
var amentum$elements$label = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14397__i = 0, G__14397__a = new Array(arguments.length -  0);
while (G__14397__i < G__14397__a.length) {G__14397__a[G__14397__i] = arguments[G__14397__i + 0]; ++G__14397__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14397__a,0);
} 
return amentum$elements$label__delegate.call(this,args__13752__auto__);};
amentum$elements$label.cljs$lang$maxFixedArity = 0;
amentum$elements$label.cljs$lang$applyTo = (function (arglist__14403){
var args__13752__auto__ = cljs.core.seq(arglist__14403);
return amentum$elements$label__delegate(args__13752__auto__);
});
amentum$elements$label.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$label__delegate;
return amentum$elements$label;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.header = (function() { 
var amentum$elements$header__delegate = function (args__13752__auto__){
var vec__14445 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14445,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14445,(1),null);
return (function (){var G__14454 = cljs.core.cst$kw$class;
var G__14455 = "header";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14454,G__14455) : hoplon.core.div.call(null,G__14454,G__14455));
})().call(null,attr,kids);
};
var amentum$elements$header = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14473__i = 0, G__14473__a = new Array(arguments.length -  0);
while (G__14473__i < G__14473__a.length) {G__14473__a[G__14473__i] = arguments[G__14473__i + 0]; ++G__14473__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14473__a,0);
} 
return amentum$elements$header__delegate.call(this,args__13752__auto__);};
amentum$elements$header.cljs$lang$maxFixedArity = 0;
amentum$elements$header.cljs$lang$applyTo = (function (arglist__14477){
var args__13752__auto__ = cljs.core.seq(arglist__14477);
return amentum$elements$header__delegate(args__13752__auto__);
});
amentum$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$header__delegate;
return amentum$elements$header;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.segment = (function() { 
var amentum$elements$segment__delegate = function (args__13752__auto__){
var vec__14496 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(1),null);
return (function (){var G__14501 = cljs.core.cst$kw$class;
var G__14502 = "ui segment";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14501,G__14502) : hoplon.core.div.call(null,G__14501,G__14502));
})().call(null,attr,kids);
};
var amentum$elements$segment = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14507__i = 0, G__14507__a = new Array(arguments.length -  0);
while (G__14507__i < G__14507__a.length) {G__14507__a[G__14507__i] = arguments[G__14507__i + 0]; ++G__14507__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14507__a,0);
} 
return amentum$elements$segment__delegate.call(this,args__13752__auto__);};
amentum$elements$segment.cljs$lang$maxFixedArity = 0;
amentum$elements$segment.cljs$lang$applyTo = (function (arglist__14518){
var args__13752__auto__ = cljs.core.seq(arglist__14518);
return amentum$elements$segment__delegate(args__13752__auto__);
});
amentum$elements$segment.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$segment__delegate;
return amentum$elements$segment;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.container = (function() { 
var amentum$elements$container__delegate = function (args__13752__auto__){
var vec__14524 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14524,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14524,(1),null);
return (function (){var G__14531 = cljs.core.cst$kw$class;
var G__14532 = "ui container";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14531,G__14532) : hoplon.core.div.call(null,G__14531,G__14532));
})().call(null,attr,kids);
};
var amentum$elements$container = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14553__i = 0, G__14553__a = new Array(arguments.length -  0);
while (G__14553__i < G__14553__a.length) {G__14553__a[G__14553__i] = arguments[G__14553__i + 0]; ++G__14553__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14553__a,0);
} 
return amentum$elements$container__delegate.call(this,args__13752__auto__);};
amentum$elements$container.cljs$lang$maxFixedArity = 0;
amentum$elements$container.cljs$lang$applyTo = (function (arglist__14557){
var args__13752__auto__ = cljs.core.seq(arglist__14557);
return amentum$elements$container__delegate(args__13752__auto__);
});
amentum$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$container__delegate;
return amentum$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.buttons = (function() { 
var amentum$elements$buttons__delegate = function (args__13752__auto__){
var vec__14568 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14568,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14568,(1),null);
return (function (){var G__14573 = cljs.core.cst$kw$class;
var G__14574 = "ui buttons";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14573,G__14574) : hoplon.core.div.call(null,G__14573,G__14574));
})().call(null,attr,kids);
};
var amentum$elements$buttons = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14586__i = 0, G__14586__a = new Array(arguments.length -  0);
while (G__14586__i < G__14586__a.length) {G__14586__a[G__14586__i] = arguments[G__14586__i + 0]; ++G__14586__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14586__a,0);
} 
return amentum$elements$buttons__delegate.call(this,args__13752__auto__);};
amentum$elements$buttons.cljs$lang$maxFixedArity = 0;
amentum$elements$buttons.cljs$lang$applyTo = (function (arglist__14587){
var args__13752__auto__ = cljs.core.seq(arglist__14587);
return amentum$elements$buttons__delegate(args__13752__auto__);
});
amentum$elements$buttons.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$buttons__delegate;
return amentum$elements$buttons;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h1 = (function() { 
var amentum$elements$h1__delegate = function (args__13752__auto__){
var vec__14594 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14594,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14594,(1),null);
return (function (){var G__14599 = cljs.core.cst$kw$class;
var G__14600 = "ui header";
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$2(G__14599,G__14600) : hoplon.core.h1.call(null,G__14599,G__14600));
})().call(null,attr,kids);
};
var amentum$elements$h1 = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14611__i = 0, G__14611__a = new Array(arguments.length -  0);
while (G__14611__i < G__14611__a.length) {G__14611__a[G__14611__i] = arguments[G__14611__i + 0]; ++G__14611__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14611__a,0);
} 
return amentum$elements$h1__delegate.call(this,args__13752__auto__);};
amentum$elements$h1.cljs$lang$maxFixedArity = 0;
amentum$elements$h1.cljs$lang$applyTo = (function (arglist__14612){
var args__13752__auto__ = cljs.core.seq(arglist__14612);
return amentum$elements$h1__delegate(args__13752__auto__);
});
amentum$elements$h1.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h1__delegate;
return amentum$elements$h1;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h2 = (function() { 
var amentum$elements$h2__delegate = function (args__13752__auto__){
var vec__14626 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626,(1),null);
return (function (){var G__14630 = cljs.core.cst$kw$class;
var G__14631 = "ui header";
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$2(G__14630,G__14631) : hoplon.core.h2.call(null,G__14630,G__14631));
})().call(null,attr,kids);
};
var amentum$elements$h2 = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14649__i = 0, G__14649__a = new Array(arguments.length -  0);
while (G__14649__i < G__14649__a.length) {G__14649__a[G__14649__i] = arguments[G__14649__i + 0]; ++G__14649__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14649__a,0);
} 
return amentum$elements$h2__delegate.call(this,args__13752__auto__);};
amentum$elements$h2.cljs$lang$maxFixedArity = 0;
amentum$elements$h2.cljs$lang$applyTo = (function (arglist__14654){
var args__13752__auto__ = cljs.core.seq(arglist__14654);
return amentum$elements$h2__delegate(args__13752__auto__);
});
amentum$elements$h2.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h2__delegate;
return amentum$elements$h2;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h3 = (function() { 
var amentum$elements$h3__delegate = function (args__13752__auto__){
var vec__14664 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(1),null);
return (function (){var G__14673 = cljs.core.cst$kw$class;
var G__14674 = "ui header";
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(G__14673,G__14674) : hoplon.core.h3.call(null,G__14673,G__14674));
})().call(null,attr,kids);
};
var amentum$elements$h3 = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14697__i = 0, G__14697__a = new Array(arguments.length -  0);
while (G__14697__i < G__14697__a.length) {G__14697__a[G__14697__i] = arguments[G__14697__i + 0]; ++G__14697__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14697__a,0);
} 
return amentum$elements$h3__delegate.call(this,args__13752__auto__);};
amentum$elements$h3.cljs$lang$maxFixedArity = 0;
amentum$elements$h3.cljs$lang$applyTo = (function (arglist__14699){
var args__13752__auto__ = cljs.core.seq(arglist__14699);
return amentum$elements$h3__delegate(args__13752__auto__);
});
amentum$elements$h3.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h3__delegate;
return amentum$elements$h3;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h4 = (function() { 
var amentum$elements$h4__delegate = function (args__13752__auto__){
var vec__14711 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14711,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14711,(1),null);
return (function (){var G__14716 = cljs.core.cst$kw$class;
var G__14717 = "ui header";
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$2(G__14716,G__14717) : hoplon.core.h4.call(null,G__14716,G__14717));
})().call(null,attr,kids);
};
var amentum$elements$h4 = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14721__i = 0, G__14721__a = new Array(arguments.length -  0);
while (G__14721__i < G__14721__a.length) {G__14721__a[G__14721__i] = arguments[G__14721__i + 0]; ++G__14721__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14721__a,0);
} 
return amentum$elements$h4__delegate.call(this,args__13752__auto__);};
amentum$elements$h4.cljs$lang$maxFixedArity = 0;
amentum$elements$h4.cljs$lang$applyTo = (function (arglist__14724){
var args__13752__auto__ = cljs.core.seq(arglist__14724);
return amentum$elements$h4__delegate(args__13752__auto__);
});
amentum$elements$h4.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h4__delegate;
return amentum$elements$h4;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h5 = (function() { 
var amentum$elements$h5__delegate = function (args__13752__auto__){
var vec__14735 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(1),null);
return (function (){var G__14738 = cljs.core.cst$kw$class;
var G__14739 = "ui header";
return (hoplon.core.h5.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$2(G__14738,G__14739) : hoplon.core.h5.call(null,G__14738,G__14739));
})().call(null,attr,kids);
};
var amentum$elements$h5 = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14758__i = 0, G__14758__a = new Array(arguments.length -  0);
while (G__14758__i < G__14758__a.length) {G__14758__a[G__14758__i] = arguments[G__14758__i + 0]; ++G__14758__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14758__a,0);
} 
return amentum$elements$h5__delegate.call(this,args__13752__auto__);};
amentum$elements$h5.cljs$lang$maxFixedArity = 0;
amentum$elements$h5.cljs$lang$applyTo = (function (arglist__14774){
var args__13752__auto__ = cljs.core.seq(arglist__14774);
return amentum$elements$h5__delegate(args__13752__auto__);
});
amentum$elements$h5.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h5__delegate;
return amentum$elements$h5;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.h6 = (function() { 
var amentum$elements$h6__delegate = function (args__13752__auto__){
var vec__14786 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14786,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14786,(1),null);
return (function (){var G__14793 = cljs.core.cst$kw$class;
var G__14794 = "ui header";
return (hoplon.core.h6.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h6.cljs$core$IFn$_invoke$arity$2(G__14793,G__14794) : hoplon.core.h6.call(null,G__14793,G__14794));
})().call(null,attr,kids);
};
var amentum$elements$h6 = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14807__i = 0, G__14807__a = new Array(arguments.length -  0);
while (G__14807__i < G__14807__a.length) {G__14807__a[G__14807__i] = arguments[G__14807__i + 0]; ++G__14807__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14807__a,0);
} 
return amentum$elements$h6__delegate.call(this,args__13752__auto__);};
amentum$elements$h6.cljs$lang$maxFixedArity = 0;
amentum$elements$h6.cljs$lang$applyTo = (function (arglist__14808){
var args__13752__auto__ = cljs.core.seq(arglist__14808);
return amentum$elements$h6__delegate(args__13752__auto__);
});
amentum$elements$h6.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$h6__delegate;
return amentum$elements$h6;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.button = (function() { 
var amentum$elements$button__delegate = function (args__13752__auto__){
var vec__14829 = hoplon.core.parse_args(args__13752__auto__);
var map__14832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14829,(0),null);
var map__14832__$1 = ((((!((map__14832 == null)))?((((map__14832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14832):map__14832);
var attr = map__14832__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14832__$1,cljs.core.cst$kw$class,cljs.core.PersistentArrayMap.EMPTY);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14832__$1,cljs.core.cst$kw$color);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14832__$1,cljs.core.cst$kw$href);
var tabindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14832__$1,cljs.core.cst$kw$tabindex);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14832__$1,cljs.core.cst$kw$type);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14829,(1),null);
return (function (){var iname = cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(attr);
var tag = (cljs.core.truth_(type)?hoplon.core.button:(cljs.core.truth_(href)?hoplon.core.a:hoplon.core.div
));
var G__14844 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$color,cljs.core.array_seq([cljs.core.cst$kw$icon], 0)),cljs.core.cst$kw$class,(function (){var G__14846 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$button,true,cljs.core.cst$kw$icon,(function (){var and__6830__auto__ = iname;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.empty_QMARK_(kids);
} else {
return and__6830__auto__;
}
})()], null);
if(cljs.core.truth_(color)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14846,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color),true);
} else {
return G__14846;
}
})());
var G__14845 = (cljs.core.truth_(iname)?amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iname], 0)):null);
return (tag.cljs$core$IFn$_invoke$arity$2 ? tag.cljs$core$IFn$_invoke$arity$2(G__14844,G__14845) : tag.call(null,G__14844,G__14845));
})().call(null,cljs.core.cst$kw$class,class$,kids);
};
var amentum$elements$button = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14862__i = 0, G__14862__a = new Array(arguments.length -  0);
while (G__14862__i < G__14862__a.length) {G__14862__a[G__14862__i] = arguments[G__14862__i + 0]; ++G__14862__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14862__a,0);
} 
return amentum$elements$button__delegate.call(this,args__13752__auto__);};
amentum$elements$button.cljs$lang$maxFixedArity = 0;
amentum$elements$button.cljs$lang$applyTo = (function (arglist__14863){
var args__13752__auto__ = cljs.core.seq(arglist__14863);
return amentum$elements$button__delegate(args__13752__auto__);
});
amentum$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$button__delegate;
return amentum$elements$button;
})()
;
