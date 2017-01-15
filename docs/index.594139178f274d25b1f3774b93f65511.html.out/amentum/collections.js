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
var amentum$collections$grid__delegate = function (args__13751__auto__){
var vec__14297 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14297,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14297,(1),null);
return (function (){var G__14300 = cljs.core.cst$kw$class;
var G__14301 = "ui grid";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14300,G__14301) : hoplon.core.div.call(null,G__14300,G__14301));
})().call(null,attr,kids);
};
var amentum$collections$grid = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14302__i = 0, G__14302__a = new Array(arguments.length -  0);
while (G__14302__i < G__14302__a.length) {G__14302__a[G__14302__i] = arguments[G__14302__i + 0]; ++G__14302__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14302__a,0);
} 
return amentum$collections$grid__delegate.call(this,args__13751__auto__);};
amentum$collections$grid.cljs$lang$maxFixedArity = 0;
amentum$collections$grid.cljs$lang$applyTo = (function (arglist__14303){
var args__13751__auto__ = cljs.core.seq(arglist__14303);
return amentum$collections$grid__delegate(args__13751__auto__);
});
amentum$collections$grid.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$grid__delegate;
return amentum$collections$grid;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.column = (function() { 
var amentum$collections$column__delegate = function (args__13751__auto__){
var vec__14309 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14309,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14309,(1),null);
return (function (){var G__14312 = cljs.core.cst$kw$class;
var G__14313 = "column";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14312,G__14313) : hoplon.core.div.call(null,G__14312,G__14313));
})().call(null,attr,kids);
};
var amentum$collections$column = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14314__i = 0, G__14314__a = new Array(arguments.length -  0);
while (G__14314__i < G__14314__a.length) {G__14314__a[G__14314__i] = arguments[G__14314__i + 0]; ++G__14314__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14314__a,0);
} 
return amentum$collections$column__delegate.call(this,args__13751__auto__);};
amentum$collections$column.cljs$lang$maxFixedArity = 0;
amentum$collections$column.cljs$lang$applyTo = (function (arglist__14315){
var args__13751__auto__ = cljs.core.seq(arglist__14315);
return amentum$collections$column__delegate(args__13751__auto__);
});
amentum$collections$column.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$column__delegate;
return amentum$collections$column;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.row = (function() { 
var amentum$collections$row__delegate = function (args__13751__auto__){
var vec__14321 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14321,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14321,(1),null);
return (function (){var G__14324 = cljs.core.cst$kw$class;
var G__14325 = "row";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14324,G__14325) : hoplon.core.div.call(null,G__14324,G__14325));
})().call(null,attr,kids);
};
var amentum$collections$row = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14326__i = 0, G__14326__a = new Array(arguments.length -  0);
while (G__14326__i < G__14326__a.length) {G__14326__a[G__14326__i] = arguments[G__14326__i + 0]; ++G__14326__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14326__a,0);
} 
return amentum$collections$row__delegate.call(this,args__13751__auto__);};
amentum$collections$row.cljs$lang$maxFixedArity = 0;
amentum$collections$row.cljs$lang$applyTo = (function (arglist__14327){
var args__13751__auto__ = cljs.core.seq(arglist__14327);
return amentum$collections$row__delegate(args__13751__auto__);
});
amentum$collections$row.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$row__delegate;
return amentum$collections$row;
})()
;
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$width,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14328 = elem;
var G__14329 = cljs.core.cst$kw$class;
var G__14330 = [cljs.core.str(v),cljs.core.str(" wide")].join('');
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14328,G__14329,G__14330) : hoplon.core.do_BANG_.call(null,G__14328,G__14329,G__14330));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$count,(function (elem,key,val){
var temp__4657__auto__ = (amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.collections.numbers.cljs$core$IFn$_invoke$arity$1(val) : amentum.collections.numbers.call(null,val));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
var G__14331 = elem;
var G__14332 = cljs.core.cst$kw$class;
var G__14333 = val;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14331,G__14332,G__14333) : hoplon.core.do_BANG_.call(null,G__14331,G__14332,G__14333));
} else {
return null;
}
}));
/**
 * @param {...*} var_args
 */
amentum.collections.form = (function() { 
var amentum$collections$form__delegate = function (args__13751__auto__){
var vec__14339 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14339,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14339,(1),null);
return (function (){var G__14342 = cljs.core.cst$kw$class;
var G__14343 = "ui form";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14342,G__14343) : hoplon.core.div.call(null,G__14342,G__14343));
})().call(null,attr,kids);
};
var amentum$collections$form = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14344__i = 0, G__14344__a = new Array(arguments.length -  0);
while (G__14344__i < G__14344__a.length) {G__14344__a[G__14344__i] = arguments[G__14344__i + 0]; ++G__14344__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14344__a,0);
} 
return amentum$collections$form__delegate.call(this,args__13751__auto__);};
amentum$collections$form.cljs$lang$maxFixedArity = 0;
amentum$collections$form.cljs$lang$applyTo = (function (arglist__14345){
var args__13751__auto__ = cljs.core.seq(arglist__14345);
return amentum$collections$form__delegate(args__13751__auto__);
});
amentum$collections$form.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$form__delegate;
return amentum$collections$form;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.field = (function() { 
var amentum$collections$field__delegate = function (args__13751__auto__){
var vec__14351 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(1),null);
return (function (){var G__14354 = cljs.core.cst$kw$class;
var G__14355 = "field";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14354,G__14355) : hoplon.core.div.call(null,G__14354,G__14355));
})().call(null,attr,kids);
};
var amentum$collections$field = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14356__i = 0, G__14356__a = new Array(arguments.length -  0);
while (G__14356__i < G__14356__a.length) {G__14356__a[G__14356__i] = arguments[G__14356__i + 0]; ++G__14356__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14356__a,0);
} 
return amentum$collections$field__delegate.call(this,args__13751__auto__);};
amentum$collections$field.cljs$lang$maxFixedArity = 0;
amentum$collections$field.cljs$lang$applyTo = (function (arglist__14357){
var args__13751__auto__ = cljs.core.seq(arglist__14357);
return amentum$collections$field__delegate(args__13751__auto__);
});
amentum$collections$field.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$field__delegate;
return amentum$collections$field;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.input = (function() { 
var amentum$collections$input__delegate = function (args__13751__auto__){
var vec__14370 = hoplon.core.parse_args(args__13751__auto__);
var map__14373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(0),null);
var map__14373__$1 = ((((!((map__14373 == null)))?((((map__14373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14373):map__14373);
var attr = map__14373__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14373__$1,cljs.core.cst$kw$id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14373__$1,cljs.core.cst$kw$label);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14373__$1,cljs.core.cst$kw$state);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14373__$1,cljs.core.cst$kw$value);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(1),null);
return amentum.collections.field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(label)?(function (){var G__14375 = cljs.core.cst$kw$for;
var G__14376 = id;
var G__14377 = label;
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__14375,G__14376,G__14377) : hoplon.core.label.call(null,G__14375,G__14376,G__14377));
})():null),(function (){var G__14378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$label,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),cljs.core.cst$kw$value,(function (){var or__6842__auto__ = value;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return state;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$change,cljs.core.cst$kw$change.cljs$core$IFn$_invoke$arity$2(attr,((function (vec__14370,map__14373,map__14373__$1,attr,id,label,state,value,kids){
return (function (p1__14358_SHARP_){
var G__14379 = state;
var G__14380 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14358_SHARP_) : cljs.core.deref.call(null,p1__14358_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14379,G__14380) : cljs.core.reset_BANG_.call(null,G__14379,G__14380));
});})(vec__14370,map__14373,map__14373__$1,attr,id,label,state,value,kids))
),cljs.core.cst$kw$type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$2(attr,"text")], 0));
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$1(G__14378) : hoplon.core.input.call(null,G__14378));
})()], null)], 0));
};
var amentum$collections$input = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14381__i = 0, G__14381__a = new Array(arguments.length -  0);
while (G__14381__i < G__14381__a.length) {G__14381__a[G__14381__i] = arguments[G__14381__i + 0]; ++G__14381__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14381__a,0);
} 
return amentum$collections$input__delegate.call(this,args__13751__auto__);};
amentum$collections$input.cljs$lang$maxFixedArity = 0;
amentum$collections$input.cljs$lang$applyTo = (function (arglist__14382){
var args__13751__auto__ = cljs.core.seq(arglist__14382);
return amentum$collections$input__delegate(args__13751__auto__);
});
amentum$collections$input.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$input__delegate;
return amentum$collections$input;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.table = (function() { 
var amentum$collections$table__delegate = function (args__13751__auto__){
var vec__14414 = hoplon.core.parse_args(args__13751__auto__);
var map__14417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14414,(0),null);
var map__14417__$1 = ((((!((map__14417 == null)))?((((map__14417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14417):map__14417);
var attr = map__14417__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14417__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14417__$1,cljs.core.cst$kw$body);
var footers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14417__$1,cljs.core.cst$kw$footers);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14414,(1),null);
var G__14419 = cljs.core.cst$kw$class;
var G__14420 = "ui table";
var G__14421 = (function (){var con__13789__auto__ = (new cljs.core.Delay(((function (G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (){
var G__14424 = (function (){var G__14425 = hoplon.core.loop_tpl_STAR_(headers,((function (G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (item__13781__auto__){
var vec__14426 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (h){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null);
});})(G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
).call(null,item__13781__auto__));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14426,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(h) : hoplon.core.th.call(null,h));
});})(G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14425) : hoplon.core.tr.call(null,G__14425));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14424) : hoplon.core.thead.call(null,G__14424));
});})(G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
,null));
var alt__13790__auto__ = (new cljs.core.Delay(((function (con__13789__auto__,G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13789__auto__,G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
,null));
var tpl__13791__auto__ = ((function (con__13789__auto__,alt__13790__auto__,G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (p__13792__auto__){
var G__14429 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13792__auto__)?con__13789__auto__:alt__13790__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14429) : cljs.core.deref.call(null,G__14429));
});})(con__13789__auto__,alt__13790__auto__,G__14419,G__14420,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13791__auto__).call(null,headers);
})();
var G__14422 = (function (){var con__13789__auto__ = (new cljs.core.Delay(((function (G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (){
var G__14430 = hoplon.core.loop_tpl_STAR_(body,((function (G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (item__13781__auto__){
var vec__14431 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (row){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
});})(G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
).call(null,item__13781__auto__));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431,(0),null);
var G__14434 = hoplon.core.loop_tpl_STAR_(row,((function (vec__14431,row,G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (item__13781__auto____$1){
var vec__14435 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (vec__14431,row,G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (col){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null);
});})(vec__14431,row,G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
).call(null,item__13781__auto____$1));
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435,(0),null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(col) : hoplon.core.td.call(null,col));
});})(vec__14431,row,G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14434) : hoplon.core.tr.call(null,G__14434));
});})(G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__14430) : hoplon.core.tbody.call(null,G__14430));
});})(G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
,null));
var alt__13790__auto__ = (new cljs.core.Delay(((function (con__13789__auto__,G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (){
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(kids) : hoplon.core.tbody.call(null,kids));
});})(con__13789__auto__,G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
,null));
var tpl__13791__auto__ = ((function (con__13789__auto__,alt__13790__auto__,G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (p__13792__auto__){
var G__14438 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13792__auto__)?con__13789__auto__:alt__13790__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14438) : cljs.core.deref.call(null,G__14438));
});})(con__13789__auto__,alt__13790__auto__,G__14419,G__14420,G__14421,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13791__auto__).call(null,body);
})();
var G__14423 = (function (){var con__13789__auto__ = (new cljs.core.Delay(((function (G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (){
var G__14439 = (function (){var G__14440 = hoplon.core.loop_tpl_STAR_(footers,((function (G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (item__13781__auto__){
var vec__14441 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
});})(G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
).call(null,item__13781__auto__));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(0),null);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(f) : hoplon.core.th.call(null,f));
});})(G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__14440) : hoplon.core.tr.call(null,G__14440));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14439) : hoplon.core.thead.call(null,G__14439));
});})(G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
,null));
var alt__13790__auto__ = (new cljs.core.Delay(((function (con__13789__auto__,G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (){
return null;
});})(con__13789__auto__,G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
,null));
var tpl__13791__auto__ = ((function (con__13789__auto__,alt__13790__auto__,G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids){
return (function (p__13792__auto__){
var G__14444 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13792__auto__)?con__13789__auto__:alt__13790__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14444) : cljs.core.deref.call(null,G__14444));
});})(con__13789__auto__,alt__13790__auto__,G__14419,G__14420,G__14421,G__14422,vec__14414,map__14417,map__14417__$1,attr,headers,body,footers,kids))
;
return javelin.core.formula(tpl__13791__auto__).call(null,footers);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$5(G__14419,G__14420,G__14421,G__14422,G__14423) : hoplon.core.table.call(null,G__14419,G__14420,G__14421,G__14422,G__14423));
};
var amentum$collections$table = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14445__i = 0, G__14445__a = new Array(arguments.length -  0);
while (G__14445__i < G__14445__a.length) {G__14445__a[G__14445__i] = arguments[G__14445__i + 0]; ++G__14445__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14445__a,0);
} 
return amentum$collections$table__delegate.call(this,args__13751__auto__);};
amentum$collections$table.cljs$lang$maxFixedArity = 0;
amentum$collections$table.cljs$lang$applyTo = (function (arglist__14446){
var args__13751__auto__ = cljs.core.seq(arglist__14446);
return amentum$collections$table__delegate(args__13751__auto__);
});
amentum$collections$table.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$table__delegate;
return amentum$collections$table;
})()
;
/**
 * @param {...*} var_args
 */
amentum.collections.menu = (function() { 
var amentum$collections$menu__delegate = function (args__13751__auto__){
var vec__14452 = hoplon.core.parse_args(args__13751__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14452,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14452,(1),null);
return (function (){var G__14455 = cljs.core.cst$kw$class;
var G__14456 = "menu";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14455,G__14456) : hoplon.core.div.call(null,G__14455,G__14456));
})().call(null,attr,kids);
};
var amentum$collections$menu = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14457__i = 0, G__14457__a = new Array(arguments.length -  0);
while (G__14457__i < G__14457__a.length) {G__14457__a[G__14457__i] = arguments[G__14457__i + 0]; ++G__14457__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14457__a,0);
} 
return amentum$collections$menu__delegate.call(this,args__13751__auto__);};
amentum$collections$menu.cljs$lang$maxFixedArity = 0;
amentum$collections$menu.cljs$lang$applyTo = (function (arglist__14458){
var args__13751__auto__ = cljs.core.seq(arglist__14458);
return amentum$collections$menu__delegate(args__13751__auto__);
});
amentum$collections$menu.cljs$core$IFn$_invoke$arity$variadic = amentum$collections$menu__delegate;
return amentum$collections$menu;
})()
;
