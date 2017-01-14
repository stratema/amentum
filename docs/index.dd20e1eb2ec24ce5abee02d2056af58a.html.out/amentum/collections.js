// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.collections');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
amentum.collections.numbers = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(15),(13),(6),(3),(12),(2),(11),(9),(5),(14),(16),(10),(8)],["seven","one","four","fifteen","thirteen","six","three","twelve","two","eleven","nine","five","fourteen","sixteen","ten","eight"]);
/**
 * @param {...*} var_args
 */
amentum.collections.grid = (function() { 
var amentum$collections$grid__delegate = function (args__13753__auto__){
var vec__14299 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14299,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14299,(1),null);
return (function (){var G__14302 = cljs.core.cst$kw$class;
var G__14303 = "ui grid";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14302,G__14303) : hoplon.core.div.call(null,G__14302,G__14303));
})().call(null,attr,kids);
};
var amentum$collections$grid = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14304__i = 0, G__14304__a = new Array(arguments.length -  0);
while (G__14304__i < G__14304__a.length) {G__14304__a[G__14304__i] = arguments[G__14304__i + 0]; ++G__14304__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14304__a,0);
} 
return amentum$collections$grid__delegate.call(this,args__13753__auto__);};
amentum$collections$grid.cljs$lang$maxFixedArity = 0;
amentum$collections$grid.cljs$lang$applyTo = (function (arglist__14305){
var args__13753__auto__ = cljs.core.seq(arglist__14305);
return amentum$collections$grid__delegate(args__13753__auto__);
});
amentum$collections$grid.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$grid__delegate;
return amentum$collections$grid;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.column = (function() { 
var amentum$collections$column__delegate = function (args__13753__auto__){
var vec__14311 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14311,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14311,(1),null);
return (function (){var G__14314 = cljs.core.cst$kw$class;
var G__14315 = "column";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14314,G__14315) : hoplon.core.div.call(null,G__14314,G__14315));
})().call(null,attr,kids);
};
var amentum$collections$column = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14316__i = 0, G__14316__a = new Array(arguments.length -  0);
while (G__14316__i < G__14316__a.length) {G__14316__a[G__14316__i] = arguments[G__14316__i + 0]; ++G__14316__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14316__a,0);
} 
return amentum$collections$column__delegate.call(this,args__13753__auto__);};
amentum$collections$column.cljs$lang$maxFixedArity = 0;
amentum$collections$column.cljs$lang$applyTo = (function (arglist__14317){
var args__13753__auto__ = cljs.core.seq(arglist__14317);
return amentum$collections$column__delegate(args__13753__auto__);
});
amentum$collections$column.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$column__delegate;
return amentum$collections$column;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.row = (function() { 
var amentum$collections$row__delegate = function (args__13753__auto__){
var vec__14323 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14323,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14323,(1),null);
return (function (){var G__14326 = cljs.core.cst$kw$class;
var G__14327 = "row";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14326,G__14327) : hoplon.core.div.call(null,G__14326,G__14327));
})().call(null,attr,kids);
};
var amentum$collections$row = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14328__i = 0, G__14328__a = new Array(arguments.length -  0);
while (G__14328__i < G__14328__a.length) {G__14328__a[G__14328__i] = arguments[G__14328__i + 0]; ++G__14328__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14328__a,0);
} 
return amentum$collections$row__delegate.call(this,args__13753__auto__);};
amentum$collections$row.cljs$lang$maxFixedArity = 0;
amentum$collections$row.cljs$lang$applyTo = (function (arglist__14329){
var args__13753__auto__ = cljs.core.seq(arglist__14329);
return amentum$collections$row__delegate(args__13753__auto__);
});
amentum$collections$row.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$row__delegate;
return amentum$collections$row;
})()
;
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$width,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14330 = elem;
var G__14331 = cljs.core.cst$kw$class;
var G__14332 = [cljs.core.str(v),cljs.core.str(" wide")].join('');
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14330,G__14331,G__14332) : hoplon.core.do_BANG_.call(null,G__14330,G__14331,G__14332));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$count,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14333 = elem;
var G__14334 = cljs.core.cst$kw$class;
var G__14335 = val;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14333,G__14334,G__14335) : hoplon.core.do_BANG_.call(null,G__14333,G__14334,G__14335));
} else {
return null;
}
}));
/**
 * @param {...*} var_args
 */
amentum.collections.form = (function() { 
var amentum$collections$form__delegate = function (args__13753__auto__){
var vec__14341 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(1),null);
return (function (){var G__14344 = cljs.core.cst$kw$class;
var G__14345 = "ui form";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14344,G__14345) : hoplon.core.div.call(null,G__14344,G__14345));
})().call(null,attr,kids);
};
var amentum$collections$form = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14346__i = 0, G__14346__a = new Array(arguments.length -  0);
while (G__14346__i < G__14346__a.length) {G__14346__a[G__14346__i] = arguments[G__14346__i + 0]; ++G__14346__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14346__a,0);
} 
return amentum$collections$form__delegate.call(this,args__13753__auto__);};
amentum$collections$form.cljs$lang$maxFixedArity = 0;
amentum$collections$form.cljs$lang$applyTo = (function (arglist__14347){
var args__13753__auto__ = cljs.core.seq(arglist__14347);
return amentum$collections$form__delegate(args__13753__auto__);
});
amentum$collections$form.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$form__delegate;
return amentum$collections$form;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.field = (function() { 
var amentum$collections$field__delegate = function (args__13753__auto__){
var vec__14353 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(1),null);
return (function (){var G__14356 = cljs.core.cst$kw$class;
var G__14357 = "field";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14356,G__14357) : hoplon.core.div.call(null,G__14356,G__14357));
})().call(null,attr,kids);
};
var amentum$collections$field = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14358__i = 0, G__14358__a = new Array(arguments.length -  0);
while (G__14358__i < G__14358__a.length) {G__14358__a[G__14358__i] = arguments[G__14358__i + 0]; ++G__14358__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14358__a,0);
} 
return amentum$collections$field__delegate.call(this,args__13753__auto__);};
amentum$collections$field.cljs$lang$maxFixedArity = 0;
amentum$collections$field.cljs$lang$applyTo = (function (arglist__14359){
var args__13753__auto__ = cljs.core.seq(arglist__14359);
return amentum$collections$field__delegate(args__13753__auto__);
});
amentum$collections$field.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$field__delegate;
return amentum$collections$field;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.input = (function() { 
var amentum$collections$input__delegate = function (args__13753__auto__){
var vec__14372 = hoplon.core.parse_args(args__13753__auto__);
var map__14375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(0),null);
var map__14375__$1 = ((((!((map__14375 == null)))?((((map__14375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14375):map__14375);
var attr = map__14375__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$label);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$state);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$value);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(1),null);
return amentum.collections.field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(label)?(function (){var G__14377 = cljs.core.cst$kw$for;
var G__14378 = id;
var G__14379 = label;
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__14377,G__14378,G__14379) : hoplon.core.label.call(null,G__14377,G__14378,G__14379));
})():null),(function (){var G__14380 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$label,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),cljs.core.cst$kw$value,(function (){var or__6842__auto__ = value;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return state;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$change,cljs.core.cst$kw$change.cljs$core$IFn$_invoke$arity$2(attr,((function (vec__14372,map__14375,map__14375__$1,attr,id,label,state,value,kids){
return (function (p1__14360_SHARP_){
var G__14381 = state;
var G__14382 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14360_SHARP_) : cljs.core.deref.call(null,p1__14360_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14381,G__14382) : cljs.core.reset_BANG_.call(null,G__14381,G__14382));
});})(vec__14372,map__14375,map__14375__$1,attr,id,label,state,value,kids))
),cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$2(attr,"text")], 0));
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$1(G__14380) : hoplon.core.input.call(null,G__14380));
})()], null)], 0));
};
var amentum$collections$input = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14383__i = 0, G__14383__a = new Array(arguments.length -  0);
while (G__14383__i < G__14383__a.length) {G__14383__a[G__14383__i] = arguments[G__14383__i + 0]; ++G__14383__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14383__a,0);
} 
return amentum$collections$input__delegate.call(this,args__13753__auto__);};
amentum$collections$input.cljs$lang$maxFixedArity = 0;
amentum$collections$input.cljs$lang$applyTo = (function (arglist__14384){
var args__13753__auto__ = cljs.core.seq(arglist__14384);
return amentum$collections$input__delegate(args__13753__auto__);
});
amentum$collections$input.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$input__delegate;
return amentum$collections$input;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.table = (function() { 
var amentum$collections$table__delegate = function (args__13753__auto__){
var vec__14416 = hoplon.core.parse_args(args__13753__auto__);
var map__14419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14416,(0),null);
var map__14419__$1 = ((((!((map__14419 == null)))?((((map__14419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14419):map__14419);
var attr = map__14419__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14419__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14419__$1,cljs.core.cst$kw$body);
var footers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14419__$1,cljs.core.cst$kw$footers);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14416,(1),null);
var G__14421 = cljs.core.cst$kw$class;
var G__14422 = "ui table";
var G__14423 = (function (){var con__13791__auto__ = (new cljs.core.Delay(((function (G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (){
var G__14426 = (function (){var G__14427 = hoplon.core.loop_tpl_STAR_(headers,((function (G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (item__13783__auto__){
var vec__14428 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (h){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null);
});})(G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
).call(null,item__13783__auto__));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(h) : hoplon.core.th.call(null,h));
});})(G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14427) : hoplon.core.tr.call(null,G__14427));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14426) : hoplon.core.thead.call(null,G__14426));
});})(G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
,null));
var alt__13792__auto__ = (new cljs.core.Delay(((function (con__13791__auto__,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13791__auto__,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
,null));
var tpl__13793__auto__ = ((function (con__13791__auto__,alt__13792__auto__,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (p__13794__auto__){
var G__14431 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13794__auto__)?con__13791__auto__:alt__13792__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14431) : cljs.core.deref.call(null,G__14431));
});})(con__13791__auto__,alt__13792__auto__,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13793__auto__).call(null,headers);
})();
var G__14424 = (function (){var con__13791__auto__ = (new cljs.core.Delay(((function (G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (){
var G__14432 = hoplon.core.loop_tpl_STAR_(body,((function (G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (item__13783__auto__){
var vec__14433 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (row){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
});})(G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
).call(null,item__13783__auto__));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14433,(0),null);
var G__14436 = hoplon.core.loop_tpl_STAR_(row,((function (vec__14433,row,G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (item__13783__auto____$1){
var vec__14437 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (vec__14433,row,G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (col){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null);
});})(vec__14433,row,G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
).call(null,item__13783__auto____$1));
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437,(0),null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(col) : hoplon.core.td.call(null,col));
});})(vec__14433,row,G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14436) : hoplon.core.tr.call(null,G__14436));
});})(G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__14432) : hoplon.core.tbody.call(null,G__14432));
});})(G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
,null));
var alt__13792__auto__ = (new cljs.core.Delay(((function (con__13791__auto__,G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (){
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(kids) : hoplon.core.tbody.call(null,kids));
});})(con__13791__auto__,G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
,null));
var tpl__13793__auto__ = ((function (con__13791__auto__,alt__13792__auto__,G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (p__13794__auto__){
var G__14440 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13794__auto__)?con__13791__auto__:alt__13792__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14440) : cljs.core.deref.call(null,G__14440));
});})(con__13791__auto__,alt__13792__auto__,G__14421,G__14422,G__14423,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13793__auto__).call(null,body);
})();
var G__14425 = (function (){var con__13791__auto__ = (new cljs.core.Delay(((function (G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (){
var G__14441 = (function (){var G__14442 = hoplon.core.loop_tpl_STAR_(footers,((function (G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (item__13783__auto__){
var vec__14443 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
});})(G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
).call(null,item__13783__auto__));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(f) : hoplon.core.th.call(null,f));
});})(G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14442) : hoplon.core.tr.call(null,G__14442));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14441) : hoplon.core.thead.call(null,G__14441));
});})(G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
,null));
var alt__13792__auto__ = (new cljs.core.Delay(((function (con__13791__auto__,G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13791__auto__,G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
,null));
var tpl__13793__auto__ = ((function (con__13791__auto__,alt__13792__auto__,G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids){
return (function (p__13794__auto__){
var G__14446 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13794__auto__)?con__13791__auto__:alt__13792__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14446) : cljs.core.deref.call(null,G__14446));
});})(con__13791__auto__,alt__13792__auto__,G__14421,G__14422,G__14423,G__14424,vec__14416,map__14419,map__14419__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13793__auto__).call(null,footers);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$5(G__14421,G__14422,G__14423,G__14424,G__14425) : hoplon.core.table.call(null,G__14421,G__14422,G__14423,G__14424,G__14425));
};
var amentum$collections$table = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14447__i = 0, G__14447__a = new Array(arguments.length -  0);
while (G__14447__i < G__14447__a.length) {G__14447__a[G__14447__i] = arguments[G__14447__i + 0]; ++G__14447__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14447__a,0);
} 
return amentum$collections$table__delegate.call(this,args__13753__auto__);};
amentum$collections$table.cljs$lang$maxFixedArity = 0;
amentum$collections$table.cljs$lang$applyTo = (function (arglist__14448){
var args__13753__auto__ = cljs.core.seq(arglist__14448);
return amentum$collections$table__delegate(args__13753__auto__);
});
amentum$collections$table.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$table__delegate;
return amentum$collections$table;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.menu = (function() { 
var amentum$collections$menu__delegate = function (args__13753__auto__){
var vec__14454 = hoplon.core.parse_args(args__13753__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14454,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14454,(1),null);
return (function (){var G__14457 = cljs.core.cst$kw$class;
var G__14458 = "menu";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14457,G__14458) : hoplon.core.div.call(null,G__14457,G__14458));
})().call(null,attr,kids);
};
var amentum$collections$menu = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14459__i = 0, G__14459__a = new Array(arguments.length -  0);
while (G__14459__i < G__14459__a.length) {G__14459__a[G__14459__i] = arguments[G__14459__i + 0]; ++G__14459__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14459__a,0);
} 
return amentum$collections$menu__delegate.call(this,args__13753__auto__);};
amentum$collections$menu.cljs$lang$maxFixedArity = 0;
amentum$collections$menu.cljs$lang$applyTo = (function (arglist__14460){
var args__13753__auto__ = cljs.core.seq(arglist__14460);
return amentum$collections$menu__delegate(args__13753__auto__);
});
amentum$collections$menu.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$menu__delegate;
return amentum$collections$menu;
})()
;
