// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args15136 = [];
var len__7950__auto___15181 = arguments.length;
var i__7951__auto___15182 = (0);
while(true){
if((i__7951__auto___15182 < len__7950__auto___15181)){
args15136.push((arguments[i__7951__auto___15182]));

var G__15183 = (i__7951__auto___15182 + (1));
i__7951__auto___15182 = G__15183;
continue;
} else {
}
break;
}

var G__15152 = args15136.length;
switch (G__15152) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args15136.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15155 = cljs.core.seq(kvs);
var chunk__15157 = null;
var count__15158 = (0);
var i__15159 = (0);
while(true){
if((i__15159 < count__15158)){
var vec__15165 = chunk__15157.cljs$core$IIndexed$_nth$arity$2(null,i__15159);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(1),null);
var k_15193__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15193__$1);
} else {
e.attr(k_15193__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15193__$1:v));
}

var G__15201 = seq__15155;
var G__15202 = chunk__15157;
var G__15203 = count__15158;
var G__15204 = (i__15159 + (1));
seq__15155 = G__15201;
chunk__15157 = G__15202;
count__15158 = G__15203;
i__15159 = G__15204;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15155);
if(temp__4657__auto__){
var seq__15155__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15155__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15155__$1);
var G__15205 = cljs.core.chunk_rest(seq__15155__$1);
var G__15206 = c__7656__auto__;
var G__15207 = cljs.core.count(c__7656__auto__);
var G__15208 = (0);
seq__15155 = G__15205;
chunk__15157 = G__15206;
count__15158 = G__15207;
i__15159 = G__15208;
continue;
} else {
var vec__15176 = cljs.core.first(seq__15155__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(1),null);
var k_15210__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15210__$1);
} else {
e.attr(k_15210__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15210__$1:v));
}

var G__15220 = cljs.core.next(seq__15155__$1);
var G__15221 = null;
var G__15222 = (0);
var G__15223 = (0);
seq__15155 = G__15220;
chunk__15157 = G__15221;
count__15158 = G__15222;
i__15159 = G__15223;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15138){
var G__15139 = cljs.core.first(seq15138);
var seq15138__$1 = cljs.core.next(seq15138);
var G__15140 = cljs.core.first(seq15138__$1);
var seq15138__$2 = cljs.core.next(seq15138__$1);
var G__15141 = cljs.core.first(seq15138__$2);
var seq15138__$3 = cljs.core.next(seq15138__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15139,G__15140,G__15141,seq15138__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args15228 = [];
var len__7950__auto___15257 = arguments.length;
var i__7951__auto___15258 = (0);
while(true){
if((i__7951__auto___15258 < len__7950__auto___15257)){
args15228.push((arguments[i__7951__auto___15258]));

var G__15259 = (i__7951__auto___15258 + (1));
i__7951__auto___15258 = G__15259;
continue;
} else {
}
break;
}

var G__15235 = args15228.length;
switch (G__15235) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args15228.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15236 = cljs.core.seq(kvs);
var chunk__15237 = null;
var count__15238 = (0);
var i__15239 = (0);
while(true){
if((i__15239 < count__15238)){
var vec__15240 = chunk__15237.cljs$core$IIndexed$_nth$arity$2(null,i__15239);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15240,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15240,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15261 = seq__15236;
var G__15262 = chunk__15237;
var G__15263 = count__15238;
var G__15264 = (i__15239 + (1));
seq__15236 = G__15261;
chunk__15237 = G__15262;
count__15238 = G__15263;
i__15239 = G__15264;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15236);
if(temp__4657__auto__){
var seq__15236__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15236__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15236__$1);
var G__15266 = cljs.core.chunk_rest(seq__15236__$1);
var G__15267 = c__7656__auto__;
var G__15268 = cljs.core.count(c__7656__auto__);
var G__15269 = (0);
seq__15236 = G__15266;
chunk__15237 = G__15267;
count__15238 = G__15268;
i__15239 = G__15269;
continue;
} else {
var vec__15254 = cljs.core.first(seq__15236__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15254,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15270 = cljs.core.next(seq__15236__$1);
var G__15271 = null;
var G__15272 = (0);
var G__15273 = (0);
seq__15236 = G__15270;
chunk__15237 = G__15271;
count__15238 = G__15272;
i__15239 = G__15273;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq15229){
var G__15230 = cljs.core.first(seq15229);
var seq15229__$1 = cljs.core.next(seq15229);
var G__15231 = cljs.core.first(seq15229__$1);
var seq15229__$2 = cljs.core.next(seq15229__$1);
var G__15232 = cljs.core.first(seq15229__$2);
var seq15229__$3 = cljs.core.next(seq15229__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15230,G__15231,G__15232,seq15229__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15275 = [];
var len__7950__auto___15282 = arguments.length;
var i__7951__auto___15283 = (0);
while(true){
if((i__7951__auto___15283 < len__7950__auto___15282)){
args15275.push((arguments[i__7951__auto___15283]));

var G__15284 = (i__7951__auto___15283 + (1));
i__7951__auto___15283 = G__15284;
continue;
} else {
}
break;
}

var G__15280 = args15275.length;
switch (G__15280) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15275.length)].join('')));

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
var args15286 = [];
var len__7950__auto___15293 = arguments.length;
var i__7951__auto___15294 = (0);
while(true){
if((i__7951__auto___15294 < len__7950__auto___15293)){
args15286.push((arguments[i__7951__auto___15294]));

var G__15295 = (i__7951__auto___15294 + (1));
i__7951__auto___15294 = G__15295;
continue;
} else {
}
break;
}

var G__15292 = args15286.length;
switch (G__15292) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15286.length)].join('')));

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
var G__15301 = elem;
var G__15302 = cljs.core.cst$kw$attr;
var G__15303 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15301,G__15302,G__15303) : hoplon.core.do_BANG_.call(null,G__15301,G__15302,G__15303));
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
var G__15314__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15314 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15315__i = 0, G__15315__a = new Array(arguments.length -  2);
while (G__15315__i < G__15315__a.length) {G__15315__a[G__15315__i] = arguments[G__15315__i + 2]; ++G__15315__i;}
  args = new cljs.core.IndexedSeq(G__15315__a,0);
} 
return G__15314__delegate.call(this,elem,_,args);};
G__15314.cljs$lang$maxFixedArity = 2;
G__15314.cljs$lang$applyTo = (function (arglist__15316){
var elem = cljs.core.first(arglist__15316);
arglist__15316 = cljs.core.next(arglist__15316);
var _ = cljs.core.first(arglist__15316);
var args = cljs.core.rest(arglist__15316);
return G__15314__delegate(elem,_,args);
});
G__15314.cljs$core$IFn$_invoke$arity$variadic = G__15314__delegate;
return G__15314;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__15317 = cljs.core.seq(clmap);
var chunk__15318 = null;
var count__15319 = (0);
var i__15320 = (0);
while(true){
if((i__15320 < count__15319)){
var vec__15321 = chunk__15318.cljs$core$IIndexed$_nth$arity$2(null,i__15320);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15321,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15321,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15327 = seq__15317;
var G__15328 = chunk__15318;
var G__15329 = count__15319;
var G__15330 = (i__15320 + (1));
seq__15317 = G__15327;
chunk__15318 = G__15328;
count__15319 = G__15329;
i__15320 = G__15330;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15317);
if(temp__4657__auto__){
var seq__15317__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15317__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15317__$1);
var G__15331 = cljs.core.chunk_rest(seq__15317__$1);
var G__15332 = c__7656__auto__;
var G__15333 = cljs.core.count(c__7656__auto__);
var G__15334 = (0);
seq__15317 = G__15331;
chunk__15318 = G__15332;
count__15319 = G__15333;
i__15320 = G__15334;
continue;
} else {
var vec__15324 = cljs.core.first(seq__15317__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15335 = cljs.core.next(seq__15317__$1);
var G__15336 = null;
var G__15337 = (0);
var G__15338 = (0);
seq__15317 = G__15335;
chunk__15318 = G__15336;
count__15319 = G__15337;
i__15320 = G__15338;
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
var G__15339 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__15340 = (0);
return setTimeout(G__15339,G__15340);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__15341_15347 = elem;
var G__15342_15348 = cljs.core.cst$kw$focus;
var G__15343_15349 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15341_15347,G__15342_15348,G__15343_15349) : hoplon.core.do_BANG_.call(null,G__15341_15347,G__15342_15348,G__15343_15349));

var G__15344 = elem;
var G__15345 = cljs.core.cst$kw$select;
var G__15346 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15344,G__15345,G__15346) : hoplon.core.do_BANG_.call(null,G__15344,G__15345,G__15346));
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
return (function (){var G__15364 = this$__$1.target;
return jQuery(G__15364);
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
