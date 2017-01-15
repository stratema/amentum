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
var amentum$collections$grid__delegate = function (args__13756__auto__){
var vec__14330 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14330,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14330,(1),null);
return (function (){var G__14333 = cljs.core.cst$kw$class;
var G__14334 = "ui grid";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14333,G__14334) : hoplon.core.div.call(null,G__14333,G__14334));
})().call(null,attr,kids);
};
var amentum$collections$grid = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14347__i = 0, G__14347__a = new Array(arguments.length -  0);
while (G__14347__i < G__14347__a.length) {G__14347__a[G__14347__i] = arguments[G__14347__i + 0]; ++G__14347__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14347__a,0);
} 
return amentum$collections$grid__delegate.call(this,args__13756__auto__);};
amentum$collections$grid.cljs$lang$maxFixedArity = 0;
amentum$collections$grid.cljs$lang$applyTo = (function (arglist__14354){
var args__13756__auto__ = cljs.core.seq(arglist__14354);
return amentum$collections$grid__delegate(args__13756__auto__);
});
amentum$collections$grid.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$grid__delegate;
return amentum$collections$grid;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.column = (function() { 
var amentum$collections$column__delegate = function (args__13756__auto__){
var vec__14369 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(1),null);
return (function (){var G__14396 = cljs.core.cst$kw$class;
var G__14397 = "column";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14396,G__14397) : hoplon.core.div.call(null,G__14396,G__14397));
})().call(null,attr,kids);
};
var amentum$collections$column = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14420__i = 0, G__14420__a = new Array(arguments.length -  0);
while (G__14420__i < G__14420__a.length) {G__14420__a[G__14420__i] = arguments[G__14420__i + 0]; ++G__14420__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14420__a,0);
} 
return amentum$collections$column__delegate.call(this,args__13756__auto__);};
amentum$collections$column.cljs$lang$maxFixedArity = 0;
amentum$collections$column.cljs$lang$applyTo = (function (arglist__14426){
var args__13756__auto__ = cljs.core.seq(arglist__14426);
return amentum$collections$column__delegate(args__13756__auto__);
});
amentum$collections$column.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$column__delegate;
return amentum$collections$column;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.row = (function() { 
var amentum$collections$row__delegate = function (args__13756__auto__){
var vec__14450 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14450,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14450,(1),null);
return (function (){var G__14461 = cljs.core.cst$kw$class;
var G__14462 = "row";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14461,G__14462) : hoplon.core.div.call(null,G__14461,G__14462));
})().call(null,attr,kids);
};
var amentum$collections$row = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14501__i = 0, G__14501__a = new Array(arguments.length -  0);
while (G__14501__i < G__14501__a.length) {G__14501__a[G__14501__i] = arguments[G__14501__i + 0]; ++G__14501__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14501__a,0);
} 
return amentum$collections$row__delegate.call(this,args__13756__auto__);};
amentum$collections$row.cljs$lang$maxFixedArity = 0;
amentum$collections$row.cljs$lang$applyTo = (function (arglist__14503){
var args__13756__auto__ = cljs.core.seq(arglist__14503);
return amentum$collections$row__delegate(args__13756__auto__);
});
amentum$collections$row.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$row__delegate;
return amentum$collections$row;
})()
;
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$width,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14507 = elem;
var G__14508 = cljs.core.cst$kw$class;
var G__14509 = [cljs.core.str(v),cljs.core.str(" wide")].join('');
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14507,G__14508,G__14509) : hoplon.core.do_BANG_.call(null,G__14507,G__14508,G__14509));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$count,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14523 = elem;
var G__14524 = cljs.core.cst$kw$class;
var G__14525 = val;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14523,G__14524,G__14525) : hoplon.core.do_BANG_.call(null,G__14523,G__14524,G__14525));
} else {
return null;
}
}));
/**
 * @param {...*} var_args
 */
amentum.collections.form = (function() { 
var amentum$collections$form__delegate = function (args__13756__auto__){
var vec__14546 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546,(1),null);
return (function (){var G__14550 = cljs.core.cst$kw$class;
var G__14551 = "ui form";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14550,G__14551) : hoplon.core.div.call(null,G__14550,G__14551));
})().call(null,attr,kids);
};
var amentum$collections$form = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14564__i = 0, G__14564__a = new Array(arguments.length -  0);
while (G__14564__i < G__14564__a.length) {G__14564__a[G__14564__i] = arguments[G__14564__i + 0]; ++G__14564__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14564__a,0);
} 
return amentum$collections$form__delegate.call(this,args__13756__auto__);};
amentum$collections$form.cljs$lang$maxFixedArity = 0;
amentum$collections$form.cljs$lang$applyTo = (function (arglist__14565){
var args__13756__auto__ = cljs.core.seq(arglist__14565);
return amentum$collections$form__delegate(args__13756__auto__);
});
amentum$collections$form.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$form__delegate;
return amentum$collections$form;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.field = (function() { 
var amentum$collections$field__delegate = function (args__13756__auto__){
var vec__14574 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14574,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14574,(1),null);
return (function (){var G__14581 = cljs.core.cst$kw$class;
var G__14582 = "field";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14581,G__14582) : hoplon.core.div.call(null,G__14581,G__14582));
})().call(null,attr,kids);
};
var amentum$collections$field = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14593__i = 0, G__14593__a = new Array(arguments.length -  0);
while (G__14593__i < G__14593__a.length) {G__14593__a[G__14593__i] = arguments[G__14593__i + 0]; ++G__14593__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14593__a,0);
} 
return amentum$collections$field__delegate.call(this,args__13756__auto__);};
amentum$collections$field.cljs$lang$maxFixedArity = 0;
amentum$collections$field.cljs$lang$applyTo = (function (arglist__14594){
var args__13756__auto__ = cljs.core.seq(arglist__14594);
return amentum$collections$field__delegate(args__13756__auto__);
});
amentum$collections$field.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$field__delegate;
return amentum$collections$field;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.input = (function() { 
var amentum$collections$input__delegate = function (args__13756__auto__){
var vec__14622 = hoplon.core.parse_args(args__13756__auto__);
var map__14625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14622,(0),null);
var map__14625__$1 = ((((!((map__14625 == null)))?((((map__14625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14625):map__14625);
var attr = map__14625__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$label);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$state);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$value);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14622,(1),null);
return amentum.collections.field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(label)?(function (){var G__14627 = cljs.core.cst$kw$for;
var G__14628 = id;
var G__14629 = label;
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__14627,G__14628,G__14629) : hoplon.core.label.call(null,G__14627,G__14628,G__14629));
})():null),(function (){var G__14630 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$label,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),cljs.core.cst$kw$value,(function (){var or__6842__auto__ = value;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return state;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$change,cljs.core.cst$kw$change.cljs$core$IFn$_invoke$arity$2(attr,((function (vec__14622,map__14625,map__14625__$1,attr,id,label,state,value,kids){
return (function (p1__14603_SHARP_){
var G__14631 = state;
var G__14632 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14603_SHARP_) : cljs.core.deref.call(null,p1__14603_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14631,G__14632) : cljs.core.reset_BANG_.call(null,G__14631,G__14632));
});})(vec__14622,map__14625,map__14625__$1,attr,id,label,state,value,kids))
),cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$2(attr,"text")], 0));
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$1(G__14630) : hoplon.core.input.call(null,G__14630));
})()], null)], 0));
};
var amentum$collections$input = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14665__i = 0, G__14665__a = new Array(arguments.length -  0);
while (G__14665__i < G__14665__a.length) {G__14665__a[G__14665__i] = arguments[G__14665__i + 0]; ++G__14665__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14665__a,0);
} 
return amentum$collections$input__delegate.call(this,args__13756__auto__);};
amentum$collections$input.cljs$lang$maxFixedArity = 0;
amentum$collections$input.cljs$lang$applyTo = (function (arglist__14670){
var args__13756__auto__ = cljs.core.seq(arglist__14670);
return amentum$collections$input__delegate(args__13756__auto__);
});
amentum$collections$input.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$input__delegate;
return amentum$collections$input;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.table = (function() { 
var amentum$collections$table__delegate = function (args__13756__auto__){
var vec__14771 = hoplon.core.parse_args(args__13756__auto__);
var map__14774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(0),null);
var map__14774__$1 = ((((!((map__14774 == null)))?((((map__14774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14774):map__14774);
var attr = map__14774__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14774__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14774__$1,cljs.core.cst$kw$body);
var footers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14774__$1,cljs.core.cst$kw$footers);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(1),null);
var G__14779 = cljs.core.cst$kw$class;
var G__14780 = "ui table";
var G__14781 = (function (){var con__13794__auto__ = (new cljs.core.Delay(((function (G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (){
var G__14784 = (function (){var G__14785 = hoplon.core.loop_tpl_STAR_(headers,((function (G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (item__13786__auto__){
var vec__14786 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (h){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null);
});})(G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
).call(null,item__13786__auto__));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14786,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(h) : hoplon.core.th.call(null,h));
});})(G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14785) : hoplon.core.tr.call(null,G__14785));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14784) : hoplon.core.thead.call(null,G__14784));
});})(G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
,null));
var alt__13795__auto__ = (new cljs.core.Delay(((function (con__13794__auto__,G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13794__auto__,G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
,null));
var tpl__13796__auto__ = ((function (con__13794__auto__,alt__13795__auto__,G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (p__13797__auto__){
var G__14789 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13797__auto__)?con__13794__auto__:alt__13795__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14789) : cljs.core.deref.call(null,G__14789));
});})(con__13794__auto__,alt__13795__auto__,G__14779,G__14780,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13796__auto__).call(null,headers);
})();
var G__14782 = (function (){var con__13794__auto__ = (new cljs.core.Delay(((function (G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (){
var G__14790 = hoplon.core.loop_tpl_STAR_(body,((function (G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (item__13786__auto__){
var vec__14791 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (row){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
});})(G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
).call(null,item__13786__auto__));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14791,(0),null);
var G__14794 = hoplon.core.loop_tpl_STAR_(row,((function (vec__14791,row,G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (item__13786__auto____$1){
var vec__14795 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (vec__14791,row,G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (col){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null);
});})(vec__14791,row,G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
).call(null,item__13786__auto____$1));
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14795,(0),null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(col) : hoplon.core.td.call(null,col));
});})(vec__14791,row,G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14794) : hoplon.core.tr.call(null,G__14794));
});})(G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__14790) : hoplon.core.tbody.call(null,G__14790));
});})(G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
,null));
var alt__13795__auto__ = (new cljs.core.Delay(((function (con__13794__auto__,G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (){
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(kids) : hoplon.core.tbody.call(null,kids));
});})(con__13794__auto__,G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
,null));
var tpl__13796__auto__ = ((function (con__13794__auto__,alt__13795__auto__,G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (p__13797__auto__){
var G__14798 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13797__auto__)?con__13794__auto__:alt__13795__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14798) : cljs.core.deref.call(null,G__14798));
});})(con__13794__auto__,alt__13795__auto__,G__14779,G__14780,G__14781,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13796__auto__).call(null,body);
})();
var G__14783 = (function (){var con__13794__auto__ = (new cljs.core.Delay(((function (G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (){
var G__14799 = (function (){var G__14800 = hoplon.core.loop_tpl_STAR_(footers,((function (G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (item__13786__auto__){
var vec__14801 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
});})(G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
).call(null,item__13786__auto__));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(f) : hoplon.core.th.call(null,f));
});})(G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14800) : hoplon.core.tr.call(null,G__14800));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14799) : hoplon.core.thead.call(null,G__14799));
});})(G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
,null));
var alt__13795__auto__ = (new cljs.core.Delay(((function (con__13794__auto__,G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13794__auto__,G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
,null));
var tpl__13796__auto__ = ((function (con__13794__auto__,alt__13795__auto__,G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids){
return (function (p__13797__auto__){
var G__14804 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13797__auto__)?con__13794__auto__:alt__13795__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14804) : cljs.core.deref.call(null,G__14804));
});})(con__13794__auto__,alt__13795__auto__,G__14779,G__14780,G__14781,G__14782,vec__14771,map__14774,map__14774__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13796__auto__).call(null,footers);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$5(G__14779,G__14780,G__14781,G__14782,G__14783) : hoplon.core.table.call(null,G__14779,G__14780,G__14781,G__14782,G__14783));
};
var amentum$collections$table = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14821__i = 0, G__14821__a = new Array(arguments.length -  0);
while (G__14821__i < G__14821__a.length) {G__14821__a[G__14821__i] = arguments[G__14821__i + 0]; ++G__14821__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14821__a,0);
} 
return amentum$collections$table__delegate.call(this,args__13756__auto__);};
amentum$collections$table.cljs$lang$maxFixedArity = 0;
amentum$collections$table.cljs$lang$applyTo = (function (arglist__14822){
var args__13756__auto__ = cljs.core.seq(arglist__14822);
return amentum$collections$table__delegate(args__13756__auto__);
});
amentum$collections$table.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$table__delegate;
return amentum$collections$table;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.menu = (function() { 
var amentum$collections$menu__delegate = function (args__13756__auto__){
var vec__14828 = hoplon.core.parse_args(args__13756__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14828,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14828,(1),null);
return (function (){var G__14831 = cljs.core.cst$kw$class;
var G__14832 = "menu";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14831,G__14832) : hoplon.core.div.call(null,G__14831,G__14832));
})().call(null,attr,kids);
};
var amentum$collections$menu = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14833__i = 0, G__14833__a = new Array(arguments.length -  0);
while (G__14833__i < G__14833__a.length) {G__14833__a[G__14833__i] = arguments[G__14833__i + 0]; ++G__14833__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14833__a,0);
} 
return amentum$collections$menu__delegate.call(this,args__13756__auto__);};
amentum$collections$menu.cljs$lang$maxFixedArity = 0;
amentum$collections$menu.cljs$lang$applyTo = (function (arglist__14834){
var args__13756__auto__ = cljs.core.seq(arglist__14834);
return amentum$collections$menu__delegate(args__13756__auto__);
});
amentum$collections$menu.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$menu__delegate;
return amentum$collections$menu;
})()
;
