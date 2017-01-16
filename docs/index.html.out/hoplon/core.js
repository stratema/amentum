// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13928_SHARP_,p2__13929_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13928_SHARP_,p2__13929_SHARP_.getAttribute("static-id"),p2__13929_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args13930 = [];
var len__7950__auto___13935 = arguments.length;
var i__7951__auto___13936 = (0);
while(true){
if((i__7951__auto___13936 < len__7950__auto___13935)){
args13930.push((arguments[i__7951__auto___13936]));

var G__13937 = (i__7951__auto___13936 + (1));
i__7951__auto___13936 = G__13937;
continue;
} else {
}
break;
}

var G__13932 = args13930.length;
switch (G__13932) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13930.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__13933_13939 = init;
var G__13934_13940 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13933_13939,G__13934_13940) : f.call(null,G__13933_13939,G__13934_13940));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__13947 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__13948 = cljs.core.seq(vec__13947);
var first__13949 = cljs.core.first(seq__13948);
var seq__13948__$1 = cljs.core.next(seq__13948);
var f = first__13949;
var more = seq__13948__$1;
var vec__13950 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13950,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13950,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("eefa2d3c2d41435abf3744ba7cb074c9")].join(''),f2], null)))));
});
/**
 * Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__13953_SHARP_){
return cljs.core.zipmap(p1__13953_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__6842__auto__ = (function (){var and__6830__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__6830__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
var G__13954 = (i + (1));
var G__13955 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13954;
ret = G__13955;
continue;
}
break;
}
});

/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core.node[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return (m__7506__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7506__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7506__auto__.call(null,this$));
} else {
var m__7506__auto____$1 = (hoplon.core.node["_"]);
if(!((m__7506__auto____$1 == null))){
return (m__7506__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7506__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7506__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
var G__13956 = [cljs.core.str(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__13956) : hoplon.core.$text.call(null,G__13956));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__13985 = new$__$1;
var vec__13987 = G__13985;
var seq__13988 = cljs.core.seq(vec__13987);
var first__13989 = cljs.core.first(seq__13988);
var seq__13988__$1 = cljs.core.next(seq__13988);
var x = first__13989;
var xs = seq__13988__$1;
var G__13986 = hoplon.core.child_vec(this$);
var vec__13990 = G__13986;
var seq__13991 = cljs.core.seq(vec__13990);
var first__13992 = cljs.core.first(seq__13991);
var seq__13991__$1 = cljs.core.next(seq__13991);
var k = first__13992;
var ks = seq__13991__$1;
var kids = vec__13990;
var G__13985__$1 = G__13985;
var G__13986__$1 = G__13986;
while(true){
var vec__13993 = G__13985__$1;
var seq__13994 = cljs.core.seq(vec__13993);
var first__13995 = cljs.core.first(seq__13994);
var seq__13994__$1 = cljs.core.next(seq__13994);
var x__$1 = first__13995;
var xs__$1 = seq__13994__$1;
var vec__13996 = G__13986__$1;
var seq__13997 = cljs.core.seq(vec__13996);
var first__13998 = cljs.core.first(seq__13997);
var seq__13997__$1 = cljs.core.next(seq__13997);
var k__$1 = first__13998;
var ks__$1 = seq__13997__$1;
var kids__$1 = vec__13996;
if(cljs.core.truth_((function (){var or__6842__auto__ = x__$1;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return k__$1;
}
})())){
var G__13999 = xs__$1;
var G__14000 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__13985__$1 = G__13999;
G__13986__$1 = G__14000;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_14003 = (function (){var G__14002 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14002) : cljs.core.atom.call(null,G__14002));
})();
this$__$1.hoplonKids = kids_14003;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_14003,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_14006 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_14007 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_14006) : cljs.core.deref.call(null,kids_14006)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_14006,i_14007,x__$1,this$__$1){
return (function (p1__14005_SHARP_,p2__14004_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14006,cljs.core.assoc,i_14007,p2__14004_SHARP_);
});})(kids_14006,i_14007,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14006,cljs.core.assoc,i_14007,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__14008_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__14008_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__14009_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__14009_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__14010_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14010_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_14011 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_14012 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__14013 = (function (){var and__6830__auto__ = attr_14012;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_14012) : cljs.core.deref.call(null,attr_14012)),kk_14011);
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14013)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_14012,cljs.core.assoc,kk_14011,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__14014_SHARP_){
return p1__14014_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__14015_SHARP_){
return p1__14015_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__14016_SHARP_){
return p1__14016_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__14017_SHARP_){
return p1__14017_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return (m__7506__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7506__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7506__auto__.call(null,this$,kvs));
} else {
var m__7506__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return (m__7506__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7506__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7506__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return (m__7506__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7506__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7506__auto__.call(null,this$,kvs));
} else {
var m__7506__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return (m__7506__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7506__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7506__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return (m__7506__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7506__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7506__auto__.call(null,this$,child));
} else {
var m__7506__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return (m__7506__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7506__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7506__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return (m__7506__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7506__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7506__auto__.call(null,this$,child));
} else {
var m__7506__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return (m__7506__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7506__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7506__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return (m__7506__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7506__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7506__auto__.call(null,this$,new$,existing));
} else {
var m__7506__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return (m__7506__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7506__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7506__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return (m__7506__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7506__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7506__auto__.call(null,this$,new$,existing));
} else {
var m__7506__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return (m__7506__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7506__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7506__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args14018 = [];
var len__7950__auto___14025 = arguments.length;
var i__7951__auto___14026 = (0);
while(true){
if((i__7951__auto___14026 < len__7950__auto___14025)){
args14018.push((arguments[i__7951__auto___14026]));

var G__14027 = (i__7951__auto___14026 + (1));
i__7951__auto___14026 = G__14027;
continue;
} else {
}
break;
}

var G__14024 = args14018.length;
switch (G__14024) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14018.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14019){
var G__14020 = cljs.core.first(seq14019);
var seq14019__$1 = cljs.core.next(seq14019);
var G__14021 = cljs.core.first(seq14019__$1);
var seq14019__$2 = cljs.core.next(seq14019__$1);
var G__14022 = cljs.core.first(seq14019__$2);
var seq14019__$3 = cljs.core.next(seq14019__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14020,G__14021,G__14022,seq14019__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args14029 = [];
var len__7950__auto___14036 = arguments.length;
var i__7951__auto___14037 = (0);
while(true){
if((i__7951__auto___14037 < len__7950__auto___14036)){
args14029.push((arguments[i__7951__auto___14037]));

var G__14038 = (i__7951__auto___14037 + (1));
i__7951__auto___14037 = G__14038;
continue;
} else {
}
break;
}

var G__14035 = args14029.length;
switch (G__14035) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14029.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14030){
var G__14031 = cljs.core.first(seq14030);
var seq14030__$1 = cljs.core.next(seq14030);
var G__14032 = cljs.core.first(seq14030__$1);
var seq14030__$2 = cljs.core.next(seq14030__$1);
var G__14033 = cljs.core.first(seq14030__$2);
var seq14030__$3 = cljs.core.next(seq14030__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14031,G__14032,G__14033,seq14030__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return (m__7506__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7506__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__7506__auto__.call(null,this$,elem,value));
} else {
var m__7506__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return (m__7506__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7506__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__7506__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__14043_SHARP_,p2__14042_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__14042_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__14042_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.on_BANG_.call(null,elem,this$__$1,value));
} else {
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.do_BANG_.call(null,elem,this$__$1,value));

}
}
});
hoplon.core.is_ie8 = cljs.core.not(goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__14044_SHARP_){
return p1__14044_SHARP_.head;
}):(function (p1__14045_SHARP_){
return p1__14045_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14046_SHARP_){
try{return cljs.core.vector_QMARK_(p1__14046_SHARP_);
}catch (e14047){if((e14047 instanceof Error)){
var _ = e14047;
return null;
} else {
throw e14047;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14048_SHARP_){
try{return cljs.core.seq_QMARK_(p1__14048_SHARP_);
}catch (e14049){if((e14049 instanceof Error)){
var _ = e14049;
return null;
} else {
throw e14049;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args14050 = [];
var len__7950__auto___14054 = arguments.length;
var i__7951__auto___14055 = (0);
while(true){
if((i__7951__auto___14055 < len__7950__auto___14054)){
args14050.push((arguments[i__7951__auto___14055]));

var G__14056 = (i__7951__auto___14055 + (1));
i__7951__auto___14055 = G__14056;
continue;
} else {
}
break;
}

var G__14052 = args14050.length;
switch (G__14052) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14050.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e14053){if((e14053 instanceof Error)){
var _ = e14053;
return not_found;
} else {
throw e14053;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args14058 = [];
var len__7950__auto___14061 = arguments.length;
var i__7951__auto___14062 = (0);
while(true){
if((i__7951__auto___14062 < len__7950__auto___14061)){
args14058.push((arguments[i__7951__auto___14062]));

var G__14063 = (i__7951__auto___14062 + (1));
i__7951__auto___14062 = G__14063;
continue;
} else {
}
break;
}

var G__14060 = args14058.length;
switch (G__14060) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14058.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__14081 = args;
var vec__14082 = G__14081;
var seq__14083 = cljs.core.seq(vec__14082);
var first__14084 = cljs.core.first(seq__14083);
var seq__14083__$1 = cljs.core.next(seq__14083);
var arg = first__14084;
var args__$1 = seq__14083__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14081__$1 = G__14081;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14085 = G__14081__$1;
var seq__14086 = cljs.core.seq(vec__14085);
var first__14087 = cljs.core.first(seq__14086);
var seq__14086__$1 = cljs.core.next(seq__14086);
var arg__$1 = first__14087;
var args__$2 = seq__14086__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14088 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__14081__$1,attr__$2,kids__$2,vec__14085,seq__14086,first__14087,seq__14086__$1,arg__$1,args__$2,attr,kids,G__14081,vec__14082,seq__14083,first__14084,seq__14083__$1,arg,args__$1){
return (function (p1__14065_SHARP_,p2__14066_SHARP_,p3__14067_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14065_SHARP_,p2__14066_SHARP_,p3__14067_SHARP_);
});})(attr__$1,kids__$1,G__14081__$1,attr__$2,kids__$2,vec__14085,seq__14086,first__14087,seq__14086__$1,arg__$1,args__$2,attr,kids,G__14081,vec__14082,seq__14083,first__14084,seq__14083__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14089 = kids__$2;
var G__14090 = args__$2;
attr__$1 = G__14088;
kids__$1 = G__14089;
G__14081__$1 = G__14090;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__14091 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14092 = kids__$2;
var G__14093 = cljs.core.rest(args__$2);
attr__$1 = G__14091;
kids__$1 = G__14092;
G__14081__$1 = G__14093;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__14094 = attr__$2;
var G__14095 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14096 = args__$2;
attr__$1 = G__14094;
kids__$1 = G__14095;
G__14081__$1 = G__14096;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__14097 = attr__$2;
var G__14098 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14099 = args__$2;
attr__$1 = G__14097;
kids__$1 = G__14098;
G__14081__$1 = G__14099;
continue;
} else {
var G__14100 = attr__$2;
var G__14101 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14102 = args__$2;
attr__$1 = G__14100;
kids__$1 = G__14101;
G__14081__$1 = G__14102;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__14104_SHARP_,p2__14103_SHARP_,p3__14105_SHARP_){
hoplon.core._attr_BANG_(p2__14103_SHARP_,p1__14104_SHARP_,p3__14105_SHARP_);

return p1__14104_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14106){
var vec__14114 = p__14106;
var seq__14115 = cljs.core.seq(vec__14114);
var first__14116 = cljs.core.first(seq__14115);
var seq__14115__$1 = cljs.core.next(seq__14115);
var child_cell = first__14116;
var _ = seq__14115__$1;
var kids = vec__14114;
var this$__$1 = this$;
var seq__14117_14121 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__14118_14122 = null;
var count__14119_14123 = (0);
var i__14120_14124 = (0);
while(true){
if((i__14120_14124 < count__14119_14123)){
var x_14125 = chunk__14118_14122.cljs$core$IIndexed$_nth$arity$2(null,i__14120_14124);
var temp__4657__auto___14126 = hoplon.core.__GT_node(x_14125);
if(cljs.core.truth_(temp__4657__auto___14126)){
var x_14127__$1 = temp__4657__auto___14126;
hoplon.core.append_child_BANG_(this$__$1,x_14127__$1);
} else {
}

var G__14128 = seq__14117_14121;
var G__14129 = chunk__14118_14122;
var G__14130 = count__14119_14123;
var G__14131 = (i__14120_14124 + (1));
seq__14117_14121 = G__14128;
chunk__14118_14122 = G__14129;
count__14119_14123 = G__14130;
i__14120_14124 = G__14131;
continue;
} else {
var temp__4657__auto___14132 = cljs.core.seq(seq__14117_14121);
if(temp__4657__auto___14132){
var seq__14117_14133__$1 = temp__4657__auto___14132;
if(cljs.core.chunked_seq_QMARK_(seq__14117_14133__$1)){
var c__7656__auto___14134 = cljs.core.chunk_first(seq__14117_14133__$1);
var G__14135 = cljs.core.chunk_rest(seq__14117_14133__$1);
var G__14136 = c__7656__auto___14134;
var G__14137 = cljs.core.count(c__7656__auto___14134);
var G__14138 = (0);
seq__14117_14121 = G__14135;
chunk__14118_14122 = G__14136;
count__14119_14123 = G__14137;
i__14120_14124 = G__14138;
continue;
} else {
var x_14139 = cljs.core.first(seq__14117_14133__$1);
var temp__4657__auto___14140__$1 = hoplon.core.__GT_node(x_14139);
if(cljs.core.truth_(temp__4657__auto___14140__$1)){
var x_14141__$1 = temp__4657__auto___14140__$1;
hoplon.core.append_child_BANG_(this$__$1,x_14141__$1);
} else {
}

var G__14142 = cljs.core.next(seq__14117_14133__$1);
var G__14143 = null;
var G__14144 = (0);
var G__14145 = (0);
seq__14117_14121 = G__14142;
chunk__14118_14122 = G__14143;
count__14119_14123 = G__14144;
i__14120_14124 = G__14145;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__14186__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14147 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(1),null);
var G__14150 = this$;
hoplon.core.add_attributes_BANG_(G__14150,attr);

hoplon.core.add_children_BANG_(G__14150,kids);

return G__14150;
};
var G__14186 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14187__i = 0, G__14187__a = new Array(arguments.length -  1);
while (G__14187__i < G__14187__a.length) {G__14187__a[G__14187__i] = arguments[G__14187__i + 1]; ++G__14187__i;}
  args = new cljs.core.IndexedSeq(G__14187__a,0);
} 
return G__14186__delegate.call(this,self__,args);};
G__14186.cljs$lang$maxFixedArity = 1;
G__14186.cljs$lang$applyTo = (function (arglist__14188){
var self__ = cljs.core.first(arglist__14188);
var args = cljs.core.rest(arglist__14188);
return G__14186__delegate(self__,args);
});
G__14186.cljs$core$IFn$_invoke$arity$variadic = G__14186__delegate;
return G__14186;
})()
;

Element.prototype.apply = (function (self__,args14146){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14146)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14189__delegate = function (args){
var this$ = this;
var vec__14151 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14151,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14151,(1),null);
var G__14154 = this$;
hoplon.core.add_attributes_BANG_(G__14154,attr);

hoplon.core.add_children_BANG_(G__14154,kids);

return G__14154;
};
var G__14189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14190__i = 0, G__14190__a = new Array(arguments.length -  0);
while (G__14190__i < G__14190__a.length) {G__14190__a[G__14190__i] = arguments[G__14190__i + 0]; ++G__14190__i;}
  args = new cljs.core.IndexedSeq(G__14190__a,0);
} 
return G__14189__delegate.call(this,args);};
G__14189.cljs$lang$maxFixedArity = 0;
G__14189.cljs$lang$applyTo = (function (arglist__14191){
var args = cljs.core.seq(arglist__14191);
return G__14189__delegate(args);
});
G__14189.cljs$core$IFn$_invoke$arity$variadic = G__14189__delegate;
return G__14189;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14155 = cljs.core.seq(kvs);
var chunk__14157 = null;
var count__14158 = (0);
var i__14159 = (0);
while(true){
if((i__14159 < count__14158)){
var vec__14161 = chunk__14157.cljs$core$IIndexed$_nth$arity$2(null,i__14159);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(1),null);
var k_14192__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_14192__$1);
} else {
e.setAttribute(k_14192__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14192__$1:v));
}

var G__14193 = seq__14155;
var G__14194 = chunk__14157;
var G__14195 = count__14158;
var G__14196 = (i__14159 + (1));
seq__14155 = G__14193;
chunk__14157 = G__14194;
count__14158 = G__14195;
i__14159 = G__14196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14155);
if(temp__4657__auto__){
var seq__14155__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14155__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14155__$1);
var G__14197 = cljs.core.chunk_rest(seq__14155__$1);
var G__14198 = c__7656__auto__;
var G__14199 = cljs.core.count(c__7656__auto__);
var G__14200 = (0);
seq__14155 = G__14197;
chunk__14157 = G__14198;
count__14158 = G__14199;
i__14159 = G__14200;
continue;
} else {
var vec__14164 = cljs.core.first(seq__14155__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(1),null);
var k_14201__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_14201__$1);
} else {
e.setAttribute(k_14201__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14201__$1:v));
}

var G__14202 = cljs.core.next(seq__14155__$1);
var G__14203 = null;
var G__14204 = (0);
var G__14205 = (0);
seq__14155 = G__14202;
chunk__14157 = G__14203;
count__14158 = G__14204;
i__14159 = G__14205;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14167 = cljs.core.seq(kvs);
var chunk__14168 = null;
var count__14169 = (0);
var i__14170 = (0);
while(true){
if((i__14170 < count__14169)){
var vec__14171 = chunk__14168.cljs$core$IIndexed$_nth$arity$2(null,i__14170);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14171,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14171,(1),null);
var G__14174_14206 = e;
var G__14175_14207 = "style";
var G__14176_14208 = cljs.core.name(k);
var G__14177_14209 = [cljs.core.str(v)].join('');
goog.object.set(G__14174_14206,G__14175_14207,G__14176_14208,G__14177_14209);

var G__14210 = seq__14167;
var G__14211 = chunk__14168;
var G__14212 = count__14169;
var G__14213 = (i__14170 + (1));
seq__14167 = G__14210;
chunk__14168 = G__14211;
count__14169 = G__14212;
i__14170 = G__14213;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14167);
if(temp__4657__auto__){
var seq__14167__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14167__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14167__$1);
var G__14214 = cljs.core.chunk_rest(seq__14167__$1);
var G__14215 = c__7656__auto__;
var G__14216 = cljs.core.count(c__7656__auto__);
var G__14217 = (0);
seq__14167 = G__14214;
chunk__14168 = G__14215;
count__14169 = G__14216;
i__14170 = G__14217;
continue;
} else {
var vec__14178 = cljs.core.first(seq__14167__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(1),null);
var G__14181_14218 = e;
var G__14182_14219 = "style";
var G__14183_14220 = cljs.core.name(k);
var G__14184_14221 = [cljs.core.str(v)].join('');
goog.object.set(G__14181_14218,G__14182_14219,G__14183_14220,G__14184_14221);

var G__14222 = cljs.core.next(seq__14167__$1);
var G__14223 = null;
var G__14224 = (0);
var G__14225 = (0);
seq__14167 = G__14222;
chunk__14168 = G__14223;
count__14169 = G__14224;
i__14170 = G__14225;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e14185){if((e14185 instanceof Error)){
var _ = e14185;
return null;
} else {
throw e14185;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__14232__delegate = function (args){
var vec__14229 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14229,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14229,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__14232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14233__i = 0, G__14233__a = new Array(arguments.length -  0);
while (G__14233__i < G__14233__a.length) {G__14233__a[G__14233__i] = arguments[G__14233__i + 0]; ++G__14233__i;}
  args = new cljs.core.IndexedSeq(G__14233__a,0);
} 
return G__14232__delegate.call(this,args);};
G__14232.cljs$lang$maxFixedArity = 0;
G__14232.cljs$lang$applyTo = (function (arglist__14234){
var args = cljs.core.seq(arglist__14234);
return G__14232__delegate(args);
});
G__14232.cljs$core$IFn$_invoke$arity$variadic = G__14232__delegate;
return G__14232;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__14238__delegate = function (rest__14235_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),rest__14235_SHARP_);
};
var G__14238 = function (var_args){
var rest__14235_SHARP_ = null;
if (arguments.length > 0) {
var G__14239__i = 0, G__14239__a = new Array(arguments.length -  0);
while (G__14239__i < G__14239__a.length) {G__14239__a[G__14239__i] = arguments[G__14239__i + 0]; ++G__14239__i;}
  rest__14235_SHARP_ = new cljs.core.IndexedSeq(G__14239__a,0);
} 
return G__14238__delegate.call(this,rest__14235_SHARP_);};
G__14238.cljs$lang$maxFixedArity = 0;
G__14238.cljs$lang$applyTo = (function (arglist__14240){
var rest__14235_SHARP_ = cljs.core.seq(arglist__14240);
return G__14238__delegate(rest__14235_SHARP_);
});
G__14238.cljs$core$IFn$_invoke$arity$variadic = G__14238__delegate;
return G__14238;
})()
;
if(cljs.core.not(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__14241__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e14237){if((e14237 instanceof Error)){
var _ = e14237;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e14237;

}
}};
var G__14241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14242__i = 0, G__14242__a = new Array(arguments.length -  0);
while (G__14242__i < G__14242__a.length) {G__14242__a[G__14242__i] = arguments[G__14242__i + 0]; ++G__14242__i;}
  args = new cljs.core.IndexedSeq(G__14242__a,0);
} 
return G__14241__delegate.call(this,args);};
G__14241.cljs$lang$maxFixedArity = 0;
G__14241.cljs$lang$applyTo = (function (arglist__14243){
var args = cljs.core.seq(arglist__14243);
return G__14241__delegate(args);
});
G__14241.cljs$core$IFn$_invoke$arity$variadic = G__14241__delegate;
return G__14241;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7957__auto__ = [];
var len__7950__auto___14245 = arguments.length;
var i__7951__auto___14246 = (0);
while(true){
if((i__7951__auto___14246 < len__7950__auto___14245)){
args__7957__auto__.push((arguments[i__7951__auto___14246]));

var G__14247 = (i__7951__auto___14246 + (1));
i__7951__auto___14246 = G__14247;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hoplon.core.parse_args(args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq14244){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14244));
});

hoplon.core.body = hoplon.core.make_singleton_ctor(document.body);
hoplon.core.head = hoplon.core.make_singleton_ctor((hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1(document) : hoplon.core._head_STAR_.call(null,document)));
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor("multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.picture = hoplon.core.make_elem_ctor("picture");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.shadow = hoplon.core.make_elem_ctor("shadow");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.template = hoplon.core.make_elem_ctor("template");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__14248_SHARP_){
return document.createTextNode(p1__14248_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14249_SHARP_){
return document.createComment(p1__14249_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__14252 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14253 = (0);
return setTimeout(G__14252,G__14253);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__14254_SHARP_){
var e = p1__14254_SHARP_.target;
if(cljs.core.truth_((function (){var or__6842__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__14254_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7770__auto__ = (function (){var G__14255 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14255) : cljs.core.atom.call(null,G__14255));
})();
var prefer_table__7771__auto__ = (function (){var G__14256 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14256) : cljs.core.atom.call(null,G__14256));
})();
var method_cache__7772__auto__ = (function (){var G__14257 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14257) : cljs.core.atom.call(null,G__14257));
})();
var cached_hierarchy__7773__auto__ = (function (){var G__14258 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14258) : cljs.core.atom.call(null,G__14258));
})();
var hierarchy__7774__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7774__auto__,method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14259 = elem;
var G__14260 = cljs.core.cst$kw$attr;
var G__14261 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14259,G__14260,G__14261) : hoplon.core.do_BANG_.call(null,G__14259,G__14260,G__14261));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7770__auto__ = (function (){var G__14262 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14262) : cljs.core.atom.call(null,G__14262));
})();
var prefer_table__7771__auto__ = (function (){var G__14263 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14263) : cljs.core.atom.call(null,G__14263));
})();
var method_cache__7772__auto__ = (function (){var G__14264 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14264) : cljs.core.atom.call(null,G__14264));
})();
var cached_hierarchy__7773__auto__ = (function (){var G__14265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14265) : cljs.core.atom.call(null,G__14265));
})();
var hierarchy__7774__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7774__auto__,method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__14280 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14280) : cljs.core.atom.call(null,G__14280));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__14281,G__14282){
return (G__14281.cljs$core$IFn$_invoke$arity$1 ? G__14281.cljs$core$IFn$_invoke$arity$1(G__14282) : G__14281.call(null,G__14282));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14266_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__14284,G__14285,G__14283){
return (G__14283.cljs$core$IFn$_invoke$arity$2 ? G__14283.cljs$core$IFn$_invoke$arity$2(G__14284,G__14285) : G__14283.call(null,G__14284,G__14285));
});})(on_deck,items_seq))
).call(null,items_seq,p1__14266_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14267_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14267_SHARP_) : cljs.core.deref.call(null,p1__14267_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14267_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__14286 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14287 = null;
var count__14288 = (0);
var i__14289 = (0);
while(true){
if((i__14289 < count__14288)){
var i = chunk__14287.cljs$core$IIndexed$_nth$arity$2(null,i__14289);
var e_14292 = (function (){var or__6842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
var G__14290 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14290) : tpl.call(null,G__14290));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14292);

var G__14293 = seq__14286;
var G__14294 = chunk__14287;
var G__14295 = count__14288;
var G__14296 = (i__14289 + (1));
seq__14286 = G__14293;
chunk__14287 = G__14294;
count__14288 = G__14295;
i__14289 = G__14296;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14286);
if(temp__4657__auto__){
var seq__14286__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14286__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14286__$1);
var G__14297 = cljs.core.chunk_rest(seq__14286__$1);
var G__14298 = c__7656__auto__;
var G__14299 = cljs.core.count(c__7656__auto__);
var G__14300 = (0);
seq__14286 = G__14297;
chunk__14287 = G__14298;
count__14288 = G__14299;
i__14289 = G__14300;
continue;
} else {
var i = cljs.core.first(seq__14286__$1);
var e_14301 = (function (){var or__6842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
var G__14291 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14291) : tpl.call(null,G__14291));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14301);

var G__14302 = cljs.core.next(seq__14286__$1);
var G__14303 = null;
var G__14304 = (0);
var G__14305 = (0);
seq__14286 = G__14302;
chunk__14287 = G__14303;
count__14288 = G__14304;
i__14289 = G__14305;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__7760__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7760__auto__)){
var e_14306 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14306);

var G__14307 = (_ + (1));
_ = G__14307;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__7957__auto__ = [];
var len__7950__auto___14318 = arguments.length;
var i__7951__auto___14319 = (0);
while(true){
if((i__7951__auto___14319 < len__7950__auto___14318)){
args__7957__auto__.push((arguments[i__7951__auto___14319]));

var G__14320 = (i__7951__auto___14319 + (1));
i__7951__auto___14319 = G__14320;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14309){
var vec__14310 = p__14309;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14310,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__14310,default$){
return (function (G__14313,G__14315,G__14314){
var or__6842__auto__ = (function (){var and__6830__auto__ = (G__14313.cljs$core$IFn$_invoke$arity$1 ? G__14313.cljs$core$IFn$_invoke$arity$1(G__14314) : G__14313.call(null,G__14314));
if(cljs.core.truth_(and__6830__auto__)){
return G__14314;
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return G__14315;
}
});})(c,vec__14310,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__14310,default$){
return (function (){
var G__14316 = c;
var G__14317 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14316,G__14317) : cljs.core.reset_BANG_.call(null,G__14316,G__14317));
});})(_,c,vec__14310,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14308){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14308));
});

