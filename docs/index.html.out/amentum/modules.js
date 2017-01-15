// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.modules');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
goog.require('javelin.core');
/**
 * @param {...*} var_args
 */
amentum.modules.dropdown = (function() { 
var amentum$modules$dropdown__delegate = function (args__13752__auto__){
var vec__14613 = hoplon.core.parse_args(args__13752__auto__);
var map__14616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14613,(0),null);
var map__14616__$1 = ((((!((map__14616 == null)))?((((map__14616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14616):map__14616);
var attrs = map__14616__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14616__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14616__$1,cljs.core.cst$kw$state);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14616__$1,cljs.core.cst$kw$default);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14616__$1,cljs.core.cst$kw$values);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14616__$1,cljs.core.cst$kw$icon);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14616__$1,cljs.core.cst$kw$search,false);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14616__$1,cljs.core.cst$kw$class,"");
var active = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var query = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var toggle = ((function (active,query,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active,cljs.core.not);
});})(active,query,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
var vn = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active,query,toggle,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (m,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(v),v);
});})(active,query,toggle,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
,cljs.core.PersistentArrayMap.EMPTY,values);
var vs = javelin.core.formula(((function (active,query,toggle,vn,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14640,G__14643,G__14639,G__14644,G__14642,G__14641){
if(cljs.core.truth_((G__14639.cljs$core$IFn$_invoke$arity$1 ? G__14639.cljs$core$IFn$_invoke$arity$1(G__14640) : G__14639.call(null,G__14640)))){
return G__14641;
} else {
var G__14645 = ((function (active,query,toggle,vn,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14295_SHARP_){
var G__14647 = (function (){var G__14650 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__14295_SHARP_);
return (G__14644.cljs$core$IFn$_invoke$arity$1 ? G__14644.cljs$core$IFn$_invoke$arity$1(G__14650) : G__14644.call(null,G__14650));
})();
var G__14648 = G__14640;
return (G__14643.cljs$core$IFn$_invoke$arity$2 ? G__14643.cljs$core$IFn$_invoke$arity$2(G__14647,G__14648) : G__14643.call(null,G__14647,G__14648));
});})(active,query,toggle,vn,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14646 = G__14641;
return (G__14642.cljs$core$IFn$_invoke$arity$2 ? G__14642.cljs$core$IFn$_invoke$arity$2(G__14645,G__14646) : G__14642.call(null,G__14645,G__14646));
}
});})(active,query,toggle,vn,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,clojure.string.starts_with_QMARK_,cljs.core.empty_QMARK_,clojure.string.lower_case,cljs.core.filter,values);
var selection = javelin.core.formula(((function (active,query,toggle,vn,vs,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14655,G__14660,G__14656){
return (G__14655.cljs$core$IFn$_invoke$arity$2 ? G__14655.cljs$core$IFn$_invoke$arity$2(G__14656,G__14660) : G__14655.call(null,G__14656,G__14660));
});})(active,query,toggle,vn,vs,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core.get,state,vn);
var update_BANG_ = ((function (active,query,toggle,vn,vs,selection,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14296_SHARP_){
return javelin.core.dosync_STAR_(((function (active,query,toggle,vn,vs,selection,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,p1__14296_SHARP_) : cljs.core.reset_BANG_.call(null,state,p1__14296_SHARP_));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(query,"") : cljs.core.reset_BANG_.call(null,query,""));
});})(active,query,toggle,vn,vs,selection,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
);
});})(active,query,toggle,vn,vs,selection,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (function (){var G__14667 = cljs.core.cst$kw$class;
var G__14668 = javelin.core.formula(((function (G__14667,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14677,G__14678){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$search,G__14677,cljs.core.cst$kw$dropdown,true,cljs.core.cst$kw$selection,true,cljs.core.cst$kw$active,G__14678], null);
});})(G__14667,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,search,active);
var G__14669 = (function (){var G__14679 = cljs.core.cst$kw$class;
var G__14680 = "dropdown icon";
var G__14681 = cljs.core.cst$kw$click;
var G__14682 = toggle;
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$4(G__14679,G__14680,G__14681,G__14682) : hoplon.core.i.call(null,G__14679,G__14680,G__14681,G__14682));
})();
var G__14670 = (function (){var con__13790__auto__ = (new cljs.core.Delay(((function (G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14683 = cljs.core.cst$kw$class;
var G__14684 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search,search], null);
var G__14685 = cljs.core.cst$kw$value;
var G__14686 = query;
var G__14687 = cljs.core.cst$kw$autocomplete;
var G__14688 = "off";
var G__14689 = cljs.core.cst$kw$tabindex;
var G__14690 = "0";
var G__14691 = cljs.core.cst$kw$input;
var G__14692 = ((function (G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14297_SHARP_){
var G__14695 = query;
var G__14696 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14297_SHARP_) : cljs.core.deref.call(null,p1__14297_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14695,G__14696) : cljs.core.reset_BANG_.call(null,G__14695,G__14696));
});})(G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14693 = cljs.core.cst$kw$click;
var G__14694 = ((function (G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14693,G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(active,true) : cljs.core.reset_BANG_.call(null,active,true));
});})(G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14693,G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$12(G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14693,G__14694) : hoplon.core.input.call(null,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14693,G__14694));
});})(G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13791__auto__ = (new cljs.core.Delay(((function (con__13790__auto__,G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13790__auto__,G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13792__auto__ = ((function (con__13790__auto__,alt__13791__auto__,G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13793__auto__){
var G__14698 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13793__auto__)?con__13790__auto__:alt__13791__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14698) : cljs.core.deref.call(null,G__14698));
});})(con__13790__auto__,alt__13791__auto__,G__14667,G__14668,G__14669,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13792__auto__).call(null,search);
})();
var G__14671 = (function (){var G__14700 = cljs.core.cst$kw$class;
var G__14701 = javelin.core.formula(((function (G__14700,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14710,G__14709,G__14708,G__14715,G__14714){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default,((G__14708 == null)) && ((G__14709.cljs$core$IFn$_invoke$arity$1 ? G__14709.cljs$core$IFn$_invoke$arity$1(G__14710) : G__14709.call(null,G__14710))),cljs.core.cst$kw$text,true,cljs.core.cst$kw$filtered,(function (){var and__6830__auto__ = G__14714;
if(cljs.core.truth_(and__6830__auto__)){
return (G__14715.cljs$core$IFn$_invoke$arity$1 ? G__14715.cljs$core$IFn$_invoke$arity$1(G__14710) : G__14715.call(null,G__14710));
} else {
return and__6830__auto__;
}
})()], null);
});})(G__14700,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,cljs.core.empty_QMARK_,state,cljs.core.not_empty,active);
var G__14702 = (function (){var con__13790__auto__ = (new cljs.core.Delay(((function (G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14718 = cljs.core.cst$kw$class;
var G__14719 = javelin.core.formula(((function (G__14718,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14720){
return cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(G__14720);
});})(G__14718,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14718,G__14719) : hoplon.core.i.call(null,G__14718,G__14719));
})(),(function (){var t__13851__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13851__auto__,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14723,G__14722){
return G__14722.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14723);
});})(t__13851__auto__,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection,t__13851__auto__);

return t__13851__auto__;
})()], null);
});})(G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13791__auto__ = (new cljs.core.Delay(((function (con__13790__auto__,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var t__13851__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13851__auto__,con__13790__auto__,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14725,G__14726){
return G__14725.nodeValue = G__14726;
});})(t__13851__auto__,con__13790__auto__,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,t__13851__auto__,default$);

return t__13851__auto__;
});})(con__13790__auto__,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13792__auto__ = ((function (con__13790__auto__,alt__13791__auto__,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13793__auto__){
var G__14733 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13793__auto__)?con__13790__auto__:alt__13791__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14733) : cljs.core.deref.call(null,G__14733));
});})(con__13790__auto__,alt__13791__auto__,G__14700,G__14701,G__14667,G__14668,G__14669,G__14670,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13792__auto__).call(null,selection);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14700,G__14701,G__14702) : hoplon.core.div.call(null,G__14700,G__14701,G__14702));
})();
var G__14672 = (function (){var G__14740 = cljs.core.cst$kw$class;
var G__14741 = "menu";
var G__14742 = cljs.core.cst$kw$toggle;
var G__14743 = active;
var G__14744 = cljs.core.cst$kw$tabindex;
var G__14745 = "-1";
var G__14746 = hoplon.core.loop_tpl_STAR_(vs,((function (G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (item__13782__auto__){
var vec__14751 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__14755){
var map__14756 = p__14755;
var map__14756__$1 = ((((!((map__14756 == null)))?((((map__14756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14756):map__14756);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,cljs.core.cst$kw$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,cljs.core.cst$kw$name);
var icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,cljs.core.cst$kw$icon);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,name,icon__$1], null);
});})(G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,item__13782__auto__));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(1),null);
var icon__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(2),null);
var G__14764 = cljs.core.cst$kw$class;
var G__14765 = javelin.core.formula(((function (G__14764,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14775,G__14777,G__14776){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,true,cljs.core.cst$kw$active,(G__14775.cljs$core$IFn$_invoke$arity$2 ? G__14775.cljs$core$IFn$_invoke$arity$2(G__14776,G__14777) : G__14775.call(null,G__14776,G__14777))], null);
});})(G__14764,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core._EQ_,value,state);
var G__14766 = cljs.core.cst$kw$data_DASH_value;
var G__14767 = value;
var G__14768 = cljs.core.cst$kw$click;
var G__14769 = ((function (G__14764,G__14765,G__14766,G__14767,G__14768,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
update_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)));

return toggle();
});})(G__14764,G__14765,G__14766,G__14767,G__14768,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14770 = (function (){var con__13790__auto__ = (new cljs.core.Delay(((function (G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14789 = cljs.core.cst$kw$attr;
var G__14790 = javelin.core.formula(((function (G__14789,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14791){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,G__14791], null);
});})(G__14789,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,icon__$1);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14789,G__14790) : hoplon.core.i.call(null,G__14789,G__14790));
});})(G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13791__auto__ = (new cljs.core.Delay(((function (con__13790__auto__,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13790__auto__,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13792__auto__ = ((function (con__13790__auto__,alt__13791__auto__,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13793__auto__){
var G__14795 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13793__auto__)?con__13790__auto__:alt__13791__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14795) : cljs.core.deref.call(null,G__14795));
});})(con__13790__auto__,alt__13791__auto__,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13792__auto__).call(null,icon__$1);
})();
var G__14771 = (function (){var t__13851__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13851__auto__,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,G__14770,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14800,G__14801,G__14802){
return G__14800.nodeValue = [cljs.core.str(G__14801),cljs.core.str(" "),cljs.core.str(G__14802)].join('');
});})(t__13851__auto__,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,G__14770,vec__14751,value,name,icon__$1,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,t__13851__auto__,name,icon__$1);

return t__13851__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,G__14770,G__14771) : hoplon.core.div.call(null,G__14764,G__14765,G__14766,G__14767,G__14768,G__14769,G__14770,G__14771));
});})(G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14667,G__14668,G__14669,G__14670,G__14671,active,query,toggle,vn,vs,selection,update_BANG_,vec__14613,map__14616,map__14616__$1,attrs,id,state,default$,values,icon,search,class$))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14746) : hoplon.core.div.call(null,G__14740,G__14741,G__14742,G__14743,G__14744,G__14745,G__14746));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14667,G__14668,G__14669,G__14670,G__14671,G__14672) : hoplon.core.div.call(null,G__14667,G__14668,G__14669,G__14670,G__14671,G__14672));
})().call(null,cljs.core.cst$kw$class,class$);
};
var amentum$modules$dropdown = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14926__i = 0, G__14926__a = new Array(arguments.length -  0);
while (G__14926__i < G__14926__a.length) {G__14926__a[G__14926__i] = arguments[G__14926__i + 0]; ++G__14926__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14926__a,0);
} 
return amentum$modules$dropdown__delegate.call(this,args__13752__auto__);};
amentum$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$modules$dropdown.cljs$lang$applyTo = (function (arglist__14927){
var args__13752__auto__ = cljs.core.seq(arglist__14927);
return amentum$modules$dropdown__delegate(args__13752__auto__);
});
amentum$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$dropdown__delegate;
return amentum$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.modules.sidebar = (function() { 
var amentum$modules$sidebar__delegate = function (args__13752__auto__){
var vec__14937 = hoplon.core.parse_args(args__13752__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14937,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14937,(1),null);
return (function (){var G__14940 = cljs.core.cst$kw$class;
var G__14941 = "ui vertical inverted sticky menu fixed top";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14940,G__14941) : hoplon.core.div.call(null,G__14940,G__14941));
})().call(null,attrs,kids);
};
var amentum$modules$sidebar = function (var_args){
var args__13752__auto__ = null;
if (arguments.length > 0) {
var G__14942__i = 0, G__14942__a = new Array(arguments.length -  0);
while (G__14942__i < G__14942__a.length) {G__14942__a[G__14942__i] = arguments[G__14942__i + 0]; ++G__14942__i;}
  args__13752__auto__ = new cljs.core.IndexedSeq(G__14942__a,0);
} 
return amentum$modules$sidebar__delegate.call(this,args__13752__auto__);};
amentum$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$modules$sidebar.cljs$lang$applyTo = (function (arglist__14945){
var args__13752__auto__ = cljs.core.seq(arglist__14945);
return amentum$modules$sidebar__delegate(args__13752__auto__);
});
amentum$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$sidebar__delegate;
return amentum$modules$sidebar;
})()
;
