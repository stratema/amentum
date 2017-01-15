// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('amentum.collections');
goog.require('amentum.modules');
goog.require('amentum.docs.views.main');
goog.require('amentum.docs.views.modules');
goog.require('amentum.docs.views.views');
goog.require('javelin.core');
goog.require('amentum.docs.route');
goog.require('hoplon.jquery');
goog.require('amentum.views');
goog.require('hoplon.core');
goog.require('amentum.docs.views.elements');
goog.require('amentum.nav');
goog.require('amentum.elements');
goog.require('clojure.string');
goog.require('amentum.docs.views.collections');
goog.require('cljs.core.match');
cljs.core._STAR_print_fn_STAR_ = (function (p1__19911_SHARP_){
return console.log(p1__19911_SHARP_);
});
hoplon.core.add_initfn_BANG_((function (){
amentum.nav.setup_navigation();

return amentum.docs.route.add_routes(amentum.docs.route.routes);
}));
hoplon.app_pages._index_DOT_html.main_content = (function (){var G__19912 = (new cljs.core.Delay((function (){
return amentum.docs.views.main.view();
}),null));
var G__19913 = (new cljs.core.Delay(((function (G__19912){
return (function (){
return amentum.docs.views.elements.button();
});})(G__19912))
,null));
var G__19914 = (new cljs.core.Delay(((function (G__19912,G__19913){
return (function (){
return amentum.docs.views.elements.container();
});})(G__19912,G__19913))
,null));
var G__19915 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914){
return (function (){
return amentum.docs.views.elements.icon();
});})(G__19912,G__19913,G__19914))
,null));
var G__19916 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914,G__19915){
return (function (){
return amentum.docs.views.elements.header();
});})(G__19912,G__19913,G__19914,G__19915))
,null));
var G__19917 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914,G__19915,G__19916){
return (function (){
return amentum.docs.views.collections.form();
});})(G__19912,G__19913,G__19914,G__19915,G__19916))
,null));
var G__19918 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914,G__19915,G__19916,G__19917){
return (function (){
return amentum.docs.views.collections.grid();
});})(G__19912,G__19913,G__19914,G__19915,G__19916,G__19917))
,null));
var G__19919 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918){
return (function (){
return amentum.docs.views.collections.menu();
});})(G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918))
,null));
var G__19920 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919){
return (function (){
return amentum.docs.views.views.item();
});})(G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919))
,null));
var G__19921 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919,G__19920){
return (function (){
return amentum.docs.views.modules.dropdown();
});})(G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919,G__19920))
,null));
var G__19922 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919,G__19920,G__19921){
return (function (){
return amentum.docs.views.modules.sidebar();
});})(G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919,G__19920,G__19921))
,null));
var G__19923 = (new cljs.core.Delay(((function (G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919,G__19920,G__19921,G__19922){
return (function (){
return amentum.docs.views.elements.button();
});})(G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919,G__19920,G__19921,G__19922))
,null));
var tpl__19899__auto__ = ((function (G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919,G__19920,G__19921,G__19922,G__19923){
return (function (expr__19900__auto__){
var G__19924 = (function (){var or__6842__auto__ = (function (){try{if((cljs.core.vector_QMARK_(expr__19900__auto__)) && ((cljs.core.count(expr__19900__auto__) === 3))){
try{var expr__19900__auto___0__19967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___0__19967,cljs.core.cst$kw$main)){
return G__19912;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19971){if((e19971 instanceof Error)){
var e__19098__auto__ = e19971;
if((e__19098__auto__ === cljs.core.match.backtrack)){
try{var expr__19900__auto___0__19967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___0__19967,cljs.core.cst$kw$elements)){
try{var expr__19900__auto___1__19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___1__19968,cljs.core.cst$kw$button)){
return G__19913;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19979){if((e19979 instanceof Error)){
var e__19098__auto____$1 = e19979;
if((e__19098__auto____$1 === cljs.core.match.backtrack)){
try{var expr__19900__auto___1__19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___1__19968,cljs.core.cst$kw$container)){
return G__19914;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19980){if((e19980 instanceof Error)){
var e__19098__auto____$2 = e19980;
if((e__19098__auto____$2 === cljs.core.match.backtrack)){
try{var expr__19900__auto___1__19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___1__19968,cljs.core.cst$kw$icon)){
return G__19915;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19981){if((e19981 instanceof Error)){
var e__19098__auto____$3 = e19981;
if((e__19098__auto____$3 === cljs.core.match.backtrack)){
try{var expr__19900__auto___1__19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___1__19968,cljs.core.cst$kw$header)){
return G__19916;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19982){if((e19982 instanceof Error)){
var e__19098__auto____$4 = e19982;
if((e__19098__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19098__auto____$4;
}
} else {
throw e19982;

}
}} else {
throw e__19098__auto____$3;
}
} else {
throw e19981;

}
}} else {
throw e__19098__auto____$2;
}
} else {
throw e19980;

}
}} else {
throw e__19098__auto____$1;
}
} else {
throw e19979;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19972){if((e19972 instanceof Error)){
var e__19098__auto____$1 = e19972;
if((e__19098__auto____$1 === cljs.core.match.backtrack)){
try{var expr__19900__auto___0__19967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___0__19967,cljs.core.cst$kw$collections)){
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(1));
return G__19917;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19973){if((e19973 instanceof Error)){
var e__19098__auto____$2 = e19973;
if((e__19098__auto____$2 === cljs.core.match.backtrack)){
try{var expr__19900__auto___0__19967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___0__19967,cljs.core.cst$kw$views)){
try{var expr__19900__auto___1__19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___1__19968,cljs.core.cst$kw$item)){
return G__19920;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19978){if((e19978 instanceof Error)){
var e__19098__auto____$3 = e19978;
if((e__19098__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19098__auto____$3;
}
} else {
throw e19978;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19974){if((e19974 instanceof Error)){
var e__19098__auto____$3 = e19974;
if((e__19098__auto____$3 === cljs.core.match.backtrack)){
try{var expr__19900__auto___0__19967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___0__19967,cljs.core.cst$kw$modules)){
try{var expr__19900__auto___1__19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___1__19968,cljs.core.cst$kw$dropdown)){
return G__19921;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19976){if((e19976 instanceof Error)){
var e__19098__auto____$4 = e19976;
if((e__19098__auto____$4 === cljs.core.match.backtrack)){
try{var expr__19900__auto___1__19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19900__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19900__auto___1__19968,cljs.core.cst$kw$sidebar)){
return G__19922;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19977){if((e19977 instanceof Error)){
var e__19098__auto____$5 = e19977;
if((e__19098__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19098__auto____$5;
}
} else {
throw e19977;

}
}} else {
throw e__19098__auto____$4;
}
} else {
throw e19976;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19975){if((e19975 instanceof Error)){
var e__19098__auto____$4 = e19975;
if((e__19098__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19098__auto____$4;
}
} else {
throw e19975;

}
}} else {
throw e__19098__auto____$3;
}
} else {
throw e19974;

}
}} else {
throw e__19098__auto____$2;
}
} else {
throw e19973;

}
}} else {
throw e__19098__auto____$1;
}
} else {
throw e19972;

}
}} else {
throw e__19098__auto__;
}
} else {
throw e19971;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19970){if((e19970 instanceof Error)){
var e__19098__auto__ = e19970;
if((e__19098__auto__ === cljs.core.match.backtrack)){
return G__19923;
} else {
throw e__19098__auto__;
}
} else {
throw e19970;

}
}})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19924) : cljs.core.deref.call(null,G__19924));
});})(G__19912,G__19913,G__19914,G__19915,G__19916,G__19917,G__19918,G__19919,G__19920,G__19921,G__19922,G__19923))
;
return javelin.core.formula(tpl__19899__auto__).call(null,amentum.docs.route.path);
})();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19983 = (function (){var G__19985 = cljs.core.cst$kw$href;
var G__19986 = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css";
var G__19987 = cljs.core.cst$kw$rel;
var G__19988 = "stylesheet";
var G__19989 = cljs.core.cst$kw$type;
var G__19990 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__19985,G__19986,G__19987,G__19988,G__19989,G__19990) : hoplon.core.link.call(null,G__19985,G__19986,G__19987,G__19988,G__19989,G__19990));
})();
var G__19984 = (function (){var G__19991 = cljs.core.cst$kw$href;
var G__19992 = "/doc.css";
var G__19993 = cljs.core.cst$kw$rel;
var G__19994 = "stylesheet";
var G__19995 = cljs.core.cst$kw$type;
var G__19996 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__19991,G__19992,G__19993,G__19994,G__19995,G__19996) : hoplon.core.link.call(null,G__19991,G__19992,G__19993,G__19994,G__19995,G__19996));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__19983,G__19984) : hoplon.core.head.call(null,G__19983,G__19984));
})(),(function (){var G__19997 = cljs.core.cst$kw$id;
var G__19998 = "example";
var G__19999 = cljs.core.cst$kw$class;
var G__20000 = "pushable";
var G__20001 = (function (){var G__20002 = cljs.core.cst$kw$class;
var G__20003 = "pusher";
var G__20004 = (function (){var G__20005 = cljs.core.cst$kw$class;
var G__20006 = "full height";
var G__20007 = (function (){var G__20009 = cljs.core.cst$kw$class;
var G__20010 = "toc";
var G__20011 = amentum.modules.sidebar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,"width: 250px !important; height: 1813px !important;"], null),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Elements"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/button","Button"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/container","Container"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/icon","Icon"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/header","Header"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Collections"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/form","Form"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/grid","Grid"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/menu","Menu"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Views"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/item","Item"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Modules"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/modules/dropdown","Dropdown"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/modules/sidebar","Sidebar"], 0))], 0))], 0))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20009,G__20010,G__20011) : hoplon.core.div.call(null,G__20009,G__20010,G__20011));
})();
var G__20008 = (function (){var G__20012 = cljs.core.cst$kw$class;
var G__20013 = "article";
var G__20014 = amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"masthead vertical",amentum.elements.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20016 = cljs.core.cst$kw$class;
var G__20017 = "introduction";
var G__20018 = (function (){var G__20019 = cljs.core.cst$kw$class;
var G__20020 = "ui header";
var G__20021 = "Title";
var G__20022 = (function (){var G__20023 = cljs.core.cst$kw$class;
var G__20024 = "sub header";
var G__20025 = "subheader";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20023,G__20024,G__20025) : hoplon.core.div.call(null,G__20023,G__20024,G__20025));
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$4(G__20019,G__20020,G__20021,G__20022) : hoplon.core.h1.call(null,G__20019,G__20020,G__20021,G__20022));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20016,G__20017,G__20018) : hoplon.core.div.call(null,G__20016,G__20017,G__20018));
})()], 0))], 0));
var G__20015 = amentum.elements.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"main",hoplon.app_pages._index_DOT_html.main_content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20012,G__20013,G__20014,G__20015) : hoplon.core.div.call(null,G__20012,G__20013,G__20014,G__20015));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20005,G__20006,G__20007,G__20008) : hoplon.core.div.call(null,G__20005,G__20006,G__20007,G__20008));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20002,G__20003,G__20004) : hoplon.core.div.call(null,G__20002,G__20003,G__20004));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$5(G__19997,G__19998,G__19999,G__20000,G__20001) : hoplon.core.body.call(null,G__19997,G__19998,G__19999,G__20000,G__20001));
})()], 0));
