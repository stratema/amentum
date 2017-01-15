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

var G__13324 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13322_SHARP_,p2__13323_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13322_SHARP_,p2__13323_SHARP_,p2__13323_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13324;
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
}catch (e13326){if((e13326 instanceof Error)){
var _ = e13326;
return null;
} else {
throw e13326;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13329 = c;
javelin.core.add_sync_BANG_(G__13329);

return G__13329;
} else {
var G__13330 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13330));

return G__13330;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13341 = arguments.length;
var i__7951__auto___13342 = (0);
while(true){
if((i__7951__auto___13342 < len__7950__auto___13341)){
args__7957__auto__.push((arguments[i__7951__auto___13342]));

var G__13343 = (i__7951__auto___13342 + (1));
i__7951__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13333){
var vec__13334 = p__13333;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13334,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13337 = cljs.core.seq(srcs);
var chunk__13338 = null;
var count__13339 = (0);
var i__13340 = (0);
while(true){
if((i__13340 < count__13339)){
var src = chunk__13338.cljs$core$IIndexed$_nth$arity$2(null,i__13340);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13344 = seq__13337;
var G__13345 = chunk__13338;
var G__13346 = count__13339;
var G__13347 = (i__13340 + (1));
seq__13337 = G__13344;
chunk__13338 = G__13345;
count__13339 = G__13346;
i__13340 = G__13347;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13337);
if(temp__4657__auto__){
var seq__13337__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13337__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13337__$1);
var G__13348 = cljs.core.chunk_rest(seq__13337__$1);
var G__13349 = c__7656__auto__;
var G__13350 = cljs.core.count(c__7656__auto__);
var G__13351 = (0);
seq__13337 = G__13348;
chunk__13338 = G__13349;
count__13339 = G__13350;
i__13340 = G__13351;
continue;
} else {
var src = cljs.core.first(seq__13337__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13352 = cljs.core.next(seq__13337__$1);
var G__13353 = null;
var G__13354 = (0);
var G__13355 = (0);
seq__13337 = G__13352;
chunk__13338 = G__13353;
count__13339 = G__13354;
i__13340 = G__13355;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13331){
var G__13332 = cljs.core.first(seq13331);
var seq13331__$1 = cljs.core.next(seq13331);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13332,seq13331__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13376 = arguments.length;
var i__7951__auto___13377 = (0);
while(true){
if((i__7951__auto___13377 < len__7950__auto___13376)){
args__7957__auto__.push((arguments[i__7951__auto___13377]));

var G__13378 = (i__7951__auto___13377 + (1));
i__7951__auto___13377 = G__13378;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13360){
var vec__13361 = p__13360;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13361,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13361,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13364_13379 = cljs.core.seq(this$.sources);
var chunk__13365_13380 = null;
var count__13366_13381 = (0);
var i__13367_13382 = (0);
while(true){
if((i__13367_13382 < count__13366_13381)){
var source_13383 = chunk__13365_13380.cljs$core$IIndexed$_nth$arity$2(null,i__13367_13382);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13383) : javelin.core.cell_QMARK_.call(null,source_13383)))){
source_13383.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13383.sinks,this$);

if((source_13383.rank > this$.rank)){
var seq__13368_13384 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13364_13379,chunk__13365_13380,count__13366_13381,i__13367_13382,source_13383,vec__13361,f,sources){
return (function (p1__13356_SHARP_){
return p1__13356_SHARP_.sinks;
});})(seq__13364_13379,chunk__13365_13380,count__13366_13381,i__13367_13382,source_13383,vec__13361,f,sources))
,source_13383));
var chunk__13369_13385 = null;
var count__13370_13386 = (0);
var i__13371_13387 = (0);
while(true){
if((i__13371_13387 < count__13370_13386)){
var dep_13388 = chunk__13369_13385.cljs$core$IIndexed$_nth$arity$2(null,i__13371_13387);
dep_13388.rank = javelin.core.next_rank();

var G__13389 = seq__13368_13384;
var G__13390 = chunk__13369_13385;
var G__13391 = count__13370_13386;
var G__13392 = (i__13371_13387 + (1));
seq__13368_13384 = G__13389;
chunk__13369_13385 = G__13390;
count__13370_13386 = G__13391;
i__13371_13387 = G__13392;
continue;
} else {
var temp__4657__auto___13393 = cljs.core.seq(seq__13368_13384);
if(temp__4657__auto___13393){
var seq__13368_13394__$1 = temp__4657__auto___13393;
if(cljs.core.chunked_seq_QMARK_(seq__13368_13394__$1)){
var c__7656__auto___13395 = cljs.core.chunk_first(seq__13368_13394__$1);
var G__13396 = cljs.core.chunk_rest(seq__13368_13394__$1);
var G__13397 = c__7656__auto___13395;
var G__13398 = cljs.core.count(c__7656__auto___13395);
var G__13399 = (0);
seq__13368_13384 = G__13396;
chunk__13369_13385 = G__13397;
count__13370_13386 = G__13398;
i__13371_13387 = G__13399;
continue;
} else {
var dep_13400 = cljs.core.first(seq__13368_13394__$1);
dep_13400.rank = javelin.core.next_rank();

var G__13401 = cljs.core.next(seq__13368_13394__$1);
var G__13402 = null;
var G__13403 = (0);
var G__13404 = (0);
seq__13368_13384 = G__13401;
chunk__13369_13385 = G__13402;
count__13370_13386 = G__13403;
i__13371_13387 = G__13404;
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

var G__13405 = seq__13364_13379;
var G__13406 = chunk__13365_13380;
var G__13407 = count__13366_13381;
var G__13408 = (i__13367_13382 + (1));
seq__13364_13379 = G__13405;
chunk__13365_13380 = G__13406;
count__13366_13381 = G__13407;
i__13367_13382 = G__13408;
continue;
} else {
var temp__4657__auto___13409 = cljs.core.seq(seq__13364_13379);
if(temp__4657__auto___13409){
var seq__13364_13410__$1 = temp__4657__auto___13409;
if(cljs.core.chunked_seq_QMARK_(seq__13364_13410__$1)){
var c__7656__auto___13411 = cljs.core.chunk_first(seq__13364_13410__$1);
var G__13412 = cljs.core.chunk_rest(seq__13364_13410__$1);
var G__13413 = c__7656__auto___13411;
var G__13414 = cljs.core.count(c__7656__auto___13411);
var G__13415 = (0);
seq__13364_13379 = G__13412;
chunk__13365_13380 = G__13413;
count__13366_13381 = G__13414;
i__13367_13382 = G__13415;
continue;
} else {
var source_13416 = cljs.core.first(seq__13364_13410__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13416) : javelin.core.cell_QMARK_.call(null,source_13416)))){
source_13416.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13416.sinks,this$);

if((source_13416.rank > this$.rank)){
var seq__13372_13417 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13364_13379,chunk__13365_13380,count__13366_13381,i__13367_13382,source_13416,seq__13364_13410__$1,temp__4657__auto___13409,vec__13361,f,sources){
return (function (p1__13356_SHARP_){
return p1__13356_SHARP_.sinks;
});})(seq__13364_13379,chunk__13365_13380,count__13366_13381,i__13367_13382,source_13416,seq__13364_13410__$1,temp__4657__auto___13409,vec__13361,f,sources))
,source_13416));
var chunk__13373_13418 = null;
var count__13374_13419 = (0);
var i__13375_13420 = (0);
while(true){
if((i__13375_13420 < count__13374_13419)){
var dep_13421 = chunk__13373_13418.cljs$core$IIndexed$_nth$arity$2(null,i__13375_13420);
dep_13421.rank = javelin.core.next_rank();

var G__13422 = seq__13372_13417;
var G__13423 = chunk__13373_13418;
var G__13424 = count__13374_13419;
var G__13425 = (i__13375_13420 + (1));
seq__13372_13417 = G__13422;
chunk__13373_13418 = G__13423;
count__13374_13419 = G__13424;
i__13375_13420 = G__13425;
continue;
} else {
var temp__4657__auto___13426__$1 = cljs.core.seq(seq__13372_13417);
if(temp__4657__auto___13426__$1){
var seq__13372_13427__$1 = temp__4657__auto___13426__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13372_13427__$1)){
var c__7656__auto___13428 = cljs.core.chunk_first(seq__13372_13427__$1);
var G__13429 = cljs.core.chunk_rest(seq__13372_13427__$1);
var G__13430 = c__7656__auto___13428;
var G__13431 = cljs.core.count(c__7656__auto___13428);
var G__13432 = (0);
seq__13372_13417 = G__13429;
chunk__13373_13418 = G__13430;
count__13374_13419 = G__13431;
i__13375_13420 = G__13432;
continue;
} else {
var dep_13433 = cljs.core.first(seq__13372_13427__$1);
dep_13433.rank = javelin.core.next_rank();

var G__13434 = cljs.core.next(seq__13372_13427__$1);
var G__13435 = null;
var G__13436 = (0);
var G__13437 = (0);
seq__13372_13417 = G__13434;
chunk__13373_13418 = G__13435;
count__13374_13419 = G__13436;
i__13375_13420 = G__13437;
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

var G__13438 = cljs.core.next(seq__13364_13410__$1);
var G__13439 = null;
var G__13440 = (0);
var G__13441 = (0);
seq__13364_13379 = G__13438;
chunk__13365_13380 = G__13439;
count__13366_13381 = G__13440;
i__13367_13382 = G__13441;
continue;
}
} else {
}
}
break;
}

var compute_13442 = ((function (vec__13361,f,sources){
return (function (p1__13357_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13357_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13357_SHARP_)));
});})(vec__13361,f,sources))
;
this$.thunk = ((function (compute_13442,vec__13361,f,sources){
return (function (){
return this$.state = compute_13442(this$.sources);
});})(compute_13442,vec__13361,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13358){
var G__13359 = cljs.core.first(seq13358);
var seq13358__$1 = cljs.core.next(seq13358);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13359,seq13358__$1);
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
var G__13443 = this$__$1;
var G__13444 = (function (){var G__13445 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13445) : f.call(null,G__13445));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13443,G__13444) : cljs.core.reset_BANG_.call(null,G__13443,G__13444));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13446 = this$__$1;
var G__13447 = (function (){var G__13448 = this$__$1.state;
var G__13449 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13448,G__13449) : f.call(null,G__13448,G__13449));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13446,G__13447) : cljs.core.reset_BANG_.call(null,G__13446,G__13447));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13450 = this$__$1;
var G__13451 = (function (){var G__13452 = this$__$1.state;
var G__13453 = a;
var G__13454 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13452,G__13453,G__13454) : f.call(null,G__13452,G__13453,G__13454));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13450,G__13451) : cljs.core.reset_BANG_.call(null,G__13450,G__13451));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13455 = this$__$1;
var G__13456 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13455,G__13456) : cljs.core.reset_BANG_.call(null,G__13455,G__13456));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13457 = cljs.core.seq(self__.watches);
var chunk__13458 = null;
var count__13459 = (0);
var i__13460 = (0);
while(true){
if((i__13460 < count__13459)){
var vec__13461 = chunk__13458.cljs$core$IIndexed$_nth$arity$2(null,i__13460);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13461,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13461,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13467 = seq__13457;
var G__13468 = chunk__13458;
var G__13469 = count__13459;
var G__13470 = (i__13460 + (1));
seq__13457 = G__13467;
chunk__13458 = G__13468;
count__13459 = G__13469;
i__13460 = G__13470;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13457);
if(temp__4657__auto__){
var seq__13457__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13457__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13457__$1);
var G__13471 = cljs.core.chunk_rest(seq__13457__$1);
var G__13472 = c__7656__auto__;
var G__13473 = cljs.core.count(c__7656__auto__);
var G__13474 = (0);
seq__13457 = G__13471;
chunk__13458 = G__13472;
count__13459 = G__13473;
i__13460 = G__13474;
continue;
} else {
var vec__13464 = cljs.core.first(seq__13457__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13464,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13464,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13475 = cljs.core.next(seq__13457__$1);
var G__13476 = null;
var G__13477 = (0);
var G__13478 = (0);
seq__13457 = G__13475;
chunk__13458 = G__13476;
count__13459 = G__13477;
i__13460 = G__13478;
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
var G__13481__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13480 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13480) : javelin.core.cell.call(null,G__13480));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13481 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13482__i = 0, G__13482__a = new Array(arguments.length -  0);
while (G__13482__i < G__13482__a.length) {G__13482__a[G__13482__i] = arguments[G__13482__i + 0]; ++G__13482__i;}
  sources = new cljs.core.IndexedSeq(G__13482__a,0);
} 
return G__13481__delegate.call(this,sources);};
G__13481.cljs$lang$maxFixedArity = 0;
G__13481.cljs$lang$applyTo = (function (arglist__13483){
var sources = cljs.core.seq(arglist__13483);
return G__13481__delegate(sources);
});
G__13481.cljs$core$IFn$_invoke$arity$variadic = G__13481__delegate;
return G__13481;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13484 = [];
var len__7950__auto___13492 = arguments.length;
var i__7951__auto___13493 = (0);
while(true){
if((i__7951__auto___13493 < len__7950__auto___13492)){
args13484.push((arguments[i__7951__auto___13493]));

var G__13494 = (i__7951__auto___13493 + (1));
i__7951__auto___13493 = G__13494;
continue;
} else {
}
break;
}

var G__13488 = args13484.length;
switch (G__13488) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13484.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7969__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13489){
var map__13490 = p__13489;
var map__13490__$1 = ((((!((map__13490 == null)))?((((map__13490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13490):map__13490);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13490__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13485){
var G__13486 = cljs.core.first(seq13485);
var seq13485__$1 = cljs.core.next(seq13485);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13486,seq13485__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13496_SHARP_){
var _STAR_tx_STAR_13500 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13501 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13501) : cljs.core.atom.call(null,G__13501));
})();

try{return (p1__13496_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13496_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13496_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13500;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13502 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13502;
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
var len__7950__auto___13510 = arguments.length;
var i__7951__auto___13511 = (0);
while(true){
if((i__7951__auto___13511 < len__7950__auto___13510)){
args__7957__auto__.push((arguments[i__7951__auto___13511]));

var G__13512 = (i__7951__auto___13511 + (1));
i__7951__auto___13511 = G__13512;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13509 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13509) : cljs.core.atom.call(null,G__13509));
})();
var tag_neq = ((function (olds){
return (function (p1__13503_SHARP_,p2__13504_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13503_SHARP_,p2__13504_SHARP_),p2__13504_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13506_SHARP_,p2__13505_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13506_SHARP_,p2__13505_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13513__delegate = function (rest__13507_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13507_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13507_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13507_SHARP_));

return news;
};
var G__13513 = function (var_args){
var rest__13507_SHARP_ = null;
if (arguments.length > 0) {
var G__13514__i = 0, G__13514__a = new Array(arguments.length -  0);
while (G__13514__i < G__13514__a.length) {G__13514__a[G__13514__i] = arguments[G__13514__i + 0]; ++G__13514__i;}
  rest__13507_SHARP_ = new cljs.core.IndexedSeq(G__13514__a,0);
} 
return G__13513__delegate.call(this,rest__13507_SHARP_);};
G__13513.cljs$lang$maxFixedArity = 0;
G__13513.cljs$lang$applyTo = (function (arglist__13515){
var rest__13507_SHARP_ = cljs.core.seq(arglist__13515);
return G__13513__delegate(rest__13507_SHARP_);
});
G__13513.cljs$core$IFn$_invoke$arity$variadic = G__13513__delegate;
return G__13513;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13508){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13508));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13516_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13516_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13517_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13517_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13524_13530 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13525_13531 = null;
var count__13526_13532 = (0);
var i__13527_13533 = (0);
while(true){
if((i__13527_13533 < count__13526_13532)){
var i_13534 = chunk__13525_13531.cljs$core$IIndexed$_nth$arity$2(null,i__13527_13533);
var G__13528_13535 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13534) : ith_item__$1.call(null,i_13534));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13528_13535) : f__$1.call(null,G__13528_13535));

var G__13536 = seq__13524_13530;
var G__13537 = chunk__13525_13531;
var G__13538 = count__13526_13532;
var G__13539 = (i__13527_13533 + (1));
seq__13524_13530 = G__13536;
chunk__13525_13531 = G__13537;
count__13526_13532 = G__13538;
i__13527_13533 = G__13539;
continue;
} else {
var temp__4657__auto___13540 = cljs.core.seq(seq__13524_13530);
if(temp__4657__auto___13540){
var seq__13524_13541__$1 = temp__4657__auto___13540;
if(cljs.core.chunked_seq_QMARK_(seq__13524_13541__$1)){
var c__7656__auto___13542 = cljs.core.chunk_first(seq__13524_13541__$1);
var G__13543 = cljs.core.chunk_rest(seq__13524_13541__$1);
var G__13544 = c__7656__auto___13542;
var G__13545 = cljs.core.count(c__7656__auto___13542);
var G__13546 = (0);
seq__13524_13530 = G__13543;
chunk__13525_13531 = G__13544;
count__13526_13532 = G__13545;
i__13527_13533 = G__13546;
continue;
} else {
var i_13547 = cljs.core.first(seq__13524_13541__$1);
var G__13529_13548 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13547) : ith_item__$1.call(null,i_13547));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13529_13548) : f__$1.call(null,G__13529_13548));

var G__13549 = cljs.core.next(seq__13524_13541__$1);
var G__13550 = null;
var G__13551 = (0);
var G__13552 = (0);
seq__13524_13530 = G__13549;
chunk__13525_13531 = G__13550;
count__13526_13532 = G__13551;
i__13527_13533 = G__13552;
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
