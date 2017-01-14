// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14960 = [];
var len__7950__auto___14979 = arguments.length;
var i__7951__auto___14980 = (0);
while(true){
if((i__7951__auto___14980 < len__7950__auto___14979)){
args14960.push((arguments[i__7951__auto___14980]));

var G__14981 = (i__7951__auto___14980 + (1));
i__7951__auto___14980 = G__14981;
continue;
} else {
}
break;
}

var G__14966 = args14960.length;
switch (G__14966) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14960.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14967 = cljs.core.seq(kvs);
var chunk__14969 = null;
var count__14970 = (0);
var i__14971 = (0);
while(true){
if((i__14971 < count__14970)){
var vec__14973 = chunk__14969.cljs$core$IIndexed$_nth$arity$2(null,i__14971);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14973,(1),null);
var k_14983__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14983__$1);
} else {
e.attr(k_14983__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14983__$1:v));
}

var G__14984 = seq__14967;
var G__14985 = chunk__14969;
var G__14986 = count__14970;
var G__14987 = (i__14971 + (1));
seq__14967 = G__14984;
chunk__14969 = G__14985;
count__14970 = G__14986;
i__14971 = G__14987;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14967);
if(temp__4657__auto__){
var seq__14967__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14967__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14967__$1);
var G__14988 = cljs.core.chunk_rest(seq__14967__$1);
var G__14989 = c__7656__auto__;
var G__14990 = cljs.core.count(c__7656__auto__);
var G__14991 = (0);
seq__14967 = G__14988;
chunk__14969 = G__14989;
count__14970 = G__14990;
i__14971 = G__14991;
continue;
} else {
var vec__14976 = cljs.core.first(seq__14967__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(1),null);
var k_14992__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14992__$1);
} else {
e.attr(k_14992__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14992__$1:v));
}

var G__14993 = cljs.core.next(seq__14967__$1);
var G__14994 = null;
var G__14995 = (0);
var G__14996 = (0);
seq__14967 = G__14993;
chunk__14969 = G__14994;
count__14970 = G__14995;
i__14971 = G__14996;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14961){
var G__14962 = cljs.core.first(seq14961);
var seq14961__$1 = cljs.core.next(seq14961);
var G__14963 = cljs.core.first(seq14961__$1);
var seq14961__$2 = cljs.core.next(seq14961__$1);
var G__14964 = cljs.core.first(seq14961__$2);
var seq14961__$3 = cljs.core.next(seq14961__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14962,G__14963,G__14964,seq14961__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args14997 = [];
var len__7950__auto___15014 = arguments.length;
var i__7951__auto___15015 = (0);
while(true){
if((i__7951__auto___15015 < len__7950__auto___15014)){
args14997.push((arguments[i__7951__auto___15015]));

var G__15016 = (i__7951__auto___15015 + (1));
i__7951__auto___15015 = G__15016;
continue;
} else {
}
break;
}

var G__15003 = args14997.length;
switch (G__15003) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14997.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15004 = cljs.core.seq(kvs);
var chunk__15005 = null;
var count__15006 = (0);
var i__15007 = (0);
while(true){
if((i__15007 < count__15006)){
var vec__15008 = chunk__15005.cljs$core$IIndexed$_nth$arity$2(null,i__15007);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15008,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15008,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15018 = seq__15004;
var G__15019 = chunk__15005;
var G__15020 = count__15006;
var G__15021 = (i__15007 + (1));
seq__15004 = G__15018;
chunk__15005 = G__15019;
count__15006 = G__15020;
i__15007 = G__15021;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15004);
if(temp__4657__auto__){
var seq__15004__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15004__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15004__$1);
var G__15022 = cljs.core.chunk_rest(seq__15004__$1);
var G__15023 = c__7656__auto__;
var G__15024 = cljs.core.count(c__7656__auto__);
var G__15025 = (0);
seq__15004 = G__15022;
chunk__15005 = G__15023;
count__15006 = G__15024;
i__15007 = G__15025;
continue;
} else {
var vec__15011 = cljs.core.first(seq__15004__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15011,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15026 = cljs.core.next(seq__15004__$1);
var G__15027 = null;
var G__15028 = (0);
var G__15029 = (0);
seq__15004 = G__15026;
chunk__15005 = G__15027;
count__15006 = G__15028;
i__15007 = G__15029;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14998){
var G__14999 = cljs.core.first(seq14998);
var seq14998__$1 = cljs.core.next(seq14998);
var G__15000 = cljs.core.first(seq14998__$1);
var seq14998__$2 = cljs.core.next(seq14998__$1);
var G__15001 = cljs.core.first(seq14998__$2);
var seq14998__$3 = cljs.core.next(seq14998__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14999,G__15000,G__15001,seq14998__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15030 = [];
var len__7950__auto___15033 = arguments.length;
var i__7951__auto___15034 = (0);
while(true){
if((i__7951__auto___15034 < len__7950__auto___15033)){
args15030.push((arguments[i__7951__auto___15034]));

var G__15035 = (i__7951__auto___15034 + (1));
i__7951__auto___15034 = G__15035;
continue;
} else {
}
break;
}

var G__15032 = args15030.length;
switch (G__15032) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15030.length)].join('')));

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
var args15037 = [];
var len__7950__auto___15040 = arguments.length;
var i__7951__auto___15041 = (0);
while(true){
if((i__7951__auto___15041 < len__7950__auto___15040)){
args15037.push((arguments[i__7951__auto___15041]));

var G__15042 = (i__7951__auto___15041 + (1));
i__7951__auto___15041 = G__15042;
continue;
} else {
}
break;
}

var G__15039 = args15037.length;
switch (G__15039) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15037.length)].join('')));

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
var G__15044 = elem;
var G__15045 = cljs.core.cst$kw$attr;
var G__15046 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15044,G__15045,G__15046) : hoplon.core.do_BANG_.call(null,G__15044,G__15045,G__15046));
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
var G__15047__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15047 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15048__i = 0, G__15048__a = new Array(arguments.length -  2);
while (G__15048__i < G__15048__a.length) {G__15048__a[G__15048__i] = arguments[G__15048__i + 2]; ++G__15048__i;}
  args = new cljs.core.IndexedSeq(G__15048__a,0);
} 
return G__15047__delegate.call(this,elem,_,args);};
G__15047.cljs$lang$maxFixedArity = 2;
G__15047.cljs$lang$applyTo = (function (arglist__15049){
var elem = cljs.core.first(arglist__15049);
arglist__15049 = cljs.core.next(arglist__15049);
var _ = cljs.core.first(arglist__15049);
var args = cljs.core.rest(arglist__15049);
return G__15047__delegate(elem,_,args);
});
G__15047.cljs$core$IFn$_invoke$arity$variadic = G__15047__delegate;
return G__15047;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__15050 = cljs.core.seq(clmap);
var chunk__15051 = null;
var count__15052 = (0);
var i__15053 = (0);
while(true){
if((i__15053 < count__15052)){
var vec__15054 = chunk__15051.cljs$core$IIndexed$_nth$arity$2(null,i__15053);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15054,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15054,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15060 = seq__15050;
var G__15061 = chunk__15051;
var G__15062 = count__15052;
var G__15063 = (i__15053 + (1));
seq__15050 = G__15060;
chunk__15051 = G__15061;
count__15052 = G__15062;
i__15053 = G__15063;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15050);
if(temp__4657__auto__){
var seq__15050__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15050__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15050__$1);
var G__15064 = cljs.core.chunk_rest(seq__15050__$1);
var G__15065 = c__7656__auto__;
var G__15066 = cljs.core.count(c__7656__auto__);
var G__15067 = (0);
seq__15050 = G__15064;
chunk__15051 = G__15065;
count__15052 = G__15066;
i__15053 = G__15067;
continue;
} else {
var vec__15057 = cljs.core.first(seq__15050__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15057,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15057,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15068 = cljs.core.next(seq__15050__$1);
var G__15069 = null;
var G__15070 = (0);
var G__15071 = (0);
seq__15050 = G__15068;
chunk__15051 = G__15069;
count__15052 = G__15070;
i__15053 = G__15071;
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
var G__15072 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__15073 = (0);
return setTimeout(G__15072,G__15073);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__15074_15080 = elem;
var G__15075_15081 = cljs.core.cst$kw$focus;
var G__15076_15082 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15074_15080,G__15075_15081,G__15076_15082) : hoplon.core.do_BANG_.call(null,G__15074_15080,G__15075_15081,G__15076_15082));

var G__15077 = elem;
var G__15078 = cljs.core.cst$kw$select;
var G__15079 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15077,G__15078,G__15079) : hoplon.core.do_BANG_.call(null,G__15077,G__15078,G__15079));
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
return (function (){var G__15083 = this$__$1.target;
return jQuery(G__15083);
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
