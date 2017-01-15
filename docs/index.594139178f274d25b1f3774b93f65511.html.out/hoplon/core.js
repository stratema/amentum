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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13897_SHARP_,p2__13898_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13897_SHARP_,p2__13898_SHARP_.getAttribute("static-id"),p2__13898_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args13899 = [];
var len__7950__auto___13904 = arguments.length;
var i__7951__auto___13905 = (0);
while(true){
if((i__7951__auto___13905 < len__7950__auto___13904)){
args13899.push((arguments[i__7951__auto___13905]));

var G__13906 = (i__7951__auto___13905 + (1));
i__7951__auto___13905 = G__13906;
continue;
} else {
}
break;
}

var G__13901 = args13899.length;
switch (G__13901) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13899.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__13902_13908 = init;
var G__13903_13909 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13902_13908,G__13903_13909) : f.call(null,G__13902_13908,G__13903_13909));

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
var vec__13916 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__13917 = cljs.core.seq(vec__13916);
var first__13918 = cljs.core.first(seq__13917);
var seq__13917__$1 = cljs.core.next(seq__13917);
var f = first__13918;
var more = seq__13917__$1;
var vec__13919 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13919,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13919,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("594139178f274d25b1f3774b93f65511")].join(''),f2], null)))));
});
/**
 * Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__13922_SHARP_){
return cljs.core.zipmap(p1__13922_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__13923 = (i + (1));
var G__13924 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13923;
ret = G__13924;
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
var G__13925 = [cljs.core.str(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__13925) : hoplon.core.$text.call(null,G__13925));
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
var G__13954 = new$__$1;
var vec__13956 = G__13954;
var seq__13957 = cljs.core.seq(vec__13956);
var first__13958 = cljs.core.first(seq__13957);
var seq__13957__$1 = cljs.core.next(seq__13957);
var x = first__13958;
var xs = seq__13957__$1;
var G__13955 = hoplon.core.child_vec(this$);
var vec__13959 = G__13955;
var seq__13960 = cljs.core.seq(vec__13959);
var first__13961 = cljs.core.first(seq__13960);
var seq__13960__$1 = cljs.core.next(seq__13960);
var k = first__13961;
var ks = seq__13960__$1;
var kids = vec__13959;
var G__13954__$1 = G__13954;
var G__13955__$1 = G__13955;
while(true){
var vec__13962 = G__13954__$1;
var seq__13963 = cljs.core.seq(vec__13962);
var first__13964 = cljs.core.first(seq__13963);
var seq__13963__$1 = cljs.core.next(seq__13963);
var x__$1 = first__13964;
var xs__$1 = seq__13963__$1;
var vec__13965 = G__13955__$1;
var seq__13966 = cljs.core.seq(vec__13965);
var first__13967 = cljs.core.first(seq__13966);
var seq__13966__$1 = cljs.core.next(seq__13966);
var k__$1 = first__13967;
var ks__$1 = seq__13966__$1;
var kids__$1 = vec__13965;
if(cljs.core.truth_((function (){var or__6842__auto__ = x__$1;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return k__$1;
}
})())){
var G__13968 = xs__$1;
var G__13969 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__13954__$1 = G__13968;
G__13955__$1 = G__13969;
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
var kids_13972 = (function (){var G__13971 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13971) : cljs.core.atom.call(null,G__13971));
})();
this$__$1.hoplonKids = kids_13972;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_13972,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_13975 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_13976 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_13975) : cljs.core.deref.call(null,kids_13975)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_13975,i_13976,x__$1,this$__$1){
return (function (p1__13974_SHARP_,p2__13973_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_13975,cljs.core.assoc,i_13976,p2__13973_SHARP_);
});})(kids_13975,i_13976,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_13975,cljs.core.assoc,i_13976,x__$1);
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
return (function (p1__13977_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__13977_SHARP_));
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
return (function (p1__13978_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__13978_SHARP_], 0)));
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
return (function (p1__13979_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__13979_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_13980 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_13981 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__13982 = (function (){var and__6830__auto__ = attr_13981;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_13981) : cljs.core.deref.call(null,attr_13981)),kk_13980);
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__13982)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_13981,cljs.core.assoc,kk_13980,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__13983_SHARP_){
return p1__13983_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__13984_SHARP_){
return p1__13984_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__13985_SHARP_){
return p1__13985_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__13986_SHARP_){
return p1__13986_SHARP_.hoplonKids;
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
var args13987 = [];
var len__7950__auto___13994 = arguments.length;
var i__7951__auto___13995 = (0);
while(true){
if((i__7951__auto___13995 < len__7950__auto___13994)){
args13987.push((arguments[i__7951__auto___13995]));

var G__13996 = (i__7951__auto___13995 + (1));
i__7951__auto___13995 = G__13996;
continue;
} else {
}
break;
}

var G__13993 = args13987.length;
switch (G__13993) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13987.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq13988){
var G__13989 = cljs.core.first(seq13988);
var seq13988__$1 = cljs.core.next(seq13988);
var G__13990 = cljs.core.first(seq13988__$1);
var seq13988__$2 = cljs.core.next(seq13988__$1);
var G__13991 = cljs.core.first(seq13988__$2);
var seq13988__$3 = cljs.core.next(seq13988__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13989,G__13990,G__13991,seq13988__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args13998 = [];
var len__7950__auto___14005 = arguments.length;
var i__7951__auto___14006 = (0);
while(true){
if((i__7951__auto___14006 < len__7950__auto___14005)){
args13998.push((arguments[i__7951__auto___14006]));

var G__14007 = (i__7951__auto___14006 + (1));
i__7951__auto___14006 = G__14007;
continue;
} else {
}
break;
}

var G__14004 = args13998.length;
switch (G__14004) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13998.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq13999){
var G__14000 = cljs.core.first(seq13999);
var seq13999__$1 = cljs.core.next(seq13999);
var G__14001 = cljs.core.first(seq13999__$1);
var seq13999__$2 = cljs.core.next(seq13999__$1);
var G__14002 = cljs.core.first(seq13999__$2);
var seq13999__$3 = cljs.core.next(seq13999__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14000,G__14001,G__14002,seq13999__$3);
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
return (function (p1__14012_SHARP_,p2__14011_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__14011_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__14011_SHARP_));
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
hoplon.core._head_STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__14013_SHARP_){
return p1__14013_SHARP_.head;
}):(function (p1__14014_SHARP_){
return p1__14014_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14015_SHARP_){
try{return cljs.core.vector_QMARK_(p1__14015_SHARP_);
}catch (e14016){if((e14016 instanceof Error)){
var _ = e14016;
return null;
} else {
throw e14016;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14017_SHARP_){
try{return cljs.core.seq_QMARK_(p1__14017_SHARP_);
}catch (e14018){if((e14018 instanceof Error)){
var _ = e14018;
return null;
} else {
throw e14018;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args14019 = [];
var len__7950__auto___14023 = arguments.length;
var i__7951__auto___14024 = (0);
while(true){
if((i__7951__auto___14024 < len__7950__auto___14023)){
args14019.push((arguments[i__7951__auto___14024]));

var G__14025 = (i__7951__auto___14024 + (1));
i__7951__auto___14024 = G__14025;
continue;
} else {
}
break;
}

var G__14021 = args14019.length;
switch (G__14021) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14019.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e14022){if((e14022 instanceof Error)){
var _ = e14022;
return not_found;
} else {
throw e14022;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args14027 = [];
var len__7950__auto___14030 = arguments.length;
var i__7951__auto___14031 = (0);
while(true){
if((i__7951__auto___14031 < len__7950__auto___14030)){
args14027.push((arguments[i__7951__auto___14031]));

var G__14032 = (i__7951__auto___14031 + (1));
i__7951__auto___14031 = G__14032;
continue;
} else {
}
break;
}

var G__14029 = args14027.length;
switch (G__14029) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14027.length)].join('')));

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
var G__14050 = args;
var vec__14051 = G__14050;
var seq__14052 = cljs.core.seq(vec__14051);
var first__14053 = cljs.core.first(seq__14052);
var seq__14052__$1 = cljs.core.next(seq__14052);
var arg = first__14053;
var args__$1 = seq__14052__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14050__$1 = G__14050;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14054 = G__14050__$1;
var seq__14055 = cljs.core.seq(vec__14054);
var first__14056 = cljs.core.first(seq__14055);
var seq__14055__$1 = cljs.core.next(seq__14055);
var arg__$1 = first__14056;
var args__$2 = seq__14055__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14057 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__14050__$1,attr__$2,kids__$2,vec__14054,seq__14055,first__14056,seq__14055__$1,arg__$1,args__$2,attr,kids,G__14050,vec__14051,seq__14052,first__14053,seq__14052__$1,arg,args__$1){
return (function (p1__14034_SHARP_,p2__14035_SHARP_,p3__14036_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14034_SHARP_,p2__14035_SHARP_,p3__14036_SHARP_);
});})(attr__$1,kids__$1,G__14050__$1,attr__$2,kids__$2,vec__14054,seq__14055,first__14056,seq__14055__$1,arg__$1,args__$2,attr,kids,G__14050,vec__14051,seq__14052,first__14053,seq__14052__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14058 = kids__$2;
var G__14059 = args__$2;
attr__$1 = G__14057;
kids__$1 = G__14058;
G__14050__$1 = G__14059;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__14060 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14061 = kids__$2;
var G__14062 = cljs.core.rest(args__$2);
attr__$1 = G__14060;
kids__$1 = G__14061;
G__14050__$1 = G__14062;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__14063 = attr__$2;
var G__14064 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14065 = args__$2;
attr__$1 = G__14063;
kids__$1 = G__14064;
G__14050__$1 = G__14065;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__14066 = attr__$2;
var G__14067 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14068 = args__$2;
attr__$1 = G__14066;
kids__$1 = G__14067;
G__14050__$1 = G__14068;
continue;
} else {
var G__14069 = attr__$2;
var G__14070 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14071 = args__$2;
attr__$1 = G__14069;
kids__$1 = G__14070;
G__14050__$1 = G__14071;
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
return cljs.core.reduce_kv((function (p1__14073_SHARP_,p2__14072_SHARP_,p3__14074_SHARP_){
hoplon.core._attr_BANG_(p2__14072_SHARP_,p1__14073_SHARP_,p3__14074_SHARP_);

return p1__14073_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14075){
var vec__14083 = p__14075;
var seq__14084 = cljs.core.seq(vec__14083);
var first__14085 = cljs.core.first(seq__14084);
var seq__14084__$1 = cljs.core.next(seq__14084);
var child_cell = first__14085;
var _ = seq__14084__$1;
var kids = vec__14083;
var this$__$1 = this$;
var seq__14086_14090 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__14087_14091 = null;
var count__14088_14092 = (0);
var i__14089_14093 = (0);
while(true){
if((i__14089_14093 < count__14088_14092)){
var x_14094 = chunk__14087_14091.cljs$core$IIndexed$_nth$arity$2(null,i__14089_14093);
var temp__4657__auto___14095 = hoplon.core.__GT_node(x_14094);
if(cljs.core.truth_(temp__4657__auto___14095)){
var x_14096__$1 = temp__4657__auto___14095;
hoplon.core.append_child_BANG_(this$__$1,x_14096__$1);
} else {
}

var G__14097 = seq__14086_14090;
var G__14098 = chunk__14087_14091;
var G__14099 = count__14088_14092;
var G__14100 = (i__14089_14093 + (1));
seq__14086_14090 = G__14097;
chunk__14087_14091 = G__14098;
count__14088_14092 = G__14099;
i__14089_14093 = G__14100;
continue;
} else {
var temp__4657__auto___14101 = cljs.core.seq(seq__14086_14090);
if(temp__4657__auto___14101){
var seq__14086_14102__$1 = temp__4657__auto___14101;
if(cljs.core.chunked_seq_QMARK_(seq__14086_14102__$1)){
var c__7656__auto___14103 = cljs.core.chunk_first(seq__14086_14102__$1);
var G__14104 = cljs.core.chunk_rest(seq__14086_14102__$1);
var G__14105 = c__7656__auto___14103;
var G__14106 = cljs.core.count(c__7656__auto___14103);
var G__14107 = (0);
seq__14086_14090 = G__14104;
chunk__14087_14091 = G__14105;
count__14088_14092 = G__14106;
i__14089_14093 = G__14107;
continue;
} else {
var x_14108 = cljs.core.first(seq__14086_14102__$1);
var temp__4657__auto___14109__$1 = hoplon.core.__GT_node(x_14108);
if(cljs.core.truth_(temp__4657__auto___14109__$1)){
var x_14110__$1 = temp__4657__auto___14109__$1;
hoplon.core.append_child_BANG_(this$__$1,x_14110__$1);
} else {
}

var G__14111 = cljs.core.next(seq__14086_14102__$1);
var G__14112 = null;
var G__14113 = (0);
var G__14114 = (0);
seq__14086_14090 = G__14111;
chunk__14087_14091 = G__14112;
count__14088_14092 = G__14113;
i__14089_14093 = G__14114;
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
var G__14155__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14116 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14116,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14116,(1),null);
var G__14119 = this$;
hoplon.core.add_attributes_BANG_(G__14119,attr);

hoplon.core.add_children_BANG_(G__14119,kids);

return G__14119;
};
var G__14155 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14156__i = 0, G__14156__a = new Array(arguments.length -  1);
while (G__14156__i < G__14156__a.length) {G__14156__a[G__14156__i] = arguments[G__14156__i + 1]; ++G__14156__i;}
  args = new cljs.core.IndexedSeq(G__14156__a,0);
} 
return G__14155__delegate.call(this,self__,args);};
G__14155.cljs$lang$maxFixedArity = 1;
G__14155.cljs$lang$applyTo = (function (arglist__14157){
var self__ = cljs.core.first(arglist__14157);
var args = cljs.core.rest(arglist__14157);
return G__14155__delegate(self__,args);
});
G__14155.cljs$core$IFn$_invoke$arity$variadic = G__14155__delegate;
return G__14155;
})()
;

Element.prototype.apply = (function (self__,args14115){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14115)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14158__delegate = function (args){
var this$ = this;
var vec__14120 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14120,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14120,(1),null);
var G__14123 = this$;
hoplon.core.add_attributes_BANG_(G__14123,attr);

hoplon.core.add_children_BANG_(G__14123,kids);

return G__14123;
};
var G__14158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14159__i = 0, G__14159__a = new Array(arguments.length -  0);
while (G__14159__i < G__14159__a.length) {G__14159__a[G__14159__i] = arguments[G__14159__i + 0]; ++G__14159__i;}
  args = new cljs.core.IndexedSeq(G__14159__a,0);
} 
return G__14158__delegate.call(this,args);};
G__14158.cljs$lang$maxFixedArity = 0;
G__14158.cljs$lang$applyTo = (function (arglist__14160){
var args = cljs.core.seq(arglist__14160);
return G__14158__delegate(args);
});
G__14158.cljs$core$IFn$_invoke$arity$variadic = G__14158__delegate;
return G__14158;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14124 = cljs.core.seq(kvs);
var chunk__14126 = null;
var count__14127 = (0);
var i__14128 = (0);
while(true){
if((i__14128 < count__14127)){
var vec__14130 = chunk__14126.cljs$core$IIndexed$_nth$arity$2(null,i__14128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14130,(1),null);
var k_14161__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_14161__$1);
} else {
e.setAttribute(k_14161__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14161__$1:v));
}

var G__14162 = seq__14124;
var G__14163 = chunk__14126;
var G__14164 = count__14127;
var G__14165 = (i__14128 + (1));
seq__14124 = G__14162;
chunk__14126 = G__14163;
count__14127 = G__14164;
i__14128 = G__14165;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14124);
if(temp__4657__auto__){
var seq__14124__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14124__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14124__$1);
var G__14166 = cljs.core.chunk_rest(seq__14124__$1);
var G__14167 = c__7656__auto__;
var G__14168 = cljs.core.count(c__7656__auto__);
var G__14169 = (0);
seq__14124 = G__14166;
chunk__14126 = G__14167;
count__14127 = G__14168;
i__14128 = G__14169;
continue;
} else {
var vec__14133 = cljs.core.first(seq__14124__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(1),null);
var k_14170__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_14170__$1);
} else {
e.setAttribute(k_14170__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14170__$1:v));
}

var G__14171 = cljs.core.next(seq__14124__$1);
var G__14172 = null;
var G__14173 = (0);
var G__14174 = (0);
seq__14124 = G__14171;
chunk__14126 = G__14172;
count__14127 = G__14173;
i__14128 = G__14174;
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
var seq__14136 = cljs.core.seq(kvs);
var chunk__14137 = null;
var count__14138 = (0);
var i__14139 = (0);
while(true){
if((i__14139 < count__14138)){
var vec__14140 = chunk__14137.cljs$core$IIndexed$_nth$arity$2(null,i__14139);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14140,(1),null);
var G__14143_14175 = e;
var G__14144_14176 = "style";
var G__14145_14177 = cljs.core.name(k);
var G__14146_14178 = [cljs.core.str(v)].join('');
goog.object.set(G__14143_14175,G__14144_14176,G__14145_14177,G__14146_14178);

var G__14179 = seq__14136;
var G__14180 = chunk__14137;
var G__14181 = count__14138;
var G__14182 = (i__14139 + (1));
seq__14136 = G__14179;
chunk__14137 = G__14180;
count__14138 = G__14181;
i__14139 = G__14182;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14136);
if(temp__4657__auto__){
var seq__14136__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14136__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14136__$1);
var G__14183 = cljs.core.chunk_rest(seq__14136__$1);
var G__14184 = c__7656__auto__;
var G__14185 = cljs.core.count(c__7656__auto__);
var G__14186 = (0);
seq__14136 = G__14183;
chunk__14137 = G__14184;
count__14138 = G__14185;
i__14139 = G__14186;
continue;
} else {
var vec__14147 = cljs.core.first(seq__14136__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(1),null);
var G__14150_14187 = e;
var G__14151_14188 = "style";
var G__14152_14189 = cljs.core.name(k);
var G__14153_14190 = [cljs.core.str(v)].join('');
goog.object.set(G__14150_14187,G__14151_14188,G__14152_14189,G__14153_14190);

var G__14191 = cljs.core.next(seq__14136__$1);
var G__14192 = null;
var G__14193 = (0);
var G__14194 = (0);
seq__14136 = G__14191;
chunk__14137 = G__14192;
count__14138 = G__14193;
i__14139 = G__14194;
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
}catch (e14154){if((e14154 instanceof Error)){
var _ = e14154;
return null;
} else {
throw e14154;

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
var G__14201__delegate = function (args){
var vec__14198 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14198,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14198,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__14201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14202__i = 0, G__14202__a = new Array(arguments.length -  0);
while (G__14202__i < G__14202__a.length) {G__14202__a[G__14202__i] = arguments[G__14202__i + 0]; ++G__14202__i;}
  args = new cljs.core.IndexedSeq(G__14202__a,0);
} 
return G__14201__delegate.call(this,args);};
G__14201.cljs$lang$maxFixedArity = 0;
G__14201.cljs$lang$applyTo = (function (arglist__14203){
var args = cljs.core.seq(arglist__14203);
return G__14201__delegate(args);
});
G__14201.cljs$core$IFn$_invoke$arity$variadic = G__14201__delegate;
return G__14201;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__14207__delegate = function (rest__14204_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),rest__14204_SHARP_);
};
var G__14207 = function (var_args){
var rest__14204_SHARP_ = null;
if (arguments.length > 0) {
var G__14208__i = 0, G__14208__a = new Array(arguments.length -  0);
while (G__14208__i < G__14208__a.length) {G__14208__a[G__14208__i] = arguments[G__14208__i + 0]; ++G__14208__i;}
  rest__14204_SHARP_ = new cljs.core.IndexedSeq(G__14208__a,0);
} 
return G__14207__delegate.call(this,rest__14204_SHARP_);};
G__14207.cljs$lang$maxFixedArity = 0;
G__14207.cljs$lang$applyTo = (function (arglist__14209){
var rest__14204_SHARP_ = cljs.core.seq(arglist__14209);
return G__14207__delegate(rest__14204_SHARP_);
});
G__14207.cljs$core$IFn$_invoke$arity$variadic = G__14207__delegate;
return G__14207;
})()
;
if(cljs.core.not(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__14210__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e14206){if((e14206 instanceof Error)){
var _ = e14206;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e14206;

}
}};
var G__14210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14211__i = 0, G__14211__a = new Array(arguments.length -  0);
while (G__14211__i < G__14211__a.length) {G__14211__a[G__14211__i] = arguments[G__14211__i + 0]; ++G__14211__i;}
  args = new cljs.core.IndexedSeq(G__14211__a,0);
} 
return G__14210__delegate.call(this,args);};
G__14210.cljs$lang$maxFixedArity = 0;
G__14210.cljs$lang$applyTo = (function (arglist__14212){
var args = cljs.core.seq(arglist__14212);
return G__14210__delegate(args);
});
G__14210.cljs$core$IFn$_invoke$arity$variadic = G__14210__delegate;
return G__14210;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7957__auto__ = [];
var len__7950__auto___14214 = arguments.length;
var i__7951__auto___14215 = (0);
while(true){
if((i__7951__auto___14215 < len__7950__auto___14214)){
args__7957__auto__.push((arguments[i__7951__auto___14215]));

var G__14216 = (i__7951__auto___14215 + (1));
i__7951__auto___14215 = G__14216;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq14213){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14213));
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
hoplon.core.$text = (function hoplon$core$$text(p1__14217_SHARP_){
return document.createTextNode(p1__14217_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14218_SHARP_){
return document.createComment(p1__14218_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__14221 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14222 = (0);
return setTimeout(G__14221,G__14222);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__14223_SHARP_){
var e = p1__14223_SHARP_.target;
if(cljs.core.truth_((function (){var or__6842__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__14223_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7770__auto__ = (function (){var G__14224 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14224) : cljs.core.atom.call(null,G__14224));
})();
var prefer_table__7771__auto__ = (function (){var G__14225 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14225) : cljs.core.atom.call(null,G__14225));
})();
var method_cache__7772__auto__ = (function (){var G__14226 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14226) : cljs.core.atom.call(null,G__14226));
})();
var cached_hierarchy__7773__auto__ = (function (){var G__14227 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14227) : cljs.core.atom.call(null,G__14227));
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
var G__14228 = elem;
var G__14229 = cljs.core.cst$kw$attr;
var G__14230 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14228,G__14229,G__14230) : hoplon.core.do_BANG_.call(null,G__14228,G__14229,G__14230));
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
hoplon.core.on_BANG_ = (function (){var method_table__7770__auto__ = (function (){var G__14231 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14231) : cljs.core.atom.call(null,G__14231));
})();
var prefer_table__7771__auto__ = (function (){var G__14232 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14232) : cljs.core.atom.call(null,G__14232));
})();
var method_cache__7772__auto__ = (function (){var G__14233 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14233) : cljs.core.atom.call(null,G__14233));
})();
var cached_hierarchy__7773__auto__ = (function (){var G__14234 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14234) : cljs.core.atom.call(null,G__14234));
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
var on_deck = (function (){var G__14249 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14249) : cljs.core.atom.call(null,G__14249));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__14250,G__14251){
return (G__14250.cljs$core$IFn$_invoke$arity$1 ? G__14250.cljs$core$IFn$_invoke$arity$1(G__14251) : G__14250.call(null,G__14251));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14235_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__14253,G__14254,G__14252){
return (G__14252.cljs$core$IFn$_invoke$arity$2 ? G__14252.cljs$core$IFn$_invoke$arity$2(G__14253,G__14254) : G__14252.call(null,G__14253,G__14254));
});})(on_deck,items_seq))
).call(null,items_seq,p1__14235_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14236_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14236_SHARP_) : cljs.core.deref.call(null,p1__14236_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14236_SHARP_,cljs.core.rest);

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
var seq__14255 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14256 = null;
var count__14257 = (0);
var i__14258 = (0);
while(true){
if((i__14258 < count__14257)){
var i = chunk__14256.cljs$core$IIndexed$_nth$arity$2(null,i__14258);
var e_14261 = (function (){var or__6842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
var G__14259 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14259) : tpl.call(null,G__14259));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14261);

var G__14262 = seq__14255;
var G__14263 = chunk__14256;
var G__14264 = count__14257;
var G__14265 = (i__14258 + (1));
seq__14255 = G__14262;
chunk__14256 = G__14263;
count__14257 = G__14264;
i__14258 = G__14265;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14255);
if(temp__4657__auto__){
var seq__14255__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14255__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14255__$1);
var G__14266 = cljs.core.chunk_rest(seq__14255__$1);
var G__14267 = c__7656__auto__;
var G__14268 = cljs.core.count(c__7656__auto__);
var G__14269 = (0);
seq__14255 = G__14266;
chunk__14256 = G__14267;
count__14257 = G__14268;
i__14258 = G__14269;
continue;
} else {
var i = cljs.core.first(seq__14255__$1);
var e_14270 = (function (){var or__6842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
var G__14260 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14260) : tpl.call(null,G__14260));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14270);

var G__14271 = cljs.core.next(seq__14255__$1);
var G__14272 = null;
var G__14273 = (0);
var G__14274 = (0);
seq__14255 = G__14271;
chunk__14256 = G__14272;
count__14257 = G__14273;
i__14258 = G__14274;
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
var e_14275 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14275);

var G__14276 = (_ + (1));
_ = G__14276;
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
var len__7950__auto___14287 = arguments.length;
var i__7951__auto___14288 = (0);
while(true){
if((i__7951__auto___14288 < len__7950__auto___14287)){
args__7957__auto__.push((arguments[i__7951__auto___14288]));

var G__14289 = (i__7951__auto___14288 + (1));
i__7951__auto___14288 = G__14289;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14278){
var vec__14279 = p__14278;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14279,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__14279,default$){
return (function (G__14282,G__14284,G__14283){
var or__6842__auto__ = (function (){var and__6830__auto__ = (G__14282.cljs$core$IFn$_invoke$arity$1 ? G__14282.cljs$core$IFn$_invoke$arity$1(G__14283) : G__14282.call(null,G__14283));
if(cljs.core.truth_(and__6830__auto__)){
return G__14283;
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return G__14284;
}
});})(c,vec__14279,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__14279,default$){
return (function (){
var G__14285 = c;
var G__14286 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14285,G__14286) : cljs.core.reset_BANG_.call(null,G__14285,G__14286));
});})(_,c,vec__14279,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14277){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14277));
});

