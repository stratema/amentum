// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.route');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('secretary.core');
goog.require('amentum.docs.views.main');
goog.require('amentum.docs.views.elements');
goog.require('amentum.docs.views.collections');
amentum.docs.route.path = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
amentum.docs.route.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/","/:type","/:type/:component","/:type/:component/:tab"], null);
amentum.docs.route.add_routes = (function amentum$docs$route$add_routes(routes){
var f = (function (p__15472){
var map__15473 = p__15472;
var map__15473__$1 = ((((!((map__15473 == null)))?((((map__15473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15473):map__15473);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15473__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15473__$1,cljs.core.cst$kw$component);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15473__$1,cljs.core.cst$kw$tab);
var G__15475 = amentum.docs.route.path;
var G__15476 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,component,tab], null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15475,G__15476) : cljs.core.reset_BANG_.call(null,G__15475,G__15476));
});
var seq__15477 = cljs.core.seq(routes);
var chunk__15478 = null;
var count__15479 = (0);
var i__15480 = (0);
while(true){
if((i__15480 < count__15479)){
var route = chunk__15478.cljs$core$IIndexed$_nth$arity$2(null,i__15480);
secretary.core.add_route_BANG_(route,f);

var G__15483 = seq__15477;
var G__15484 = chunk__15478;
var G__15485 = count__15479;
var G__15486 = (i__15480 + (1));
seq__15477 = G__15483;
chunk__15478 = G__15484;
count__15479 = G__15485;
i__15480 = G__15486;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15477);
if(temp__4657__auto__){
var seq__15477__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15477__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15477__$1);
var G__15488 = cljs.core.chunk_rest(seq__15477__$1);
var G__15489 = c__7656__auto__;
var G__15490 = cljs.core.count(c__7656__auto__);
var G__15491 = (0);
seq__15477 = G__15488;
chunk__15478 = G__15489;
count__15479 = G__15490;
i__15480 = G__15491;
continue;
} else {
var route = cljs.core.first(seq__15477__$1);
secretary.core.add_route_BANG_(route,f);

var G__15494 = cljs.core.next(seq__15477__$1);
var G__15495 = null;
var G__15496 = (0);
var G__15497 = (0);
seq__15477 = G__15494;
chunk__15478 = G__15495;
count__15479 = G__15496;
i__15480 = G__15497;
continue;
}
} else {
return null;
}
}
break;
}
});
