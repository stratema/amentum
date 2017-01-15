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

var G__13453 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13451_SHARP_,p2__13452_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13451_SHARP_,p2__13452_SHARP_,p2__13452_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13453;
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
}catch (e13455){if((e13455 instanceof Error)){
var _ = e13455;
return null;
} else {
throw e13455;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13458 = c;
javelin.core.add_sync_BANG_(G__13458);

return G__13458;
} else {
var G__13459 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13459));

return G__13459;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13470 = arguments.length;
var i__7951__auto___13471 = (0);
while(true){
if((i__7951__auto___13471 < len__7950__auto___13470)){
args__7957__auto__.push((arguments[i__7951__auto___13471]));

var G__13472 = (i__7951__auto___13471 + (1));
i__7951__auto___13471 = G__13472;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13462){
var vec__13463 = p__13462;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13463,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13466 = cljs.core.seq(srcs);
var chunk__13467 = null;
var count__13468 = (0);
var i__13469 = (0);
while(true){
if((i__13469 < count__13468)){
var src = chunk__13467.cljs$core$IIndexed$_nth$arity$2(null,i__13469);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13473 = seq__13466;
var G__13474 = chunk__13467;
var G__13475 = count__13468;
var G__13476 = (i__13469 + (1));
seq__13466 = G__13473;
chunk__13467 = G__13474;
count__13468 = G__13475;
i__13469 = G__13476;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13466);
if(temp__4657__auto__){
var seq__13466__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13466__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13466__$1);
var G__13477 = cljs.core.chunk_rest(seq__13466__$1);
var G__13478 = c__7656__auto__;
var G__13479 = cljs.core.count(c__7656__auto__);
var G__13480 = (0);
seq__13466 = G__13477;
chunk__13467 = G__13478;
count__13468 = G__13479;
i__13469 = G__13480;
continue;
} else {
var src = cljs.core.first(seq__13466__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13481 = cljs.core.next(seq__13466__$1);
var G__13482 = null;
var G__13483 = (0);
var G__13484 = (0);
seq__13466 = G__13481;
chunk__13467 = G__13482;
count__13468 = G__13483;
i__13469 = G__13484;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13460){
var G__13461 = cljs.core.first(seq13460);
var seq13460__$1 = cljs.core.next(seq13460);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13461,seq13460__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13505 = arguments.length;
var i__7951__auto___13506 = (0);
while(true){
if((i__7951__auto___13506 < len__7950__auto___13505)){
args__7957__auto__.push((arguments[i__7951__auto___13506]));

var G__13507 = (i__7951__auto___13506 + (1));
i__7951__auto___13506 = G__13507;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13489){
var vec__13490 = p__13489;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13490,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13490,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13493_13508 = cljs.core.seq(this$.sources);
var chunk__13494_13509 = null;
var count__13495_13510 = (0);
var i__13496_13511 = (0);
while(true){
if((i__13496_13511 < count__13495_13510)){
var source_13512 = chunk__13494_13509.cljs$core$IIndexed$_nth$arity$2(null,i__13496_13511);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13512) : javelin.core.cell_QMARK_.call(null,source_13512)))){
source_13512.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13512.sinks,this$);

if((source_13512.rank > this$.rank)){
var seq__13497_13513 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13493_13508,chunk__13494_13509,count__13495_13510,i__13496_13511,source_13512,vec__13490,f,sources){
return (function (p1__13485_SHARP_){
return p1__13485_SHARP_.sinks;
});})(seq__13493_13508,chunk__13494_13509,count__13495_13510,i__13496_13511,source_13512,vec__13490,f,sources))
,source_13512));
var chunk__13498_13514 = null;
var count__13499_13515 = (0);
var i__13500_13516 = (0);
while(true){
if((i__13500_13516 < count__13499_13515)){
var dep_13517 = chunk__13498_13514.cljs$core$IIndexed$_nth$arity$2(null,i__13500_13516);
dep_13517.rank = javelin.core.next_rank();

var G__13518 = seq__13497_13513;
var G__13519 = chunk__13498_13514;
var G__13520 = count__13499_13515;
var G__13521 = (i__13500_13516 + (1));
seq__13497_13513 = G__13518;
chunk__13498_13514 = G__13519;
count__13499_13515 = G__13520;
i__13500_13516 = G__13521;
continue;
} else {
var temp__4657__auto___13522 = cljs.core.seq(seq__13497_13513);
if(temp__4657__auto___13522){
var seq__13497_13523__$1 = temp__4657__auto___13522;
if(cljs.core.chunked_seq_QMARK_(seq__13497_13523__$1)){
var c__7656__auto___13524 = cljs.core.chunk_first(seq__13497_13523__$1);
var G__13525 = cljs.core.chunk_rest(seq__13497_13523__$1);
var G__13526 = c__7656__auto___13524;
var G__13527 = cljs.core.count(c__7656__auto___13524);
var G__13528 = (0);
seq__13497_13513 = G__13525;
chunk__13498_13514 = G__13526;
count__13499_13515 = G__13527;
i__13500_13516 = G__13528;
continue;
} else {
var dep_13529 = cljs.core.first(seq__13497_13523__$1);
dep_13529.rank = javelin.core.next_rank();

var G__13530 = cljs.core.next(seq__13497_13523__$1);
var G__13531 = null;
var G__13532 = (0);
var G__13533 = (0);
seq__13497_13513 = G__13530;
chunk__13498_13514 = G__13531;
count__13499_13515 = G__13532;
i__13500_13516 = G__13533;
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

var G__13534 = seq__13493_13508;
var G__13535 = chunk__13494_13509;
var G__13536 = count__13495_13510;
var G__13537 = (i__13496_13511 + (1));
seq__13493_13508 = G__13534;
chunk__13494_13509 = G__13535;
count__13495_13510 = G__13536;
i__13496_13511 = G__13537;
continue;
} else {
var temp__4657__auto___13538 = cljs.core.seq(seq__13493_13508);
if(temp__4657__auto___13538){
var seq__13493_13539__$1 = temp__4657__auto___13538;
if(cljs.core.chunked_seq_QMARK_(seq__13493_13539__$1)){
var c__7656__auto___13540 = cljs.core.chunk_first(seq__13493_13539__$1);
var G__13541 = cljs.core.chunk_rest(seq__13493_13539__$1);
var G__13542 = c__7656__auto___13540;
var G__13543 = cljs.core.count(c__7656__auto___13540);
var G__13544 = (0);
seq__13493_13508 = G__13541;
chunk__13494_13509 = G__13542;
count__13495_13510 = G__13543;
i__13496_13511 = G__13544;
continue;
} else {
var source_13545 = cljs.core.first(seq__13493_13539__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13545) : javelin.core.cell_QMARK_.call(null,source_13545)))){
source_13545.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13545.sinks,this$);

if((source_13545.rank > this$.rank)){
var seq__13501_13546 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13493_13508,chunk__13494_13509,count__13495_13510,i__13496_13511,source_13545,seq__13493_13539__$1,temp__4657__auto___13538,vec__13490,f,sources){
return (function (p1__13485_SHARP_){
return p1__13485_SHARP_.sinks;
});})(seq__13493_13508,chunk__13494_13509,count__13495_13510,i__13496_13511,source_13545,seq__13493_13539__$1,temp__4657__auto___13538,vec__13490,f,sources))
,source_13545));
var chunk__13502_13547 = null;
var count__13503_13548 = (0);
var i__13504_13549 = (0);
while(true){
if((i__13504_13549 < count__13503_13548)){
var dep_13550 = chunk__13502_13547.cljs$core$IIndexed$_nth$arity$2(null,i__13504_13549);
dep_13550.rank = javelin.core.next_rank();

var G__13551 = seq__13501_13546;
var G__13552 = chunk__13502_13547;
var G__13553 = count__13503_13548;
var G__13554 = (i__13504_13549 + (1));
seq__13501_13546 = G__13551;
chunk__13502_13547 = G__13552;
count__13503_13548 = G__13553;
i__13504_13549 = G__13554;
continue;
} else {
var temp__4657__auto___13555__$1 = cljs.core.seq(seq__13501_13546);
if(temp__4657__auto___13555__$1){
var seq__13501_13556__$1 = temp__4657__auto___13555__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13501_13556__$1)){
var c__7656__auto___13557 = cljs.core.chunk_first(seq__13501_13556__$1);
var G__13558 = cljs.core.chunk_rest(seq__13501_13556__$1);
var G__13559 = c__7656__auto___13557;
var G__13560 = cljs.core.count(c__7656__auto___13557);
var G__13561 = (0);
seq__13501_13546 = G__13558;
chunk__13502_13547 = G__13559;
count__13503_13548 = G__13560;
i__13504_13549 = G__13561;
continue;
} else {
var dep_13562 = cljs.core.first(seq__13501_13556__$1);
dep_13562.rank = javelin.core.next_rank();

var G__13563 = cljs.core.next(seq__13501_13556__$1);
var G__13564 = null;
var G__13565 = (0);
var G__13566 = (0);
seq__13501_13546 = G__13563;
chunk__13502_13547 = G__13564;
count__13503_13548 = G__13565;
i__13504_13549 = G__13566;
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

var G__13567 = cljs.core.next(seq__13493_13539__$1);
var G__13568 = null;
var G__13569 = (0);
var G__13570 = (0);
seq__13493_13508 = G__13567;
chunk__13494_13509 = G__13568;
count__13495_13510 = G__13569;
i__13496_13511 = G__13570;
continue;
}
} else {
}
}
break;
}

var compute_13571 = ((function (vec__13490,f,sources){
return (function (p1__13486_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13486_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13486_SHARP_)));
});})(vec__13490,f,sources))
;
this$.thunk = ((function (compute_13571,vec__13490,f,sources){
return (function (){
return this$.state = compute_13571(this$.sources);
});})(compute_13571,vec__13490,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13487){
var G__13488 = cljs.core.first(seq13487);
var seq13487__$1 = cljs.core.next(seq13487);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13488,seq13487__$1);
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
var G__13572 = this$__$1;
var G__13573 = (function (){var G__13574 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13574) : f.call(null,G__13574));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13572,G__13573) : cljs.core.reset_BANG_.call(null,G__13572,G__13573));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13575 = this$__$1;
var G__13576 = (function (){var G__13577 = this$__$1.state;
var G__13578 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13577,G__13578) : f.call(null,G__13577,G__13578));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13575,G__13576) : cljs.core.reset_BANG_.call(null,G__13575,G__13576));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13579 = this$__$1;
var G__13580 = (function (){var G__13581 = this$__$1.state;
var G__13582 = a;
var G__13583 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13581,G__13582,G__13583) : f.call(null,G__13581,G__13582,G__13583));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13579,G__13580) : cljs.core.reset_BANG_.call(null,G__13579,G__13580));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13584 = this$__$1;
var G__13585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13584,G__13585) : cljs.core.reset_BANG_.call(null,G__13584,G__13585));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13586 = cljs.core.seq(self__.watches);
var chunk__13587 = null;
var count__13588 = (0);
var i__13589 = (0);
while(true){
if((i__13589 < count__13588)){
var vec__13590 = chunk__13587.cljs$core$IIndexed$_nth$arity$2(null,i__13589);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13590,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13590,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13596 = seq__13586;
var G__13597 = chunk__13587;
var G__13598 = count__13588;
var G__13599 = (i__13589 + (1));
seq__13586 = G__13596;
chunk__13587 = G__13597;
count__13588 = G__13598;
i__13589 = G__13599;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13586);
if(temp__4657__auto__){
var seq__13586__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13586__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13586__$1);
var G__13600 = cljs.core.chunk_rest(seq__13586__$1);
var G__13601 = c__7656__auto__;
var G__13602 = cljs.core.count(c__7656__auto__);
var G__13603 = (0);
seq__13586 = G__13600;
chunk__13587 = G__13601;
count__13588 = G__13602;
i__13589 = G__13603;
continue;
} else {
var vec__13593 = cljs.core.first(seq__13586__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13593,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13593,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13604 = cljs.core.next(seq__13586__$1);
var G__13605 = null;
var G__13606 = (0);
var G__13607 = (0);
seq__13586 = G__13604;
chunk__13587 = G__13605;
count__13588 = G__13606;
i__13589 = G__13607;
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
var G__13610__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13609 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13609) : javelin.core.cell.call(null,G__13609));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13610 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13611__i = 0, G__13611__a = new Array(arguments.length -  0);
while (G__13611__i < G__13611__a.length) {G__13611__a[G__13611__i] = arguments[G__13611__i + 0]; ++G__13611__i;}
  sources = new cljs.core.IndexedSeq(G__13611__a,0);
} 
return G__13610__delegate.call(this,sources);};
G__13610.cljs$lang$maxFixedArity = 0;
G__13610.cljs$lang$applyTo = (function (arglist__13612){
var sources = cljs.core.seq(arglist__13612);
return G__13610__delegate(sources);
});
G__13610.cljs$core$IFn$_invoke$arity$variadic = G__13610__delegate;
return G__13610;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13613 = [];
var len__7950__auto___13621 = arguments.length;
var i__7951__auto___13622 = (0);
while(true){
if((i__7951__auto___13622 < len__7950__auto___13621)){
args13613.push((arguments[i__7951__auto___13622]));

var G__13623 = (i__7951__auto___13622 + (1));
i__7951__auto___13622 = G__13623;
continue;
} else {
}
break;
}

var G__13617 = args13613.length;
switch (G__13617) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13613.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7969__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13618){
var map__13619 = p__13618;
var map__13619__$1 = ((((!((map__13619 == null)))?((((map__13619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13619):map__13619);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13619__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13614){
var G__13615 = cljs.core.first(seq13614);
var seq13614__$1 = cljs.core.next(seq13614);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13615,seq13614__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13625_SHARP_){
var _STAR_tx_STAR_13629 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13630 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13630) : cljs.core.atom.call(null,G__13630));
})();

try{return (p1__13625_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13625_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13625_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13629;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13631 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13631;
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
var len__7950__auto___13639 = arguments.length;
var i__7951__auto___13640 = (0);
while(true){
if((i__7951__auto___13640 < len__7950__auto___13639)){
args__7957__auto__.push((arguments[i__7951__auto___13640]));

var G__13641 = (i__7951__auto___13640 + (1));
i__7951__auto___13640 = G__13641;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13638 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13638) : cljs.core.atom.call(null,G__13638));
})();
var tag_neq = ((function (olds){
return (function (p1__13632_SHARP_,p2__13633_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13632_SHARP_,p2__13633_SHARP_),p2__13633_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13635_SHARP_,p2__13634_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13635_SHARP_,p2__13634_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13642__delegate = function (rest__13636_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13636_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13636_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13636_SHARP_));

return news;
};
var G__13642 = function (var_args){
var rest__13636_SHARP_ = null;
if (arguments.length > 0) {
var G__13643__i = 0, G__13643__a = new Array(arguments.length -  0);
while (G__13643__i < G__13643__a.length) {G__13643__a[G__13643__i] = arguments[G__13643__i + 0]; ++G__13643__i;}
  rest__13636_SHARP_ = new cljs.core.IndexedSeq(G__13643__a,0);
} 
return G__13642__delegate.call(this,rest__13636_SHARP_);};
G__13642.cljs$lang$maxFixedArity = 0;
G__13642.cljs$lang$applyTo = (function (arglist__13644){
var rest__13636_SHARP_ = cljs.core.seq(arglist__13644);
return G__13642__delegate(rest__13636_SHARP_);
});
G__13642.cljs$core$IFn$_invoke$arity$variadic = G__13642__delegate;
return G__13642;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13637){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13637));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13645_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13645_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13646_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13646_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13653_13659 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13654_13660 = null;
var count__13655_13661 = (0);
var i__13656_13662 = (0);
while(true){
if((i__13656_13662 < count__13655_13661)){
var i_13663 = chunk__13654_13660.cljs$core$IIndexed$_nth$arity$2(null,i__13656_13662);
var G__13657_13664 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13663) : ith_item__$1.call(null,i_13663));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13657_13664) : f__$1.call(null,G__13657_13664));

var G__13665 = seq__13653_13659;
var G__13666 = chunk__13654_13660;
var G__13667 = count__13655_13661;
var G__13668 = (i__13656_13662 + (1));
seq__13653_13659 = G__13665;
chunk__13654_13660 = G__13666;
count__13655_13661 = G__13667;
i__13656_13662 = G__13668;
continue;
} else {
var temp__4657__auto___13669 = cljs.core.seq(seq__13653_13659);
if(temp__4657__auto___13669){
var seq__13653_13670__$1 = temp__4657__auto___13669;
if(cljs.core.chunked_seq_QMARK_(seq__13653_13670__$1)){
var c__7656__auto___13671 = cljs.core.chunk_first(seq__13653_13670__$1);
var G__13672 = cljs.core.chunk_rest(seq__13653_13670__$1);
var G__13673 = c__7656__auto___13671;
var G__13674 = cljs.core.count(c__7656__auto___13671);
var G__13675 = (0);
seq__13653_13659 = G__13672;
chunk__13654_13660 = G__13673;
count__13655_13661 = G__13674;
i__13656_13662 = G__13675;
continue;
} else {
var i_13676 = cljs.core.first(seq__13653_13670__$1);
var G__13658_13677 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13676) : ith_item__$1.call(null,i_13676));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13658_13677) : f__$1.call(null,G__13658_13677));

var G__13678 = cljs.core.next(seq__13653_13670__$1);
var G__13679 = null;
var G__13680 = (0);
var G__13681 = (0);
seq__13653_13659 = G__13678;
chunk__13654_13660 = G__13679;
count__13655_13661 = G__13680;
i__13656_13662 = G__13681;
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
