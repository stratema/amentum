// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.doc.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.doc.core.section = (function() { 
var amentum$doc$core$section__delegate = function (args__13749__auto__){
var vec__14771 = hoplon.core.parse_args(args__13749__auto__);
var map__14774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(0),null);
var map__14774__$1 = ((((!((map__14774 == null)))?((((map__14774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14774):map__14774);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14774__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(1),null);
var G__14776 = cljs.core.cst$kw$class;
var G__14777 = "ui basic vertical segment";
var G__14778 = (function (){var G__14780 = cljs.core.cst$kw$class;
var G__14781 = "ui dividing header";
var G__14782 = title;
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__14780,G__14781,G__14782) : hoplon.core.h2.call(null,G__14780,G__14781,G__14782));
})();
var G__14779 = kids;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14776,G__14777,G__14778,G__14779) : hoplon.core.div.call(null,G__14776,G__14777,G__14778,G__14779));
};
var amentum$doc$core$section = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14783__i = 0, G__14783__a = new Array(arguments.length -  0);
while (G__14783__i < G__14783__a.length) {G__14783__a[G__14783__i] = arguments[G__14783__i + 0]; ++G__14783__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14783__a,0);
} 
return amentum$doc$core$section__delegate.call(this,args__13749__auto__);};
amentum$doc$core$section.cljs$lang$maxFixedArity = 0;
amentum$doc$core$section.cljs$lang$applyTo = (function (arglist__14784){
var args__13749__auto__ = cljs.core.seq(arglist__14784);
return amentum$doc$core$section__delegate(args__13749__auto__);
});
amentum$doc$core$section.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$core$section__delegate;
return amentum$doc$core$section;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.core.example = (function() { 
var amentum$doc$core$example__delegate = function (args__13749__auto__){
var vec__14801 = hoplon.core.parse_args(args__13749__auto__);
var map__14804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(0),null);
var map__14804__$1 = ((((!((map__14804 == null)))?((((map__14804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14804):map__14804);
var attr = map__14804__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14804__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(1),null);
return (function (){var G__14806 = cljs.core.cst$kw$class;
var G__14807 = "example";
var G__14808 = (function (){var con__13787__auto__ = (new cljs.core.Delay(((function (G__14806,G__14807,vec__14801,map__14804,map__14804__$1,attr,title,kids){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14809 = cljs.core.cst$kw$class;
var G__14810 = "ui header";
var G__14811 = title;
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$3(G__14809,G__14810,G__14811) : hoplon.core.h4.call(null,G__14809,G__14810,G__14811));
})(),(function (){var G__14812 = cljs.core.cst$kw$class;
var G__14813 = "anchor";
var G__14814 = cljs.core.cst$kw$id;
var G__14815 = clojure.string.replace(clojure.string.lower_case(title),/ /,"-");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__14812,G__14813,G__14814,G__14815) : hoplon.core.a.call(null,G__14812,G__14813,G__14814,G__14815));
})()], null);
});})(G__14806,G__14807,vec__14801,map__14804,map__14804__$1,attr,title,kids))
,null));
var alt__13788__auto__ = (new cljs.core.Delay(((function (con__13787__auto__,G__14806,G__14807,vec__14801,map__14804,map__14804__$1,attr,title,kids){
return (function (){
return null;
});})(con__13787__auto__,G__14806,G__14807,vec__14801,map__14804,map__14804__$1,attr,title,kids))
,null));
var tpl__13789__auto__ = ((function (con__13787__auto__,alt__13788__auto__,G__14806,G__14807,vec__14801,map__14804,map__14804__$1,attr,title,kids){
return (function (p__13790__auto__){
var G__14816 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13790__auto__)?con__13787__auto__:alt__13788__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14816) : cljs.core.deref.call(null,G__14816));
});})(con__13787__auto__,alt__13788__auto__,G__14806,G__14807,vec__14801,map__14804,map__14804__$1,attr,title,kids))
;
return javelin.core.formula(tpl__13789__auto__).call(null,title);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14806,G__14807,G__14808) : hoplon.core.div.call(null,G__14806,G__14807,G__14808));
})().call(null,attr,kids);
};
var amentum$doc$core$example = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14817__i = 0, G__14817__a = new Array(arguments.length -  0);
while (G__14817__i < G__14817__a.length) {G__14817__a[G__14817__i] = arguments[G__14817__i + 0]; ++G__14817__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14817__a,0);
} 
return amentum$doc$core$example__delegate.call(this,args__13749__auto__);};
amentum$doc$core$example.cljs$lang$maxFixedArity = 0;
amentum$doc$core$example.cljs$lang$applyTo = (function (arglist__14818){
var args__13749__auto__ = cljs.core.seq(arglist__14818);
return amentum$doc$core$example__delegate(args__13749__auto__);
});
amentum$doc$core$example.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$core$example__delegate;
return amentum$doc$core$example;
})()
;
