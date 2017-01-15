// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.views');
goog.require('cljs.core');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.views.item = (function() { 
var amentum$views$item__delegate = function (args__13756__auto__){
var vec__15159 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159,(1),null);
return (function (){var G__15165 = cljs.core.cst$kw$class;
var G__15166 = "item";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__15165,G__15166) : hoplon.core.a.call(null,G__15165,G__15166));
})().call(null,attr,kids);
};
var amentum$views$item = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__15171__i = 0, G__15171__a = new Array(arguments.length -  0);
while (G__15171__i < G__15171__a.length) {G__15171__a[G__15171__i] = arguments[G__15171__i + 0]; ++G__15171__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__15171__a,0);
} 
return amentum$views$item__delegate.call(this,args__13756__auto__);};
amentum$views$item.cljs$lang$maxFixedArity = 0;
amentum$views$item.cljs$lang$applyTo = (function (arglist__15172){
var args__13756__auto__ = cljs.core.seq(arglist__15172);
return amentum$views$item__delegate(args__13756__auto__);
});
amentum$views$item.cljs$core$IFn$_invoke$arity$variadic = amentum$views$item__delegate;
return amentum$views$item;
})()
;
