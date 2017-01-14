// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.doc.views.modules');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('amentum.modules');
goog.require('amentum.doc.core');
goog.require('amentum.doc.data');
/**
 * @param {...*} var_args
 */
amentum.doc.views.modules.dropdown = (function() { 
var amentum$doc$views$modules$dropdown__delegate = function (args__13749__auto__){
var vec__15420 = hoplon.core.parse_args(args__13749__auto__);
var G__15423 = cljs.core.cst$kw$class;
var G__15424 = "ui vertical segment";
var G__15425 = (function (){var G__15432 = cljs.core.cst$kw$class;
var G__15433 = "ui dividing header";
var G__15434 = "Types";
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__15432,G__15433,G__15434) : hoplon.core.h2.call(null,G__15432,G__15433,G__15434));
})();
var G__15426 = amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Dropdown",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A dropdown") : hoplon.core.p.call(null,"A dropdown")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO: Allow dropdown to use provided set of item elements\n              rather than generating from a dataset") : hoplon.core.p.call(null,"TODO: Allow dropdown to use provided set of item elements\n              rather than generating from a dataset"))], 0));
var G__15427 = amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A dropdown can be used to select between choices in a form") : hoplon.core.p.call(null,"A dropdown can be used to select between choices in a form")),(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.doc.data.genders,cljs.core.cst$kw$default,"Gender"], 0));
})()], 0));
var G__15428 = amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Search Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow a user to search through a\n              large list of choices.") : hoplon.core.p.call(null,"A selection dropdown can allow a user to search through a\n              large list of choices.")),(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"fluid",cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.doc.data.countries_nv,cljs.core.cst$kw$search,true,cljs.core.cst$kw$default,"Select Country"], 0));
})()], 0));
var G__15429 = amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.doc.data.genders,cljs.core.cst$kw$search,true,cljs.core.cst$kw$default,"Gender"], 0));
})()], 0));
var G__15430 = amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Multiple Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow multiple selections") : hoplon.core.p.call(null,"A selection dropdown can allow multiple selections")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO") : hoplon.core.p.call(null,"TODO"))], 0));
var G__15431 = amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Multiple Search Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow multiple search selections") : hoplon.core.p.call(null,"A selection dropdown can allow multiple search selections")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO ") : hoplon.core.p.call(null,"TODO "))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__15423,G__15424,G__15425,G__15426,G__15427,G__15428,G__15429,G__15430,G__15431) : hoplon.core.div.call(null,G__15423,G__15424,G__15425,G__15426,G__15427,G__15428,G__15429,G__15430,G__15431));
};
var amentum$doc$views$modules$dropdown = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__15435__i = 0, G__15435__a = new Array(arguments.length -  0);
while (G__15435__i < G__15435__a.length) {G__15435__a[G__15435__i] = arguments[G__15435__i + 0]; ++G__15435__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__15435__a,0);
} 
return amentum$doc$views$modules$dropdown__delegate.call(this,args__13749__auto__);};
amentum$doc$views$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$doc$views$modules$dropdown.cljs$lang$applyTo = (function (arglist__15436){
var args__13749__auto__ = cljs.core.seq(arglist__15436);
return amentum$doc$views$modules$dropdown__delegate(args__13749__auto__);
});
amentum$doc$views$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$modules$dropdown__delegate;
return amentum$doc$views$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.views.modules.sidebar = (function() { 
var amentum$doc$views$modules$sidebar__delegate = function (args__13749__auto__){
var vec__15440 = hoplon.core.parse_args(args__13749__auto__);
return null;
};
var amentum$doc$views$modules$sidebar = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__15443__i = 0, G__15443__a = new Array(arguments.length -  0);
while (G__15443__i < G__15443__a.length) {G__15443__a[G__15443__i] = arguments[G__15443__i + 0]; ++G__15443__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__15443__a,0);
} 
return amentum$doc$views$modules$sidebar__delegate.call(this,args__13749__auto__);};
amentum$doc$views$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$doc$views$modules$sidebar.cljs$lang$applyTo = (function (arglist__15444){
var args__13749__auto__ = cljs.core.seq(arglist__15444);
return amentum$doc$views$modules$sidebar__delegate(args__13749__auto__);
});
amentum$doc$views$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$modules$sidebar__delegate;
return amentum$doc$views$modules$sidebar;
})()
;
