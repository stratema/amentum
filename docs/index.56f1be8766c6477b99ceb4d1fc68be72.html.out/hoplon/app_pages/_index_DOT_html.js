// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('amentum.collections');
goog.require('amentum.modules');
goog.require('amentum.doc.views.elements');
goog.require('amentum.doc.views.main');
goog.require('amentum.doc.views.views');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('amentum.doc.route');
goog.require('amentum.views');
goog.require('hoplon.core');
goog.require('amentum.doc.views.modules');
goog.require('amentum.nav');
goog.require('amentum.elements');
goog.require('clojure.string');
goog.require('amentum.doc.views.collections');
goog.require('cljs.core.match');
cljs.core._STAR_print_fn_STAR_ = (function (p1__19862_SHARP_){
return console.log(p1__19862_SHARP_);
});
hoplon.core.add_initfn_BANG_((function (){
amentum.nav.setup_navigation();

return amentum.doc.route.add_routes(amentum.doc.route.routes);
}));
hoplon.app_pages._index_DOT_html.main_content = (function (){var G__19863 = (new cljs.core.Delay((function (){
return amentum.doc.views.main.view();
}),null));
var G__19864 = (new cljs.core.Delay(((function (G__19863){
return (function (){
return amentum.doc.views.elements.button();
});})(G__19863))
,null));
var G__19865 = (new cljs.core.Delay(((function (G__19863,G__19864){
return (function (){
return amentum.doc.views.elements.container();
});})(G__19863,G__19864))
,null));
var G__19866 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865){
return (function (){
return amentum.doc.views.elements.icon();
});})(G__19863,G__19864,G__19865))
,null));
var G__19867 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865,G__19866){
return (function (){
return amentum.doc.views.elements.header();
});})(G__19863,G__19864,G__19865,G__19866))
,null));
var G__19868 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865,G__19866,G__19867){
return (function (){
return amentum.doc.views.collections.form();
});})(G__19863,G__19864,G__19865,G__19866,G__19867))
,null));
var G__19869 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865,G__19866,G__19867,G__19868){
return (function (){
return amentum.doc.views.collections.grid();
});})(G__19863,G__19864,G__19865,G__19866,G__19867,G__19868))
,null));
var G__19870 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869){
return (function (){
return amentum.doc.views.collections.menu();
});})(G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869))
,null));
var G__19871 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870){
return (function (){
return amentum.doc.views.views.item();
});})(G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870))
,null));
var G__19872 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870,G__19871){
return (function (){
return amentum.doc.views.modules.dropdown();
});})(G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870,G__19871))
,null));
var G__19873 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870,G__19871,G__19872){
return (function (){
return amentum.doc.views.modules.sidebar();
});})(G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870,G__19871,G__19872))
,null));
var G__19874 = (new cljs.core.Delay(((function (G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870,G__19871,G__19872,G__19873){
return (function (){
return amentum.doc.views.main.view();
});})(G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870,G__19871,G__19872,G__19873))
,null));
var tpl__19850__auto__ = ((function (G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870,G__19871,G__19872,G__19873,G__19874){
return (function (expr__19851__auto__){
var G__19875 = (function (){var or__6842__auto__ = (function (){try{if((cljs.core.vector_QMARK_(expr__19851__auto__)) && ((cljs.core.count(expr__19851__auto__) === 3))){
try{var expr__19851__auto___0__19918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___0__19918,cljs.core.cst$kw$main)){
return G__19863;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19922){if((e19922 instanceof Error)){
var e__19049__auto__ = e19922;
if((e__19049__auto__ === cljs.core.match.backtrack)){
try{var expr__19851__auto___0__19918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___0__19918,cljs.core.cst$kw$elements)){
try{var expr__19851__auto___1__19919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___1__19919,cljs.core.cst$kw$button)){
return G__19864;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19930){if((e19930 instanceof Error)){
var e__19049__auto____$1 = e19930;
if((e__19049__auto____$1 === cljs.core.match.backtrack)){
try{var expr__19851__auto___1__19919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___1__19919,cljs.core.cst$kw$container)){
return G__19865;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19931){if((e19931 instanceof Error)){
var e__19049__auto____$2 = e19931;
if((e__19049__auto____$2 === cljs.core.match.backtrack)){
try{var expr__19851__auto___1__19919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___1__19919,cljs.core.cst$kw$icon)){
return G__19866;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19932){if((e19932 instanceof Error)){
var e__19049__auto____$3 = e19932;
if((e__19049__auto____$3 === cljs.core.match.backtrack)){
try{var expr__19851__auto___1__19919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___1__19919,cljs.core.cst$kw$header)){
return G__19867;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19933){if((e19933 instanceof Error)){
var e__19049__auto____$4 = e19933;
if((e__19049__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19049__auto____$4;
}
} else {
throw e19933;

}
}} else {
throw e__19049__auto____$3;
}
} else {
throw e19932;

}
}} else {
throw e__19049__auto____$2;
}
} else {
throw e19931;

}
}} else {
throw e__19049__auto____$1;
}
} else {
throw e19930;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19923){if((e19923 instanceof Error)){
var e__19049__auto____$1 = e19923;
if((e__19049__auto____$1 === cljs.core.match.backtrack)){
try{var expr__19851__auto___0__19918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___0__19918,cljs.core.cst$kw$collections)){
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(1));
return G__19868;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19924){if((e19924 instanceof Error)){
var e__19049__auto____$2 = e19924;
if((e__19049__auto____$2 === cljs.core.match.backtrack)){
try{var expr__19851__auto___0__19918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___0__19918,cljs.core.cst$kw$views)){
try{var expr__19851__auto___1__19919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___1__19919,cljs.core.cst$kw$item)){
return G__19871;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19929){if((e19929 instanceof Error)){
var e__19049__auto____$3 = e19929;
if((e__19049__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19049__auto____$3;
}
} else {
throw e19929;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19925){if((e19925 instanceof Error)){
var e__19049__auto____$3 = e19925;
if((e__19049__auto____$3 === cljs.core.match.backtrack)){
try{var expr__19851__auto___0__19918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___0__19918,cljs.core.cst$kw$modules)){
try{var expr__19851__auto___1__19919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___1__19919,cljs.core.cst$kw$dropdown)){
return G__19872;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19927){if((e19927 instanceof Error)){
var e__19049__auto____$4 = e19927;
if((e__19049__auto____$4 === cljs.core.match.backtrack)){
try{var expr__19851__auto___1__19919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__19851__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__19851__auto___1__19919,cljs.core.cst$kw$sidebar)){
return G__19873;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19928){if((e19928 instanceof Error)){
var e__19049__auto____$5 = e19928;
if((e__19049__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19049__auto____$5;
}
} else {
throw e19928;

}
}} else {
throw e__19049__auto____$4;
}
} else {
throw e19927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19926){if((e19926 instanceof Error)){
var e__19049__auto____$4 = e19926;
if((e__19049__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19049__auto____$4;
}
} else {
throw e19926;

}
}} else {
throw e__19049__auto____$3;
}
} else {
throw e19925;

}
}} else {
throw e__19049__auto____$2;
}
} else {
throw e19924;

}
}} else {
throw e__19049__auto____$1;
}
} else {
throw e19923;

}
}} else {
throw e__19049__auto__;
}
} else {
throw e19922;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19921){if((e19921 instanceof Error)){
var e__19049__auto__ = e19921;
if((e__19049__auto__ === cljs.core.match.backtrack)){
return G__19874;
} else {
throw e__19049__auto__;
}
} else {
throw e19921;

}
}})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19875) : cljs.core.deref.call(null,G__19875));
});})(G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869,G__19870,G__19871,G__19872,G__19873,G__19874))
;
return javelin.core.formula(tpl__19850__auto__).call(null,amentum.doc.route.path);
})();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19934 = (function (){var G__19936 = cljs.core.cst$kw$href;
var G__19937 = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css";
var G__19938 = cljs.core.cst$kw$rel;
var G__19939 = "stylesheet";
var G__19940 = cljs.core.cst$kw$type;
var G__19941 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__19936,G__19937,G__19938,G__19939,G__19940,G__19941) : hoplon.core.link.call(null,G__19936,G__19937,G__19938,G__19939,G__19940,G__19941));
})();
var G__19935 = (function (){var G__19942 = cljs.core.cst$kw$href;
var G__19943 = "doc.css";
var G__19944 = cljs.core.cst$kw$rel;
var G__19945 = "stylesheet";
var G__19946 = cljs.core.cst$kw$type;
var G__19947 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__19942,G__19943,G__19944,G__19945,G__19946,G__19947) : hoplon.core.link.call(null,G__19942,G__19943,G__19944,G__19945,G__19946,G__19947));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__19934,G__19935) : hoplon.core.head.call(null,G__19934,G__19935));
})(),(function (){var G__19948 = cljs.core.cst$kw$id;
var G__19949 = "example";
var G__19950 = cljs.core.cst$kw$class;
var G__19951 = "pushable";
var G__19952 = (function (){var G__19953 = cljs.core.cst$kw$class;
var G__19954 = "pusher";
var G__19955 = (function (){var G__19956 = cljs.core.cst$kw$class;
var G__19957 = "full height";
var G__19958 = (function (){var G__19960 = cljs.core.cst$kw$class;
var G__19961 = "toc";
var G__19962 = amentum.modules.sidebar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,"width: 250px !important; height: 1813px !important;"], null),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Elements"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/button","Button"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/container","Container"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/icon","Icon"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/header","Header"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Collections"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/form","Form"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/grid","Grid"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/menu","Menu"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Views"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/item","Item"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Modules"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/modules/dropdown","Dropdown"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/modules/sidebar","Sidebar"], 0))], 0))], 0))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__19960,G__19961,G__19962) : hoplon.core.div.call(null,G__19960,G__19961,G__19962));
})();
var G__19959 = (function (){var G__19963 = cljs.core.cst$kw$class;
var G__19964 = "article";
var G__19965 = amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"masthead vertical",amentum.elements.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19967 = cljs.core.cst$kw$class;
var G__19968 = "introduction";
var G__19969 = (function (){var G__19970 = cljs.core.cst$kw$class;
var G__19971 = "ui header";
var G__19972 = "Title";
var G__19973 = (function (){var G__19974 = cljs.core.cst$kw$class;
var G__19975 = "sub header";
var G__19976 = "subheader";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__19974,G__19975,G__19976) : hoplon.core.div.call(null,G__19974,G__19975,G__19976));
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$4(G__19970,G__19971,G__19972,G__19973) : hoplon.core.h1.call(null,G__19970,G__19971,G__19972,G__19973));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__19967,G__19968,G__19969) : hoplon.core.div.call(null,G__19967,G__19968,G__19969));
})()], 0))], 0));
var G__19966 = amentum.elements.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"main",hoplon.app_pages._index_DOT_html.main_content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__19963,G__19964,G__19965,G__19966) : hoplon.core.div.call(null,G__19963,G__19964,G__19965,G__19966));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__19956,G__19957,G__19958,G__19959) : hoplon.core.div.call(null,G__19956,G__19957,G__19958,G__19959));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__19953,G__19954,G__19955) : hoplon.core.div.call(null,G__19953,G__19954,G__19955));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$5(G__19948,G__19949,G__19950,G__19951,G__19952) : hoplon.core.body.call(null,G__19948,G__19949,G__19950,G__19951,G__19952));
})()], 0));
