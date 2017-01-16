// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.views.modules');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('amentum.modules');
goog.require('amentum.docs.core');
goog.require('amentum.docs.data');
amentum.docs.views.modules.dropdown = (function amentum$docs$views$modules$dropdown(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,"Dropdown",cljs.core.cst$kw$sub_DASH_header,"",cljs.core.cst$kw$content,(function (){var G__16718 = cljs.core.cst$kw$class;
var G__16719 = "ui vertical segment";
var G__16720 = (function (){var G__16728 = cljs.core.cst$kw$class;
var G__16729 = "ui dividing header";
var G__16730 = "Types";
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$3(G__16728,G__16729,G__16730) : hoplon.core.h2.call(null,G__16728,G__16729,G__16730));
})();
var G__16721 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Dropdown",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A dropdown") : hoplon.core.p.call(null,"A dropdown")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO: Allow dropdown to use provided set of item elements\n              rather than generating from a dataset") : hoplon.core.p.call(null,"TODO: Allow dropdown to use provided set of item elements\n              rather than generating from a dataset"))], 0));
var G__16722 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A dropdown can be used to select between choices in a form") : hoplon.core.p.call(null,"A dropdown can be used to select between choices in a form")),(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.genders,cljs.core.cst$kw$default,"Gender"], 0));
})()], 0));
var G__16723 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Search Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow a user to search through a\n              large list of choices.") : hoplon.core.p.call(null,"A selection dropdown can allow a user to search through a\n              large list of choices.")),(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"fluid",cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.countries_nv,cljs.core.cst$kw$search,true,cljs.core.cst$kw$default,"Select Country"], 0));
})()], 0));
var G__16724 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
return amentum.modules.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$state,state,cljs.core.cst$kw$values,amentum.docs.data.genders,cljs.core.cst$kw$search,true,cljs.core.cst$kw$default,"Gender"], 0));
})()], 0));
var G__16725 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Multiple Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow multiple selections") : hoplon.core.p.call(null,"A selection dropdown can allow multiple selections")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO") : hoplon.core.p.call(null,"TODO"))], 0));
var G__16726 = amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Multiple Search Selection",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A selection dropdown can allow multiple search selections") : hoplon.core.p.call(null,"A selection dropdown can allow multiple search selections")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("TODO ") : hoplon.core.p.call(null,"TODO "))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__16718,G__16719,G__16720,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726) : hoplon.core.div.call(null,G__16718,G__16719,G__16720,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726));
})()], null);
});
/**
 * @param {...*} var_args
 */
amentum.docs.views.modules.sidebar = (function() { 
var amentum$docs$views$modules$sidebar__delegate = function (args__13782__auto__){
var vec__16767 = hoplon.core.parse_args(args__13782__auto__);
return null;
};
var amentum$docs$views$modules$sidebar = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__16770__i = 0, G__16770__a = new Array(arguments.length -  0);
while (G__16770__i < G__16770__a.length) {G__16770__a[G__16770__i] = arguments[G__16770__i + 0]; ++G__16770__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__16770__a,0);
} 
return amentum$docs$views$modules$sidebar__delegate.call(this,args__13782__auto__);};
amentum$docs$views$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$docs$views$modules$sidebar.cljs$lang$applyTo = (function (arglist__16775){
var args__13782__auto__ = cljs.core.seq(arglist__16775);
return amentum$docs$views$modules$sidebar__delegate(args__13782__auto__);
});
amentum$docs$views$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$modules$sidebar__delegate;
return amentum$docs$views$modules$sidebar;
})()
;
