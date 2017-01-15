// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.views.modules');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('amentum.modules');
goog.require('amentum.docs.core');
goog.require('amentum.docs.data');
/**
 * @param {...*} var_args
 */
amentum.docs.views.modules.dropdown = (function() { 
var amentum$docs$views$modules$dropdown__delegate = function (args__13751__auto__){
var vec__14747 = hoplon.core.parse_args(args__13751__auto__);
var G__14750 = cljs.core.cst$kw$class;
var G__14751 = "ui vertical segment";
var G__14752 = (function (){var G__14759 = cljs.core.cst$kw$class;
var G__14760 = "ui dividing header";
var G__14761 = "Types";
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__14759,G__14760,G__14761) : hoplon.core.h2.call(null,G__14759,G__14760,G__14761));
})();
var G__14753 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Dropdown",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A dropdown") : hoplon.core.p.call(null,"A dropdown")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO: Allow dropdown to use provided set of item elements\n              rather than generating from a dataset") : hoplon.core.p.call(null,"TODO: Allow dropdown to use provided set of item elements\n              rather than generating from a dataset"))], 0));
var G__14754 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A dropdown can be used to select between choices in a form") : hoplon.core.p.call(null,"A dropdown can be used to select between choices in a form")),(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.genders,cljs.core.cst$kw$default,"Gender"], 0));
})()], 0));
var G__14755 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Search Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow a user to search through a\n              large list of choices.") : hoplon.core.p.call(null,"A selection dropdown can allow a user to search through a\n              large list of choices.")),(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"fluid",cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.countries_nv,cljs.core.cst$kw$search,true,cljs.core.cst$kw$default,"Select Country"], 0));
})()], 0));
var G__14756 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.genders,cljs.core.cst$kw$search,true,cljs.core.cst$kw$default,"Gender"], 0));
})()], 0));
var G__14757 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Multiple Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow multiple selections") : hoplon.core.p.call(null,"A selection dropdown can allow multiple selections")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO") : hoplon.core.p.call(null,"TODO"))], 0));
var G__14758 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Multiple Search Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow multiple search selections") : hoplon.core.p.call(null,"A selection dropdown can allow multiple search selections")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO ") : hoplon.core.p.call(null,"TODO "))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__14750,G__14751,G__14752,G__14753,G__14754,G__14755,G__14756,G__14757,G__14758) : hoplon.core.div.call(null,G__14750,G__14751,G__14752,G__14753,G__14754,G__14755,G__14756,G__14757,G__14758));
};
var amentum$docs$views$modules$dropdown = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14762__i = 0, G__14762__a = new Array(arguments.length -  0);
while (G__14762__i < G__14762__a.length) {G__14762__a[G__14762__i] = arguments[G__14762__i + 0]; ++G__14762__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14762__a,0);
} 
return amentum$docs$views$modules$dropdown__delegate.call(this,args__13751__auto__);};
amentum$docs$views$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$docs$views$modules$dropdown.cljs$lang$applyTo = (function (arglist__14763){
var args__13751__auto__ = cljs.core.seq(arglist__14763);
return amentum$docs$views$modules$dropdown__delegate(args__13751__auto__);
});
amentum$docs$views$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$modules$dropdown__delegate;
return amentum$docs$views$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.views.modules.sidebar = (function() { 
var amentum$docs$views$modules$sidebar__delegate = function (args__13751__auto__){
var vec__14767 = hoplon.core.parse_args(args__13751__auto__);
return null;
};
var amentum$docs$views$modules$sidebar = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14770__i = 0, G__14770__a = new Array(arguments.length -  0);
while (G__14770__i < G__14770__a.length) {G__14770__a[G__14770__i] = arguments[G__14770__i + 0]; ++G__14770__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14770__a,0);
} 
return amentum$docs$views$modules$sidebar__delegate.call(this,args__13751__auto__);};
amentum$docs$views$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$docs$views$modules$sidebar.cljs$lang$applyTo = (function (arglist__14771){
var args__13751__auto__ = cljs.core.seq(arglist__14771);
return amentum$docs$views$modules$sidebar__delegate(args__13751__auto__);
});
amentum$docs$views$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$modules$sidebar__delegate;
return amentum$docs$views$modules$sidebar;
})()
;
