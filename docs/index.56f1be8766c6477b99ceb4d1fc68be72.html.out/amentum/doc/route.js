// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.doc.route');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('secretary.core');
goog.require('amentum.doc.views.main');
goog.require('amentum.doc.views.elements');
goog.require('amentum.doc.views.collections');
amentum.doc.route.path = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
amentum.doc.route.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/","/:type","/:type/:component","/:type/:component/:tab"], null);
amentum.doc.route.add_routes = (function amentum$doc$route$add_routes(routes){
var f = (function (p__15364){
var map__15365 = p__15364;
var map__15365__$1 = ((((!((map__15365 == null)))?((((map__15365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15365):map__15365);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,cljs.core.cst$kw$component);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,cljs.core.cst$kw$tab);
var G__15367 = amentum.doc.route.path;
var G__15368 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,component,tab], null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15367,G__15368) : cljs.core.reset_BANG_.call(null,G__15367,G__15368));
});
var seq__15369 = cljs.core.seq(routes);
var chunk__15370 = null;
var count__15371 = (0);
var i__15372 = (0);
while(true){
if((i__15372 < count__15371)){
var route = chunk__15370.cljs$core$IIndexed$_nth$arity$2(null,i__15372);
secretary.core.add_route_BANG_(route,f);

var G__15373 = seq__15369;
var G__15374 = chunk__15370;
var G__15375 = count__15371;
var G__15376 = (i__15372 + (1));
seq__15369 = G__15373;
chunk__15370 = G__15374;
count__15371 = G__15375;
i__15372 = G__15376;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15369);
if(temp__4657__auto__){
var seq__15369__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15369__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15369__$1);
var G__15377 = cljs.core.chunk_rest(seq__15369__$1);
var G__15378 = c__7656__auto__;
var G__15379 = cljs.core.count(c__7656__auto__);
var G__15380 = (0);
seq__15369 = G__15377;
chunk__15370 = G__15378;
count__15371 = G__15379;
i__15372 = G__15380;
continue;
} else {
var route = cljs.core.first(seq__15369__$1);
secretary.core.add_route_BANG_(route,f);

var G__15381 = cljs.core.next(seq__15369__$1);
var G__15382 = null;
var G__15383 = (0);
var G__15384 = (0);
seq__15369 = G__15381;
chunk__15370 = G__15382;
count__15371 = G__15383;
i__15372 = G__15384;
continue;
}
} else {
return null;
}
}
break;
}
});
