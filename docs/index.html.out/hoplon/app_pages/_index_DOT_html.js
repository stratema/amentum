// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('amentum.collections');
goog.require('amentum.modules');
goog.require('amentum.docs.views.modules');
goog.require('amentum.docs.views.views');
goog.require('javelin.core');
goog.require('amentum.docs.route');
goog.require('hoplon.jquery');
goog.require('amentum.views');
goog.require('hoplon.core');
goog.require('amentum.docs.views.elements');
goog.require('amentum.nav');
goog.require('amentum.docs.views.start');
goog.require('amentum.elements');
goog.require('clojure.string');
goog.require('amentum.docs.views.collections');
goog.require('cljs.core.match');
cljs.core._STAR_print_fn_STAR_ = (function (p1__19979_SHARP_){
return console.log(p1__19979_SHARP_);
});
hoplon.core.add_initfn_BANG_((function (){
amentum.nav.setup_navigation();

return amentum.docs.route.add_routes(amentum.docs.route.routes);
}));
hoplon.app_pages._index_DOT_html.main_content = (function (){var G__19980 = (new cljs.core.Delay((function (){
return amentum.docs.views.start.view();
}),null));
var G__19981 = (new cljs.core.Delay(((function (G__19980){
return (function (){
return amentum.docs.views.elements.button();
});})(G__19980))
,null));
var G__19982 = (new cljs.core.Delay(((function (G__19980,G__19981){
return (function (){
return amentum.docs.views.elements.container();
});})(G__19980,G__19981))
,null));
var G__19983 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982){
return (function (){
return amentum.docs.views.elements.icon();
});})(G__19980,G__19981,G__19982))
,null));
var G__19984 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982,G__19983){
return (function (){
return amentum.docs.views.elements.header();
});})(G__19980,G__19981,G__19982,G__19983))
,null));
var G__19985 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982,G__19983,G__19984){
return (function (){
return amentum.docs.views.collections.form();
});})(G__19980,G__19981,G__19982,G__19983,G__19984))
,null));
var G__19986 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982,G__19983,G__19984,G__19985){
return (function (){
return amentum.docs.views.collections.grid();
});})(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985))
,null));
var G__19987 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986){
return (function (){
return amentum.docs.views.collections.menu();
});})(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986))
,null));
var G__19988 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987){
return (function (){
return amentum.docs.views.views.item();
});})(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987))
,null));
var G__19989 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988){
return (function (){
return amentum.docs.views.modules.dropdown();
});})(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988))
,null));
var G__19990 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19989){
return (function (){
return amentum.docs.views.modules.sidebar();
});})(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19989))
,null));
var G__19991 = (new cljs.core.Delay(((function (G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19989,G__19990){
return (function (){
return amentum.docs.views.start.view();
});})(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19989,G__19990))
,null));
var tpl__19967__auto__ = ((function (G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19989,G__19990,G__19991){
return (function (expr__19968__auto__){
var G__19992 = (function (){var or__6842__auto__ = (function (){try{if((cljs.core.vector_QMARK_(expr__19968__auto__)) && ((cljs.core.count(expr__19968__auto__) === 3))){
try{var expr__19968__auto___0__20035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___0__20035,cljs.core.cst$kw$start)){
return G__19980;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20039){if((e20039 instanceof Error)){
var e__19166__auto__ = e20039;
if((e__19166__auto__ === cljs.core.match.backtrack)){
try{var expr__19968__auto___0__20035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___0__20035,cljs.core.cst$kw$elements)){
try{var expr__19968__auto___1__20036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___1__20036,cljs.core.cst$kw$button)){
return G__19981;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20047){if((e20047 instanceof Error)){
var e__19166__auto____$1 = e20047;
if((e__19166__auto____$1 === cljs.core.match.backtrack)){
try{var expr__19968__auto___1__20036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___1__20036,cljs.core.cst$kw$container)){
return G__19982;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20048){if((e20048 instanceof Error)){
var e__19166__auto____$2 = e20048;
if((e__19166__auto____$2 === cljs.core.match.backtrack)){
try{var expr__19968__auto___1__20036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___1__20036,cljs.core.cst$kw$icon)){
return G__19983;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20049){if((e20049 instanceof Error)){
var e__19166__auto____$3 = e20049;
if((e__19166__auto____$3 === cljs.core.match.backtrack)){
try{var expr__19968__auto___1__20036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___1__20036,cljs.core.cst$kw$header)){
return G__19984;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20050){if((e20050 instanceof Error)){
var e__19166__auto____$4 = e20050;
if((e__19166__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19166__auto____$4;
}
} else {
throw e20050;

}
}} else {
throw e__19166__auto____$3;
}
} else {
throw e20049;

}
}} else {
throw e__19166__auto____$2;
}
} else {
throw e20048;

}
}} else {
throw e__19166__auto____$1;
}
} else {
throw e20047;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20040){if((e20040 instanceof Error)){
var e__19166__auto____$1 = e20040;
if((e__19166__auto____$1 === cljs.core.match.backtrack)){
try{var expr__19968__auto___0__20035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___0__20035,cljs.core.cst$kw$collections)){
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(1));
return G__19985;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20041){if((e20041 instanceof Error)){
var e__19166__auto____$2 = e20041;
if((e__19166__auto____$2 === cljs.core.match.backtrack)){
try{var expr__19968__auto___0__20035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___0__20035,cljs.core.cst$kw$views)){
try{var expr__19968__auto___1__20036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___1__20036,cljs.core.cst$kw$item)){
return G__19988;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20046){if((e20046 instanceof Error)){
var e__19166__auto____$3 = e20046;
if((e__19166__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19166__auto____$3;
}
} else {
throw e20046;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20042){if((e20042 instanceof Error)){
var e__19166__auto____$3 = e20042;
if((e__19166__auto____$3 === cljs.core.match.backtrack)){
try{var expr__19968__auto___0__20035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___0__20035,cljs.core.cst$kw$modules)){
try{var expr__19968__auto___1__20036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___1__20036,cljs.core.cst$kw$dropdown)){
return G__19989;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20044){if((e20044 instanceof Error)){
var e__19166__auto____$4 = e20044;
if((e__19166__auto____$4 === cljs.core.match.backtrack)){
try{var expr__19968__auto___1__20036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19968__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19968__auto___1__20036,cljs.core.cst$kw$sidebar)){
return G__19990;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20045){if((e20045 instanceof Error)){
var e__19166__auto____$5 = e20045;
if((e__19166__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19166__auto____$5;
}
} else {
throw e20045;

}
}} else {
throw e__19166__auto____$4;
}
} else {
throw e20044;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20043){if((e20043 instanceof Error)){
var e__19166__auto____$4 = e20043;
if((e__19166__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19166__auto____$4;
}
} else {
throw e20043;

}
}} else {
throw e__19166__auto____$3;
}
} else {
throw e20042;

}
}} else {
throw e__19166__auto____$2;
}
} else {
throw e20041;

}
}} else {
throw e__19166__auto____$1;
}
} else {
throw e20040;

}
}} else {
throw e__19166__auto__;
}
} else {
throw e20039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20038){if((e20038 instanceof Error)){
var e__19166__auto__ = e20038;
if((e__19166__auto__ === cljs.core.match.backtrack)){
return G__19991;
} else {
throw e__19166__auto__;
}
} else {
throw e20038;

}
}})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19992) : cljs.core.deref.call(null,G__19992));
});})(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19989,G__19990,G__19991))
;
return javelin.core.formula(tpl__19967__auto__).call(null,amentum.docs.route.path);
})();
hoplon.app_pages._index_DOT_html.header = javelin.core.formula((function (G__20051){
return cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(G__20051);
})).call(null,hoplon.app_pages._index_DOT_html.main_content);
hoplon.app_pages._index_DOT_html.sub_header = javelin.core.formula((function (G__20052){
return cljs.core.cst$kw$sub_DASH_header.cljs$core$IFn$_invoke$arity$1(G__20052);
})).call(null,hoplon.app_pages._index_DOT_html.main_content);
hoplon.app_pages._index_DOT_html.content = javelin.core.formula((function (G__20053){
return cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(G__20053);
})).call(null,hoplon.app_pages._index_DOT_html.main_content);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20054 = (function (){var G__20056 = cljs.core.cst$kw$href;
var G__20057 = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css";
var G__20058 = cljs.core.cst$kw$rel;
var G__20059 = "stylesheet";
var G__20060 = cljs.core.cst$kw$type;
var G__20061 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__20056,G__20057,G__20058,G__20059,G__20060,G__20061) : hoplon.core.link.call(null,G__20056,G__20057,G__20058,G__20059,G__20060,G__20061));
})();
var G__20055 = (function (){var G__20062 = cljs.core.cst$kw$href;
var G__20063 = "doc.css";
var G__20064 = cljs.core.cst$kw$rel;
var G__20065 = "stylesheet";
var G__20066 = cljs.core.cst$kw$type;
var G__20067 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__20062,G__20063,G__20064,G__20065,G__20066,G__20067) : hoplon.core.link.call(null,G__20062,G__20063,G__20064,G__20065,G__20066,G__20067));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__20054,G__20055) : hoplon.core.head.call(null,G__20054,G__20055));
})(),(function (){var G__20068 = cljs.core.cst$kw$id;
var G__20069 = "example";
var G__20070 = cljs.core.cst$kw$class;
var G__20071 = "pushable";
var G__20072 = (function (){var G__20073 = cljs.core.cst$kw$class;
var G__20074 = "pusher";
var G__20075 = (function (){var G__20076 = cljs.core.cst$kw$class;
var G__20077 = "full height";
var G__20078 = (function (){var G__20080 = cljs.core.cst$kw$class;
var G__20081 = "toc";
var G__20082 = amentum.modules.sidebar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,"width: 250px !important; height: 1813px !important;"], null),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Elements"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/button","Button"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/container","Container"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/icon","Icon"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/header","Header"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Collections"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/form","Form"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/grid","Grid"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/menu","Menu"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Views"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/item","Item"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Modules"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/modules/dropdown","Dropdown"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/modules/sidebar","Sidebar"], 0))], 0))], 0))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20080,G__20081,G__20082) : hoplon.core.div.call(null,G__20080,G__20081,G__20082));
})();
var G__20079 = (function (){var G__20083 = cljs.core.cst$kw$class;
var G__20084 = "article";
var G__20085 = amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"masthead vertical",amentum.elements.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20087 = cljs.core.cst$kw$class;
var G__20088 = "introduction";
var G__20089 = (function (){var G__20090 = cljs.core.cst$kw$class;
var G__20091 = "ui header";
var G__20092 = hoplon.app_pages._index_DOT_html.header;
var G__20093 = (function (){var G__20094 = cljs.core.cst$kw$class;
var G__20095 = "sub header";
var G__20096 = hoplon.app_pages._index_DOT_html.sub_header;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20094,G__20095,G__20096) : hoplon.core.div.call(null,G__20094,G__20095,G__20096));
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$4(G__20090,G__20091,G__20092,G__20093) : hoplon.core.h1.call(null,G__20090,G__20091,G__20092,G__20093));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20087,G__20088,G__20089) : hoplon.core.div.call(null,G__20087,G__20088,G__20089));
})()], 0))], 0));
var G__20086 = amentum.elements.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"main",hoplon.app_pages._index_DOT_html.content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20083,G__20084,G__20085,G__20086) : hoplon.core.div.call(null,G__20083,G__20084,G__20085,G__20086));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20076,G__20077,G__20078,G__20079) : hoplon.core.div.call(null,G__20076,G__20077,G__20078,G__20079));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20073,G__20074,G__20075) : hoplon.core.div.call(null,G__20073,G__20074,G__20075));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$5(G__20068,G__20069,G__20070,G__20071,G__20072) : hoplon.core.body.call(null,G__20068,G__20069,G__20070,G__20071,G__20072));
})()], 0));
