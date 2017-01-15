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
var amentum$docs$views$modules$dropdown__delegate = function (args__13756__auto__){
var vec__15048 = hoplon.core.parse_args(args__13756__auto__);
var G__15051 = cljs.core.cst$kw$class;
var G__15052 = "ui vertical segment";
var G__15053 = (function (){var G__15060 = cljs.core.cst$kw$class;
var G__15061 = "ui dividing header";
var G__15062 = "Types";
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__15060,G__15061,G__15062) : hoplon.core.h2.call(null,G__15060,G__15061,G__15062));
})();
var G__15054 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Dropdown",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A dropdown") : hoplon.core.p.call(null,"A dropdown")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO: Allow dropdown to use provided set of item elements\n              rather than generating from a dataset") : hoplon.core.p.call(null,"TODO: Allow dropdown to use provided set of item elements\n              rather than generating from a dataset"))], 0));
var G__15055 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A dropdown can be used to select between choices in a form") : hoplon.core.p.call(null,"A dropdown can be used to select between choices in a form")),(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.genders,cljs.core.cst$kw$default,"Gender"], 0));
})()], 0));
var G__15056 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Search Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow a user to search through a\n              large list of choices.") : hoplon.core.p.call(null,"A selection dropdown can allow a user to search through a\n              large list of choices.")),(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"fluid",cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.countries_nv,cljs.core.cst$kw$search,true,cljs.core.cst$kw$default,"Select Country"], 0));
})()], 0));
var G__15057 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.genders,cljs.core.cst$kw$search,true,cljs.core.cst$kw$default,"Gender"], 0));
})()], 0));
var G__15058 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Multiple Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow multiple selections") : hoplon.core.p.call(null,"A selection dropdown can allow multiple selections")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO") : hoplon.core.p.call(null,"TODO"))], 0));
var G__15059 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Multiple Search Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow multiple search selections") : hoplon.core.p.call(null,"A selection dropdown can allow multiple search selections")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO ") : hoplon.core.p.call(null,"TODO "))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__15051,G__15052,G__15053,G__15054,G__15055,G__15056,G__15057,G__15058,G__15059) : hoplon.core.div.call(null,G__15051,G__15052,G__15053,G__15054,G__15055,G__15056,G__15057,G__15058,G__15059));
};
var amentum$docs$views$modules$dropdown = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__15095__i = 0, G__15095__a = new Array(arguments.length -  0);
while (G__15095__i < G__15095__a.length) {G__15095__a[G__15095__i] = arguments[G__15095__i + 0]; ++G__15095__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__15095__a,0);
} 
return amentum$docs$views$modules$dropdown__delegate.call(this,args__13756__auto__);};
amentum$docs$views$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$docs$views$modules$dropdown.cljs$lang$applyTo = (function (arglist__15097){
var args__13756__auto__ = cljs.core.seq(arglist__15097);
return amentum$docs$views$modules$dropdown__delegate(args__13756__auto__);
});
amentum$docs$views$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$modules$dropdown__delegate;
return amentum$docs$views$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.views.modules.sidebar = (function() { 
var amentum$docs$views$modules$sidebar__delegate = function (args__13756__auto__){
var vec__15102 = hoplon.core.parse_args(args__13756__auto__);
return null;
};
var amentum$docs$views$modules$sidebar = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__15105__i = 0, G__15105__a = new Array(arguments.length -  0);
while (G__15105__i < G__15105__a.length) {G__15105__a[G__15105__i] = arguments[G__15105__i + 0]; ++G__15105__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__15105__a,0);
} 
return amentum$docs$views$modules$sidebar__delegate.call(this,args__13756__auto__);};
amentum$docs$views$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$docs$views$modules$sidebar.cljs$lang$applyTo = (function (arglist__15106){
var args__13756__auto__ = cljs.core.seq(arglist__15106);
return amentum$docs$views$modules$sidebar__delegate(args__13756__auto__);
});
amentum$docs$views$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$modules$sidebar__delegate;
return amentum$docs$views$modules$sidebar;
})()
;
