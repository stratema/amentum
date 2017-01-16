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
var amentum$collections$grid__delegate = function (args__13782__auto__){
var vec__14340 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14340,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14340,(1),null);
return (function (){var G__14343 = cljs.core.cst$kw$class;
var G__14344 = "ui grid";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14343,G__14344) : hoplon.core.div.call(null,G__14343,G__14344));
})().call(null,attr,kids);
};
var amentum$collections$grid = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14350__i = 0, G__14350__a = new Array(arguments.length -  0);
while (G__14350__i < G__14350__a.length) {G__14350__a[G__14350__i] = arguments[G__14350__i + 0]; ++G__14350__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14350__a,0);
} 
return amentum$collections$grid__delegate.call(this,args__13782__auto__);};
amentum$collections$grid.cljs$lang$maxFixedArity = 0;
amentum$collections$grid.cljs$lang$applyTo = (function (arglist__14356){
var args__13782__auto__ = cljs.core.seq(arglist__14356);
return amentum$collections$grid__delegate(args__13782__auto__);
});
amentum$collections$grid.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$grid__delegate;
return amentum$collections$grid;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.column = (function() { 
var amentum$collections$column__delegate = function (args__13782__auto__){
var vec__14370 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(1),null);
return (function (){var G__14377 = cljs.core.cst$kw$class;
var G__14378 = "column";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14377,G__14378) : hoplon.core.div.call(null,G__14377,G__14378));
})().call(null,attr,kids);
};
var amentum$collections$column = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14380__i = 0, G__14380__a = new Array(arguments.length -  0);
while (G__14380__i < G__14380__a.length) {G__14380__a[G__14380__i] = arguments[G__14380__i + 0]; ++G__14380__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14380__a,0);
} 
return amentum$collections$column__delegate.call(this,args__13782__auto__);};
amentum$collections$column.cljs$lang$maxFixedArity = 0;
amentum$collections$column.cljs$lang$applyTo = (function (arglist__14382){
var args__13782__auto__ = cljs.core.seq(arglist__14382);
return amentum$collections$column__delegate(args__13782__auto__);
});
amentum$collections$column.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$column__delegate;
return amentum$collections$column;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.row = (function() { 
var amentum$collections$row__delegate = function (args__13782__auto__){
var vec__14399 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399,(1),null);
return (function (){var G__14407 = cljs.core.cst$kw$class;
var G__14408 = "row";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14407,G__14408) : hoplon.core.div.call(null,G__14407,G__14408));
})().call(null,attr,kids);
};
var amentum$collections$row = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14425__i = 0, G__14425__a = new Array(arguments.length -  0);
while (G__14425__i < G__14425__a.length) {G__14425__a[G__14425__i] = arguments[G__14425__i + 0]; ++G__14425__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14425__a,0);
} 
return amentum$collections$row__delegate.call(this,args__13782__auto__);};
amentum$collections$row.cljs$lang$maxFixedArity = 0;
amentum$collections$row.cljs$lang$applyTo = (function (arglist__14426){
var args__13782__auto__ = cljs.core.seq(arglist__14426);
return amentum$collections$row__delegate(args__13782__auto__);
});
amentum$collections$row.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$row__delegate;
return amentum$collections$row;
})()
;
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$width,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14435 = elem;
var G__14436 = cljs.core.cst$kw$class;
var G__14437 = [cljs.core.str(v),cljs.core.str(" wide")].join('');
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14435,G__14436,G__14437) : hoplon.core.do_BANG_.call(null,G__14435,G__14436,G__14437));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$count,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14447 = elem;
var G__14448 = cljs.core.cst$kw$class;
var G__14449 = val;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14447,G__14448,G__14449) : hoplon.core.do_BANG_.call(null,G__14447,G__14448,G__14449));
} else {
return null;
}
}));
/**
 * @param {...*} var_args
 */
amentum.collections.form = (function() { 
var amentum$collections$form__delegate = function (args__13782__auto__){
var vec__14484 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14484,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14484,(1),null);
return (function (){var G__14487 = cljs.core.cst$kw$class;
var G__14488 = "ui form";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14487,G__14488) : hoplon.core.div.call(null,G__14487,G__14488));
})().call(null,attr,kids);
};
var amentum$collections$form = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14504__i = 0, G__14504__a = new Array(arguments.length -  0);
while (G__14504__i < G__14504__a.length) {G__14504__a[G__14504__i] = arguments[G__14504__i + 0]; ++G__14504__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14504__a,0);
} 
return amentum$collections$form__delegate.call(this,args__13782__auto__);};
amentum$collections$form.cljs$lang$maxFixedArity = 0;
amentum$collections$form.cljs$lang$applyTo = (function (arglist__14508){
var args__13782__auto__ = cljs.core.seq(arglist__14508);
return amentum$collections$form__delegate(args__13782__auto__);
});
amentum$collections$form.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$form__delegate;
return amentum$collections$form;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.field = (function() { 
var amentum$collections$field__delegate = function (args__13782__auto__){
var vec__14518 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(1),null);
return (function (){var G__14521 = cljs.core.cst$kw$class;
var G__14522 = "field";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14521,G__14522) : hoplon.core.div.call(null,G__14521,G__14522));
})().call(null,attr,kids);
};
var amentum$collections$field = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14538__i = 0, G__14538__a = new Array(arguments.length -  0);
while (G__14538__i < G__14538__a.length) {G__14538__a[G__14538__i] = arguments[G__14538__i + 0]; ++G__14538__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14538__a,0);
} 
return amentum$collections$field__delegate.call(this,args__13782__auto__);};
amentum$collections$field.cljs$lang$maxFixedArity = 0;
amentum$collections$field.cljs$lang$applyTo = (function (arglist__14544){
var args__13782__auto__ = cljs.core.seq(arglist__14544);
return amentum$collections$field__delegate(args__13782__auto__);
});
amentum$collections$field.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$field__delegate;
return amentum$collections$field;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.input = (function() { 
var amentum$collections$input__delegate = function (args__13782__auto__){
var vec__14586 = hoplon.core.parse_args(args__13782__auto__);
var map__14589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14586,(0),null);
var map__14589__$1 = ((((!((map__14589 == null)))?((((map__14589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14589):map__14589);
var attr = map__14589__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14589__$1,cljs.core.cst$kw$id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14589__$1,cljs.core.cst$kw$label);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14589__$1,cljs.core.cst$kw$state);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14589__$1,cljs.core.cst$kw$value);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14586,(1),null);
return amentum.collections.field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(label)?(function (){var G__14597 = cljs.core.cst$kw$for;
var G__14598 = id;
var G__14599 = label;
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__14597,G__14598,G__14599) : hoplon.core.label.call(null,G__14597,G__14598,G__14599));
})():null),(function (){var G__14600 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$label,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),cljs.core.cst$kw$value,(function (){var or__6842__auto__ = value;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return state;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$change,cljs.core.cst$kw$change.cljs$core$IFn$_invoke$arity$2(attr,((function (vec__14586,map__14589,map__14589__$1,attr,id,label,state,value,kids){
return (function (p1__14547_SHARP_){
var G__14602 = state;
var G__14603 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14547_SHARP_) : cljs.core.deref.call(null,p1__14547_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14602,G__14603) : cljs.core.reset_BANG_.call(null,G__14602,G__14603));
});})(vec__14586,map__14589,map__14589__$1,attr,id,label,state,value,kids))
),cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$2(attr,"text")], 0));
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$1(G__14600) : hoplon.core.input.call(null,G__14600));
})()], null)], 0));
};
var amentum$collections$input = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14635__i = 0, G__14635__a = new Array(arguments.length -  0);
while (G__14635__i < G__14635__a.length) {G__14635__a[G__14635__i] = arguments[G__14635__i + 0]; ++G__14635__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14635__a,0);
} 
return amentum$collections$input__delegate.call(this,args__13782__auto__);};
amentum$collections$input.cljs$lang$maxFixedArity = 0;
amentum$collections$input.cljs$lang$applyTo = (function (arglist__14641){
var args__13782__auto__ = cljs.core.seq(arglist__14641);
return amentum$collections$input__delegate(args__13782__auto__);
});
amentum$collections$input.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$input__delegate;
return amentum$collections$input;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.table = (function() { 
var amentum$collections$table__delegate = function (args__13782__auto__){
var vec__14750 = hoplon.core.parse_args(args__13782__auto__);
var map__14753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750,(0),null);
var map__14753__$1 = ((((!((map__14753 == null)))?((((map__14753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14753):map__14753);
var attr = map__14753__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14753__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14753__$1,cljs.core.cst$kw$body);
var footers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14753__$1,cljs.core.cst$kw$footers);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750,(1),null);
var G__14769 = cljs.core.cst$kw$class;
var G__14770 = "ui table";
var G__14771 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (){
var G__14774 = (function (){var G__14775 = hoplon.core.loop_tpl_STAR_(headers,((function (G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (item__13812__auto__){
var vec__14776 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (h){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null);
});})(G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
).call(null,item__13812__auto__));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14776,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(h) : hoplon.core.th.call(null,h));
});})(G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14775) : hoplon.core.tr.call(null,G__14775));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14774) : hoplon.core.thead.call(null,G__14774));
});})(G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13820__auto__,G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (p__13823__auto__){
var G__14787 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14787) : cljs.core.deref.call(null,G__14787));
});})(con__13820__auto__,alt__13821__auto__,G__14769,G__14770,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13822__auto__).call(null,headers);
})();
var G__14772 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (){
var G__14796 = hoplon.core.loop_tpl_STAR_(body,((function (G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (item__13812__auto__){
var vec__14799 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (row){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
});})(G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
).call(null,item__13812__auto__));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799,(0),null);
var G__14803 = hoplon.core.loop_tpl_STAR_(row,((function (vec__14799,row,G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (item__13812__auto____$1){
var vec__14804 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (vec__14799,row,G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (col){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null);
});})(vec__14799,row,G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
).call(null,item__13812__auto____$1));
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14804,(0),null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(col) : hoplon.core.td.call(null,col));
});})(vec__14799,row,G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14803) : hoplon.core.tr.call(null,G__14803));
});})(G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__14796) : hoplon.core.tbody.call(null,G__14796));
});})(G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (){
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(kids) : hoplon.core.tbody.call(null,kids));
});})(con__13820__auto__,G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (p__13823__auto__){
var G__14811 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14811) : cljs.core.deref.call(null,G__14811));
});})(con__13820__auto__,alt__13821__auto__,G__14769,G__14770,G__14771,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13822__auto__).call(null,body);
})();
var G__14773 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (){
var G__14819 = (function (){var G__14821 = hoplon.core.loop_tpl_STAR_(footers,((function (G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (item__13812__auto__){
var vec__14822 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
});})(G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
).call(null,item__13812__auto__));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14822,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(f) : hoplon.core.th.call(null,f));
});})(G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14821) : hoplon.core.tr.call(null,G__14821));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14819) : hoplon.core.thead.call(null,G__14819));
});})(G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13820__auto__,G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids){
return (function (p__13823__auto__){
var G__14825 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14825) : cljs.core.deref.call(null,G__14825));
});})(con__13820__auto__,alt__13821__auto__,G__14769,G__14770,G__14771,G__14772,vec__14750,map__14753,map__14753__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13822__auto__).call(null,footers);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$5(G__14769,G__14770,G__14771,G__14772,G__14773) : hoplon.core.table.call(null,G__14769,G__14770,G__14771,G__14772,G__14773));
};
var amentum$collections$table = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14848__i = 0, G__14848__a = new Array(arguments.length -  0);
while (G__14848__i < G__14848__a.length) {G__14848__a[G__14848__i] = arguments[G__14848__i + 0]; ++G__14848__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14848__a,0);
} 
return amentum$collections$table__delegate.call(this,args__13782__auto__);};
amentum$collections$table.cljs$lang$maxFixedArity = 0;
amentum$collections$table.cljs$lang$applyTo = (function (arglist__14849){
var args__13782__auto__ = cljs.core.seq(arglist__14849);
return amentum$collections$table__delegate(args__13782__auto__);
});
amentum$collections$table.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$table__delegate;
return amentum$collections$table;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.menu = (function() { 
var amentum$collections$menu__delegate = function (args__13782__auto__){
var vec__14857 = hoplon.core.parse_args(args__13782__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857,(1),null);
return (function (){var G__14860 = cljs.core.cst$kw$class;
var G__14861 = "menu";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14860,G__14861) : hoplon.core.div.call(null,G__14860,G__14861));
})().call(null,attr,kids);
};
var amentum$collections$menu = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__14871__i = 0, G__14871__a = new Array(arguments.length -  0);
while (G__14871__i < G__14871__a.length) {G__14871__a[G__14871__i] = arguments[G__14871__i + 0]; ++G__14871__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__14871__a,0);
} 
return amentum$collections$menu__delegate.call(this,args__13782__auto__);};
amentum$collections$menu.cljs$lang$maxFixedArity = 0;
amentum$collections$menu.cljs$lang$applyTo = (function (arglist__14872){
var args__13782__auto__ = cljs.core.seq(arglist__14872);
return amentum$collections$menu__delegate(args__13782__auto__);
});
amentum$collections$menu.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$menu__delegate;
return amentum$collections$menu;
})()
;
