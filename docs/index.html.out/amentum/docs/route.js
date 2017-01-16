// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.route');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('secretary.core');
amentum.docs.route.path = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
amentum.docs.route.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/","/:type","/:type/:component","/:type/:component/:tab"], null);
amentum.docs.route.add_routes = (function amentum$docs$route$add_routes(routes){
var f = (function (p__16736){
var map__16738 = p__16736;
var map__16738__$1 = ((((!((map__16738 == null)))?((((map__16738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16738):map__16738);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16738__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16738__$1,cljs.core.cst$kw$component);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16738__$1,cljs.core.cst$kw$tab);
var G__16741 = amentum.docs.route.path;
var G__16742 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,component,tab], null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16741,G__16742) : cljs.core.reset_BANG_.call(null,G__16741,G__16742));
});
var seq__16744 = cljs.core.seq(routes);
var chunk__16745 = null;
var count__16746 = (0);
var i__16747 = (0);
while(true){
if((i__16747 < count__16746)){
var route = chunk__16745.cljs$core$IIndexed$_nth$arity$2(null,i__16747);
secretary.core.add_route_BANG_(route,f);

var G__16756 = seq__16744;
var G__16757 = chunk__16745;
var G__16758 = count__16746;
var G__16759 = (i__16747 + (1));
seq__16744 = G__16756;
chunk__16745 = G__16757;
count__16746 = G__16758;
i__16747 = G__16759;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16744);
if(temp__4657__auto__){
var seq__16744__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16744__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__16744__$1);
var G__16763 = cljs.core.chunk_rest(seq__16744__$1);
var G__16764 = c__7656__auto__;
var G__16765 = cljs.core.count(c__7656__auto__);
var G__16766 = (0);
seq__16744 = G__16763;
chunk__16745 = G__16764;
count__16746 = G__16765;
i__16747 = G__16766;
continue;
} else {
var route = cljs.core.first(seq__16744__$1);
secretary.core.add_route_BANG_(route,f);

var G__16771 = cljs.core.next(seq__16744__$1);
var G__16772 = null;
var G__16773 = (0);
var G__16774 = (0);
seq__16744 = G__16771;
chunk__16745 = G__16772;
count__16746 = G__16773;
i__16747 = G__16774;
continue;
}
} else {
return null;
}
}
break;
}
});
