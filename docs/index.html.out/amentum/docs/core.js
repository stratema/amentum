// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('amentum.elements');
/**
 * @param {...*} var_args
 */
amentum.docs.core.section = (function() { 
var amentum$docs$core$section__delegate = function (args__13782__auto__){
var vec__14880 = hoplon.core.parse_args(args__13782__auto__);
var map__14883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(0),null);
var map__14883__$1 = ((((!((map__14883 == null)))?((((map__14883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14883):map__14883);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14883__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(1),null);
var G__14885 = cljs.core.cst$kw$class;
var G__14886 = "ui basic vertical segment";
var G__14887 = (function (){var G__14889 = cljs.core.cst$kw$class;
var G__14890 = "ui dividing header";
var G__14891 = title;
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__14889,G__14890,G__14891) : hoplon.core.h2.call(null,G__14889,G__14890,G__14891));
})();
var G__14888 = kids;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14885,G__14886,G__14887,G__14888) : hoplon.core.div.call(null,G__14885,G__14886,G__14887,G__14888));
};
var amentum$docs$core$section = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14892__i = 0, G__14892__a = new Array(arguments.length -  0);
while (G__14892__i < G__14892__a.length) {G__14892__a[G__14892__i] = arguments[G__14892__i + 0]; ++G__14892__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14892__a,0);
} 
return amentum$docs$core$section__delegate.call(this,args__13782__auto__);};
amentum$docs$core$section.cljs$lang$maxFixedArity = 0;
amentum$docs$core$section.cljs$lang$applyTo = (function (arglist__14893){
var args__13782__auto__ = cljs.core.seq(arglist__14893);
return amentum$docs$core$section__delegate(args__13782__auto__);
});
amentum$docs$core$section.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$core$section__delegate;
return amentum$docs$core$section;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.core.example = (function() { 
var amentum$docs$core$example__delegate = function (args__13782__auto__){
var vec__14960 = hoplon.core.parse_args(args__13782__auto__);
var map__14963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14960,(0),null);
var map__14963__$1 = ((((!((map__14963 == null)))?((((map__14963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14963):map__14963);
var attr = map__14963__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,cljs.core.cst$kw$title);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,cljs.core.cst$kw$source);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14960,(1),null);
var show = (cljs.core.truth_(source)?javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false):null);
var vec__14965 = cljs.core.split_at((cljs.core.count(kids) - cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$2(source,(0))),kids);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14965,(0),null);
var examples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14965,(1),null);
var anchor = (function (){var and__6830__auto__ = title;
if(cljs.core.truth_(and__6830__auto__)){
return clojure.string.replace(clojure.string.lower_case(title),/ /,"-");
} else {
return and__6830__auto__;
}
})();
var source_text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(source);
var attr__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$title,cljs.core.array_seq([cljs.core.cst$kw$source], 0));
return (function (){var G__14968 = cljs.core.cst$kw$class;
var G__14969 = "example";
var G__14970 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14968,G__14969,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (){
return amentum.elements.h4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([title], 0));
});})(G__14968,G__14969,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14968,G__14969,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (){
return null;
});})(con__13820__auto__,G__14968,G__14969,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14968,G__14969,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (p__13823__auto__){
var G__14976 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14976) : cljs.core.deref.call(null,G__14976));
});})(con__13820__auto__,alt__13821__auto__,G__14968,G__14969,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
;
return javelin.core.formula(tpl__13822__auto__).call(null,title);
})();
var G__14971 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14968,G__14969,G__14970,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (){
return amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["code",cljs.core.cst$kw$click,((function (G__14968,G__14969,G__14970,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show,cljs.core.not);
});})(G__14968,G__14969,G__14970,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
], 0));
});})(G__14968,G__14969,G__14970,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14968,G__14969,G__14970,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (){
return null;
});})(con__13820__auto__,G__14968,G__14969,G__14970,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14968,G__14969,G__14970,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (p__13823__auto__){
var G__14977 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14977) : cljs.core.deref.call(null,G__14977));
});})(con__13820__auto__,alt__13821__auto__,G__14968,G__14969,G__14970,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
;
return javelin.core.formula(tpl__13822__auto__).call(null,source);
})();
var G__14972 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14968,G__14969,G__14970,G__14971,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (){
var G__14978 = cljs.core.cst$kw$class;
var G__14979 = "anchor";
var G__14980 = cljs.core.cst$kw$id;
var G__14981 = anchor;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__14978,G__14979,G__14980,G__14981) : hoplon.core.a.call(null,G__14978,G__14979,G__14980,G__14981));
});})(G__14968,G__14969,G__14970,G__14971,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14968,G__14969,G__14970,G__14971,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (){
return null;
});})(con__13820__auto__,G__14968,G__14969,G__14970,G__14971,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14968,G__14969,G__14970,G__14971,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (p__13823__auto__){
var G__14982 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14982) : cljs.core.deref.call(null,G__14982));
});})(con__13820__auto__,alt__13821__auto__,G__14968,G__14969,G__14970,G__14971,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
;
return javelin.core.formula(tpl__13822__auto__).call(null,anchor);
})();
var G__14973 = body;
var G__14974 = (function (){var G__14983 = cljs.core.cst$kw$class;
var G__14984 = javelin.core.formula(((function (G__14983,G__14968,G__14969,G__14970,G__14971,G__14972,G__14973,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (G__14987){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$html,true,cljs.core.cst$kw$ui,G__14987,cljs.core.cst$kw$top,G__14987,cljs.core.cst$kw$attached,G__14987,cljs.core.cst$kw$segment,G__14987], null);
});})(G__14983,G__14968,G__14969,G__14970,G__14971,G__14972,G__14973,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
).call(null,show);
var G__14985 = examples;
var G__14986 = amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"top attached","Example",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["copy link"], 0))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14983,G__14984,G__14985,G__14986) : hoplon.core.div.call(null,G__14983,G__14984,G__14985,G__14986));
})();
var G__14975 = (function (){var G__14988 = cljs.core.cst$kw$class;
var G__14989 = javelin.core.formula(((function (G__14988,G__14968,G__14969,G__14970,G__14971,G__14972,G__14973,G__14974,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids){
return (function (G__14991,G__14992){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$annotation,true,cljs.core.cst$kw$transition,true,cljs.core.cst$kw$visible,G__14991,cljs.core.cst$kw$hidden,(G__14992.cljs$core$IFn$_invoke$arity$1 ? G__14992.cljs$core$IFn$_invoke$arity$1(G__14991) : G__14992.call(null,G__14991))], null);
});})(G__14988,G__14968,G__14969,G__14970,G__14971,G__14972,G__14973,G__14974,show,vec__14965,body,examples,anchor,source_text,attr__$1,vec__14960,map__14963,map__14963__$1,attr,title,source,kids))
).call(null,show,cljs.core.not);
var G__14990 = amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"instructive bottom attached",(function (){var G__14993 = (function (){var G__14994 = cljs.core.cst$kw$class;
var G__14995 = "code";
var G__14996 = cljs.core.cst$kw$html;
var G__14997 = source_text;
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$4(G__14994,G__14995,G__14996,G__14997) : hoplon.core.code.call(null,G__14994,G__14995,G__14996,G__14997));
})();
return (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(G__14993) : hoplon.core.pre.call(null,G__14993));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14988,G__14989,G__14990) : hoplon.core.div.call(null,G__14988,G__14989,G__14990));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__14968,G__14969,G__14970,G__14971,G__14972,G__14973,G__14974,G__14975) : hoplon.core.div.call(null,G__14968,G__14969,G__14970,G__14971,G__14972,G__14973,G__14974,G__14975));
})().call(null,attr__$1);
};
var amentum$docs$core$example = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__15046__i = 0, G__15046__a = new Array(arguments.length -  0);
while (G__15046__i < G__15046__a.length) {G__15046__a[G__15046__i] = arguments[G__15046__i + 0]; ++G__15046__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__15046__a,0);
} 
return amentum$docs$core$example__delegate.call(this,args__13782__auto__);};
amentum$docs$core$example.cljs$lang$maxFixedArity = 0;
amentum$docs$core$example.cljs$lang$applyTo = (function (arglist__15051){
var args__13782__auto__ = cljs.core.seq(arglist__15051);
return amentum$docs$core$example__delegate(args__13782__auto__);
});
amentum$docs$core$example.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$core$example__delegate;
return amentum$docs$core$example;
})()
;
