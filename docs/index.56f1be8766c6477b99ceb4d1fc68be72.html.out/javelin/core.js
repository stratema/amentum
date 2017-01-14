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

var G__13322 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13320_SHARP_,p2__13321_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13320_SHARP_,p2__13321_SHARP_,p2__13321_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13322;
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
}catch (e13324){if((e13324 instanceof Error)){
var _ = e13324;
return null;
} else {
throw e13324;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13327 = c;
javelin.core.add_sync_BANG_(G__13327);

return G__13327;
} else {
var G__13328 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13328));

return G__13328;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13339 = arguments.length;
var i__7951__auto___13340 = (0);
while(true){
if((i__7951__auto___13340 < len__7950__auto___13339)){
args__7957__auto__.push((arguments[i__7951__auto___13340]));

var G__13341 = (i__7951__auto___13340 + (1));
i__7951__auto___13340 = G__13341;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13331){
var vec__13332 = p__13331;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13332,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13335 = cljs.core.seq(srcs);
var chunk__13336 = null;
var count__13337 = (0);
var i__13338 = (0);
while(true){
if((i__13338 < count__13337)){
var src = chunk__13336.cljs$core$IIndexed$_nth$arity$2(null,i__13338);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13342 = seq__13335;
var G__13343 = chunk__13336;
var G__13344 = count__13337;
var G__13345 = (i__13338 + (1));
seq__13335 = G__13342;
chunk__13336 = G__13343;
count__13337 = G__13344;
i__13338 = G__13345;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13335);
if(temp__4657__auto__){
var seq__13335__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13335__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13335__$1);
var G__13346 = cljs.core.chunk_rest(seq__13335__$1);
var G__13347 = c__7656__auto__;
var G__13348 = cljs.core.count(c__7656__auto__);
var G__13349 = (0);
seq__13335 = G__13346;
chunk__13336 = G__13347;
count__13337 = G__13348;
i__13338 = G__13349;
continue;
} else {
var src = cljs.core.first(seq__13335__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13350 = cljs.core.next(seq__13335__$1);
var G__13351 = null;
var G__13352 = (0);
var G__13353 = (0);
seq__13335 = G__13350;
chunk__13336 = G__13351;
count__13337 = G__13352;
i__13338 = G__13353;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13329){
var G__13330 = cljs.core.first(seq13329);
var seq13329__$1 = cljs.core.next(seq13329);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13330,seq13329__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13374 = arguments.length;
var i__7951__auto___13375 = (0);
while(true){
if((i__7951__auto___13375 < len__7950__auto___13374)){
args__7957__auto__.push((arguments[i__7951__auto___13375]));

var G__13376 = (i__7951__auto___13375 + (1));
i__7951__auto___13375 = G__13376;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13358){
var vec__13359 = p__13358;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13359,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13359,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13362_13377 = cljs.core.seq(this$.sources);
var chunk__13363_13378 = null;
var count__13364_13379 = (0);
var i__13365_13380 = (0);
while(true){
if((i__13365_13380 < count__13364_13379)){
var source_13381 = chunk__13363_13378.cljs$core$IIndexed$_nth$arity$2(null,i__13365_13380);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13381) : javelin.core.cell_QMARK_.call(null,source_13381)))){
source_13381.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13381.sinks,this$);

if((source_13381.rank > this$.rank)){
var seq__13366_13382 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13362_13377,chunk__13363_13378,count__13364_13379,i__13365_13380,source_13381,vec__13359,f,sources){
return (function (p1__13354_SHARP_){
return p1__13354_SHARP_.sinks;
});})(seq__13362_13377,chunk__13363_13378,count__13364_13379,i__13365_13380,source_13381,vec__13359,f,sources))
,source_13381));
var chunk__13367_13383 = null;
var count__13368_13384 = (0);
var i__13369_13385 = (0);
while(true){
if((i__13369_13385 < count__13368_13384)){
var dep_13386 = chunk__13367_13383.cljs$core$IIndexed$_nth$arity$2(null,i__13369_13385);
dep_13386.rank = javelin.core.next_rank();

var G__13387 = seq__13366_13382;
var G__13388 = chunk__13367_13383;
var G__13389 = count__13368_13384;
var G__13390 = (i__13369_13385 + (1));
seq__13366_13382 = G__13387;
chunk__13367_13383 = G__13388;
count__13368_13384 = G__13389;
i__13369_13385 = G__13390;
continue;
} else {
var temp__4657__auto___13391 = cljs.core.seq(seq__13366_13382);
if(temp__4657__auto___13391){
var seq__13366_13392__$1 = temp__4657__auto___13391;
if(cljs.core.chunked_seq_QMARK_(seq__13366_13392__$1)){
var c__7656__auto___13393 = cljs.core.chunk_first(seq__13366_13392__$1);
var G__13394 = cljs.core.chunk_rest(seq__13366_13392__$1);
var G__13395 = c__7656__auto___13393;
var G__13396 = cljs.core.count(c__7656__auto___13393);
var G__13397 = (0);
seq__13366_13382 = G__13394;
chunk__13367_13383 = G__13395;
count__13368_13384 = G__13396;
i__13369_13385 = G__13397;
continue;
} else {
var dep_13398 = cljs.core.first(seq__13366_13392__$1);
dep_13398.rank = javelin.core.next_rank();

var G__13399 = cljs.core.next(seq__13366_13392__$1);
var G__13400 = null;
var G__13401 = (0);
var G__13402 = (0);
seq__13366_13382 = G__13399;
chunk__13367_13383 = G__13400;
count__13368_13384 = G__13401;
i__13369_13385 = G__13402;
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

var G__13403 = seq__13362_13377;
var G__13404 = chunk__13363_13378;
var G__13405 = count__13364_13379;
var G__13406 = (i__13365_13380 + (1));
seq__13362_13377 = G__13403;
chunk__13363_13378 = G__13404;
count__13364_13379 = G__13405;
i__13365_13380 = G__13406;
continue;
} else {
var temp__4657__auto___13407 = cljs.core.seq(seq__13362_13377);
if(temp__4657__auto___13407){
var seq__13362_13408__$1 = temp__4657__auto___13407;
if(cljs.core.chunked_seq_QMARK_(seq__13362_13408__$1)){
var c__7656__auto___13409 = cljs.core.chunk_first(seq__13362_13408__$1);
var G__13410 = cljs.core.chunk_rest(seq__13362_13408__$1);
var G__13411 = c__7656__auto___13409;
var G__13412 = cljs.core.count(c__7656__auto___13409);
var G__13413 = (0);
seq__13362_13377 = G__13410;
chunk__13363_13378 = G__13411;
count__13364_13379 = G__13412;
i__13365_13380 = G__13413;
continue;
} else {
var source_13414 = cljs.core.first(seq__13362_13408__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13414) : javelin.core.cell_QMARK_.call(null,source_13414)))){
source_13414.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13414.sinks,this$);

if((source_13414.rank > this$.rank)){
var seq__13370_13415 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13362_13377,chunk__13363_13378,count__13364_13379,i__13365_13380,source_13414,seq__13362_13408__$1,temp__4657__auto___13407,vec__13359,f,sources){
return (function (p1__13354_SHARP_){
return p1__13354_SHARP_.sinks;
});})(seq__13362_13377,chunk__13363_13378,count__13364_13379,i__13365_13380,source_13414,seq__13362_13408__$1,temp__4657__auto___13407,vec__13359,f,sources))
,source_13414));
var chunk__13371_13416 = null;
var count__13372_13417 = (0);
var i__13373_13418 = (0);
while(true){
if((i__13373_13418 < count__13372_13417)){
var dep_13419 = chunk__13371_13416.cljs$core$IIndexed$_nth$arity$2(null,i__13373_13418);
dep_13419.rank = javelin.core.next_rank();

var G__13420 = seq__13370_13415;
var G__13421 = chunk__13371_13416;
var G__13422 = count__13372_13417;
var G__13423 = (i__13373_13418 + (1));
seq__13370_13415 = G__13420;
chunk__13371_13416 = G__13421;
count__13372_13417 = G__13422;
i__13373_13418 = G__13423;
continue;
} else {
var temp__4657__auto___13424__$1 = cljs.core.seq(seq__13370_13415);
if(temp__4657__auto___13424__$1){
var seq__13370_13425__$1 = temp__4657__auto___13424__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13370_13425__$1)){
var c__7656__auto___13426 = cljs.core.chunk_first(seq__13370_13425__$1);
var G__13427 = cljs.core.chunk_rest(seq__13370_13425__$1);
var G__13428 = c__7656__auto___13426;
var G__13429 = cljs.core.count(c__7656__auto___13426);
var G__13430 = (0);
seq__13370_13415 = G__13427;
chunk__13371_13416 = G__13428;
count__13372_13417 = G__13429;
i__13373_13418 = G__13430;
continue;
} else {
var dep_13431 = cljs.core.first(seq__13370_13425__$1);
dep_13431.rank = javelin.core.next_rank();

var G__13432 = cljs.core.next(seq__13370_13425__$1);
var G__13433 = null;
var G__13434 = (0);
var G__13435 = (0);
seq__13370_13415 = G__13432;
chunk__13371_13416 = G__13433;
count__13372_13417 = G__13434;
i__13373_13418 = G__13435;
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

var G__13436 = cljs.core.next(seq__13362_13408__$1);
var G__13437 = null;
var G__13438 = (0);
var G__13439 = (0);
seq__13362_13377 = G__13436;
chunk__13363_13378 = G__13437;
count__13364_13379 = G__13438;
i__13365_13380 = G__13439;
continue;
}
} else {
}
}
break;
}

var compute_13440 = ((function (vec__13359,f,sources){
return (function (p1__13355_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13355_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13355_SHARP_)));
});})(vec__13359,f,sources))
;
this$.thunk = ((function (compute_13440,vec__13359,f,sources){
return (function (){
return this$.state = compute_13440(this$.sources);
});})(compute_13440,vec__13359,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13356){
var G__13357 = cljs.core.first(seq13356);
var seq13356__$1 = cljs.core.next(seq13356);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13357,seq13356__$1);
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
var G__13441 = this$__$1;
var G__13442 = (function (){var G__13443 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13443) : f.call(null,G__13443));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13441,G__13442) : cljs.core.reset_BANG_.call(null,G__13441,G__13442));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13444 = this$__$1;
var G__13445 = (function (){var G__13446 = this$__$1.state;
var G__13447 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13446,G__13447) : f.call(null,G__13446,G__13447));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13444,G__13445) : cljs.core.reset_BANG_.call(null,G__13444,G__13445));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13448 = this$__$1;
var G__13449 = (function (){var G__13450 = this$__$1.state;
var G__13451 = a;
var G__13452 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13450,G__13451,G__13452) : f.call(null,G__13450,G__13451,G__13452));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13448,G__13449) : cljs.core.reset_BANG_.call(null,G__13448,G__13449));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13453 = this$__$1;
var G__13454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13453,G__13454) : cljs.core.reset_BANG_.call(null,G__13453,G__13454));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13455 = cljs.core.seq(self__.watches);
var chunk__13456 = null;
var count__13457 = (0);
var i__13458 = (0);
while(true){
if((i__13458 < count__13457)){
var vec__13459 = chunk__13456.cljs$core$IIndexed$_nth$arity$2(null,i__13458);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13459,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13459,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13465 = seq__13455;
var G__13466 = chunk__13456;
var G__13467 = count__13457;
var G__13468 = (i__13458 + (1));
seq__13455 = G__13465;
chunk__13456 = G__13466;
count__13457 = G__13467;
i__13458 = G__13468;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13455);
if(temp__4657__auto__){
var seq__13455__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13455__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13455__$1);
var G__13469 = cljs.core.chunk_rest(seq__13455__$1);
var G__13470 = c__7656__auto__;
var G__13471 = cljs.core.count(c__7656__auto__);
var G__13472 = (0);
seq__13455 = G__13469;
chunk__13456 = G__13470;
count__13457 = G__13471;
i__13458 = G__13472;
continue;
} else {
var vec__13462 = cljs.core.first(seq__13455__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13473 = cljs.core.next(seq__13455__$1);
var G__13474 = null;
var G__13475 = (0);
var G__13476 = (0);
seq__13455 = G__13473;
chunk__13456 = G__13474;
count__13457 = G__13475;
i__13458 = G__13476;
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
var G__13479__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13478 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13478) : javelin.core.cell.call(null,G__13478));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13479 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13480__i = 0, G__13480__a = new Array(arguments.length -  0);
while (G__13480__i < G__13480__a.length) {G__13480__a[G__13480__i] = arguments[G__13480__i + 0]; ++G__13480__i;}
  sources = new cljs.core.IndexedSeq(G__13480__a,0);
} 
return G__13479__delegate.call(this,sources);};
G__13479.cljs$lang$maxFixedArity = 0;
G__13479.cljs$lang$applyTo = (function (arglist__13481){
var sources = cljs.core.seq(arglist__13481);
return G__13479__delegate(sources);
});
G__13479.cljs$core$IFn$_invoke$arity$variadic = G__13479__delegate;
return G__13479;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13482 = [];
var len__7950__auto___13490 = arguments.length;
var i__7951__auto___13491 = (0);
while(true){
if((i__7951__auto___13491 < len__7950__auto___13490)){
args13482.push((arguments[i__7951__auto___13491]));

var G__13492 = (i__7951__auto___13491 + (1));
i__7951__auto___13491 = G__13492;
continue;
} else {
}
break;
}

var G__13486 = args13482.length;
switch (G__13486) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13482.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7969__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13487){
var map__13488 = p__13487;
var map__13488__$1 = ((((!((map__13488 == null)))?((((map__13488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13488):map__13488);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13488__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13483){
var G__13484 = cljs.core.first(seq13483);
var seq13483__$1 = cljs.core.next(seq13483);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13484,seq13483__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13494_SHARP_){
var _STAR_tx_STAR_13498 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13499 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13499) : cljs.core.atom.call(null,G__13499));
})();

try{return (p1__13494_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13494_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13494_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13498;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13500 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13500;
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
var len__7950__auto___13508 = arguments.length;
var i__7951__auto___13509 = (0);
while(true){
if((i__7951__auto___13509 < len__7950__auto___13508)){
args__7957__auto__.push((arguments[i__7951__auto___13509]));

var G__13510 = (i__7951__auto___13509 + (1));
i__7951__auto___13509 = G__13510;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13507 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13507) : cljs.core.atom.call(null,G__13507));
})();
var tag_neq = ((function (olds){
return (function (p1__13501_SHARP_,p2__13502_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13501_SHARP_,p2__13502_SHARP_),p2__13502_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13504_SHARP_,p2__13503_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13504_SHARP_,p2__13503_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13511__delegate = function (rest__13505_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13505_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13505_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13505_SHARP_));

return news;
};
var G__13511 = function (var_args){
var rest__13505_SHARP_ = null;
if (arguments.length > 0) {
var G__13512__i = 0, G__13512__a = new Array(arguments.length -  0);
while (G__13512__i < G__13512__a.length) {G__13512__a[G__13512__i] = arguments[G__13512__i + 0]; ++G__13512__i;}
  rest__13505_SHARP_ = new cljs.core.IndexedSeq(G__13512__a,0);
} 
return G__13511__delegate.call(this,rest__13505_SHARP_);};
G__13511.cljs$lang$maxFixedArity = 0;
G__13511.cljs$lang$applyTo = (function (arglist__13513){
var rest__13505_SHARP_ = cljs.core.seq(arglist__13513);
return G__13511__delegate(rest__13505_SHARP_);
});
G__13511.cljs$core$IFn$_invoke$arity$variadic = G__13511__delegate;
return G__13511;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13506){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13506));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13514_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13514_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13515_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13515_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13522_13528 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13523_13529 = null;
var count__13524_13530 = (0);
var i__13525_13531 = (0);
while(true){
if((i__13525_13531 < count__13524_13530)){
var i_13532 = chunk__13523_13529.cljs$core$IIndexed$_nth$arity$2(null,i__13525_13531);
var G__13526_13533 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13532) : ith_item__$1.call(null,i_13532));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13526_13533) : f__$1.call(null,G__13526_13533));

var G__13534 = seq__13522_13528;
var G__13535 = chunk__13523_13529;
var G__13536 = count__13524_13530;
var G__13537 = (i__13525_13531 + (1));
seq__13522_13528 = G__13534;
chunk__13523_13529 = G__13535;
count__13524_13530 = G__13536;
i__13525_13531 = G__13537;
continue;
} else {
var temp__4657__auto___13538 = cljs.core.seq(seq__13522_13528);
if(temp__4657__auto___13538){
var seq__13522_13539__$1 = temp__4657__auto___13538;
if(cljs.core.chunked_seq_QMARK_(seq__13522_13539__$1)){
var c__7656__auto___13540 = cljs.core.chunk_first(seq__13522_13539__$1);
var G__13541 = cljs.core.chunk_rest(seq__13522_13539__$1);
var G__13542 = c__7656__auto___13540;
var G__13543 = cljs.core.count(c__7656__auto___13540);
var G__13544 = (0);
seq__13522_13528 = G__13541;
chunk__13523_13529 = G__13542;
count__13524_13530 = G__13543;
i__13525_13531 = G__13544;
continue;
} else {
var i_13545 = cljs.core.first(seq__13522_13539__$1);
var G__13527_13546 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13545) : ith_item__$1.call(null,i_13545));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13527_13546) : f__$1.call(null,G__13527_13546));

var G__13547 = cljs.core.next(seq__13522_13539__$1);
var G__13548 = null;
var G__13549 = (0);
var G__13550 = (0);
seq__13522_13528 = G__13547;
chunk__13523_13529 = G__13548;
count__13524_13530 = G__13549;
i__13525_13531 = G__13550;
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
