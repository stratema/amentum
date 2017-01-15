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
var amentum$elements$icon__delegate = function (args__13751__auto__){
var vec__14782 = hoplon.core.parse_args(args__13751__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782,(1),null);
return (function (){var G__14785 = cljs.core.cst$kw$class;
var G__14786 = [cljs.core.str(cljs.core.first(name)),cljs.core.str(" icon")].join('');
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14785,G__14786) : hoplon.core.i.call(null,G__14785,G__14786));
})().call(null,attrs);
};
var amentum$elements$icon = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14787__i = 0, G__14787__a = new Array(arguments.length -  0);
while (G__14787__i < G__14787__a.length) {G__14787__a[G__14787__i] = arguments[G__14787__i + 0]; ++G__14787__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14787__a,0);
} 
return amentum$elements$icon__delegate.call(this,args__13751__auto__);};
amentum$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$elements$icon.cljs$lang$applyTo = (function (arglist__14788){
var args__13751__auto__ = cljs.core.seq(arglist__14788);
return amentum$elements$icon__delegate(args__13751__auto__);
});
amentum$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$icon__delegate;
return amentum$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.label = (function() { 
var amentum$elements$label__delegate = function (args__13751__auto__){
var vec__14794 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794,(1),null);
return (function (){var G__14797 = cljs.core.cst$kw$class;
var G__14798 = "ui label";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14797,G__14798) : hoplon.core.div.call(null,G__14797,G__14798));
})().call(null,attr,kids);
};
var amentum$elements$label = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14799__i = 0, G__14799__a = new Array(arguments.length -  0);
while (G__14799__i < G__14799__a.length) {G__14799__a[G__14799__i] = arguments[G__14799__i + 0]; ++G__14799__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14799__a,0);
} 
return amentum$elements$label__delegate.call(this,args__13751__auto__);};
amentum$elements$label.cljs$lang$maxFixedArity = 0;
amentum$elements$label.cljs$lang$applyTo = (function (arglist__14800){
var args__13751__auto__ = cljs.core.seq(arglist__14800);
return amentum$elements$label__delegate(args__13751__auto__);
});
amentum$elements$label.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$label__delegate;
return amentum$elements$label;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.header = (function() { 
var amentum$elements$header__delegate = function (args__13751__auto__){
var vec__14806 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14806,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14806,(1),null);
return (function (){var G__14809 = cljs.core.cst$kw$class;
var G__14810 = "header";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14809,G__14810) : hoplon.core.div.call(null,G__14809,G__14810));
})().call(null,attr,kids);
};
var amentum$elements$header = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14811__i = 0, G__14811__a = new Array(arguments.length -  0);
while (G__14811__i < G__14811__a.length) {G__14811__a[G__14811__i] = arguments[G__14811__i + 0]; ++G__14811__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14811__a,0);
} 
return amentum$elements$header__delegate.call(this,args__13751__auto__);};
amentum$elements$header.cljs$lang$maxFixedArity = 0;
amentum$elements$header.cljs$lang$applyTo = (function (arglist__14812){
var args__13751__auto__ = cljs.core.seq(arglist__14812);
return amentum$elements$header__delegate(args__13751__auto__);
});
amentum$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$header__delegate;
return amentum$elements$header;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.segment = (function() { 
var amentum$elements$segment__delegate = function (args__13751__auto__){
var vec__14818 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818,(1),null);
return (function (){var G__14821 = cljs.core.cst$kw$class;
var G__14822 = "ui segment";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14821,G__14822) : hoplon.core.div.call(null,G__14821,G__14822));
})().call(null,attr,kids);
};
var amentum$elements$segment = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14823__i = 0, G__14823__a = new Array(arguments.length -  0);
while (G__14823__i < G__14823__a.length) {G__14823__a[G__14823__i] = arguments[G__14823__i + 0]; ++G__14823__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14823__a,0);
} 
return amentum$elements$segment__delegate.call(this,args__13751__auto__);};
amentum$elements$segment.cljs$lang$maxFixedArity = 0;
amentum$elements$segment.cljs$lang$applyTo = (function (arglist__14824){
var args__13751__auto__ = cljs.core.seq(arglist__14824);
return amentum$elements$segment__delegate(args__13751__auto__);
});
amentum$elements$segment.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$segment__delegate;
return amentum$elements$segment;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.container = (function() { 
var amentum$elements$container__delegate = function (args__13751__auto__){
var vec__14830 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830,(1),null);
return (function (){var G__14833 = cljs.core.cst$kw$class;
var G__14834 = "ui container";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14833,G__14834) : hoplon.core.div.call(null,G__14833,G__14834));
})().call(null,attr,kids);
};
var amentum$elements$container = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14835__i = 0, G__14835__a = new Array(arguments.length -  0);
while (G__14835__i < G__14835__a.length) {G__14835__a[G__14835__i] = arguments[G__14835__i + 0]; ++G__14835__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14835__a,0);
} 
return amentum$elements$container__delegate.call(this,args__13751__auto__);};
amentum$elements$container.cljs$lang$maxFixedArity = 0;
amentum$elements$container.cljs$lang$applyTo = (function (arglist__14836){
var args__13751__auto__ = cljs.core.seq(arglist__14836);
return amentum$elements$container__delegate(args__13751__auto__);
});
amentum$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$container__delegate;
return amentum$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.buttons = (function() { 
var amentum$elements$buttons__delegate = function (args__13751__auto__){
var vec__14842 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(1),null);
return (function (){var G__14845 = cljs.core.cst$kw$class;
var G__14846 = "ui buttons";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14845,G__14846) : hoplon.core.div.call(null,G__14845,G__14846));
})().call(null,attr,kids);
};
var amentum$elements$buttons = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14847__i = 0, G__14847__a = new Array(arguments.length -  0);
while (G__14847__i < G__14847__a.length) {G__14847__a[G__14847__i] = arguments[G__14847__i + 0]; ++G__14847__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14847__a,0);
} 
return amentum$elements$buttons__delegate.call(this,args__13751__auto__);};
amentum$elements$buttons.cljs$lang$maxFixedArity = 0;
amentum$elements$buttons.cljs$lang$applyTo = (function (arglist__14848){
var args__13751__auto__ = cljs.core.seq(arglist__14848);
return amentum$elements$buttons__delegate(args__13751__auto__);
});
amentum$elements$buttons.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$buttons__delegate;
return amentum$elements$buttons;
})()
;
/**
 * @param {...*} var_args
 */
amentum.elements.button = (function() { 
var amentum$elements$button__delegate = function (args__13751__auto__){
var vec__14857 = hoplon.core.parse_args(args__13751__auto__);
var map__14860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857,(0),null);
var map__14860__$1 = ((((!((map__14860 == null)))?((((map__14860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14860):map__14860);
var attr = map__14860__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14860__$1,cljs.core.cst$kw$class,cljs.core.PersistentArrayMap.EMPTY);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,cljs.core.cst$kw$color);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,cljs.core.cst$kw$href);
var tabindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,cljs.core.cst$kw$tabindex);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,cljs.core.cst$kw$type);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857,(1),null);
return (function (){var iname = cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(attr);
var tag = (cljs.core.truth_(type)?hoplon.core.button:(cljs.core.truth_(href)?hoplon.core.a:hoplon.core.div
));
var G__14862 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$color,cljs.core.array_seq([cljs.core.cst$kw$icon], 0)),cljs.core.cst$kw$class,(function (){var G__14864 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$button,true,cljs.core.cst$kw$icon,(function (){var and__6830__auto__ = iname;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.empty_QMARK_(kids);
} else {
return and__6830__auto__;
}
})()], null);
if(cljs.core.truth_(color)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14864,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color),true);
} else {
return G__14864;
}
})());
var G__14863 = (cljs.core.truth_(iname)?amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iname], 0)):null);
return (tag.cljs$core$IFn$_invoke$arity$2 ? tag.cljs$core$IFn$_invoke$arity$2(G__14862,G__14863) : tag.call(null,G__14862,G__14863));
})().call(null,cljs.core.cst$kw$class,class$,kids);
};
var amentum$elements$button = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14865__i = 0, G__14865__a = new Array(arguments.length -  0);
while (G__14865__i < G__14865__a.length) {G__14865__a[G__14865__i] = arguments[G__14865__i + 0]; ++G__14865__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14865__a,0);
} 
return amentum$elements$button__delegate.call(this,args__13751__auto__);};
amentum$elements$button.cljs$lang$maxFixedArity = 0;
amentum$elements$button.cljs$lang$applyTo = (function (arglist__14866){
var args__13751__auto__ = cljs.core.seq(arglist__14866);
return amentum$elements$button__delegate(args__13751__auto__);
});
amentum$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$elements$button__delegate;
return amentum$elements$button;
})()
;
