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
var amentum$collections$grid__delegate = function (args__13749__auto__){
var vec__14500 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14500,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14500,(1),null);
return (function (){var G__14503 = cljs.core.cst$kw$class;
var G__14504 = "ui grid";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14503,G__14504) : hoplon.core.div.call(null,G__14503,G__14504));
})().call(null,attr,kids);
};
var amentum$collections$grid = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14505__i = 0, G__14505__a = new Array(arguments.length -  0);
while (G__14505__i < G__14505__a.length) {G__14505__a[G__14505__i] = arguments[G__14505__i + 0]; ++G__14505__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14505__a,0);
} 
return amentum$collections$grid__delegate.call(this,args__13749__auto__);};
amentum$collections$grid.cljs$lang$maxFixedArity = 0;
amentum$collections$grid.cljs$lang$applyTo = (function (arglist__14506){
var args__13749__auto__ = cljs.core.seq(arglist__14506);
return amentum$collections$grid__delegate(args__13749__auto__);
});
amentum$collections$grid.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$grid__delegate;
return amentum$collections$grid;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.column = (function() { 
var amentum$collections$column__delegate = function (args__13749__auto__){
var vec__14512 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14512,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14512,(1),null);
return (function (){var G__14515 = cljs.core.cst$kw$class;
var G__14516 = "column";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14515,G__14516) : hoplon.core.div.call(null,G__14515,G__14516));
})().call(null,attr,kids);
};
var amentum$collections$column = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14517__i = 0, G__14517__a = new Array(arguments.length -  0);
while (G__14517__i < G__14517__a.length) {G__14517__a[G__14517__i] = arguments[G__14517__i + 0]; ++G__14517__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14517__a,0);
} 
return amentum$collections$column__delegate.call(this,args__13749__auto__);};
amentum$collections$column.cljs$lang$maxFixedArity = 0;
amentum$collections$column.cljs$lang$applyTo = (function (arglist__14518){
var args__13749__auto__ = cljs.core.seq(arglist__14518);
return amentum$collections$column__delegate(args__13749__auto__);
});
amentum$collections$column.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$column__delegate;
return amentum$collections$column;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.row = (function() { 
var amentum$collections$row__delegate = function (args__13749__auto__){
var vec__14524 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14524,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14524,(1),null);
return (function (){var G__14527 = cljs.core.cst$kw$class;
var G__14528 = "row";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14527,G__14528) : hoplon.core.div.call(null,G__14527,G__14528));
})().call(null,attr,kids);
};
var amentum$collections$row = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14529__i = 0, G__14529__a = new Array(arguments.length -  0);
while (G__14529__i < G__14529__a.length) {G__14529__a[G__14529__i] = arguments[G__14529__i + 0]; ++G__14529__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14529__a,0);
} 
return amentum$collections$row__delegate.call(this,args__13749__auto__);};
amentum$collections$row.cljs$lang$maxFixedArity = 0;
amentum$collections$row.cljs$lang$applyTo = (function (arglist__14530){
var args__13749__auto__ = cljs.core.seq(arglist__14530);
return amentum$collections$row__delegate(args__13749__auto__);
});
amentum$collections$row.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$row__delegate;
return amentum$collections$row;
})()
;
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$width,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14531 = elem;
var G__14532 = cljs.core.cst$kw$class;
var G__14533 = [cljs.core.str(v),cljs.core.str(" wide")].join('');
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14531,G__14532,G__14533) : hoplon.core.do_BANG_.call(null,G__14531,G__14532,G__14533));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$count,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14534 = elem;
var G__14535 = cljs.core.cst$kw$class;
var G__14536 = val;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14534,G__14535,G__14536) : hoplon.core.do_BANG_.call(null,G__14534,G__14535,G__14536));
} else {
return null;
}
}));
/**
 * @param {...*} var_args
 */
amentum.collections.form = (function() { 
var amentum$collections$form__delegate = function (args__13749__auto__){
var vec__14542 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542,(1),null);
return (function (){var G__14545 = cljs.core.cst$kw$class;
var G__14546 = "ui form";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14545,G__14546) : hoplon.core.div.call(null,G__14545,G__14546));
})().call(null,attr,kids);
};
var amentum$collections$form = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14547__i = 0, G__14547__a = new Array(arguments.length -  0);
while (G__14547__i < G__14547__a.length) {G__14547__a[G__14547__i] = arguments[G__14547__i + 0]; ++G__14547__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14547__a,0);
} 
return amentum$collections$form__delegate.call(this,args__13749__auto__);};
amentum$collections$form.cljs$lang$maxFixedArity = 0;
amentum$collections$form.cljs$lang$applyTo = (function (arglist__14548){
var args__13749__auto__ = cljs.core.seq(arglist__14548);
return amentum$collections$form__delegate(args__13749__auto__);
});
amentum$collections$form.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$form__delegate;
return amentum$collections$form;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.field = (function() { 
var amentum$collections$field__delegate = function (args__13749__auto__){
var vec__14554 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554,(1),null);
return (function (){var G__14557 = cljs.core.cst$kw$class;
var G__14558 = "field";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14557,G__14558) : hoplon.core.div.call(null,G__14557,G__14558));
})().call(null,attr,kids);
};
var amentum$collections$field = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14559__i = 0, G__14559__a = new Array(arguments.length -  0);
while (G__14559__i < G__14559__a.length) {G__14559__a[G__14559__i] = arguments[G__14559__i + 0]; ++G__14559__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14559__a,0);
} 
return amentum$collections$field__delegate.call(this,args__13749__auto__);};
amentum$collections$field.cljs$lang$maxFixedArity = 0;
amentum$collections$field.cljs$lang$applyTo = (function (arglist__14560){
var args__13749__auto__ = cljs.core.seq(arglist__14560);
return amentum$collections$field__delegate(args__13749__auto__);
});
amentum$collections$field.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$field__delegate;
return amentum$collections$field;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.input = (function() { 
var amentum$collections$input__delegate = function (args__13749__auto__){
var vec__14573 = hoplon.core.parse_args(args__13749__auto__);
var map__14576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14573,(0),null);
var map__14576__$1 = ((((!((map__14576 == null)))?((((map__14576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14576):map__14576);
var attr = map__14576__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14576__$1,cljs.core.cst$kw$id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14576__$1,cljs.core.cst$kw$label);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14576__$1,cljs.core.cst$kw$state);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14576__$1,cljs.core.cst$kw$value);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14573,(1),null);
return amentum.collections.field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(label)?(function (){var G__14578 = cljs.core.cst$kw$for;
var G__14579 = id;
var G__14580 = label;
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__14578,G__14579,G__14580) : hoplon.core.label.call(null,G__14578,G__14579,G__14580));
})():null),(function (){var G__14581 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$label,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),cljs.core.cst$kw$value,(function (){var or__6842__auto__ = value;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return state;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$change,cljs.core.cst$kw$change.cljs$core$IFn$_invoke$arity$2(attr,((function (vec__14573,map__14576,map__14576__$1,attr,id,label,state,value,kids){
return (function (p1__14561_SHARP_){
var G__14582 = state;
var G__14583 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14561_SHARP_) : cljs.core.deref.call(null,p1__14561_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14582,G__14583) : cljs.core.reset_BANG_.call(null,G__14582,G__14583));
});})(vec__14573,map__14576,map__14576__$1,attr,id,label,state,value,kids))
),cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$2(attr,"text")], 0));
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$1(G__14581) : hoplon.core.input.call(null,G__14581));
})()], null)], 0));
};
var amentum$collections$input = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14584__i = 0, G__14584__a = new Array(arguments.length -  0);
while (G__14584__i < G__14584__a.length) {G__14584__a[G__14584__i] = arguments[G__14584__i + 0]; ++G__14584__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14584__a,0);
} 
return amentum$collections$input__delegate.call(this,args__13749__auto__);};
amentum$collections$input.cljs$lang$maxFixedArity = 0;
amentum$collections$input.cljs$lang$applyTo = (function (arglist__14585){
var args__13749__auto__ = cljs.core.seq(arglist__14585);
return amentum$collections$input__delegate(args__13749__auto__);
});
amentum$collections$input.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$input__delegate;
return amentum$collections$input;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.table = (function() { 
var amentum$collections$table__delegate = function (args__13749__auto__){
var vec__14617 = hoplon.core.parse_args(args__13749__auto__);
var map__14620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14617,(0),null);
var map__14620__$1 = ((((!((map__14620 == null)))?((((map__14620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14620):map__14620);
var attr = map__14620__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14620__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14620__$1,cljs.core.cst$kw$body);
var footers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14620__$1,cljs.core.cst$kw$footers);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14617,(1),null);
var G__14622 = cljs.core.cst$kw$class;
var G__14623 = "ui table";
var G__14624 = (function (){var con__13787__auto__ = (new cljs.core.Delay(((function (G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (){
var G__14627 = (function (){var G__14628 = hoplon.core.loop_tpl_STAR_(headers,((function (G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (item__13779__auto__){
var vec__14629 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (h){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null);
});})(G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
).call(null,item__13779__auto__));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14629,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(h) : hoplon.core.th.call(null,h));
});})(G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14628) : hoplon.core.tr.call(null,G__14628));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14627) : hoplon.core.thead.call(null,G__14627));
});})(G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
,null));
var alt__13788__auto__ = (new cljs.core.Delay(((function (con__13787__auto__,G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13787__auto__,G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
,null));
var tpl__13789__auto__ = ((function (con__13787__auto__,alt__13788__auto__,G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (p__13790__auto__){
var G__14632 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13790__auto__)?con__13787__auto__:alt__13788__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14632) : cljs.core.deref.call(null,G__14632));
});})(con__13787__auto__,alt__13788__auto__,G__14622,G__14623,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13789__auto__).call(null,headers);
})();
var G__14625 = (function (){var con__13787__auto__ = (new cljs.core.Delay(((function (G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (){
var G__14633 = hoplon.core.loop_tpl_STAR_(body,((function (G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (item__13779__auto__){
var vec__14634 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (row){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
});})(G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
).call(null,item__13779__auto__));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14634,(0),null);
var G__14637 = hoplon.core.loop_tpl_STAR_(row,((function (vec__14634,row,G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (item__13779__auto____$1){
var vec__14638 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (vec__14634,row,G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (col){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null);
});})(vec__14634,row,G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
).call(null,item__13779__auto____$1));
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14638,(0),null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(col) : hoplon.core.td.call(null,col));
});})(vec__14634,row,G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14637) : hoplon.core.tr.call(null,G__14637));
});})(G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__14633) : hoplon.core.tbody.call(null,G__14633));
});})(G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
,null));
var alt__13788__auto__ = (new cljs.core.Delay(((function (con__13787__auto__,G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (){
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(kids) : hoplon.core.tbody.call(null,kids));
});})(con__13787__auto__,G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
,null));
var tpl__13789__auto__ = ((function (con__13787__auto__,alt__13788__auto__,G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (p__13790__auto__){
var G__14641 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13790__auto__)?con__13787__auto__:alt__13788__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14641) : cljs.core.deref.call(null,G__14641));
});})(con__13787__auto__,alt__13788__auto__,G__14622,G__14623,G__14624,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13789__auto__).call(null,body);
})();
var G__14626 = (function (){var con__13787__auto__ = (new cljs.core.Delay(((function (G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (){
var G__14642 = (function (){var G__14643 = hoplon.core.loop_tpl_STAR_(footers,((function (G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (item__13779__auto__){
var vec__14644 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
});})(G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
).call(null,item__13779__auto__));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(f) : hoplon.core.th.call(null,f));
});})(G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14643) : hoplon.core.tr.call(null,G__14643));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14642) : hoplon.core.thead.call(null,G__14642));
});})(G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
,null));
var alt__13788__auto__ = (new cljs.core.Delay(((function (con__13787__auto__,G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13787__auto__,G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
,null));
var tpl__13789__auto__ = ((function (con__13787__auto__,alt__13788__auto__,G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids){
return (function (p__13790__auto__){
var G__14647 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13790__auto__)?con__13787__auto__:alt__13788__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14647) : cljs.core.deref.call(null,G__14647));
});})(con__13787__auto__,alt__13788__auto__,G__14622,G__14623,G__14624,G__14625,vec__14617,map__14620,map__14620__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13789__auto__).call(null,footers);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$5(G__14622,G__14623,G__14624,G__14625,G__14626) : hoplon.core.table.call(null,G__14622,G__14623,G__14624,G__14625,G__14626));
};
var amentum$collections$table = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14648__i = 0, G__14648__a = new Array(arguments.length -  0);
while (G__14648__i < G__14648__a.length) {G__14648__a[G__14648__i] = arguments[G__14648__i + 0]; ++G__14648__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14648__a,0);
} 
return amentum$collections$table__delegate.call(this,args__13749__auto__);};
amentum$collections$table.cljs$lang$maxFixedArity = 0;
amentum$collections$table.cljs$lang$applyTo = (function (arglist__14649){
var args__13749__auto__ = cljs.core.seq(arglist__14649);
return amentum$collections$table__delegate(args__13749__auto__);
});
amentum$collections$table.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$table__delegate;
return amentum$collections$table;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.menu = (function() { 
var amentum$collections$menu__delegate = function (args__13749__auto__){
var vec__14655 = hoplon.core.parse_args(args__13749__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14655,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14655,(1),null);
return (function (){var G__14658 = cljs.core.cst$kw$class;
var G__14659 = "menu";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14658,G__14659) : hoplon.core.div.call(null,G__14658,G__14659));
})().call(null,attr,kids);
};
var amentum$collections$menu = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14660__i = 0, G__14660__a = new Array(arguments.length -  0);
while (G__14660__i < G__14660__a.length) {G__14660__a[G__14660__i] = arguments[G__14660__i + 0]; ++G__14660__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14660__a,0);
} 
return amentum$collections$menu__delegate.call(this,args__13749__auto__);};
amentum$collections$menu.cljs$lang$maxFixedArity = 0;
amentum$collections$menu.cljs$lang$applyTo = (function (arglist__14661){
var args__13749__auto__ = cljs.core.seq(arglist__14661);
return amentum$collections$menu__delegate(args__13749__auto__);
});
amentum$collections$menu.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$menu__delegate;
return amentum$collections$menu;
})()
;
