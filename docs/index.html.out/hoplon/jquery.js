// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args15041 = [];
var len__7950__auto___15093 = arguments.length;
var i__7951__auto___15094 = (0);
while(true){
if((i__7951__auto___15094 < len__7950__auto___15093)){
args15041.push((arguments[i__7951__auto___15094]));

var G__15096 = (i__7951__auto___15094 + (1));
i__7951__auto___15094 = G__15096;
continue;
} else {
}
break;
}

var G__15078 = args15041.length;
switch (G__15078) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args15041.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15081 = cljs.core.seq(kvs);
var chunk__15083 = null;
var count__15084 = (0);
var i__15085 = (0);
while(true){
if((i__15085 < count__15084)){
var vec__15087 = chunk__15083.cljs$core$IIndexed$_nth$arity$2(null,i__15085);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15087,(1),null);
var k_15107__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15107__$1);
} else {
e.attr(k_15107__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15107__$1:v));
}

var G__15110 = seq__15081;
var G__15111 = chunk__15083;
var G__15112 = count__15084;
var G__15113 = (i__15085 + (1));
seq__15081 = G__15110;
chunk__15083 = G__15111;
count__15084 = G__15112;
i__15085 = G__15113;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15081);
if(temp__4657__auto__){
var seq__15081__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15081__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15081__$1);
var G__15114 = cljs.core.chunk_rest(seq__15081__$1);
var G__15115 = c__7656__auto__;
var G__15116 = cljs.core.count(c__7656__auto__);
var G__15117 = (0);
seq__15081 = G__15114;
chunk__15083 = G__15115;
count__15084 = G__15116;
i__15085 = G__15117;
continue;
} else {
var vec__15090 = cljs.core.first(seq__15081__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15090,(1),null);
var k_15120__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15120__$1);
} else {
e.attr(k_15120__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15120__$1:v));
}

var G__15126 = cljs.core.next(seq__15081__$1);
var G__15127 = null;
var G__15128 = (0);
var G__15129 = (0);
seq__15081 = G__15126;
chunk__15083 = G__15127;
count__15084 = G__15128;
i__15085 = G__15129;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15043){
var G__15044 = cljs.core.first(seq15043);
var seq15043__$1 = cljs.core.next(seq15043);
var G__15045 = cljs.core.first(seq15043__$1);
var seq15043__$2 = cljs.core.next(seq15043__$1);
var G__15046 = cljs.core.first(seq15043__$2);
var seq15043__$3 = cljs.core.next(seq15043__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15044,G__15045,G__15046,seq15043__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args15135 = [];
var len__7950__auto___15174 = arguments.length;
var i__7951__auto___15175 = (0);
while(true){
if((i__7951__auto___15175 < len__7950__auto___15174)){
args15135.push((arguments[i__7951__auto___15175]));

var G__15176 = (i__7951__auto___15175 + (1));
i__7951__auto___15175 = G__15176;
continue;
} else {
}
break;
}

var G__15143 = args15135.length;
switch (G__15143) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args15135.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15155 = cljs.core.seq(kvs);
var chunk__15156 = null;
var count__15157 = (0);
var i__15158 = (0);
while(true){
if((i__15158 < count__15157)){
var vec__15162 = chunk__15156.cljs$core$IIndexed$_nth$arity$2(null,i__15158);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15187 = seq__15155;
var G__15188 = chunk__15156;
var G__15189 = count__15157;
var G__15190 = (i__15158 + (1));
seq__15155 = G__15187;
chunk__15156 = G__15188;
count__15157 = G__15189;
i__15158 = G__15190;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15155);
if(temp__4657__auto__){
var seq__15155__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15155__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15155__$1);
var G__15193 = cljs.core.chunk_rest(seq__15155__$1);
var G__15194 = c__7656__auto__;
var G__15195 = cljs.core.count(c__7656__auto__);
var G__15196 = (0);
seq__15155 = G__15193;
chunk__15156 = G__15194;
count__15157 = G__15195;
i__15158 = G__15196;
continue;
} else {
var vec__15167 = cljs.core.first(seq__15155__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15199 = cljs.core.next(seq__15155__$1);
var G__15200 = null;
var G__15201 = (0);
var G__15202 = (0);
seq__15155 = G__15199;
chunk__15156 = G__15200;
count__15157 = G__15201;
i__15158 = G__15202;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq15136){
var G__15137 = cljs.core.first(seq15136);
var seq15136__$1 = cljs.core.next(seq15136);
var G__15138 = cljs.core.first(seq15136__$1);
var seq15136__$2 = cljs.core.next(seq15136__$1);
var G__15139 = cljs.core.first(seq15136__$2);
var seq15136__$3 = cljs.core.next(seq15136__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15137,G__15138,G__15139,seq15136__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15204 = [];
var len__7950__auto___15207 = arguments.length;
var i__7951__auto___15208 = (0);
while(true){
if((i__7951__auto___15208 < len__7950__auto___15207)){
args15204.push((arguments[i__7951__auto___15208]));

var G__15209 = (i__7951__auto___15208 + (1));
i__7951__auto___15208 = G__15209;
continue;
} else {
}
break;
}

var G__15206 = args15204.length;
switch (G__15206) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15204.length)].join('')));

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
var args15220 = [];
var len__7950__auto___15224 = arguments.length;
var i__7951__auto___15225 = (0);
while(true){
if((i__7951__auto___15225 < len__7950__auto___15224)){
args15220.push((arguments[i__7951__auto___15225]));

var G__15226 = (i__7951__auto___15225 + (1));
i__7951__auto___15225 = G__15226;
continue;
} else {
}
break;
}

var G__15223 = args15220.length;
switch (G__15223) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15220.length)].join('')));

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
var G__15228 = elem;
var G__15229 = cljs.core.cst$kw$attr;
var G__15230 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15228,G__15229,G__15230) : hoplon.core.do_BANG_.call(null,G__15228,G__15229,G__15230));
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
var G__15251__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15251 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15252__i = 0, G__15252__a = new Array(arguments.length -  2);
while (G__15252__i < G__15252__a.length) {G__15252__a[G__15252__i] = arguments[G__15252__i + 2]; ++G__15252__i;}
  args = new cljs.core.IndexedSeq(G__15252__a,0);
} 
return G__15251__delegate.call(this,elem,_,args);};
G__15251.cljs$lang$maxFixedArity = 2;
G__15251.cljs$lang$applyTo = (function (arglist__15253){
var elem = cljs.core.first(arglist__15253);
arglist__15253 = cljs.core.next(arglist__15253);
var _ = cljs.core.first(arglist__15253);
var args = cljs.core.rest(arglist__15253);
return G__15251__delegate(elem,_,args);
});
G__15251.cljs$core$IFn$_invoke$arity$variadic = G__15251__delegate;
return G__15251;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__15254 = cljs.core.seq(clmap);
var chunk__15255 = null;
var count__15256 = (0);
var i__15257 = (0);
while(true){
if((i__15257 < count__15256)){
var vec__15262 = chunk__15255.cljs$core$IIndexed$_nth$arity$2(null,i__15257);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15262,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15262,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15269 = seq__15254;
var G__15270 = chunk__15255;
var G__15271 = count__15256;
var G__15272 = (i__15257 + (1));
seq__15254 = G__15269;
chunk__15255 = G__15270;
count__15256 = G__15271;
i__15257 = G__15272;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15254);
if(temp__4657__auto__){
var seq__15254__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15254__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15254__$1);
var G__15273 = cljs.core.chunk_rest(seq__15254__$1);
var G__15274 = c__7656__auto__;
var G__15275 = cljs.core.count(c__7656__auto__);
var G__15276 = (0);
seq__15254 = G__15273;
chunk__15255 = G__15274;
count__15256 = G__15275;
i__15257 = G__15276;
continue;
} else {
var vec__15266 = cljs.core.first(seq__15254__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15266,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15266,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15277 = cljs.core.next(seq__15254__$1);
var G__15278 = null;
var G__15279 = (0);
var G__15280 = (0);
seq__15254 = G__15277;
chunk__15255 = G__15278;
count__15256 = G__15279;
i__15257 = G__15280;
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
var G__15282 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__15283 = (0);
return setTimeout(G__15282,G__15283);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__15291_15297 = elem;
var G__15292_15298 = cljs.core.cst$kw$focus;
var G__15293_15299 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15291_15297,G__15292_15298,G__15293_15299) : hoplon.core.do_BANG_.call(null,G__15291_15297,G__15292_15298,G__15293_15299));

var G__15294 = elem;
var G__15295 = cljs.core.cst$kw$select;
var G__15296 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15294,G__15295,G__15296) : hoplon.core.do_BANG_.call(null,G__15294,G__15295,G__15296));
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
return (function (){var G__15306 = this$__$1.target;
return jQuery(G__15306);
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
