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
cljs.core._STAR_print_fn_STAR_ = (function (p1__21401_SHARP_){
return console.log(p1__21401_SHARP_);
});
hoplon.core.add_initfn_BANG_((function (){
amentum.nav.setup_navigation();

return amentum.docs.route.add_routes(amentum.docs.route.routes);
}));
hoplon.app_pages._index_DOT_html.main_content = (function (){var G__21402 = (new cljs.core.Delay((function (){
return amentum.docs.views.start.view();
}),null));
var G__21403 = (new cljs.core.Delay(((function (G__21402){
return (function (){
return amentum.docs.views.elements.button();
});})(G__21402))
,null));
var G__21404 = (new cljs.core.Delay(((function (G__21402,G__21403){
return (function (){
return amentum.docs.views.elements.container();
});})(G__21402,G__21403))
,null));
var G__21405 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404){
return (function (){
return amentum.docs.views.elements.icon();
});})(G__21402,G__21403,G__21404))
,null));
var G__21406 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404,G__21405){
return (function (){
return amentum.docs.views.elements.header();
});})(G__21402,G__21403,G__21404,G__21405))
,null));
var G__21407 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404,G__21405,G__21406){
return (function (){
return amentum.docs.views.collections.form();
});})(G__21402,G__21403,G__21404,G__21405,G__21406))
,null));
var G__21408 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404,G__21405,G__21406,G__21407){
return (function (){
return amentum.docs.views.collections.grid();
});})(G__21402,G__21403,G__21404,G__21405,G__21406,G__21407))
,null));
var G__21409 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408){
return (function (){
return amentum.docs.views.collections.menu();
});})(G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408))
,null));
var G__21410 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409){
return (function (){
return amentum.docs.views.views.item();
});})(G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409))
,null));
var G__21411 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410){
return (function (){
return amentum.docs.views.modules.dropdown();
});})(G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410))
,null));
var G__21412 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411){
return (function (){
return amentum.docs.views.modules.sidebar();
});})(G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411))
,null));
var G__21413 = (new cljs.core.Delay(((function (G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411,G__21412){
return (function (){
return amentum.docs.views.start.view();
});})(G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411,G__21412))
,null));
var tpl__21389__auto__ = ((function (G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411,G__21412,G__21413){
return (function (expr__21390__auto__){
var G__21414 = (function (){var or__6842__auto__ = (function (){try{if((cljs.core.vector_QMARK_(expr__21390__auto__)) && ((cljs.core.count(expr__21390__auto__) === 3))){
try{var expr__21390__auto___0__21457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___0__21457,cljs.core.cst$kw$start)){
return G__21402;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21461){if((e21461 instanceof Error)){
var e__20588__auto__ = e21461;
if((e__20588__auto__ === cljs.core.match.backtrack)){
try{var expr__21390__auto___0__21457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___0__21457,cljs.core.cst$kw$elements)){
try{var expr__21390__auto___1__21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___1__21458,cljs.core.cst$kw$button)){
return G__21403;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21469){if((e21469 instanceof Error)){
var e__20588__auto____$1 = e21469;
if((e__20588__auto____$1 === cljs.core.match.backtrack)){
try{var expr__21390__auto___1__21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___1__21458,cljs.core.cst$kw$container)){
return G__21404;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21470){if((e21470 instanceof Error)){
var e__20588__auto____$2 = e21470;
if((e__20588__auto____$2 === cljs.core.match.backtrack)){
try{var expr__21390__auto___1__21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___1__21458,cljs.core.cst$kw$icon)){
return G__21405;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21471){if((e21471 instanceof Error)){
var e__20588__auto____$3 = e21471;
if((e__20588__auto____$3 === cljs.core.match.backtrack)){
try{var expr__21390__auto___1__21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___1__21458,cljs.core.cst$kw$header)){
return G__21406;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21472){if((e21472 instanceof Error)){
var e__20588__auto____$4 = e21472;
if((e__20588__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20588__auto____$4;
}
} else {
throw e21472;

}
}} else {
throw e__20588__auto____$3;
}
} else {
throw e21471;

}
}} else {
throw e__20588__auto____$2;
}
} else {
throw e21470;

}
}} else {
throw e__20588__auto____$1;
}
} else {
throw e21469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21462){if((e21462 instanceof Error)){
var e__20588__auto____$1 = e21462;
if((e__20588__auto____$1 === cljs.core.match.backtrack)){
try{var expr__21390__auto___0__21457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___0__21457,cljs.core.cst$kw$collections)){
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(1));
return G__21407;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21463){if((e21463 instanceof Error)){
var e__20588__auto____$2 = e21463;
if((e__20588__auto____$2 === cljs.core.match.backtrack)){
try{var expr__21390__auto___0__21457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___0__21457,cljs.core.cst$kw$views)){
try{var expr__21390__auto___1__21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___1__21458,cljs.core.cst$kw$item)){
return G__21410;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21468){if((e21468 instanceof Error)){
var e__20588__auto____$3 = e21468;
if((e__20588__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20588__auto____$3;
}
} else {
throw e21468;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21464){if((e21464 instanceof Error)){
var e__20588__auto____$3 = e21464;
if((e__20588__auto____$3 === cljs.core.match.backtrack)){
try{var expr__21390__auto___0__21457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(0));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___0__21457,cljs.core.cst$kw$modules)){
try{var expr__21390__auto___1__21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___1__21458,cljs.core.cst$kw$dropdown)){
return G__21411;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21466){if((e21466 instanceof Error)){
var e__20588__auto____$4 = e21466;
if((e__20588__auto____$4 === cljs.core.match.backtrack)){
try{var expr__21390__auto___1__21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr__21390__auto__,(1));
if(cljs.core.keyword_identical_QMARK_(expr__21390__auto___1__21458,cljs.core.cst$kw$sidebar)){
return G__21412;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21467){if((e21467 instanceof Error)){
var e__20588__auto____$5 = e21467;
if((e__20588__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20588__auto____$5;
}
} else {
throw e21467;

}
}} else {
throw e__20588__auto____$4;
}
} else {
throw e21466;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21465){if((e21465 instanceof Error)){
var e__20588__auto____$4 = e21465;
if((e__20588__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20588__auto____$4;
}
} else {
throw e21465;

}
}} else {
throw e__20588__auto____$3;
}
} else {
throw e21464;

}
}} else {
throw e__20588__auto____$2;
}
} else {
throw e21463;

}
}} else {
throw e__20588__auto____$1;
}
} else {
throw e21462;

}
}} else {
throw e__20588__auto__;
}
} else {
throw e21461;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21460){if((e21460 instanceof Error)){
var e__20588__auto__ = e21460;
if((e__20588__auto__ === cljs.core.match.backtrack)){
return G__21413;
} else {
throw e__20588__auto__;
}
} else {
throw e21460;

}
}})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21414) : cljs.core.deref.call(null,G__21414));
});})(G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411,G__21412,G__21413))
;
return javelin.core.formula(tpl__21389__auto__).call(null,amentum.docs.route.path);
})();
hoplon.app_pages._index_DOT_html.header = javelin.core.formula((function (G__21473){
return cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(G__21473);
})).call(null,hoplon.app_pages._index_DOT_html.main_content);
hoplon.app_pages._index_DOT_html.sub_header = javelin.core.formula((function (G__21474){
return cljs.core.cst$kw$sub_DASH_header.cljs$core$IFn$_invoke$arity$1(G__21474);
})).call(null,hoplon.app_pages._index_DOT_html.main_content);
hoplon.app_pages._index_DOT_html.content = javelin.core.formula((function (G__21475){
return cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(G__21475);
})).call(null,hoplon.app_pages._index_DOT_html.main_content);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__21476 = (function (){var G__21478 = cljs.core.cst$kw$href;
var G__21479 = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css";
var G__21480 = cljs.core.cst$kw$rel;
var G__21481 = "stylesheet";
var G__21482 = cljs.core.cst$kw$type;
var G__21483 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__21478,G__21479,G__21480,G__21481,G__21482,G__21483) : hoplon.core.link.call(null,G__21478,G__21479,G__21480,G__21481,G__21482,G__21483));
})();
var G__21477 = (function (){var G__21484 = cljs.core.cst$kw$href;
var G__21485 = "doc.css";
var G__21486 = cljs.core.cst$kw$rel;
var G__21487 = "stylesheet";
var G__21488 = cljs.core.cst$kw$type;
var G__21489 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__21484,G__21485,G__21486,G__21487,G__21488,G__21489) : hoplon.core.link.call(null,G__21484,G__21485,G__21486,G__21487,G__21488,G__21489));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__21476,G__21477) : hoplon.core.head.call(null,G__21476,G__21477));
})(),(function (){var G__21490 = cljs.core.cst$kw$id;
var G__21491 = "example";
var G__21492 = cljs.core.cst$kw$class;
var G__21493 = "pushable";
var G__21494 = (function (){var G__21495 = cljs.core.cst$kw$class;
var G__21496 = "pusher";
var G__21497 = (function (){var G__21498 = cljs.core.cst$kw$class;
var G__21499 = "full height";
var G__21500 = (function (){var G__21502 = cljs.core.cst$kw$class;
var G__21503 = "toc";
var G__21504 = amentum.modules.sidebar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,"width: 250px !important; height: 1813px !important;"], null),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/start","Start"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Elements"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/button","Button"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/container","Container"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/header","Header"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/icon","Icon"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Collections"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/form","Form"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/grid","Grid"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/collections/menu","Menu"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Views"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/elements/item","Item"], 0))], 0))], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Modules"], 0)),amentum.collections.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/modules/dropdown","Dropdown"], 0)),amentum.views.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$href,"/modules/sidebar","Sidebar"], 0))], 0))], 0))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21502,G__21503,G__21504) : hoplon.core.div.call(null,G__21502,G__21503,G__21504));
})();
var G__21501 = (function (){var G__21505 = cljs.core.cst$kw$class;
var G__21506 = "article";
var G__21507 = amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"masthead vertical",amentum.elements.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__21509 = cljs.core.cst$kw$class;
var G__21510 = "introduction";
var G__21511 = (function (){var G__21512 = cljs.core.cst$kw$class;
var G__21513 = "ui header";
var G__21514 = hoplon.app_pages._index_DOT_html.header;
var G__21515 = (function (){var G__21516 = cljs.core.cst$kw$class;
var G__21517 = "sub header";
var G__21518 = hoplon.app_pages._index_DOT_html.sub_header;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21516,G__21517,G__21518) : hoplon.core.div.call(null,G__21516,G__21517,G__21518));
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$4(G__21512,G__21513,G__21514,G__21515) : hoplon.core.h1.call(null,G__21512,G__21513,G__21514,G__21515));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21509,G__21510,G__21511) : hoplon.core.div.call(null,G__21509,G__21510,G__21511));
})()], 0))], 0));
var G__21508 = amentum.elements.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"main",hoplon.app_pages._index_DOT_html.content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__21505,G__21506,G__21507,G__21508) : hoplon.core.div.call(null,G__21505,G__21506,G__21507,G__21508));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__21498,G__21499,G__21500,G__21501) : hoplon.core.div.call(null,G__21498,G__21499,G__21500,G__21501));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21495,G__21496,G__21497) : hoplon.core.div.call(null,G__21495,G__21496,G__21497));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$5(G__21490,G__21491,G__21492,G__21493,G__21494) : hoplon.core.body.call(null,G__21490,G__21491,G__21492,G__21493,G__21494));
})()], 0));
