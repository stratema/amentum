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
var amentum$elements$icon__delegate = function (args__13753__auto__){
var vec__14676 = hoplon.core.parse_args(args__13753__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14676,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14676,(1),null);
return (function (){var G__14679 = cljs.core.cst$kw$class;
var G__14680 = [cljs.core.str(cljs.core.first(name)),cljs.core.str(" icon")].join('');
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14679,G__14680) : hoplon.core.i.call(null,G__14679,G__14680));
})().call(null,attrs);
};
var amentum$elements$icon = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14681__i = 0, G__14681__a = new Array(arguments.length -  0);
while (G__14681__i < G__14681__a.length) {G__14681__a[G__14681__i] = arguments[G__14681__i + 0]; ++G__14681__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14681__a,0);
} 
return amentum$elements$icon__delegate.call(this,args__13753__auto__);};
amentum$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$elements$icon.cljs$lang$applyTo = (function (arglist__14682){
var args__13753__auto__ = cljs.core.seq(arglist__14682);
return amentum$elements$icon__delegate(args__13753__auto__);
});
amentum$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$icon__delegate;
return amentum$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.label = (function() { 
var amentum$elements$label__delegate = function (args__13753__auto__){
var vec__14688 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14688,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14688,(1),null);
return (function (){var G__14691 = cljs.core.cst$kw$class;
var G__14692 = "ui label";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14691,G__14692) : hoplon.core.div.call(null,G__14691,G__14692));
})().call(null,attr,kids);
};
var amentum$elements$label = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14693__i = 0, G__14693__a = new Array(arguments.length -  0);
while (G__14693__i < G__14693__a.length) {G__14693__a[G__14693__i] = arguments[G__14693__i + 0]; ++G__14693__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14693__a,0);
} 
return amentum$elements$label__delegate.call(this,args__13753__auto__);};
amentum$elements$label.cljs$lang$maxFixedArity = 0;
amentum$elements$label.cljs$lang$applyTo = (function (arglist__14694){
var args__13753__auto__ = cljs.core.seq(arglist__14694);
return amentum$elements$label__delegate(args__13753__auto__);
});
amentum$elements$label.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$label__delegate;
return amentum$elements$label;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.header = (function() { 
var amentum$elements$header__delegate = function (args__13753__auto__){
var vec__14700 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14700,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14700,(1),null);
return (function (){var G__14703 = cljs.core.cst$kw$class;
var G__14704 = "header";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14703,G__14704) : hoplon.core.div.call(null,G__14703,G__14704));
})().call(null,attr,kids);
};
var amentum$elements$header = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14705__i = 0, G__14705__a = new Array(arguments.length -  0);
while (G__14705__i < G__14705__a.length) {G__14705__a[G__14705__i] = arguments[G__14705__i + 0]; ++G__14705__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14705__a,0);
} 
return amentum$elements$header__delegate.call(this,args__13753__auto__);};
amentum$elements$header.cljs$lang$maxFixedArity = 0;
amentum$elements$header.cljs$lang$applyTo = (function (arglist__14706){
var args__13753__auto__ = cljs.core.seq(arglist__14706);
return amentum$elements$header__delegate(args__13753__auto__);
});
amentum$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$header__delegate;
return amentum$elements$header;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.segment = (function() { 
var amentum$elements$segment__delegate = function (args__13753__auto__){
var vec__14712 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14712,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14712,(1),null);
return (function (){var G__14715 = cljs.core.cst$kw$class;
var G__14716 = "ui segment";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14715,G__14716) : hoplon.core.div.call(null,G__14715,G__14716));
})().call(null,attr,kids);
};
var amentum$elements$segment = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14717__i = 0, G__14717__a = new Array(arguments.length -  0);
while (G__14717__i < G__14717__a.length) {G__14717__a[G__14717__i] = arguments[G__14717__i + 0]; ++G__14717__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14717__a,0);
} 
return amentum$elements$segment__delegate.call(this,args__13753__auto__);};
amentum$elements$segment.cljs$lang$maxFixedArity = 0;
amentum$elements$segment.cljs$lang$applyTo = (function (arglist__14718){
var args__13753__auto__ = cljs.core.seq(arglist__14718);
return amentum$elements$segment__delegate(args__13753__auto__);
});
amentum$elements$segment.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$segment__delegate;
return amentum$elements$segment;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.container = (function() { 
var amentum$elements$container__delegate = function (args__13753__auto__){
var vec__14724 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(1),null);
return (function (){var G__14727 = cljs.core.cst$kw$class;
var G__14728 = "ui container";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14727,G__14728) : hoplon.core.div.call(null,G__14727,G__14728));
})().call(null,attr,kids);
};
var amentum$elements$container = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14729__i = 0, G__14729__a = new Array(arguments.length -  0);
while (G__14729__i < G__14729__a.length) {G__14729__a[G__14729__i] = arguments[G__14729__i + 0]; ++G__14729__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14729__a,0);
} 
return amentum$elements$container__delegate.call(this,args__13753__auto__);};
amentum$elements$container.cljs$lang$maxFixedArity = 0;
amentum$elements$container.cljs$lang$applyTo = (function (arglist__14730){
var args__13753__auto__ = cljs.core.seq(arglist__14730);
return amentum$elements$container__delegate(args__13753__auto__);
});
amentum$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$container__delegate;
return amentum$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.buttons = (function() { 
var amentum$elements$buttons__delegate = function (args__13753__auto__){
var vec__14736 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14736,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14736,(1),null);
return (function (){var G__14739 = cljs.core.cst$kw$class;
var G__14740 = "ui buttons";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14739,G__14740) : hoplon.core.div.call(null,G__14739,G__14740));
})().call(null,attr,kids);
};
var amentum$elements$buttons = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14741__i = 0, G__14741__a = new Array(arguments.length -  0);
while (G__14741__i < G__14741__a.length) {G__14741__a[G__14741__i] = arguments[G__14741__i + 0]; ++G__14741__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14741__a,0);
} 
return amentum$elements$buttons__delegate.call(this,args__13753__auto__);};
amentum$elements$buttons.cljs$lang$maxFixedArity = 0;
amentum$elements$buttons.cljs$lang$applyTo = (function (arglist__14742){
var args__13753__auto__ = cljs.core.seq(arglist__14742);
return amentum$elements$buttons__delegate(args__13753__auto__);
});
amentum$elements$buttons.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$buttons__delegate;
return amentum$elements$buttons;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.button = (function() { 
var amentum$elements$button__delegate = function (args__13753__auto__){
var vec__14751 = hoplon.core.parse_args(args__13753__auto__);
var map__14754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(0),null);
var map__14754__$1 = ((((!((map__14754 == null)))?((((map__14754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14754):map__14754);
var attr = map__14754__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14754__$1,cljs.core.cst$kw$class,cljs.core.PersistentArrayMap.EMPTY);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,cljs.core.cst$kw$color);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,cljs.core.cst$kw$href);
var tabindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,cljs.core.cst$kw$tabindex);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,cljs.core.cst$kw$type);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(1),null);
return (function (){var iname = cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(attr);
var tag = (cljs.core.truth_(type)?hoplon.core.button:(cljs.core.truth_(href)?hoplon.core.a:hoplon.core.div
));
var G__14756 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$color,cljs.core.array_seq([cljs.core.cst$kw$icon], 0)),cljs.core.cst$kw$class,(function (){var G__14758 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$button,true,cljs.core.cst$kw$icon,iname], null);
if(cljs.core.truth_(color)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14758,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color),true);
} else {
return G__14758;
}
})());
var G__14757 = (cljs.core.truth_(iname)?amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iname], 0)):null);
return (tag.cljs$core$IFn$_invoke$arity$2 ? tag.cljs$core$IFn$_invoke$arity$2(G__14756,G__14757) : tag.call(null,G__14756,G__14757));
})().call(null,cljs.core.cst$kw$class,class$,kids);
};
var amentum$elements$button = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14759__i = 0, G__14759__a = new Array(arguments.length -  0);
while (G__14759__i < G__14759__a.length) {G__14759__a[G__14759__i] = arguments[G__14759__i + 0]; ++G__14759__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14759__a,0);
} 
return amentum$elements$button__delegate.call(this,args__13753__auto__);};
amentum$elements$button.cljs$lang$maxFixedArity = 0;
amentum$elements$button.cljs$lang$applyTo = (function (arglist__14760){
var args__13753__auto__ = cljs.core.seq(arglist__14760);
return amentum$elements$button__delegate(args__13753__auto__);
});
amentum$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$button__delegate;
return amentum$elements$button;
})()
;
