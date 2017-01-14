// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4657__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4657__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__13379 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13377_SHARP_,p2__13378_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13377_SHARP_,p2__13378_SHARP_,p2__13378_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13379;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e13381){if((e13381 instanceof Error)){
var _ = e13381;
return null;
} else {
throw e13381;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13384 = c;
javelin.core.add_sync_BANG_(G__13384);

return G__13384;
} else {
var G__13385 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13385));

return G__13385;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13396 = arguments.length;
var i__7951__auto___13397 = (0);
while(true){
if((i__7951__auto___13397 < len__7950__auto___13396)){
args__7957__auto__.push((arguments[i__7951__auto___13397]));

var G__13398 = (i__7951__auto___13397 + (1));
i__7951__auto___13397 = G__13398;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13388){
var vec__13389 = p__13388;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13389,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13392 = cljs.core.seq(srcs);
var chunk__13393 = null;
var count__13394 = (0);
var i__13395 = (0);
while(true){
if((i__13395 < count__13394)){
var src = chunk__13393.cljs$core$IIndexed$_nth$arity$2(null,i__13395);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13399 = seq__13392;
var G__13400 = chunk__13393;
var G__13401 = count__13394;
var G__13402 = (i__13395 + (1));
seq__13392 = G__13399;
chunk__13393 = G__13400;
count__13394 = G__13401;
i__13395 = G__13402;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13392);
if(temp__4657__auto__){
var seq__13392__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13392__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13392__$1);
var G__13403 = cljs.core.chunk_rest(seq__13392__$1);
var G__13404 = c__7656__auto__;
var G__13405 = cljs.core.count(c__7656__auto__);
var G__13406 = (0);
seq__13392 = G__13403;
chunk__13393 = G__13404;
count__13394 = G__13405;
i__13395 = G__13406;
continue;
} else {
var src = cljs.core.first(seq__13392__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13407 = cljs.core.next(seq__13392__$1);
var G__13408 = null;
var G__13409 = (0);
var G__13410 = (0);
seq__13392 = G__13407;
chunk__13393 = G__13408;
count__13394 = G__13409;
i__13395 = G__13410;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13386){
var G__13387 = cljs.core.first(seq13386);
var seq13386__$1 = cljs.core.next(seq13386);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13387,seq13386__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13431 = arguments.length;
var i__7951__auto___13432 = (0);
while(true){
if((i__7951__auto___13432 < len__7950__auto___13431)){
args__7957__auto__.push((arguments[i__7951__auto___13432]));

var G__13433 = (i__7951__auto___13432 + (1));
i__7951__auto___13432 = G__13433;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13415){
var vec__13416 = p__13415;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13416,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13416,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13419_13434 = cljs.core.seq(this$.sources);
var chunk__13420_13435 = null;
var count__13421_13436 = (0);
var i__13422_13437 = (0);
while(true){
if((i__13422_13437 < count__13421_13436)){
var source_13438 = chunk__13420_13435.cljs$core$IIndexed$_nth$arity$2(null,i__13422_13437);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13438) : javelin.core.cell_QMARK_.call(null,source_13438)))){
source_13438.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13438.sinks,this$);

if((source_13438.rank > this$.rank)){
var seq__13423_13439 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13419_13434,chunk__13420_13435,count__13421_13436,i__13422_13437,source_13438,vec__13416,f,sources){
return (function (p1__13411_SHARP_){
return p1__13411_SHARP_.sinks;
});})(seq__13419_13434,chunk__13420_13435,count__13421_13436,i__13422_13437,source_13438,vec__13416,f,sources))
,source_13438));
var chunk__13424_13440 = null;
var count__13425_13441 = (0);
var i__13426_13442 = (0);
while(true){
if((i__13426_13442 < count__13425_13441)){
var dep_13443 = chunk__13424_13440.cljs$core$IIndexed$_nth$arity$2(null,i__13426_13442);
dep_13443.rank = javelin.core.next_rank();

var G__13444 = seq__13423_13439;
var G__13445 = chunk__13424_13440;
var G__13446 = count__13425_13441;
var G__13447 = (i__13426_13442 + (1));
seq__13423_13439 = G__13444;
chunk__13424_13440 = G__13445;
count__13425_13441 = G__13446;
i__13426_13442 = G__13447;
continue;
} else {
var temp__4657__auto___13448 = cljs.core.seq(seq__13423_13439);
if(temp__4657__auto___13448){
var seq__13423_13449__$1 = temp__4657__auto___13448;
if(cljs.core.chunked_seq_QMARK_(seq__13423_13449__$1)){
var c__7656__auto___13450 = cljs.core.chunk_first(seq__13423_13449__$1);
var G__13451 = cljs.core.chunk_rest(seq__13423_13449__$1);
var G__13452 = c__7656__auto___13450;
var G__13453 = cljs.core.count(c__7656__auto___13450);
var G__13454 = (0);
seq__13423_13439 = G__13451;
chunk__13424_13440 = G__13452;
count__13425_13441 = G__13453;
i__13426_13442 = G__13454;
continue;
} else {
var dep_13455 = cljs.core.first(seq__13423_13449__$1);
dep_13455.rank = javelin.core.next_rank();

var G__13456 = cljs.core.next(seq__13423_13449__$1);
var G__13457 = null;
var G__13458 = (0);
var G__13459 = (0);
seq__13423_13439 = G__13456;
chunk__13424_13440 = G__13457;
count__13425_13441 = G__13458;
i__13426_13442 = G__13459;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13460 = seq__13419_13434;
var G__13461 = chunk__13420_13435;
var G__13462 = count__13421_13436;
var G__13463 = (i__13422_13437 + (1));
seq__13419_13434 = G__13460;
chunk__13420_13435 = G__13461;
count__13421_13436 = G__13462;
i__13422_13437 = G__13463;
continue;
} else {
var temp__4657__auto___13464 = cljs.core.seq(seq__13419_13434);
if(temp__4657__auto___13464){
var seq__13419_13465__$1 = temp__4657__auto___13464;
if(cljs.core.chunked_seq_QMARK_(seq__13419_13465__$1)){
var c__7656__auto___13466 = cljs.core.chunk_first(seq__13419_13465__$1);
var G__13467 = cljs.core.chunk_rest(seq__13419_13465__$1);
var G__13468 = c__7656__auto___13466;
var G__13469 = cljs.core.count(c__7656__auto___13466);
var G__13470 = (0);
seq__13419_13434 = G__13467;
chunk__13420_13435 = G__13468;
count__13421_13436 = G__13469;
i__13422_13437 = G__13470;
continue;
} else {
var source_13471 = cljs.core.first(seq__13419_13465__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13471) : javelin.core.cell_QMARK_.call(null,source_13471)))){
source_13471.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13471.sinks,this$);

if((source_13471.rank > this$.rank)){
var seq__13427_13472 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13419_13434,chunk__13420_13435,count__13421_13436,i__13422_13437,source_13471,seq__13419_13465__$1,temp__4657__auto___13464,vec__13416,f,sources){
return (function (p1__13411_SHARP_){
return p1__13411_SHARP_.sinks;
});})(seq__13419_13434,chunk__13420_13435,count__13421_13436,i__13422_13437,source_13471,seq__13419_13465__$1,temp__4657__auto___13464,vec__13416,f,sources))
,source_13471));
var chunk__13428_13473 = null;
var count__13429_13474 = (0);
var i__13430_13475 = (0);
while(true){
if((i__13430_13475 < count__13429_13474)){
var dep_13476 = chunk__13428_13473.cljs$core$IIndexed$_nth$arity$2(null,i__13430_13475);
dep_13476.rank = javelin.core.next_rank();

var G__13477 = seq__13427_13472;
var G__13478 = chunk__13428_13473;
var G__13479 = count__13429_13474;
var G__13480 = (i__13430_13475 + (1));
seq__13427_13472 = G__13477;
chunk__13428_13473 = G__13478;
count__13429_13474 = G__13479;
i__13430_13475 = G__13480;
continue;
} else {
var temp__4657__auto___13481__$1 = cljs.core.seq(seq__13427_13472);
if(temp__4657__auto___13481__$1){
var seq__13427_13482__$1 = temp__4657__auto___13481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13427_13482__$1)){
var c__7656__auto___13483 = cljs.core.chunk_first(seq__13427_13482__$1);
var G__13484 = cljs.core.chunk_rest(seq__13427_13482__$1);
var G__13485 = c__7656__auto___13483;
var G__13486 = cljs.core.count(c__7656__auto___13483);
var G__13487 = (0);
seq__13427_13472 = G__13484;
chunk__13428_13473 = G__13485;
count__13429_13474 = G__13486;
i__13430_13475 = G__13487;
continue;
} else {
var dep_13488 = cljs.core.first(seq__13427_13482__$1);
dep_13488.rank = javelin.core.next_rank();

var G__13489 = cljs.core.next(seq__13427_13482__$1);
var G__13490 = null;
var G__13491 = (0);
var G__13492 = (0);
seq__13427_13472 = G__13489;
chunk__13428_13473 = G__13490;
count__13429_13474 = G__13491;
i__13430_13475 = G__13492;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13493 = cljs.core.next(seq__13419_13465__$1);
var G__13494 = null;
var G__13495 = (0);
var G__13496 = (0);
seq__13419_13434 = G__13493;
chunk__13420_13435 = G__13494;
count__13421_13436 = G__13495;
i__13422_13437 = G__13496;
continue;
}
} else {
}
}
break;
}

var compute_13497 = ((function (vec__13416,f,sources){
return (function (p1__13412_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13412_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13412_SHARP_)));
});})(vec__13416,f,sources))
;
this$.thunk = ((function (compute_13497,vec__13416,f,sources){
return (function (){
return this$.state = compute_13497(this$.sources);
});})(compute_13497,vec__13416,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13413){
var G__13414 = cljs.core.first(seq13413);
var seq13413__$1 = cljs.core.next(seq13413);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13414,seq13413__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__13498 = this$__$1;
var G__13499 = (function (){var G__13500 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13500) : f.call(null,G__13500));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13498,G__13499) : cljs.core.reset_BANG_.call(null,G__13498,G__13499));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13501 = this$__$1;
var G__13502 = (function (){var G__13503 = this$__$1.state;
var G__13504 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13503,G__13504) : f.call(null,G__13503,G__13504));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13501,G__13502) : cljs.core.reset_BANG_.call(null,G__13501,G__13502));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13505 = this$__$1;
var G__13506 = (function (){var G__13507 = this$__$1.state;
var G__13508 = a;
var G__13509 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13507,G__13508,G__13509) : f.call(null,G__13507,G__13508,G__13509));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13505,G__13506) : cljs.core.reset_BANG_.call(null,G__13505,G__13506));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13510 = this$__$1;
var G__13511 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13510,G__13511) : cljs.core.reset_BANG_.call(null,G__13510,G__13511));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13512 = cljs.core.seq(self__.watches);
var chunk__13513 = null;
var count__13514 = (0);
var i__13515 = (0);
while(true){
if((i__13515 < count__13514)){
var vec__13516 = chunk__13513.cljs$core$IIndexed$_nth$arity$2(null,i__13515);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13516,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13516,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13522 = seq__13512;
var G__13523 = chunk__13513;
var G__13524 = count__13514;
var G__13525 = (i__13515 + (1));
seq__13512 = G__13522;
chunk__13513 = G__13523;
count__13514 = G__13524;
i__13515 = G__13525;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13512);
if(temp__4657__auto__){
var seq__13512__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13512__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13512__$1);
var G__13526 = cljs.core.chunk_rest(seq__13512__$1);
var G__13527 = c__7656__auto__;
var G__13528 = cljs.core.count(c__7656__auto__);
var G__13529 = (0);
seq__13512 = G__13526;
chunk__13513 = G__13527;
count__13514 = G__13528;
i__13515 = G__13529;
continue;
} else {
var vec__13519 = cljs.core.first(seq__13512__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13519,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13519,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13530 = cljs.core.next(seq__13512__$1);
var G__13531 = null;
var G__13532 = (0);
var G__13533 = (0);
seq__13512 = G__13530;
chunk__13513 = G__13531;
count__13514 = G__13532;
i__13515 = G__13533;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7448__auto__,writer__7449__auto__,opt__7450__auto__){
return cljs.core._write(writer__7449__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return c.thunk;
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return c.update;
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__13536__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13535 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13535) : javelin.core.cell.call(null,G__13535));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13536 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13537__i = 0, G__13537__a = new Array(arguments.length -  0);
while (G__13537__i < G__13537__a.length) {G__13537__a[G__13537__i] = arguments[G__13537__i + 0]; ++G__13537__i;}
  sources = new cljs.core.IndexedSeq(G__13537__a,0);
} 
return G__13536__delegate.call(this,sources);};
G__13536.cljs$lang$maxFixedArity = 0;
G__13536.cljs$lang$applyTo = (function (arglist__13538){
var sources = cljs.core.seq(arglist__13538);
return G__13536__delegate(sources);
});
G__13536.cljs$core$IFn$_invoke$arity$variadic = G__13536__delegate;
return G__13536;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13539 = [];
var len__7950__auto___13547 = arguments.length;
var i__7951__auto___13548 = (0);
while(true){
if((i__7951__auto___13548 < len__7950__auto___13547)){
args13539.push((arguments[i__7951__auto___13548]));

var G__13549 = (i__7951__auto___13548 + (1));
i__7951__auto___13548 = G__13549;
continue;
} else {
}
break;
}

var G__13543 = args13539.length;
switch (G__13543) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13539.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7969__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13544){
var map__13545 = p__13544;
var map__13545__$1 = ((((!((map__13545 == null)))?((((map__13545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13545):map__13545);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13545__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13540){
var G__13541 = cljs.core.first(seq13540);
var seq13540__$1 = cljs.core.next(seq13540);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13541,seq13540__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13551_SHARP_){
var _STAR_tx_STAR_13555 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13556 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13556) : cljs.core.atom.call(null,G__13556));
})();

try{return (p1__13551_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13551_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13551_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13555;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13557 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13557;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13565 = arguments.length;
var i__7951__auto___13566 = (0);
while(true){
if((i__7951__auto___13566 < len__7950__auto___13565)){
args__7957__auto__.push((arguments[i__7951__auto___13566]));

var G__13567 = (i__7951__auto___13566 + (1));
i__7951__auto___13566 = G__13567;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13564 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13564) : cljs.core.atom.call(null,G__13564));
})();
var tag_neq = ((function (olds){
return (function (p1__13558_SHARP_,p2__13559_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13558_SHARP_,p2__13559_SHARP_),p2__13559_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13561_SHARP_,p2__13560_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13561_SHARP_,p2__13560_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13568__delegate = function (rest__13562_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13562_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13562_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13562_SHARP_));

return news;
};
var G__13568 = function (var_args){
var rest__13562_SHARP_ = null;
if (arguments.length > 0) {
var G__13569__i = 0, G__13569__a = new Array(arguments.length -  0);
while (G__13569__i < G__13569__a.length) {G__13569__a[G__13569__i] = arguments[G__13569__i + 0]; ++G__13569__i;}
  rest__13562_SHARP_ = new cljs.core.IndexedSeq(G__13569__a,0);
} 
return G__13568__delegate.call(this,rest__13562_SHARP_);};
G__13568.cljs$lang$maxFixedArity = 0;
G__13568.cljs$lang$applyTo = (function (arglist__13570){
var rest__13562_SHARP_ = cljs.core.seq(arglist__13570);
return G__13568__delegate(rest__13562_SHARP_);
});
G__13568.cljs$core$IFn$_invoke$arity$variadic = G__13568__delegate;
return G__13568;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13563){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13563));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13571_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13571_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13572_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13572_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13579_13585 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13580_13586 = null;
var count__13581_13587 = (0);
var i__13582_13588 = (0);
while(true){
if((i__13582_13588 < count__13581_13587)){
var i_13589 = chunk__13580_13586.cljs$core$IIndexed$_nth$arity$2(null,i__13582_13588);
var G__13583_13590 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13589) : ith_item__$1.call(null,i_13589));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13583_13590) : f__$1.call(null,G__13583_13590));

var G__13591 = seq__13579_13585;
var G__13592 = chunk__13580_13586;
var G__13593 = count__13581_13587;
var G__13594 = (i__13582_13588 + (1));
seq__13579_13585 = G__13591;
chunk__13580_13586 = G__13592;
count__13581_13587 = G__13593;
i__13582_13588 = G__13594;
continue;
} else {
var temp__4657__auto___13595 = cljs.core.seq(seq__13579_13585);
if(temp__4657__auto___13595){
var seq__13579_13596__$1 = temp__4657__auto___13595;
if(cljs.core.chunked_seq_QMARK_(seq__13579_13596__$1)){
var c__7656__auto___13597 = cljs.core.chunk_first(seq__13579_13596__$1);
var G__13598 = cljs.core.chunk_rest(seq__13579_13596__$1);
var G__13599 = c__7656__auto___13597;
var G__13600 = cljs.core.count(c__7656__auto___13597);
var G__13601 = (0);
seq__13579_13585 = G__13598;
chunk__13580_13586 = G__13599;
count__13581_13587 = G__13600;
i__13582_13588 = G__13601;
continue;
} else {
var i_13602 = cljs.core.first(seq__13579_13596__$1);
var G__13584_13603 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13602) : ith_item__$1.call(null,i_13602));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13584_13603) : f__$1.call(null,G__13584_13603));

var G__13604 = cljs.core.next(seq__13579_13596__$1);
var G__13605 = null;
var G__13606 = (0);
var G__13607 = (0);
seq__13579_13585 = G__13604;
chunk__13580_13586 = G__13605;
count__13581_13587 = G__13606;
i__13582_13588 = G__13607;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
