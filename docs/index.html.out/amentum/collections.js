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
var amentum$collections$grid__delegate = function (args__13752__auto__){
var vec__14316 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(1),null);
return (function (){var G__14327 = cljs.core.cst$kw$class;
var G__14328 = "ui grid";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14327,G__14328) : hoplon.core.div.call(null,G__14327,G__14328));
})().call(null,attr,kids);
};
var amentum$collections$grid = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14361__i = 0, G__14361__a = new Array(arguments.length -  0);
while (G__14361__i < G__14361__a.length) {G__14361__a[G__14361__i] = arguments[G__14361__i + 0]; ++G__14361__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14361__a,0);
} 
return amentum$collections$grid__delegate.call(this,args__13752__auto__);};
amentum$collections$grid.cljs$lang$maxFixedArity = 0;
amentum$collections$grid.cljs$lang$applyTo = (function (arglist__14368){
var args__13752__auto__ = cljs.core.seq(arglist__14368);
return amentum$collections$grid__delegate(args__13752__auto__);
});
amentum$collections$grid.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$grid__delegate;
return amentum$collections$grid;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.column = (function() { 
var amentum$collections$column__delegate = function (args__13752__auto__){
var vec__14384 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(1),null);
return (function (){var G__14393 = cljs.core.cst$kw$class;
var G__14394 = "column";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14393,G__14394) : hoplon.core.div.call(null,G__14393,G__14394));
})().call(null,attr,kids);
};
var amentum$collections$column = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14402__i = 0, G__14402__a = new Array(arguments.length -  0);
while (G__14402__i < G__14402__a.length) {G__14402__a[G__14402__i] = arguments[G__14402__i + 0]; ++G__14402__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14402__a,0);
} 
return amentum$collections$column__delegate.call(this,args__13752__auto__);};
amentum$collections$column.cljs$lang$maxFixedArity = 0;
amentum$collections$column.cljs$lang$applyTo = (function (arglist__14405){
var args__13752__auto__ = cljs.core.seq(arglist__14405);
return amentum$collections$column__delegate(args__13752__auto__);
});
amentum$collections$column.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$column__delegate;
return amentum$collections$column;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.row = (function() { 
var amentum$collections$row__delegate = function (args__13752__auto__){
var vec__14423 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14423,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14423,(1),null);
return (function (){var G__14428 = cljs.core.cst$kw$class;
var G__14429 = "row";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14428,G__14429) : hoplon.core.div.call(null,G__14428,G__14429));
})().call(null,attr,kids);
};
var amentum$collections$row = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14458__i = 0, G__14458__a = new Array(arguments.length -  0);
while (G__14458__i < G__14458__a.length) {G__14458__a[G__14458__i] = arguments[G__14458__i + 0]; ++G__14458__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14458__a,0);
} 
return amentum$collections$row__delegate.call(this,args__13752__auto__);};
amentum$collections$row.cljs$lang$maxFixedArity = 0;
amentum$collections$row.cljs$lang$applyTo = (function (arglist__14466){
var args__13752__auto__ = cljs.core.seq(arglist__14466);
return amentum$collections$row__delegate(args__13752__auto__);
});
amentum$collections$row.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$row__delegate;
return amentum$collections$row;
})()
;
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$width,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14474 = elem;
var G__14475 = cljs.core.cst$kw$class;
var G__14476 = [cljs.core.str(v),cljs.core.str(" wide")].join('');
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14474,G__14475,G__14476) : hoplon.core.do_BANG_.call(null,G__14474,G__14475,G__14476));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$count,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14508 = elem;
var G__14509 = cljs.core.cst$kw$class;
var G__14510 = val;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14508,G__14509,G__14510) : hoplon.core.do_BANG_.call(null,G__14508,G__14509,G__14510));
} else {
return null;
}
}));
/**
 * @param {...*} var_args
 */
amentum.collections.form = (function() { 
var amentum$collections$form__delegate = function (args__13752__auto__){
var vec__14540 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14540,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14540,(1),null);
return (function (){var G__14543 = cljs.core.cst$kw$class;
var G__14544 = "ui form";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14543,G__14544) : hoplon.core.div.call(null,G__14543,G__14544));
})().call(null,attr,kids);
};
var amentum$collections$form = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14571__i = 0, G__14571__a = new Array(arguments.length -  0);
while (G__14571__i < G__14571__a.length) {G__14571__a[G__14571__i] = arguments[G__14571__i + 0]; ++G__14571__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14571__a,0);
} 
return amentum$collections$form__delegate.call(this,args__13752__auto__);};
amentum$collections$form.cljs$lang$maxFixedArity = 0;
amentum$collections$form.cljs$lang$applyTo = (function (arglist__14575){
var args__13752__auto__ = cljs.core.seq(arglist__14575);
return amentum$collections$form__delegate(args__13752__auto__);
});
amentum$collections$form.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$form__delegate;
return amentum$collections$form;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.field = (function() { 
var amentum$collections$field__delegate = function (args__13752__auto__){
var vec__14581 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14581,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14581,(1),null);
return (function (){var G__14584 = cljs.core.cst$kw$class;
var G__14585 = "field";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14584,G__14585) : hoplon.core.div.call(null,G__14584,G__14585));
})().call(null,attr,kids);
};
var amentum$collections$field = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14593__i = 0, G__14593__a = new Array(arguments.length -  0);
while (G__14593__i < G__14593__a.length) {G__14593__a[G__14593__i] = arguments[G__14593__i + 0]; ++G__14593__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14593__a,0);
} 
return amentum$collections$field__delegate.call(this,args__13752__auto__);};
amentum$collections$field.cljs$lang$maxFixedArity = 0;
amentum$collections$field.cljs$lang$applyTo = (function (arglist__14597){
var args__13752__auto__ = cljs.core.seq(arglist__14597);
return amentum$collections$field__delegate(args__13752__auto__);
});
amentum$collections$field.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$field__delegate;
return amentum$collections$field;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.input = (function() { 
var amentum$collections$input__delegate = function (args__13752__auto__){
var vec__14634 = hoplon.core.parse_args(args__13752__auto__);
var map__14637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14634,(0),null);
var map__14637__$1 = ((((!((map__14637 == null)))?((((map__14637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14637):map__14637);
var attr = map__14637__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14637__$1,cljs.core.cst$kw$id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14637__$1,cljs.core.cst$kw$label);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14637__$1,cljs.core.cst$kw$state);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14637__$1,cljs.core.cst$kw$value);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14634,(1),null);
return amentum.collections.field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(label)?(function (){var G__14651 = cljs.core.cst$kw$for;
var G__14652 = id;
var G__14653 = label;
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__14651,G__14652,G__14653) : hoplon.core.label.call(null,G__14651,G__14652,G__14653));
})():null),(function (){var G__14663 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$label,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),cljs.core.cst$kw$value,(function (){var or__6842__auto__ = value;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return state;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$change,cljs.core.cst$kw$change.cljs$core$IFn$_invoke$arity$2(attr,((function (vec__14634,map__14637,map__14637__$1,attr,id,label,state,value,kids){
return (function (p1__14603_SHARP_){
var G__14675 = state;
var G__14676 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14603_SHARP_) : cljs.core.deref.call(null,p1__14603_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14675,G__14676) : cljs.core.reset_BANG_.call(null,G__14675,G__14676));
});})(vec__14634,map__14637,map__14637__$1,attr,id,label,state,value,kids))
),cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$2(attr,"text")], 0));
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$1(G__14663) : hoplon.core.input.call(null,G__14663));
})()], null)], 0));
};
var amentum$collections$input = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14730__i = 0, G__14730__a = new Array(arguments.length -  0);
while (G__14730__i < G__14730__a.length) {G__14730__a[G__14730__i] = arguments[G__14730__i + 0]; ++G__14730__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14730__a,0);
} 
return amentum$collections$input__delegate.call(this,args__13752__auto__);};
amentum$collections$input.cljs$lang$maxFixedArity = 0;
amentum$collections$input.cljs$lang$applyTo = (function (arglist__14734){
var args__13752__auto__ = cljs.core.seq(arglist__14734);
return amentum$collections$input__delegate(args__13752__auto__);
});
amentum$collections$input.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$input__delegate;
return amentum$collections$input;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.table = (function() { 
var amentum$collections$table__delegate = function (args__13752__auto__){
var vec__14824 = hoplon.core.parse_args(args__13752__auto__);
var map__14827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14824,(0),null);
var map__14827__$1 = ((((!((map__14827 == null)))?((((map__14827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14827):map__14827);
var attr = map__14827__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,cljs.core.cst$kw$body);
var footers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,cljs.core.cst$kw$footers);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14824,(1),null);
var G__14834 = cljs.core.cst$kw$class;
var G__14835 = "ui table";
var G__14836 = (function (){var con__13790__auto__ = (new cljs.core.Delay(((function (G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (){
var G__14839 = (function (){var G__14840 = hoplon.core.loop_tpl_STAR_(headers,((function (G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (item__13782__auto__){
var vec__14841 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (h){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null);
});})(G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
).call(null,item__13782__auto__));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14841,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(h) : hoplon.core.th.call(null,h));
});})(G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14840) : hoplon.core.tr.call(null,G__14840));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14839) : hoplon.core.thead.call(null,G__14839));
});})(G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
,null));
var alt__13791__auto__ = (new cljs.core.Delay(((function (con__13790__auto__,G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13790__auto__,G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
,null));
var tpl__13792__auto__ = ((function (con__13790__auto__,alt__13791__auto__,G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (p__13793__auto__){
var G__14847 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13793__auto__)?con__13790__auto__:alt__13791__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14847) : cljs.core.deref.call(null,G__14847));
});})(con__13790__auto__,alt__13791__auto__,G__14834,G__14835,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13792__auto__).call(null,headers);
})();
var G__14837 = (function (){var con__13790__auto__ = (new cljs.core.Delay(((function (G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (){
var G__14848 = hoplon.core.loop_tpl_STAR_(body,((function (G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (item__13782__auto__){
var vec__14849 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (row){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
});})(G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
).call(null,item__13782__auto__));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14849,(0),null);
var G__14852 = hoplon.core.loop_tpl_STAR_(row,((function (vec__14849,row,G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (item__13782__auto____$1){
var vec__14853 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (vec__14849,row,G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (col){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null);
});})(vec__14849,row,G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
).call(null,item__13782__auto____$1));
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14853,(0),null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(col) : hoplon.core.td.call(null,col));
});})(vec__14849,row,G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14852) : hoplon.core.tr.call(null,G__14852));
});})(G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__14848) : hoplon.core.tbody.call(null,G__14848));
});})(G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
,null));
var alt__13791__auto__ = (new cljs.core.Delay(((function (con__13790__auto__,G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (){
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(kids) : hoplon.core.tbody.call(null,kids));
});})(con__13790__auto__,G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
,null));
var tpl__13792__auto__ = ((function (con__13790__auto__,alt__13791__auto__,G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (p__13793__auto__){
var G__14856 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13793__auto__)?con__13790__auto__:alt__13791__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14856) : cljs.core.deref.call(null,G__14856));
});})(con__13790__auto__,alt__13791__auto__,G__14834,G__14835,G__14836,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13792__auto__).call(null,body);
})();
var G__14838 = (function (){var con__13790__auto__ = (new cljs.core.Delay(((function (G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (){
var G__14857 = (function (){var G__14858 = hoplon.core.loop_tpl_STAR_(footers,((function (G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (item__13782__auto__){
var vec__14859 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
});})(G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
).call(null,item__13782__auto__));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(f) : hoplon.core.th.call(null,f));
});})(G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14858) : hoplon.core.tr.call(null,G__14858));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14857) : hoplon.core.thead.call(null,G__14857));
});})(G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
,null));
var alt__13791__auto__ = (new cljs.core.Delay(((function (con__13790__auto__,G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13790__auto__,G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
,null));
var tpl__13792__auto__ = ((function (con__13790__auto__,alt__13791__auto__,G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids){
return (function (p__13793__auto__){
var G__14864 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13793__auto__)?con__13790__auto__:alt__13791__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14864) : cljs.core.deref.call(null,G__14864));
});})(con__13790__auto__,alt__13791__auto__,G__14834,G__14835,G__14836,G__14837,vec__14824,map__14827,map__14827__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13792__auto__).call(null,footers);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$5(G__14834,G__14835,G__14836,G__14837,G__14838) : hoplon.core.table.call(null,G__14834,G__14835,G__14836,G__14837,G__14838));
};
var amentum$collections$table = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14891__i = 0, G__14891__a = new Array(arguments.length -  0);
while (G__14891__i < G__14891__a.length) {G__14891__a[G__14891__i] = arguments[G__14891__i + 0]; ++G__14891__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14891__a,0);
} 
return amentum$collections$table__delegate.call(this,args__13752__auto__);};
amentum$collections$table.cljs$lang$maxFixedArity = 0;
amentum$collections$table.cljs$lang$applyTo = (function (arglist__14892){
var args__13752__auto__ = cljs.core.seq(arglist__14892);
return amentum$collections$table__delegate(args__13752__auto__);
});
amentum$collections$table.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$table__delegate;
return amentum$collections$table;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.menu = (function() { 
var amentum$collections$menu__delegate = function (args__13752__auto__){
var vec__14900 = hoplon.core.parse_args(args__13752__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(1),null);
return (function (){var G__14903 = cljs.core.cst$kw$class;
var G__14904 = "menu";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14903,G__14904) : hoplon.core.div.call(null,G__14903,G__14904));
})().call(null,attr,kids);
};
var amentum$collections$menu = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14909__i = 0, G__14909__a = new Array(arguments.length -  0);
while (G__14909__i < G__14909__a.length) {G__14909__a[G__14909__i] = arguments[G__14909__i + 0]; ++G__14909__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14909__a,0);
} 
return amentum$collections$menu__delegate.call(this,args__13752__auto__);};
amentum$collections$menu.cljs$lang$maxFixedArity = 0;
amentum$collections$menu.cljs$lang$applyTo = (function (arglist__14910){
var args__13752__auto__ = cljs.core.seq(arglist__14910);
return amentum$collections$menu__delegate(args__13752__auto__);
});
amentum$collections$menu.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$menu__delegate;
return amentum$collections$menu;
})()
;
