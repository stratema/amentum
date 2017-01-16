// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14904 = [];
var len__7950__auto___14949 = arguments.length;
var i__7951__auto___14950 = (0);
while(true){
if((i__7951__auto___14950 < len__7950__auto___14949)){
args14904.push((arguments[i__7951__auto___14950]));

var G__14953 = (i__7951__auto___14950 + (1));
i__7951__auto___14950 = G__14953;
continue;
} else {
}
break;
}

var G__14919 = args14904.length;
switch (G__14919) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14904.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14921 = cljs.core.seq(kvs);
var chunk__14923 = null;
var count__14924 = (0);
var i__14925 = (0);
while(true){
if((i__14925 < count__14924)){
var vec__14927 = chunk__14923.cljs$core$IIndexed$_nth$arity$2(null,i__14925);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14927,(1),null);
var k_14998__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14998__$1);
} else {
e.attr(k_14998__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14998__$1:v));
}

var G__14999 = seq__14921;
var G__15000 = chunk__14923;
var G__15001 = count__14924;
var G__15002 = (i__14925 + (1));
seq__14921 = G__14999;
chunk__14923 = G__15000;
count__14924 = G__15001;
i__14925 = G__15002;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14921);
if(temp__4657__auto__){
var seq__14921__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14921__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14921__$1);
var G__15003 = cljs.core.chunk_rest(seq__14921__$1);
var G__15004 = c__7656__auto__;
var G__15005 = cljs.core.count(c__7656__auto__);
var G__15006 = (0);
seq__14921 = G__15003;
chunk__14923 = G__15004;
count__14924 = G__15005;
i__14925 = G__15006;
continue;
} else {
var vec__14935 = cljs.core.first(seq__14921__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14935,(1),null);
var k_15007__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15007__$1);
} else {
e.attr(k_15007__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15007__$1:v));
}

var G__15008 = cljs.core.next(seq__14921__$1);
var G__15009 = null;
var G__15010 = (0);
var G__15011 = (0);
seq__14921 = G__15008;
chunk__14923 = G__15009;
count__14924 = G__15010;
i__14925 = G__15011;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14905){
var G__14906 = cljs.core.first(seq14905);
var seq14905__$1 = cljs.core.next(seq14905);
var G__14907 = cljs.core.first(seq14905__$1);
var seq14905__$2 = cljs.core.next(seq14905__$1);
var G__14908 = cljs.core.first(seq14905__$2);
var seq14905__$3 = cljs.core.next(seq14905__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14906,G__14907,G__14908,seq14905__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args15012 = [];
var len__7950__auto___15033 = arguments.length;
var i__7951__auto___15034 = (0);
while(true){
if((i__7951__auto___15034 < len__7950__auto___15033)){
args15012.push((arguments[i__7951__auto___15034]));

var G__15035 = (i__7951__auto___15034 + (1));
i__7951__auto___15034 = G__15035;
continue;
} else {
}
break;
}

var G__15019 = args15012.length;
switch (G__15019) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args15012.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15023 = cljs.core.seq(kvs);
var chunk__15024 = null;
var count__15025 = (0);
var i__15026 = (0);
while(true){
if((i__15026 < count__15025)){
var vec__15027 = chunk__15024.cljs$core$IIndexed$_nth$arity$2(null,i__15026);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15038 = seq__15023;
var G__15039 = chunk__15024;
var G__15040 = count__15025;
var G__15041 = (i__15026 + (1));
seq__15023 = G__15038;
chunk__15024 = G__15039;
count__15025 = G__15040;
i__15026 = G__15041;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15023);
if(temp__4657__auto__){
var seq__15023__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15023__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15023__$1);
var G__15042 = cljs.core.chunk_rest(seq__15023__$1);
var G__15043 = c__7656__auto__;
var G__15044 = cljs.core.count(c__7656__auto__);
var G__15045 = (0);
seq__15023 = G__15042;
chunk__15024 = G__15043;
count__15025 = G__15044;
i__15026 = G__15045;
continue;
} else {
var vec__15030 = cljs.core.first(seq__15023__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15030,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15047 = cljs.core.next(seq__15023__$1);
var G__15048 = null;
var G__15049 = (0);
var G__15050 = (0);
seq__15023 = G__15047;
chunk__15024 = G__15048;
count__15025 = G__15049;
i__15026 = G__15050;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq15013){
var G__15014 = cljs.core.first(seq15013);
var seq15013__$1 = cljs.core.next(seq15013);
var G__15015 = cljs.core.first(seq15013__$1);
var seq15013__$2 = cljs.core.next(seq15013__$1);
var G__15016 = cljs.core.first(seq15013__$2);
var seq15013__$3 = cljs.core.next(seq15013__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15014,G__15015,G__15016,seq15013__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15052 = [];
var len__7950__auto___15055 = arguments.length;
var i__7951__auto___15056 = (0);
while(true){
if((i__7951__auto___15056 < len__7950__auto___15055)){
args15052.push((arguments[i__7951__auto___15056]));

var G__15057 = (i__7951__auto___15056 + (1));
i__7951__auto___15056 = G__15057;
continue;
} else {
}
break;
}

var G__15054 = args15052.length;
switch (G__15054) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15052.length)].join('')));

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
var args15059 = [];
var len__7950__auto___15067 = arguments.length;
var i__7951__auto___15068 = (0);
while(true){
if((i__7951__auto___15068 < len__7950__auto___15067)){
args15059.push((arguments[i__7951__auto___15068]));

var G__15069 = (i__7951__auto___15068 + (1));
i__7951__auto___15068 = G__15069;
continue;
} else {
}
break;
}

var G__15063 = args15059.length;
switch (G__15063) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15059.length)].join('')));

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
var G__15072 = elem;
var G__15073 = cljs.core.cst$kw$attr;
var G__15074 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15072,G__15073,G__15074) : hoplon.core.do_BANG_.call(null,G__15072,G__15073,G__15074));
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
var G__15126__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15126 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15127__i = 0, G__15127__a = new Array(arguments.length -  2);
while (G__15127__i < G__15127__a.length) {G__15127__a[G__15127__i] = arguments[G__15127__i + 2]; ++G__15127__i;}
  args = new cljs.core.IndexedSeq(G__15127__a,0);
} 
return G__15126__delegate.call(this,elem,_,args);};
G__15126.cljs$lang$maxFixedArity = 2;
G__15126.cljs$lang$applyTo = (function (arglist__15128){
var elem = cljs.core.first(arglist__15128);
arglist__15128 = cljs.core.next(arglist__15128);
var _ = cljs.core.first(arglist__15128);
var args = cljs.core.rest(arglist__15128);
return G__15126__delegate(elem,_,args);
});
G__15126.cljs$core$IFn$_invoke$arity$variadic = G__15126__delegate;
return G__15126;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__15130 = cljs.core.seq(clmap);
var chunk__15131 = null;
var count__15132 = (0);
var i__15133 = (0);
while(true){
if((i__15133 < count__15132)){
var vec__15134 = chunk__15131.cljs$core$IIndexed$_nth$arity$2(null,i__15133);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15134,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15134,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15148 = seq__15130;
var G__15149 = chunk__15131;
var G__15150 = count__15132;
var G__15151 = (i__15133 + (1));
seq__15130 = G__15148;
chunk__15131 = G__15149;
count__15132 = G__15150;
i__15133 = G__15151;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15130);
if(temp__4657__auto__){
var seq__15130__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15130__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15130__$1);
var G__15156 = cljs.core.chunk_rest(seq__15130__$1);
var G__15157 = c__7656__auto__;
var G__15158 = cljs.core.count(c__7656__auto__);
var G__15159 = (0);
seq__15130 = G__15156;
chunk__15131 = G__15157;
count__15132 = G__15158;
i__15133 = G__15159;
continue;
} else {
var vec__15138 = cljs.core.first(seq__15130__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15138,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15138,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15160 = cljs.core.next(seq__15130__$1);
var G__15161 = null;
var G__15162 = (0);
var G__15163 = (0);
seq__15130 = G__15160;
chunk__15131 = G__15161;
count__15132 = G__15162;
i__15133 = G__15163;
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
var G__15188 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__15189 = (0);
return setTimeout(G__15188,G__15189);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__15214_15220 = elem;
var G__15215_15221 = cljs.core.cst$kw$focus;
var G__15216_15222 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15214_15220,G__15215_15221,G__15216_15222) : hoplon.core.do_BANG_.call(null,G__15214_15220,G__15215_15221,G__15216_15222));

var G__15217 = elem;
var G__15218 = cljs.core.cst$kw$select;
var G__15219 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15217,G__15218,G__15219) : hoplon.core.do_BANG_.call(null,G__15217,G__15218,G__15219));
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
return (function (){var G__15237 = this$__$1.target;
return jQuery(G__15237);
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
