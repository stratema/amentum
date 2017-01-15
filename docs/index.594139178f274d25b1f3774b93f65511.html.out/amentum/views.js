// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.views');
goog.require('cljs.core');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.views.item = (function() { 
var amentum$views$item__delegate = function (args__13751__auto__){
var vec__15501 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15501,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15501,(1),null);
return (function (){var G__15504 = cljs.core.cst$kw$class;
var G__15505 = "item";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__15504,G__15505) : hoplon.core.a.call(null,G__15504,G__15505));
})().call(null,attr,kids);
};
var amentum$views$item = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__15506__i = 0, G__15506__a = new Array(arguments.length -  0);
while (G__15506__i < G__15506__a.length) {G__15506__a[G__15506__i] = arguments[G__15506__i + 0]; ++G__15506__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__15506__a,0);
} 
return amentum$views$item__delegate.call(this,args__13751__auto__);};
amentum$views$item.cljs$lang$maxFixedArity = 0;
amentum$views$item.cljs$lang$applyTo = (function (arglist__15507){
var args__13751__auto__ = cljs.core.seq(arglist__15507);
return amentum$views$item__delegate(args__13751__auto__);
});
amentum$views$item.cljs$core$IFn$_invoke$arity$variadic = amentum$views$item__delegate;
return amentum$views$item;
})()
;
