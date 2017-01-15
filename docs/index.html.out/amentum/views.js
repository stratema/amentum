// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.views');
goog.require('cljs.core');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.views.item = (function() { 
var amentum$views$item__delegate = function (args__13752__auto__){
var vec__15217 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15217,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15217,(1),null);
return (function (){var G__15224 = cljs.core.cst$kw$class;
var G__15225 = "item";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__15224,G__15225) : hoplon.core.a.call(null,G__15224,G__15225));
})().call(null,attr,kids);
};
var amentum$views$item = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__15226__i = 0, G__15226__a = new Array(arguments.length -  0);
while (G__15226__i < G__15226__a.length) {G__15226__a[G__15226__i] = arguments[G__15226__i + 0]; ++G__15226__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__15226__a,0);
} 
return amentum$views$item__delegate.call(this,args__13752__auto__);};
amentum$views$item.cljs$lang$maxFixedArity = 0;
amentum$views$item.cljs$lang$applyTo = (function (arglist__15227){
var args__13752__auto__ = cljs.core.seq(arglist__15227);
return amentum$views$item__delegate(args__13752__auto__);
});
amentum$views$item.cljs$core$IFn$_invoke$arity$variadic = amentum$views$item__delegate;
return amentum$views$item;
})()
;
