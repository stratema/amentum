// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14956 = [];
var len__7950__auto___14975 = arguments.length;
var i__7951__auto___14976 = (0);
while(true){
if((i__7951__auto___14976 < len__7950__auto___14975)){
args14956.push((arguments[i__7951__auto___14976]));

var G__14977 = (i__7951__auto___14976 + (1));
i__7951__auto___14976 = G__14977;
continue;
} else {
}
break;
}

var G__14962 = args14956.length;
switch (G__14962) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14956.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14963 = cljs.core.seq(kvs);
var chunk__14965 = null;
var count__14966 = (0);
var i__14967 = (0);
while(true){
if((i__14967 < count__14966)){
var vec__14969 = chunk__14965.cljs$core$IIndexed$_nth$arity$2(null,i__14967);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14969,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14969,(1),null);
var k_14979__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14979__$1);
} else {
e.attr(k_14979__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14979__$1:v));
}

var G__14980 = seq__14963;
var G__14981 = chunk__14965;
var G__14982 = count__14966;
var G__14983 = (i__14967 + (1));
seq__14963 = G__14980;
chunk__14965 = G__14981;
count__14966 = G__14982;
i__14967 = G__14983;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14963);
if(temp__4657__auto__){
var seq__14963__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14963__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14963__$1);
var G__14984 = cljs.core.chunk_rest(seq__14963__$1);
var G__14985 = c__7656__auto__;
var G__14986 = cljs.core.count(c__7656__auto__);
var G__14987 = (0);
seq__14963 = G__14984;
chunk__14965 = G__14985;
count__14966 = G__14986;
i__14967 = G__14987;
continue;
} else {
var vec__14972 = cljs.core.first(seq__14963__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(1),null);
var k_14988__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14988__$1);
} else {
e.attr(k_14988__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14988__$1:v));
}

var G__14989 = cljs.core.next(seq__14963__$1);
var G__14990 = null;
var G__14991 = (0);
var G__14992 = (0);
seq__14963 = G__14989;
chunk__14965 = G__14990;
count__14966 = G__14991;
i__14967 = G__14992;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14957){
var G__14958 = cljs.core.first(seq14957);
var seq14957__$1 = cljs.core.next(seq14957);
var G__14959 = cljs.core.first(seq14957__$1);
var seq14957__$2 = cljs.core.next(seq14957__$1);
var G__14960 = cljs.core.first(seq14957__$2);
var seq14957__$3 = cljs.core.next(seq14957__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14958,G__14959,G__14960,seq14957__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args14993 = [];
var len__7950__auto___15010 = arguments.length;
var i__7951__auto___15011 = (0);
while(true){
if((i__7951__auto___15011 < len__7950__auto___15010)){
args14993.push((arguments[i__7951__auto___15011]));

var G__15012 = (i__7951__auto___15011 + (1));
i__7951__auto___15011 = G__15012;
continue;
} else {
}
break;
}

var G__14999 = args14993.length;
switch (G__14999) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14993.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15000 = cljs.core.seq(kvs);
var chunk__15001 = null;
var count__15002 = (0);
var i__15003 = (0);
while(true){
if((i__15003 < count__15002)){
var vec__15004 = chunk__15001.cljs$core$IIndexed$_nth$arity$2(null,i__15003);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15004,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15014 = seq__15000;
var G__15015 = chunk__15001;
var G__15016 = count__15002;
var G__15017 = (i__15003 + (1));
seq__15000 = G__15014;
chunk__15001 = G__15015;
count__15002 = G__15016;
i__15003 = G__15017;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15000);
if(temp__4657__auto__){
var seq__15000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15000__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15000__$1);
var G__15018 = cljs.core.chunk_rest(seq__15000__$1);
var G__15019 = c__7656__auto__;
var G__15020 = cljs.core.count(c__7656__auto__);
var G__15021 = (0);
seq__15000 = G__15018;
chunk__15001 = G__15019;
count__15002 = G__15020;
i__15003 = G__15021;
continue;
} else {
var vec__15007 = cljs.core.first(seq__15000__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15007,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__15022 = cljs.core.next(seq__15000__$1);
var G__15023 = null;
var G__15024 = (0);
var G__15025 = (0);
seq__15000 = G__15022;
chunk__15001 = G__15023;
count__15002 = G__15024;
i__15003 = G__15025;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14994){
var G__14995 = cljs.core.first(seq14994);
var seq14994__$1 = cljs.core.next(seq14994);
var G__14996 = cljs.core.first(seq14994__$1);
var seq14994__$2 = cljs.core.next(seq14994__$1);
var G__14997 = cljs.core.first(seq14994__$2);
var seq14994__$3 = cljs.core.next(seq14994__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14995,G__14996,G__14997,seq14994__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15026 = [];
var len__7950__auto___15029 = arguments.length;
var i__7951__auto___15030 = (0);
while(true){
if((i__7951__auto___15030 < len__7950__auto___15029)){
args15026.push((arguments[i__7951__auto___15030]));

var G__15031 = (i__7951__auto___15030 + (1));
i__7951__auto___15030 = G__15031;
continue;
} else {
}
break;
}

var G__15028 = args15026.length;
switch (G__15028) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15026.length)].join('')));

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
var args15033 = [];
var len__7950__auto___15036 = arguments.length;
var i__7951__auto___15037 = (0);
while(true){
if((i__7951__auto___15037 < len__7950__auto___15036)){
args15033.push((arguments[i__7951__auto___15037]));

var G__15038 = (i__7951__auto___15037 + (1));
i__7951__auto___15037 = G__15038;
continue;
} else {
}
break;
}

var G__15035 = args15033.length;
switch (G__15035) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15033.length)].join('')));

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
var G__15040 = elem;
var G__15041 = cljs.core.cst$kw$attr;
var G__15042 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15040,G__15041,G__15042) : hoplon.core.do_BANG_.call(null,G__15040,G__15041,G__15042));
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
var G__15043__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15043 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15044__i = 0, G__15044__a = new Array(arguments.length -  2);
while (G__15044__i < G__15044__a.length) {G__15044__a[G__15044__i] = arguments[G__15044__i + 2]; ++G__15044__i;}
  args = new cljs.core.IndexedSeq(G__15044__a,0);
} 
return G__15043__delegate.call(this,elem,_,args);};
G__15043.cljs$lang$maxFixedArity = 2;
G__15043.cljs$lang$applyTo = (function (arglist__15045){
var elem = cljs.core.first(arglist__15045);
arglist__15045 = cljs.core.next(arglist__15045);
var _ = cljs.core.first(arglist__15045);
var args = cljs.core.rest(arglist__15045);
return G__15043__delegate(elem,_,args);
});
G__15043.cljs$core$IFn$_invoke$arity$variadic = G__15043__delegate;
return G__15043;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__15046 = cljs.core.seq(clmap);
var chunk__15047 = null;
var count__15048 = (0);
var i__15049 = (0);
while(true){
if((i__15049 < count__15048)){
var vec__15050 = chunk__15047.cljs$core$IIndexed$_nth$arity$2(null,i__15049);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15050,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15050,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15056 = seq__15046;
var G__15057 = chunk__15047;
var G__15058 = count__15048;
var G__15059 = (i__15049 + (1));
seq__15046 = G__15056;
chunk__15047 = G__15057;
count__15048 = G__15058;
i__15049 = G__15059;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15046);
if(temp__4657__auto__){
var seq__15046__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15046__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__15046__$1);
var G__15060 = cljs.core.chunk_rest(seq__15046__$1);
var G__15061 = c__7656__auto__;
var G__15062 = cljs.core.count(c__7656__auto__);
var G__15063 = (0);
seq__15046 = G__15060;
chunk__15047 = G__15061;
count__15048 = G__15062;
i__15049 = G__15063;
continue;
} else {
var vec__15053 = cljs.core.first(seq__15046__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15064 = cljs.core.next(seq__15046__$1);
var G__15065 = null;
var G__15066 = (0);
var G__15067 = (0);
seq__15046 = G__15064;
chunk__15047 = G__15065;
count__15048 = G__15066;
i__15049 = G__15067;
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
var G__15068 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__15069 = (0);
return setTimeout(G__15068,G__15069);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__15070_15076 = elem;
var G__15071_15077 = cljs.core.cst$kw$focus;
var G__15072_15078 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15070_15076,G__15071_15077,G__15072_15078) : hoplon.core.do_BANG_.call(null,G__15070_15076,G__15071_15077,G__15072_15078));

var G__15073 = elem;
var G__15074 = cljs.core.cst$kw$select;
var G__15075 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15073,G__15074,G__15075) : hoplon.core.do_BANG_.call(null,G__15073,G__15074,G__15075));
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
return (function (){var G__15079 = this$__$1.target;
return jQuery(G__15079);
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
