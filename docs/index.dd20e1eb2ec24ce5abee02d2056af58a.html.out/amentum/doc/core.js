// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.doc.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
amentum.doc.core.section = (function() { 
var amentum$doc$core$section__delegate = function (args__13753__auto__){
var vec__14775 = hoplon.core.parse_args(args__13753__auto__);
var map__14778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(0),null);
var map__14778__$1 = ((((!((map__14778 == null)))?((((map__14778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14778):map__14778);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14778__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(1),null);
var G__14780 = cljs.core.cst$kw$class;
var G__14781 = "ui basic vertical segment";
var G__14782 = (function (){var G__14784 = cljs.core.cst$kw$class;
var G__14785 = "ui dividing header";
var G__14786 = title;
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__14784,G__14785,G__14786) : hoplon.core.h2.call(null,G__14784,G__14785,G__14786));
})();
var G__14783 = kids;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14780,G__14781,G__14782,G__14783) : hoplon.core.div.call(null,G__14780,G__14781,G__14782,G__14783));
};
var amentum$doc$core$section = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14787__i = 0, G__14787__a = new Array(arguments.length -  0);
while (G__14787__i < G__14787__a.length) {G__14787__a[G__14787__i] = arguments[G__14787__i + 0]; ++G__14787__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14787__a,0);
} 
return amentum$doc$core$section__delegate.call(this,args__13753__auto__);};
amentum$doc$core$section.cljs$lang$maxFixedArity = 0;
amentum$doc$core$section.cljs$lang$applyTo = (function (arglist__14788){
var args__13753__auto__ = cljs.core.seq(arglist__14788);
return amentum$doc$core$section__delegate(args__13753__auto__);
});
amentum$doc$core$section.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$core$section__delegate;
return amentum$doc$core$section;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.core.example = (function() { 
var amentum$doc$core$example__delegate = function (args__13753__auto__){
var vec__14805 = hoplon.core.parse_args(args__13753__auto__);
var map__14808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14805,(0),null);
var map__14808__$1 = ((((!((map__14808 == null)))?((((map__14808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14808):map__14808);
var attr = map__14808__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14808__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14805,(1),null);
return (function (){var G__14810 = cljs.core.cst$kw$class;
var G__14811 = "example";
var G__14812 = (function (){var con__13791__auto__ = (new cljs.core.Delay(((function (G__14810,G__14811,vec__14805,map__14808,map__14808__$1,attr,title,kids){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14813 = cljs.core.cst$kw$class;
var G__14814 = "ui header";
var G__14815 = title;
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$3(G__14813,G__14814,G__14815) : hoplon.core.h4.call(null,G__14813,G__14814,G__14815));
})(),(function (){var G__14816 = cljs.core.cst$kw$class;
var G__14817 = "anchor";
var G__14818 = cljs.core.cst$kw$id;
var G__14819 = clojure.string.replace(clojure.string.lower_case(title),/ /,"-");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__14816,G__14817,G__14818,G__14819) : hoplon.core.a.call(null,G__14816,G__14817,G__14818,G__14819));
})()], null);
});})(G__14810,G__14811,vec__14805,map__14808,map__14808__$1,attr,title,kids))
,null));
var alt__13792__auto__ = (new cljs.core.Delay(((function (con__13791__auto__,G__14810,G__14811,vec__14805,map__14808,map__14808__$1,attr,title,kids){
return (function (){
return null;
});})(con__13791__auto__,G__14810,G__14811,vec__14805,map__14808,map__14808__$1,attr,title,kids))
,null));
var tpl__13793__auto__ = ((function (con__13791__auto__,alt__13792__auto__,G__14810,G__14811,vec__14805,map__14808,map__14808__$1,attr,title,kids){
return (function (p__13794__auto__){
var G__14820 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13794__auto__)?con__13791__auto__:alt__13792__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14820) : cljs.core.deref.call(null,G__14820));
});})(con__13791__auto__,alt__13792__auto__,G__14810,G__14811,vec__14805,map__14808,map__14808__$1,attr,title,kids))
;
return javelin.core.formula(tpl__13793__auto__).call(null,title);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14810,G__14811,G__14812) : hoplon.core.div.call(null,G__14810,G__14811,G__14812));
})().call(null,attr,kids);
};
var amentum$doc$core$example = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14821__i = 0, G__14821__a = new Array(arguments.length -  0);
while (G__14821__i < G__14821__a.length) {G__14821__a[G__14821__i] = arguments[G__14821__i + 0]; ++G__14821__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14821__a,0);
} 
return amentum$doc$core$example__delegate.call(this,args__13753__auto__);};
amentum$doc$core$example.cljs$lang$maxFixedArity = 0;
amentum$doc$core$example.cljs$lang$applyTo = (function (arglist__14822){
var args__13753__auto__ = cljs.core.seq(arglist__14822);
return amentum$doc$core$example__delegate(args__13753__auto__);
});
amentum$doc$core$example.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$core$example__delegate;
return amentum$doc$core$example;
})()
;
