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

var G__13454 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13452_SHARP_,p2__13453_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13452_SHARP_,p2__13453_SHARP_,p2__13453_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13454;
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
}catch (e13456){if((e13456 instanceof Error)){
var _ = e13456;
return null;
} else {
throw e13456;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13459 = c;
javelin.core.add_sync_BANG_(G__13459);

return G__13459;
} else {
var G__13460 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13460));

return G__13460;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13471 = arguments.length;
var i__7951__auto___13472 = (0);
while(true){
if((i__7951__auto___13472 < len__7950__auto___13471)){
args__7957__auto__.push((arguments[i__7951__auto___13472]));

var G__13473 = (i__7951__auto___13472 + (1));
i__7951__auto___13472 = G__13473;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13463){
var vec__13464 = p__13463;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13464,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13467 = cljs.core.seq(srcs);
var chunk__13468 = null;
var count__13469 = (0);
var i__13470 = (0);
while(true){
if((i__13470 < count__13469)){
var src = chunk__13468.cljs$core$IIndexed$_nth$arity$2(null,i__13470);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13474 = seq__13467;
var G__13475 = chunk__13468;
var G__13476 = count__13469;
var G__13477 = (i__13470 + (1));
seq__13467 = G__13474;
chunk__13468 = G__13475;
count__13469 = G__13476;
i__13470 = G__13477;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13467);
if(temp__4657__auto__){
var seq__13467__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13467__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13467__$1);
var G__13478 = cljs.core.chunk_rest(seq__13467__$1);
var G__13479 = c__7656__auto__;
var G__13480 = cljs.core.count(c__7656__auto__);
var G__13481 = (0);
seq__13467 = G__13478;
chunk__13468 = G__13479;
count__13469 = G__13480;
i__13470 = G__13481;
continue;
} else {
var src = cljs.core.first(seq__13467__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13482 = cljs.core.next(seq__13467__$1);
var G__13483 = null;
var G__13484 = (0);
var G__13485 = (0);
seq__13467 = G__13482;
chunk__13468 = G__13483;
count__13469 = G__13484;
i__13470 = G__13485;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13461){
var G__13462 = cljs.core.first(seq13461);
var seq13461__$1 = cljs.core.next(seq13461);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13462,seq13461__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13506 = arguments.length;
var i__7951__auto___13507 = (0);
while(true){
if((i__7951__auto___13507 < len__7950__auto___13506)){
args__7957__auto__.push((arguments[i__7951__auto___13507]));

var G__13508 = (i__7951__auto___13507 + (1));
i__7951__auto___13507 = G__13508;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13490){
var vec__13491 = p__13490;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13491,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13491,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13494_13509 = cljs.core.seq(this$.sources);
var chunk__13495_13510 = null;
var count__13496_13511 = (0);
var i__13497_13512 = (0);
while(true){
if((i__13497_13512 < count__13496_13511)){
var source_13513 = chunk__13495_13510.cljs$core$IIndexed$_nth$arity$2(null,i__13497_13512);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13513) : javelin.core.cell_QMARK_.call(null,source_13513)))){
source_13513.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13513.sinks,this$);

if((source_13513.rank > this$.rank)){
var seq__13498_13514 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13494_13509,chunk__13495_13510,count__13496_13511,i__13497_13512,source_13513,vec__13491,f,sources){
return (function (p1__13486_SHARP_){
return p1__13486_SHARP_.sinks;
});})(seq__13494_13509,chunk__13495_13510,count__13496_13511,i__13497_13512,source_13513,vec__13491,f,sources))
,source_13513));
var chunk__13499_13515 = null;
var count__13500_13516 = (0);
var i__13501_13517 = (0);
while(true){
if((i__13501_13517 < count__13500_13516)){
var dep_13518 = chunk__13499_13515.cljs$core$IIndexed$_nth$arity$2(null,i__13501_13517);
dep_13518.rank = javelin.core.next_rank();

var G__13519 = seq__13498_13514;
var G__13520 = chunk__13499_13515;
var G__13521 = count__13500_13516;
var G__13522 = (i__13501_13517 + (1));
seq__13498_13514 = G__13519;
chunk__13499_13515 = G__13520;
count__13500_13516 = G__13521;
i__13501_13517 = G__13522;
continue;
} else {
var temp__4657__auto___13523 = cljs.core.seq(seq__13498_13514);
if(temp__4657__auto___13523){
var seq__13498_13524__$1 = temp__4657__auto___13523;
if(cljs.core.chunked_seq_QMARK_(seq__13498_13524__$1)){
var c__7656__auto___13525 = cljs.core.chunk_first(seq__13498_13524__$1);
var G__13526 = cljs.core.chunk_rest(seq__13498_13524__$1);
var G__13527 = c__7656__auto___13525;
var G__13528 = cljs.core.count(c__7656__auto___13525);
var G__13529 = (0);
seq__13498_13514 = G__13526;
chunk__13499_13515 = G__13527;
count__13500_13516 = G__13528;
i__13501_13517 = G__13529;
continue;
} else {
var dep_13530 = cljs.core.first(seq__13498_13524__$1);
dep_13530.rank = javelin.core.next_rank();

var G__13531 = cljs.core.next(seq__13498_13524__$1);
var G__13532 = null;
var G__13533 = (0);
var G__13534 = (0);
seq__13498_13514 = G__13531;
chunk__13499_13515 = G__13532;
count__13500_13516 = G__13533;
i__13501_13517 = G__13534;
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

var G__13535 = seq__13494_13509;
var G__13536 = chunk__13495_13510;
var G__13537 = count__13496_13511;
var G__13538 = (i__13497_13512 + (1));
seq__13494_13509 = G__13535;
chunk__13495_13510 = G__13536;
count__13496_13511 = G__13537;
i__13497_13512 = G__13538;
continue;
} else {
var temp__4657__auto___13539 = cljs.core.seq(seq__13494_13509);
if(temp__4657__auto___13539){
var seq__13494_13540__$1 = temp__4657__auto___13539;
if(cljs.core.chunked_seq_QMARK_(seq__13494_13540__$1)){
var c__7656__auto___13541 = cljs.core.chunk_first(seq__13494_13540__$1);
var G__13542 = cljs.core.chunk_rest(seq__13494_13540__$1);
var G__13543 = c__7656__auto___13541;
var G__13544 = cljs.core.count(c__7656__auto___13541);
var G__13545 = (0);
seq__13494_13509 = G__13542;
chunk__13495_13510 = G__13543;
count__13496_13511 = G__13544;
i__13497_13512 = G__13545;
continue;
} else {
var source_13546 = cljs.core.first(seq__13494_13540__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13546) : javelin.core.cell_QMARK_.call(null,source_13546)))){
source_13546.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13546.sinks,this$);

if((source_13546.rank > this$.rank)){
var seq__13502_13547 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13494_13509,chunk__13495_13510,count__13496_13511,i__13497_13512,source_13546,seq__13494_13540__$1,temp__4657__auto___13539,vec__13491,f,sources){
return (function (p1__13486_SHARP_){
return p1__13486_SHARP_.sinks;
});})(seq__13494_13509,chunk__13495_13510,count__13496_13511,i__13497_13512,source_13546,seq__13494_13540__$1,temp__4657__auto___13539,vec__13491,f,sources))
,source_13546));
var chunk__13503_13548 = null;
var count__13504_13549 = (0);
var i__13505_13550 = (0);
while(true){
if((i__13505_13550 < count__13504_13549)){
var dep_13551 = chunk__13503_13548.cljs$core$IIndexed$_nth$arity$2(null,i__13505_13550);
dep_13551.rank = javelin.core.next_rank();

var G__13552 = seq__13502_13547;
var G__13553 = chunk__13503_13548;
var G__13554 = count__13504_13549;
var G__13555 = (i__13505_13550 + (1));
seq__13502_13547 = G__13552;
chunk__13503_13548 = G__13553;
count__13504_13549 = G__13554;
i__13505_13550 = G__13555;
continue;
} else {
var temp__4657__auto___13556__$1 = cljs.core.seq(seq__13502_13547);
if(temp__4657__auto___13556__$1){
var seq__13502_13557__$1 = temp__4657__auto___13556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13502_13557__$1)){
var c__7656__auto___13558 = cljs.core.chunk_first(seq__13502_13557__$1);
var G__13559 = cljs.core.chunk_rest(seq__13502_13557__$1);
var G__13560 = c__7656__auto___13558;
var G__13561 = cljs.core.count(c__7656__auto___13558);
var G__13562 = (0);
seq__13502_13547 = G__13559;
chunk__13503_13548 = G__13560;
count__13504_13549 = G__13561;
i__13505_13550 = G__13562;
continue;
} else {
var dep_13563 = cljs.core.first(seq__13502_13557__$1);
dep_13563.rank = javelin.core.next_rank();

var G__13564 = cljs.core.next(seq__13502_13557__$1);
var G__13565 = null;
var G__13566 = (0);
var G__13567 = (0);
seq__13502_13547 = G__13564;
chunk__13503_13548 = G__13565;
count__13504_13549 = G__13566;
i__13505_13550 = G__13567;
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

var G__13568 = cljs.core.next(seq__13494_13540__$1);
var G__13569 = null;
var G__13570 = (0);
var G__13571 = (0);
seq__13494_13509 = G__13568;
chunk__13495_13510 = G__13569;
count__13496_13511 = G__13570;
i__13497_13512 = G__13571;
continue;
}
} else {
}
}
break;
}

var compute_13572 = ((function (vec__13491,f,sources){
return (function (p1__13487_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13487_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13487_SHARP_)));
});})(vec__13491,f,sources))
;
this$.thunk = ((function (compute_13572,vec__13491,f,sources){
return (function (){
return this$.state = compute_13572(this$.sources);
});})(compute_13572,vec__13491,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13488){
var G__13489 = cljs.core.first(seq13488);
var seq13488__$1 = cljs.core.next(seq13488);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13489,seq13488__$1);
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
var G__13573 = this$__$1;
var G__13574 = (function (){var G__13575 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13575) : f.call(null,G__13575));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13573,G__13574) : cljs.core.reset_BANG_.call(null,G__13573,G__13574));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13576 = this$__$1;
var G__13577 = (function (){var G__13578 = this$__$1.state;
var G__13579 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13578,G__13579) : f.call(null,G__13578,G__13579));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13576,G__13577) : cljs.core.reset_BANG_.call(null,G__13576,G__13577));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13580 = this$__$1;
var G__13581 = (function (){var G__13582 = this$__$1.state;
var G__13583 = a;
var G__13584 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13582,G__13583,G__13584) : f.call(null,G__13582,G__13583,G__13584));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13580,G__13581) : cljs.core.reset_BANG_.call(null,G__13580,G__13581));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13585 = this$__$1;
var G__13586 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13585,G__13586) : cljs.core.reset_BANG_.call(null,G__13585,G__13586));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13587 = cljs.core.seq(self__.watches);
var chunk__13588 = null;
var count__13589 = (0);
var i__13590 = (0);
while(true){
if((i__13590 < count__13589)){
var vec__13591 = chunk__13588.cljs$core$IIndexed$_nth$arity$2(null,i__13590);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13591,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13591,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13597 = seq__13587;
var G__13598 = chunk__13588;
var G__13599 = count__13589;
var G__13600 = (i__13590 + (1));
seq__13587 = G__13597;
chunk__13588 = G__13598;
count__13589 = G__13599;
i__13590 = G__13600;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13587);
if(temp__4657__auto__){
var seq__13587__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13587__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13587__$1);
var G__13601 = cljs.core.chunk_rest(seq__13587__$1);
var G__13602 = c__7656__auto__;
var G__13603 = cljs.core.count(c__7656__auto__);
var G__13604 = (0);
seq__13587 = G__13601;
chunk__13588 = G__13602;
count__13589 = G__13603;
i__13590 = G__13604;
continue;
} else {
var vec__13594 = cljs.core.first(seq__13587__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13594,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13594,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13605 = cljs.core.next(seq__13587__$1);
var G__13606 = null;
var G__13607 = (0);
var G__13608 = (0);
seq__13587 = G__13605;
chunk__13588 = G__13606;
count__13589 = G__13607;
i__13590 = G__13608;
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
var G__13611__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13610 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13610) : javelin.core.cell.call(null,G__13610));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13611 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13612__i = 0, G__13612__a = new Array(arguments.length -  0);
while (G__13612__i < G__13612__a.length) {G__13612__a[G__13612__i] = arguments[G__13612__i + 0]; ++G__13612__i;}
  sources = new cljs.core.IndexedSeq(G__13612__a,0);
} 
return G__13611__delegate.call(this,sources);};
G__13611.cljs$lang$maxFixedArity = 0;
G__13611.cljs$lang$applyTo = (function (arglist__13613){
var sources = cljs.core.seq(arglist__13613);
return G__13611__delegate(sources);
});
G__13611.cljs$core$IFn$_invoke$arity$variadic = G__13611__delegate;
return G__13611;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13614 = [];
var len__7950__auto___13622 = arguments.length;
var i__7951__auto___13623 = (0);
while(true){
if((i__7951__auto___13623 < len__7950__auto___13622)){
args13614.push((arguments[i__7951__auto___13623]));

var G__13624 = (i__7951__auto___13623 + (1));
i__7951__auto___13623 = G__13624;
continue;
} else {
}
break;
}

var G__13618 = args13614.length;
switch (G__13618) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13614.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7969__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13619){
var map__13620 = p__13619;
var map__13620__$1 = ((((!((map__13620 == null)))?((((map__13620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13620):map__13620);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13620__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13615){
var G__13616 = cljs.core.first(seq13615);
var seq13615__$1 = cljs.core.next(seq13615);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13616,seq13615__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13626_SHARP_){
var _STAR_tx_STAR_13630 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13631 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13631) : cljs.core.atom.call(null,G__13631));
})();

try{return (p1__13626_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13626_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13626_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13630;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13632 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13632;
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
var len__7950__auto___13640 = arguments.length;
var i__7951__auto___13641 = (0);
while(true){
if((i__7951__auto___13641 < len__7950__auto___13640)){
args__7957__auto__.push((arguments[i__7951__auto___13641]));

var G__13642 = (i__7951__auto___13641 + (1));
i__7951__auto___13641 = G__13642;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13639 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13639) : cljs.core.atom.call(null,G__13639));
})();
var tag_neq = ((function (olds){
return (function (p1__13633_SHARP_,p2__13634_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13633_SHARP_,p2__13634_SHARP_),p2__13634_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13636_SHARP_,p2__13635_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13636_SHARP_,p2__13635_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13643__delegate = function (rest__13637_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13637_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13637_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13637_SHARP_));

return news;
};
var G__13643 = function (var_args){
var rest__13637_SHARP_ = null;
if (arguments.length > 0) {
var G__13644__i = 0, G__13644__a = new Array(arguments.length -  0);
while (G__13644__i < G__13644__a.length) {G__13644__a[G__13644__i] = arguments[G__13644__i + 0]; ++G__13644__i;}
  rest__13637_SHARP_ = new cljs.core.IndexedSeq(G__13644__a,0);
} 
return G__13643__delegate.call(this,rest__13637_SHARP_);};
G__13643.cljs$lang$maxFixedArity = 0;
G__13643.cljs$lang$applyTo = (function (arglist__13645){
var rest__13637_SHARP_ = cljs.core.seq(arglist__13645);
return G__13643__delegate(rest__13637_SHARP_);
});
G__13643.cljs$core$IFn$_invoke$arity$variadic = G__13643__delegate;
return G__13643;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13638){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13638));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13646_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13646_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13647_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13647_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13654_13660 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13655_13661 = null;
var count__13656_13662 = (0);
var i__13657_13663 = (0);
while(true){
if((i__13657_13663 < count__13656_13662)){
var i_13664 = chunk__13655_13661.cljs$core$IIndexed$_nth$arity$2(null,i__13657_13663);
var G__13658_13665 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13664) : ith_item__$1.call(null,i_13664));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13658_13665) : f__$1.call(null,G__13658_13665));

var G__13666 = seq__13654_13660;
var G__13667 = chunk__13655_13661;
var G__13668 = count__13656_13662;
var G__13669 = (i__13657_13663 + (1));
seq__13654_13660 = G__13666;
chunk__13655_13661 = G__13667;
count__13656_13662 = G__13668;
i__13657_13663 = G__13669;
continue;
} else {
var temp__4657__auto___13670 = cljs.core.seq(seq__13654_13660);
if(temp__4657__auto___13670){
var seq__13654_13671__$1 = temp__4657__auto___13670;
if(cljs.core.chunked_seq_QMARK_(seq__13654_13671__$1)){
var c__7656__auto___13672 = cljs.core.chunk_first(seq__13654_13671__$1);
var G__13673 = cljs.core.chunk_rest(seq__13654_13671__$1);
var G__13674 = c__7656__auto___13672;
var G__13675 = cljs.core.count(c__7656__auto___13672);
var G__13676 = (0);
seq__13654_13660 = G__13673;
chunk__13655_13661 = G__13674;
count__13656_13662 = G__13675;
i__13657_13663 = G__13676;
continue;
} else {
var i_13677 = cljs.core.first(seq__13654_13671__$1);
var G__13659_13678 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13677) : ith_item__$1.call(null,i_13677));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13659_13678) : f__$1.call(null,G__13659_13678));

var G__13679 = cljs.core.next(seq__13654_13671__$1);
var G__13680 = null;
var G__13681 = (0);
var G__13682 = (0);
seq__13654_13660 = G__13679;
chunk__13655_13661 = G__13680;
count__13656_13662 = G__13681;
i__13657_13663 = G__13682;
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
