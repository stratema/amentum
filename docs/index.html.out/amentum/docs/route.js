// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.route');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('secretary.core');
amentum.docs.route.path = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
amentum.docs.route.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/","/:type","/:type/:component","/:type/:component/:tab"], null);
amentum.docs.route.add_routes = (function amentum$docs$route$add_routes(routes){
var f = (function (p__15540){
var map__15541 = p__15540;
var map__15541__$1 = ((((!((map__15541 == null)))?((((map__15541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15541):map__15541);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15541__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15541__$1,cljs.core.cst$kw$component);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15541__$1,cljs.core.cst$kw$tab);
var G__15543 = amentum.docs.route.path;
var G__15544 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,component,tab], null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15543,G__15544) : cljs.core.reset_BANG_.call(null,G__15543,G__15544));
});
var seq__15545 = cljs.core.seq(routes);
var chunk__15546 = null;
var count__15547 = (0);
var i__15548 = (0);
while(true){
if((i__15548 < count__15547)){
var route = chunk__15546.cljs$core$IIndexed$_nth$arity$2(null,i__15548);
secretary.core.add_route_BANG_(route,f);

var G__15551 = seq__15545;
var G__15552 = chunk__15546;
var G__15553 = count__15547;
var G__15554 = (i__15548 + (1));
seq__15545 = G__15551;
chunk__15546 = G__15552;
count__15547 = G__15553;
i__15548 = G__15554;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15545);
if(temp__4657__auto__){
var seq__15545__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15545__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15545__$1);
var G__15556 = cljs.core.chunk_rest(seq__15545__$1);
var G__15557 = c__7656__auto__;
var G__15558 = cljs.core.count(c__7656__auto__);
var G__15559 = (0);
seq__15545 = G__15556;
chunk__15546 = G__15557;
count__15547 = G__15558;
i__15548 = G__15559;
continue;
} else {
var route = cljs.core.first(seq__15545__$1);
secretary.core.add_route_BANG_(route,f);

var G__15561 = cljs.core.next(seq__15545__$1);
var G__15562 = null;
var G__15563 = (0);
var G__15564 = (0);
seq__15545 = G__15561;
chunk__15546 = G__15562;
count__15547 = G__15563;
i__15548 = G__15564;
continue;
}
} else {
return null;
}
}
break;
}
});
