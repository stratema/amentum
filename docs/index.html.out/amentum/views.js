// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.views');
goog.require('cljs.core');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.views.item = (function() { 
var amentum$views$item__delegate = function (args__13782__auto__){
var vec__16788 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16788,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16788,(1),null);
return (function (){var G__16791 = cljs.core.cst$kw$class;
var G__16792 = "item";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__16791,G__16792) : hoplon.core.a.call(null,G__16791,G__16792));
})().call(null,attr,kids);
};
var amentum$views$item = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__16793__i = 0, G__16793__a = new Array(arguments.length -  0);
while (G__16793__i < G__16793__a.length) {G__16793__a[G__16793__i] = arguments[G__16793__i + 0]; ++G__16793__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__16793__a,0);
} 
return amentum$views$item__delegate.call(this,args__13782__auto__);};
amentum$views$item.cljs$lang$maxFixedArity = 0;
amentum$views$item.cljs$lang$applyTo = (function (arglist__16794){
var args__13782__auto__ = cljs.core.seq(arglist__16794);
return amentum$views$item__delegate(args__13782__auto__);
});
amentum$views$item.cljs$core$IFn$_invoke$arity$variadic = amentum$views$item__delegate;
return amentum$views$item;
})()
;
