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
var amentum$elements$icon__delegate = function (args__13749__auto__){
var vec__14672 = hoplon.core.parse_args(args__13749__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14672,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14672,(1),null);
return (function (){var G__14675 = cljs.core.cst$kw$class;
var G__14676 = [cljs.core.str(cljs.core.first(name)),cljs.core.str(" icon")].join('');
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14675,G__14676) : hoplon.core.i.call(null,G__14675,G__14676));
})().call(null,attrs);
};
var amentum$elements$icon = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14677__i = 0, G__14677__a = new Array(arguments.length -  0);
while (G__14677__i < G__14677__a.length) {G__14677__a[G__14677__i] = arguments[G__14677__i + 0]; ++G__14677__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14677__a,0);
} 
return amentum$elements$icon__delegate.call(this,args__13749__auto__);};
amentum$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$elements$icon.cljs$lang$applyTo = (function (arglist__14678){
var args__13749__auto__ = cljs.core.seq(arglist__14678);
return amentum$elements$icon__delegate(args__13749__auto__);
});
amentum$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$icon__delegate;
return amentum$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.label = (function() { 
var amentum$elements$label__delegate = function (args__13749__auto__){
var vec__14684 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14684,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14684,(1),null);
return (function (){var G__14687 = cljs.core.cst$kw$class;
var G__14688 = "ui label";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14687,G__14688) : hoplon.core.div.call(null,G__14687,G__14688));
})().call(null,attr,kids);
};
var amentum$elements$label = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14689__i = 0, G__14689__a = new Array(arguments.length -  0);
while (G__14689__i < G__14689__a.length) {G__14689__a[G__14689__i] = arguments[G__14689__i + 0]; ++G__14689__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14689__a,0);
} 
return amentum$elements$label__delegate.call(this,args__13749__auto__);};
amentum$elements$label.cljs$lang$maxFixedArity = 0;
amentum$elements$label.cljs$lang$applyTo = (function (arglist__14690){
var args__13749__auto__ = cljs.core.seq(arglist__14690);
return amentum$elements$label__delegate(args__13749__auto__);
});
amentum$elements$label.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$label__delegate;
return amentum$elements$label;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.header = (function() { 
var amentum$elements$header__delegate = function (args__13749__auto__){
var vec__14696 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14696,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14696,(1),null);
return (function (){var G__14699 = cljs.core.cst$kw$class;
var G__14700 = "header";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14699,G__14700) : hoplon.core.div.call(null,G__14699,G__14700));
})().call(null,attr,kids);
};
var amentum$elements$header = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14701__i = 0, G__14701__a = new Array(arguments.length -  0);
while (G__14701__i < G__14701__a.length) {G__14701__a[G__14701__i] = arguments[G__14701__i + 0]; ++G__14701__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14701__a,0);
} 
return amentum$elements$header__delegate.call(this,args__13749__auto__);};
amentum$elements$header.cljs$lang$maxFixedArity = 0;
amentum$elements$header.cljs$lang$applyTo = (function (arglist__14702){
var args__13749__auto__ = cljs.core.seq(arglist__14702);
return amentum$elements$header__delegate(args__13749__auto__);
});
amentum$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$header__delegate;
return amentum$elements$header;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.segment = (function() { 
var amentum$elements$segment__delegate = function (args__13749__auto__){
var vec__14708 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14708,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14708,(1),null);
return (function (){var G__14711 = cljs.core.cst$kw$class;
var G__14712 = "ui segment";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14711,G__14712) : hoplon.core.div.call(null,G__14711,G__14712));
})().call(null,attr,kids);
};
var amentum$elements$segment = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14713__i = 0, G__14713__a = new Array(arguments.length -  0);
while (G__14713__i < G__14713__a.length) {G__14713__a[G__14713__i] = arguments[G__14713__i + 0]; ++G__14713__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14713__a,0);
} 
return amentum$elements$segment__delegate.call(this,args__13749__auto__);};
amentum$elements$segment.cljs$lang$maxFixedArity = 0;
amentum$elements$segment.cljs$lang$applyTo = (function (arglist__14714){
var args__13749__auto__ = cljs.core.seq(arglist__14714);
return amentum$elements$segment__delegate(args__13749__auto__);
});
amentum$elements$segment.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$segment__delegate;
return amentum$elements$segment;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.container = (function() { 
var amentum$elements$container__delegate = function (args__13749__auto__){
var vec__14720 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(1),null);
return (function (){var G__14723 = cljs.core.cst$kw$class;
var G__14724 = "ui container";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14723,G__14724) : hoplon.core.div.call(null,G__14723,G__14724));
})().call(null,attr,kids);
};
var amentum$elements$container = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14725__i = 0, G__14725__a = new Array(arguments.length -  0);
while (G__14725__i < G__14725__a.length) {G__14725__a[G__14725__i] = arguments[G__14725__i + 0]; ++G__14725__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14725__a,0);
} 
return amentum$elements$container__delegate.call(this,args__13749__auto__);};
amentum$elements$container.cljs$lang$maxFixedArity = 0;
amentum$elements$container.cljs$lang$applyTo = (function (arglist__14726){
var args__13749__auto__ = cljs.core.seq(arglist__14726);
return amentum$elements$container__delegate(args__13749__auto__);
});
amentum$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$container__delegate;
return amentum$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.buttons = (function() { 
var amentum$elements$buttons__delegate = function (args__13749__auto__){
var vec__14732 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14732,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14732,(1),null);
return (function (){var G__14735 = cljs.core.cst$kw$class;
var G__14736 = "ui buttons";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14735,G__14736) : hoplon.core.div.call(null,G__14735,G__14736));
})().call(null,attr,kids);
};
var amentum$elements$buttons = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14737__i = 0, G__14737__a = new Array(arguments.length -  0);
while (G__14737__i < G__14737__a.length) {G__14737__a[G__14737__i] = arguments[G__14737__i + 0]; ++G__14737__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14737__a,0);
} 
return amentum$elements$buttons__delegate.call(this,args__13749__auto__);};
amentum$elements$buttons.cljs$lang$maxFixedArity = 0;
amentum$elements$buttons.cljs$lang$applyTo = (function (arglist__14738){
var args__13749__auto__ = cljs.core.seq(arglist__14738);
return amentum$elements$buttons__delegate(args__13749__auto__);
});
amentum$elements$buttons.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$buttons__delegate;
return amentum$elements$buttons;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.button = (function() { 
var amentum$elements$button__delegate = function (args__13749__auto__){
var vec__14747 = hoplon.core.parse_args(args__13749__auto__);
var map__14750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747,(0),null);
var map__14750__$1 = ((((!((map__14750 == null)))?((((map__14750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14750):map__14750);
var attr = map__14750__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14750__$1,cljs.core.cst$kw$class,cljs.core.PersistentArrayMap.EMPTY);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14750__$1,cljs.core.cst$kw$color);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14750__$1,cljs.core.cst$kw$href);
var tabindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14750__$1,cljs.core.cst$kw$tabindex);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14750__$1,cljs.core.cst$kw$type);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747,(1),null);
return (function (){var iname = cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(attr);
var tag = (cljs.core.truth_(type)?hoplon.core.button:(cljs.core.truth_(href)?hoplon.core.a:hoplon.core.div
));
var G__14752 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$color,cljs.core.array_seq([cljs.core.cst$kw$icon], 0)),cljs.core.cst$kw$class,(function (){var G__14754 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$button,true,cljs.core.cst$kw$icon,iname], null);
if(cljs.core.truth_(color)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14754,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color),true);
} else {
return G__14754;
}
})());
var G__14753 = (cljs.core.truth_(iname)?amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iname], 0)):null);
return (tag.cljs$core$IFn$_invoke$arity$2 ? tag.cljs$core$IFn$_invoke$arity$2(G__14752,G__14753) : tag.call(null,G__14752,G__14753));
})().call(null,cljs.core.cst$kw$class,class$,kids);
};
var amentum$elements$button = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14755__i = 0, G__14755__a = new Array(arguments.length -  0);
while (G__14755__i < G__14755__a.length) {G__14755__a[G__14755__i] = arguments[G__14755__i + 0]; ++G__14755__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14755__a,0);
} 
return amentum$elements$button__delegate.call(this,args__13749__auto__);};
amentum$elements$button.cljs$lang$maxFixedArity = 0;
amentum$elements$button.cljs$lang$applyTo = (function (arglist__14756){
var args__13749__auto__ = cljs.core.seq(arglist__14756);
return amentum$elements$button__delegate(args__13749__auto__);
});
amentum$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$button__delegate;
return amentum$elements$button;
})()
;
