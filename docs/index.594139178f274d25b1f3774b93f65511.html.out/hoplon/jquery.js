// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args15340 = [];
var len__7950__auto___15359 = arguments.length;
var i__7951__auto___15360 = (0);
while(true){
if((i__7951__auto___15360 < len__7950__auto___15359)){
args15340.push((arguments[i__7951__auto___15360]));

var G__15361 = (i__7951__auto___15360 + (1));
i__7951__auto___15360 = G__15361;
continue;
} else {
}
break;
}

var G__15346 = args15340.length;
switch (G__15346) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args15340.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15347 = cljs.core.seq(kvs);
var chunk__15349 = null;
var count__15350 = (0);
var i__15351 = (0);
while(true){
if((i__15351 < count__15350)){
var vec__15353 = chunk__15349.cljs$core$IIndexed$_nth$arity$2(null,i__15351);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15353,(1),null);
var k_15363__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15363__$1);
} else {
e.attr(k_15363__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15363__$1:v));
}

var G__15364 = seq__15347;
var G__15365 = chunk__15349;
var G__15366 = count__15350;
var G__15367 = (i__15351 + (1));
seq__15347 = G__15364;
chunk__15349 = G__15365;
count__15350 = G__15366;
i__15351 = G__15367;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15347);
if(temp__4657__auto__){
var seq__15347__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15347__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15347__$1);
var G__15368 = cljs.core.chunk_rest(seq__15347__$1);
var G__15369 = c__7656__auto__;
var G__15370 = cljs.core.count(c__7656__auto__);
var G__15371 = (0);
seq__15347 = G__15368;
chunk__15349 = G__15369;
count__15350 = G__15370;
i__15351 = G__15371;
continue;
} else {
var vec__15356 = cljs.core.first(seq__15347__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15356,(1),null);
var k_15372__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15372__$1);
} else {
e.attr(k_15372__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15372__$1:v));
}

var G__15373 = cljs.core.next(seq__15347__$1);
var G__15374 = null;
var G__15375 = (0);
var G__15376 = (0);
seq__15347 = G__15373;
chunk__15349 = G__15374;
count__15350 = G__15375;
i__15351 = G__15376;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15341){
var G__15342 = cljs.core.first(seq15341);
var seq15341__$1 = cljs.core.next(seq15341);
var G__15343 = cljs.core.first(seq15341__$1);
var seq15341__$2 = cljs.core.next(seq15341__$1);
var G__15344 = cljs.core.first(seq15341__$2);
var seq15341__$3 = cljs.core.next(seq15341__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15342,G__15343,G__15344,seq15341__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args15377 = [];
var len__7950__auto___15394 = arguments.length;
var i__7951__auto___15395 = (0);
while(true){
if((i__7951__auto___15395 < len__7950__auto___15394)){
args15377.push((arguments[i__7951__auto___15395]));

var G__15396 = (i__7951__auto___15395 + (1));
i__7951__auto___15395 = G__15396;
continue;
} else {
}
break;
}

var G__15383 = args15377.length;
switch (G__15383) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args15377.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15384 = cljs.core.seq(kvs);
var chunk__15385 = null;
var count__15386 = (0);
var i__15387 = (0);
while(true){
if((i__15387 < count__15386)){
var vec__15388 = chunk__15385.cljs$core$IIndexed$_nth$arity$2(null,i__15387);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15388,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15398 = seq__15384;
var G__15399 = chunk__15385;
var G__15400 = count__15386;
var G__15401 = (i__15387 + (1));
seq__15384 = G__15398;
chunk__15385 = G__15399;
count__15386 = G__15400;
i__15387 = G__15401;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15384);
if(temp__4657__auto__){
var seq__15384__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15384__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15384__$1);
var G__15402 = cljs.core.chunk_rest(seq__15384__$1);
var G__15403 = c__7656__auto__;
var G__15404 = cljs.core.count(c__7656__auto__);
var G__15405 = (0);
seq__15384 = G__15402;
chunk__15385 = G__15403;
count__15386 = G__15404;
i__15387 = G__15405;
continue;
} else {
var vec__15391 = cljs.core.first(seq__15384__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15391,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15406 = cljs.core.next(seq__15384__$1);
var G__15407 = null;
var G__15408 = (0);
var G__15409 = (0);
seq__15384 = G__15406;
chunk__15385 = G__15407;
count__15386 = G__15408;
i__15387 = G__15409;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq15378){
var G__15379 = cljs.core.first(seq15378);
var seq15378__$1 = cljs.core.next(seq15378);
var G__15380 = cljs.core.first(seq15378__$1);
var seq15378__$2 = cljs.core.next(seq15378__$1);
var G__15381 = cljs.core.first(seq15378__$2);
var seq15378__$3 = cljs.core.next(seq15378__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15379,G__15380,G__15381,seq15378__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15410 = [];
var len__7950__auto___15413 = arguments.length;
var i__7951__auto___15414 = (0);
while(true){
if((i__7951__auto___15414 < len__7950__auto___15413)){
args15410.push((arguments[i__7951__auto___15414]));

var G__15415 = (i__7951__auto___15414 + (1));
i__7951__auto___15414 = G__15415;
continue;
} else {
}
break;
}

var G__15412 = args15410.length;
switch (G__15412) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15410.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args15417 = [];
var len__7950__auto___15420 = arguments.length;
var i__7951__auto___15421 = (0);
while(true){
if((i__7951__auto___15421 < len__7950__auto___15420)){
args15417.push((arguments[i__7951__auto___15421]));

var G__15422 = (i__7951__auto___15421 + (1));
i__7951__auto___15421 = G__15422;
continue;
} else {
}
break;
}

var G__15419 = args15417.length;
switch (G__15419) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15417.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__15424 = elem;
var G__15425 = cljs.core.cst$kw$attr;
var G__15426 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15424,G__15425,G__15426) : hoplon.core.do_BANG_.call(null,G__15424,G__15425,G__15426));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__15427__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15427 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15428__i = 0, G__15428__a = new Array(arguments.length -  2);
while (G__15428__i < G__15428__a.length) {G__15428__a[G__15428__i] = arguments[G__15428__i + 2]; ++G__15428__i;}
  args = new cljs.core.IndexedSeq(G__15428__a,0);
} 
return G__15427__delegate.call(this,elem,_,args);};
G__15427.cljs$lang$maxFixedArity = 2;
G__15427.cljs$lang$applyTo = (function (arglist__15429){
var elem = cljs.core.first(arglist__15429);
arglist__15429 = cljs.core.next(arglist__15429);
var _ = cljs.core.first(arglist__15429);
var args = cljs.core.rest(arglist__15429);
return G__15427__delegate(elem,_,args);
});
G__15427.cljs$core$IFn$_invoke$arity$variadic = G__15427__delegate;
return G__15427;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__15430 = cljs.core.seq(clmap);
var chunk__15431 = null;
var count__15432 = (0);
var i__15433 = (0);
while(true){
if((i__15433 < count__15432)){
var vec__15434 = chunk__15431.cljs$core$IIndexed$_nth$arity$2(null,i__15433);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15434,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15434,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15440 = seq__15430;
var G__15441 = chunk__15431;
var G__15442 = count__15432;
var G__15443 = (i__15433 + (1));
seq__15430 = G__15440;
chunk__15431 = G__15441;
count__15432 = G__15442;
i__15433 = G__15443;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15430);
if(temp__4657__auto__){
var seq__15430__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15430__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15430__$1);
var G__15444 = cljs.core.chunk_rest(seq__15430__$1);
var G__15445 = c__7656__auto__;
var G__15446 = cljs.core.count(c__7656__auto__);
var G__15447 = (0);
seq__15430 = G__15444;
chunk__15431 = G__15445;
count__15432 = G__15446;
i__15433 = G__15447;
continue;
} else {
var vec__15437 = cljs.core.first(seq__15430__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15448 = cljs.core.next(seq__15430__$1);
var G__15449 = null;
var G__15450 = (0);
var G__15451 = (0);
seq__15430 = G__15448;
chunk__15431 = G__15449;
count__15432 = G__15450;
i__15433 = G__15451;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__15452 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__15453 = (0);
return setTimeout(G__15452,G__15453);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__15454_15460 = elem;
var G__15455_15461 = cljs.core.cst$kw$focus;
var G__15456_15462 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15454_15460,G__15455_15461,G__15456_15462) : hoplon.core.do_BANG_.call(null,G__15454_15460,G__15455_15461,G__15456_15462));

var G__15457 = elem;
var G__15458 = cljs.core.cst$kw$select;
var G__15459 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15457,G__15458,G__15459) : hoplon.core.do_BANG_.call(null,G__15457,G__15458,G__15459));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__15463 = this$__$1.target;
return jQuery(G__15463);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
