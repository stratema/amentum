// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.docs.core.section = (function() { 
var amentum$docs$core$section__delegate = function (args__13751__auto__){
var vec__14682 = hoplon.core.parse_args(args__13751__auto__);
var map__14685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(0),null);
var map__14685__$1 = ((((!((map__14685 == null)))?((((map__14685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14685):map__14685);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14685__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(1),null);
var G__14687 = cljs.core.cst$kw$class;
var G__14688 = "ui basic vertical segment";
var G__14689 = (function (){var G__14691 = cljs.core.cst$kw$class;
var G__14692 = "ui dividing header";
var G__14693 = title;
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__14691,G__14692,G__14693) : hoplon.core.h2.call(null,G__14691,G__14692,G__14693));
})();
var G__14690 = kids;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14687,G__14688,G__14689,G__14690) : hoplon.core.div.call(null,G__14687,G__14688,G__14689,G__14690));
};
var amentum$docs$core$section = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14694__i = 0, G__14694__a = new Array(arguments.length -  0);
while (G__14694__i < G__14694__a.length) {G__14694__a[G__14694__i] = arguments[G__14694__i + 0]; ++G__14694__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14694__a,0);
} 
return amentum$docs$core$section__delegate.call(this,args__13751__auto__);};
amentum$docs$core$section.cljs$lang$maxFixedArity = 0;
amentum$docs$core$section.cljs$lang$applyTo = (function (arglist__14695){
var args__13751__auto__ = cljs.core.seq(arglist__14695);
return amentum$docs$core$section__delegate(args__13751__auto__);
});
amentum$docs$core$section.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$core$section__delegate;
return amentum$docs$core$section;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.core.example = (function() { 
var amentum$docs$core$example__delegate = function (args__13751__auto__){
var vec__14712 = hoplon.core.parse_args(args__13751__auto__);
var map__14715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14712,(0),null);
var map__14715__$1 = ((((!((map__14715 == null)))?((((map__14715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14715):map__14715);
var attr = map__14715__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14715__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14712,(1),null);
return (function (){var G__14717 = cljs.core.cst$kw$class;
var G__14718 = "example";
var G__14719 = (function (){var con__13789__auto__ = (new cljs.core.Delay(((function (G__14717,G__14718,vec__14712,map__14715,map__14715__$1,attr,title,kids){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14720 = cljs.core.cst$kw$class;
var G__14721 = "ui header";
var G__14722 = title;
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$3(G__14720,G__14721,G__14722) : hoplon.core.h4.call(null,G__14720,G__14721,G__14722));
})(),(function (){var G__14723 = cljs.core.cst$kw$class;
var G__14724 = "anchor";
var G__14725 = cljs.core.cst$kw$id;
var G__14726 = clojure.string.replace(clojure.string.lower_case(title),/ /,"-");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__14723,G__14724,G__14725,G__14726) : hoplon.core.a.call(null,G__14723,G__14724,G__14725,G__14726));
})()], null);
});})(G__14717,G__14718,vec__14712,map__14715,map__14715__$1,attr,title,kids))
,null));
var alt__13790__auto__ = (new cljs.core.Delay(((function (con__13789__auto__,G__14717,G__14718,vec__14712,map__14715,map__14715__$1,attr,title,kids){
return (function (){
return null;
});})(con__13789__auto__,G__14717,G__14718,vec__14712,map__14715,map__14715__$1,attr,title,kids))
,null));
var tpl__13791__auto__ = ((function (con__13789__auto__,alt__13790__auto__,G__14717,G__14718,vec__14712,map__14715,map__14715__$1,attr,title,kids){
return (function (p__13792__auto__){
var G__14727 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13792__auto__)?con__13789__auto__:alt__13790__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14727) : cljs.core.deref.call(null,G__14727));
});})(con__13789__auto__,alt__13790__auto__,G__14717,G__14718,vec__14712,map__14715,map__14715__$1,attr,title,kids))
;
return javelin.core.formula(tpl__13791__auto__).call(null,title);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14717,G__14718,G__14719) : hoplon.core.div.call(null,G__14717,G__14718,G__14719));
})().call(null,attr,kids);
};
var amentum$docs$core$example = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14728__i = 0, G__14728__a = new Array(arguments.length -  0);
while (G__14728__i < G__14728__a.length) {G__14728__a[G__14728__i] = arguments[G__14728__i + 0]; ++G__14728__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14728__a,0);
} 
return amentum$docs$core$example__delegate.call(this,args__13751__auto__);};
amentum$docs$core$example.cljs$lang$maxFixedArity = 0;
amentum$docs$core$example.cljs$lang$applyTo = (function (arglist__14729){
var args__13751__auto__ = cljs.core.seq(arglist__14729);
return amentum$docs$core$example__delegate(args__13751__auto__);
});
amentum$docs$core$example.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$core$example__delegate;
return amentum$docs$core$example;
})()
;
