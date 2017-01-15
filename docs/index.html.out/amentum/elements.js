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
var amentum$elements$icon__delegate = function (args__13756__auto__){
var vec__14340 = hoplon.core.parse_args(args__13756__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14340,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14340,(1),null);
return (function (){var G__14344 = cljs.core.cst$kw$class;
var G__14345 = [cljs.core.str(cljs.core.first(name)),cljs.core.str(" icon")].join('');
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14344,G__14345) : hoplon.core.i.call(null,G__14344,G__14345));
})().call(null,attrs);
};
var amentum$elements$icon = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14362__i = 0, G__14362__a = new Array(arguments.length -  0);
while (G__14362__i < G__14362__a.length) {G__14362__a[G__14362__i] = arguments[G__14362__i + 0]; ++G__14362__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14362__a,0);
} 
return amentum$elements$icon__delegate.call(this,args__13756__auto__);};
amentum$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$elements$icon.cljs$lang$applyTo = (function (arglist__14365){
var args__13756__auto__ = cljs.core.seq(arglist__14365);
return amentum$elements$icon__delegate(args__13756__auto__);
});
amentum$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$icon__delegate;
return amentum$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.label = (function() { 
var amentum$elements$label__delegate = function (args__13756__auto__){
var vec__14382 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(1),null);
return (function (){var G__14385 = cljs.core.cst$kw$class;
var G__14386 = "ui label";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14385,G__14386) : hoplon.core.div.call(null,G__14385,G__14386));
})().call(null,attr,kids);
};
var amentum$elements$label = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14387__i = 0, G__14387__a = new Array(arguments.length -  0);
while (G__14387__i < G__14387__a.length) {G__14387__a[G__14387__i] = arguments[G__14387__i + 0]; ++G__14387__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14387__a,0);
} 
return amentum$elements$label__delegate.call(this,args__13756__auto__);};
amentum$elements$label.cljs$lang$maxFixedArity = 0;
amentum$elements$label.cljs$lang$applyTo = (function (arglist__14388){
var args__13756__auto__ = cljs.core.seq(arglist__14388);
return amentum$elements$label__delegate(args__13756__auto__);
});
amentum$elements$label.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$label__delegate;
return amentum$elements$label;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.header = (function() { 
var amentum$elements$header__delegate = function (args__13756__auto__){
var vec__14407 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14407,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14407,(1),null);
return (function (){var G__14411 = cljs.core.cst$kw$class;
var G__14412 = "header";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14411,G__14412) : hoplon.core.div.call(null,G__14411,G__14412));
})().call(null,attr,kids);
};
var amentum$elements$header = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14427__i = 0, G__14427__a = new Array(arguments.length -  0);
while (G__14427__i < G__14427__a.length) {G__14427__a[G__14427__i] = arguments[G__14427__i + 0]; ++G__14427__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14427__a,0);
} 
return amentum$elements$header__delegate.call(this,args__13756__auto__);};
amentum$elements$header.cljs$lang$maxFixedArity = 0;
amentum$elements$header.cljs$lang$applyTo = (function (arglist__14431){
var args__13756__auto__ = cljs.core.seq(arglist__14431);
return amentum$elements$header__delegate(args__13756__auto__);
});
amentum$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$header__delegate;
return amentum$elements$header;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.segment = (function() { 
var amentum$elements$segment__delegate = function (args__13756__auto__){
var vec__14463 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14463,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14463,(1),null);
return (function (){var G__14467 = cljs.core.cst$kw$class;
var G__14468 = "ui segment";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14467,G__14468) : hoplon.core.div.call(null,G__14467,G__14468));
})().call(null,attr,kids);
};
var amentum$elements$segment = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14469__i = 0, G__14469__a = new Array(arguments.length -  0);
while (G__14469__i < G__14469__a.length) {G__14469__a[G__14469__i] = arguments[G__14469__i + 0]; ++G__14469__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14469__a,0);
} 
return amentum$elements$segment__delegate.call(this,args__13756__auto__);};
amentum$elements$segment.cljs$lang$maxFixedArity = 0;
amentum$elements$segment.cljs$lang$applyTo = (function (arglist__14470){
var args__13756__auto__ = cljs.core.seq(arglist__14470);
return amentum$elements$segment__delegate(args__13756__auto__);
});
amentum$elements$segment.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$segment__delegate;
return amentum$elements$segment;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.container = (function() { 
var amentum$elements$container__delegate = function (args__13756__auto__){
var vec__14482 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14482,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14482,(1),null);
return (function (){var G__14485 = cljs.core.cst$kw$class;
var G__14486 = "ui container";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14485,G__14486) : hoplon.core.div.call(null,G__14485,G__14486));
})().call(null,attr,kids);
};
var amentum$elements$container = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14515__i = 0, G__14515__a = new Array(arguments.length -  0);
while (G__14515__i < G__14515__a.length) {G__14515__a[G__14515__i] = arguments[G__14515__i + 0]; ++G__14515__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14515__a,0);
} 
return amentum$elements$container__delegate.call(this,args__13756__auto__);};
amentum$elements$container.cljs$lang$maxFixedArity = 0;
amentum$elements$container.cljs$lang$applyTo = (function (arglist__14518){
var args__13756__auto__ = cljs.core.seq(arglist__14518);
return amentum$elements$container__delegate(args__13756__auto__);
});
amentum$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$container__delegate;
return amentum$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.buttons = (function() { 
var amentum$elements$buttons__delegate = function (args__13756__auto__){
var vec__14529 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14529,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14529,(1),null);
return (function (){var G__14533 = cljs.core.cst$kw$class;
var G__14534 = "ui buttons";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14533,G__14534) : hoplon.core.div.call(null,G__14533,G__14534));
})().call(null,attr,kids);
};
var amentum$elements$buttons = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14540__i = 0, G__14540__a = new Array(arguments.length -  0);
while (G__14540__i < G__14540__a.length) {G__14540__a[G__14540__i] = arguments[G__14540__i + 0]; ++G__14540__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14540__a,0);
} 
return amentum$elements$buttons__delegate.call(this,args__13756__auto__);};
amentum$elements$buttons.cljs$lang$maxFixedArity = 0;
amentum$elements$buttons.cljs$lang$applyTo = (function (arglist__14541){
var args__13756__auto__ = cljs.core.seq(arglist__14541);
return amentum$elements$buttons__delegate(args__13756__auto__);
});
amentum$elements$buttons.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$buttons__delegate;
return amentum$elements$buttons;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.button = (function() { 
var amentum$elements$button__delegate = function (args__13756__auto__){
var vec__14577 = hoplon.core.parse_args(args__13756__auto__);
var map__14580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14577,(0),null);
var map__14580__$1 = ((((!((map__14580 == null)))?((((map__14580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14580):map__14580);
var attr = map__14580__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14580__$1,cljs.core.cst$kw$class,cljs.core.PersistentArrayMap.EMPTY);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14580__$1,cljs.core.cst$kw$color);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14580__$1,cljs.core.cst$kw$href);
var tabindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14580__$1,cljs.core.cst$kw$tabindex);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14580__$1,cljs.core.cst$kw$type);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14577,(1),null);
return (function (){var iname = cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(attr);
var tag = (cljs.core.truth_(type)?hoplon.core.button:(cljs.core.truth_(href)?hoplon.core.a:hoplon.core.div
));
var G__14587 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$color,cljs.core.array_seq([cljs.core.cst$kw$icon], 0)),cljs.core.cst$kw$class,(function (){var G__14591 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$button,true,cljs.core.cst$kw$icon,(function (){var and__6830__auto__ = iname;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.empty_QMARK_(kids);
} else {
return and__6830__auto__;
}
})()], null);
if(cljs.core.truth_(color)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14591,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color),true);
} else {
return G__14591;
}
})());
var G__14588 = (cljs.core.truth_(iname)?amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iname], 0)):null);
return (tag.cljs$core$IFn$_invoke$arity$2 ? tag.cljs$core$IFn$_invoke$arity$2(G__14587,G__14588) : tag.call(null,G__14587,G__14588));
})().call(null,cljs.core.cst$kw$class,class$,kids);
};
var amentum$elements$button = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14641__i = 0, G__14641__a = new Array(arguments.length -  0);
while (G__14641__i < G__14641__a.length) {G__14641__a[G__14641__i] = arguments[G__14641__i + 0]; ++G__14641__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14641__a,0);
} 
return amentum$elements$button__delegate.call(this,args__13756__auto__);};
amentum$elements$button.cljs$lang$maxFixedArity = 0;
amentum$elements$button.cljs$lang$applyTo = (function (arglist__14642){
var args__13756__auto__ = cljs.core.seq(arglist__14642);
return amentum$elements$button__delegate(args__13756__auto__);
});
amentum$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$button__delegate;
return amentum$elements$button;
})()
;
