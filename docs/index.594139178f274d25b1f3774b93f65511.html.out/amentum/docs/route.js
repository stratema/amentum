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
var f = (function (p__15317){
var map__15318 = p__15317;
var map__15318__$1 = ((((!((map__15318 == null)))?((((map__15318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15318):map__15318);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15318__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15318__$1,cljs.core.cst$kw$component);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15318__$1,cljs.core.cst$kw$tab);
var G__15320 = amentum.docs.route.path;
var G__15321 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,component,tab], null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15320,G__15321) : cljs.core.reset_BANG_.call(null,G__15320,G__15321));
});
var seq__15322 = cljs.core.seq(routes);
var chunk__15323 = null;
var count__15324 = (0);
var i__15325 = (0);
while(true){
if((i__15325 < count__15324)){
var route = chunk__15323.cljs$core$IIndexed$_nth$arity$2(null,i__15325);
secretary.core.add_route_BANG_(route,f);

var G__15326 = seq__15322;
var G__15327 = chunk__15323;
var G__15328 = count__15324;
var G__15329 = (i__15325 + (1));
seq__15322 = G__15326;
chunk__15323 = G__15327;
count__15324 = G__15328;
i__15325 = G__15329;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15322);
if(temp__4657__auto__){
var seq__15322__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15322__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15322__$1);
var G__15330 = cljs.core.chunk_rest(seq__15322__$1);
var G__15331 = c__7656__auto__;
var G__15332 = cljs.core.count(c__7656__auto__);
var G__15333 = (0);
seq__15322 = G__15330;
chunk__15323 = G__15331;
count__15324 = G__15332;
i__15325 = G__15333;
continue;
} else {
var route = cljs.core.first(seq__15322__$1);
secretary.core.add_route_BANG_(route,f);

var G__15334 = cljs.core.next(seq__15322__$1);
var G__15335 = null;
var G__15336 = (0);
var G__15337 = (0);
seq__15322 = G__15334;
chunk__15323 = G__15335;
count__15324 = G__15336;
i__15325 = G__15337;
continue;
}
} else {
return null;
}
}
break;
}
});
