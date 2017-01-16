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
var amentum$modules$dropdown__delegate = function (args__13782__auto__){
var vec__14619 = hoplon.core.parse_args(args__13782__auto__);
var map__14622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14619,(0),null);
var map__14622__$1 = ((((!((map__14622 == null)))?((((map__14622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14622):map__14622);
var attrs = map__14622__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,cljs.core.cst$kw$state);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,cljs.core.cst$kw$default);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,cljs.core.cst$kw$values);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,cljs.core.cst$kw$icon);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14622__$1,cljs.core.cst$kw$search,false);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14622__$1,cljs.core.cst$kw$class,"");
var active = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var query = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var toggle = ((function (active,query,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active,cljs.core.not);
});})(active,query,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
var vn = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active,query,toggle,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (m,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(v),v);
});})(active,query,toggle,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
,cljs.core.PersistentArrayMap.EMPTY,values);
var vs = javelin.core.formula(((function (active,query,toggle,vn,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14637,G__14640,G__14636,G__14642,G__14639,G__14638){
if(cljs.core.truth_((G__14636.cljs$core$IFn$_invoke$arity$1 ? G__14636.cljs$core$IFn$_invoke$arity$1(G__14637) : G__14636.call(null,G__14637)))){
return G__14638;
} else {
var G__14643 = ((function (active,query,toggle,vn,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14347_SHARP_){
var G__14645 = (function (){var G__14647 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__14347_SHARP_);
return (G__14642.cljs$core$IFn$_invoke$arity$1 ? G__14642.cljs$core$IFn$_invoke$arity$1(G__14647) : G__14642.call(null,G__14647));
})();
var G__14646 = G__14637;
return (G__14640.cljs$core$IFn$_invoke$arity$2 ? G__14640.cljs$core$IFn$_invoke$arity$2(G__14645,G__14646) : G__14640.call(null,G__14645,G__14646));
});})(active,query,toggle,vn,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14644 = G__14638;
return (G__14639.cljs$core$IFn$_invoke$arity$2 ? G__14639.cljs$core$IFn$_invoke$arity$2(G__14643,G__14644) : G__14639.call(null,G__14643,G__14644));
}
});})(active,query,toggle,vn,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,clojure.string.starts_with_QMARK_,cljs.core.empty_QMARK_,clojure.string.lower_case,cljs.core.filter,values);
var selection = javelin.core.formula(((function (active,query,toggle,vn,vs,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14655,G__14657,G__14656){
return (G__14655.cljs$core$IFn$_invoke$arity$2 ? G__14655.cljs$core$IFn$_invoke$arity$2(G__14656,G__14657) : G__14655.call(null,G__14656,G__14657));
});})(active,query,toggle,vn,vs,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core.get,state,vn);
var update_BANG_ = ((function (active,query,toggle,vn,vs,selection,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14348_SHARP_){
return javelin.core.dosync_STAR_(((function (active,query,toggle,vn,vs,selection,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,p1__14348_SHARP_) : cljs.core.reset_BANG_.call(null,state,p1__14348_SHARP_));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(query,"") : cljs.core.reset_BANG_.call(null,query,""));
});})(active,query,toggle,vn,vs,selection,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
);
});})(active,query,toggle,vn,vs,selection,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (function (){var G__14661 = cljs.core.cst$kw$class;
var G__14662 = javelin.core.formula(((function (G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14677,G__14678){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$search,G__14677,cljs.core.cst$kw$dropdown,true,cljs.core.cst$kw$selection,true,cljs.core.cst$kw$active,G__14678], null);
});})(G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,search,active);
var G__14663 = (function (){var G__14683 = cljs.core.cst$kw$class;
var G__14684 = "dropdown icon";
var G__14685 = cljs.core.cst$kw$click;
var G__14686 = toggle;
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$4(G__14683,G__14684,G__14685,G__14686) : hoplon.core.i.call(null,G__14683,G__14684,G__14685,G__14686));
})();
var G__14664 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14690 = cljs.core.cst$kw$class;
var G__14691 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search,search], null);
var G__14692 = cljs.core.cst$kw$value;
var G__14693 = query;
var G__14694 = cljs.core.cst$kw$autocomplete;
var G__14695 = "off";
var G__14696 = cljs.core.cst$kw$tabindex;
var G__14697 = "0";
var G__14698 = cljs.core.cst$kw$input;
var G__14699 = ((function (G__14690,G__14691,G__14692,G__14693,G__14694,G__14695,G__14696,G__14697,G__14698,G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14349_SHARP_){
var G__14702 = query;
var G__14703 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14349_SHARP_) : cljs.core.deref.call(null,p1__14349_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14702,G__14703) : cljs.core.reset_BANG_.call(null,G__14702,G__14703));
});})(G__14690,G__14691,G__14692,G__14693,G__14694,G__14695,G__14696,G__14697,G__14698,G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14700 = cljs.core.cst$kw$click;
var G__14701 = ((function (G__14690,G__14691,G__14692,G__14693,G__14694,G__14695,G__14696,G__14697,G__14698,G__14699,G__14700,G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(active,true) : cljs.core.reset_BANG_.call(null,active,true));
});})(G__14690,G__14691,G__14692,G__14693,G__14694,G__14695,G__14696,G__14697,G__14698,G__14699,G__14700,G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$12(G__14690,G__14691,G__14692,G__14693,G__14694,G__14695,G__14696,G__14697,G__14698,G__14699,G__14700,G__14701) : hoplon.core.input.call(null,G__14690,G__14691,G__14692,G__14693,G__14694,G__14695,G__14696,G__14697,G__14698,G__14699,G__14700,G__14701));
});})(G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13820__auto__,G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13823__auto__){
var G__14705 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14705) : cljs.core.deref.call(null,G__14705));
});})(con__13820__auto__,alt__13821__auto__,G__14661,G__14662,G__14663,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13822__auto__).call(null,search);
})();
var G__14665 = (function (){var G__14715 = cljs.core.cst$kw$class;
var G__14717 = javelin.core.formula(((function (G__14715,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14731,G__14730,G__14729,G__14733,G__14732){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default,((G__14729 == null)) && ((G__14730.cljs$core$IFn$_invoke$arity$1 ? G__14730.cljs$core$IFn$_invoke$arity$1(G__14731) : G__14730.call(null,G__14731))),cljs.core.cst$kw$text,true,cljs.core.cst$kw$filtered,(function (){var and__6830__auto__ = G__14732;
if(cljs.core.truth_(and__6830__auto__)){
return (G__14733.cljs$core$IFn$_invoke$arity$1 ? G__14733.cljs$core$IFn$_invoke$arity$1(G__14731) : G__14733.call(null,G__14731));
} else {
return and__6830__auto__;
}
})()], null);
});})(G__14715,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,cljs.core.empty_QMARK_,state,cljs.core.not_empty,active);
var G__14718 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14735 = cljs.core.cst$kw$class;
var G__14736 = javelin.core.formula(((function (G__14735,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14739){
return cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(G__14739);
});})(G__14735,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14735,G__14736) : hoplon.core.i.call(null,G__14735,G__14736));
})(),(function (){var t__13881__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13881__auto__,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14744,G__14743){
return G__14743.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14744);
});})(t__13881__auto__,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection,t__13881__auto__);

return t__13881__auto__;
})()], null);
});})(G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var t__13881__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13881__auto__,con__13820__auto__,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14747,G__14746){
return G__14746.nodeValue = G__14747;
});})(t__13881__auto__,con__13820__auto__,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,default$,t__13881__auto__);

return t__13881__auto__;
});})(con__13820__auto__,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13823__auto__){
var G__14748 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14748) : cljs.core.deref.call(null,G__14748));
});})(con__13820__auto__,alt__13821__auto__,G__14715,G__14717,G__14661,G__14662,G__14663,G__14664,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13822__auto__).call(null,selection);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14715,G__14717,G__14718) : hoplon.core.div.call(null,G__14715,G__14717,G__14718));
})();
var G__14666 = (function (){var G__14756 = cljs.core.cst$kw$class;
var G__14757 = "menu";
var G__14758 = cljs.core.cst$kw$toggle;
var G__14759 = active;
var G__14760 = cljs.core.cst$kw$tabindex;
var G__14761 = "-1";
var G__14762 = hoplon.core.loop_tpl_STAR_(vs,((function (G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (item__13812__auto__){
var vec__14763 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__14766){
var map__14767 = p__14766;
var map__14767__$1 = ((((!((map__14767 == null)))?((((map__14767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14767):map__14767);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14767__$1,cljs.core.cst$kw$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14767__$1,cljs.core.cst$kw$name);
var icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14767__$1,cljs.core.cst$kw$icon);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,name,icon__$1], null);
});})(G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,item__13812__auto__));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14763,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14763,(1),null);
var icon__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14763,(2),null);
var G__14779 = cljs.core.cst$kw$class;
var G__14780 = javelin.core.formula(((function (G__14779,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14788,G__14790,G__14789){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,true,cljs.core.cst$kw$active,(G__14788.cljs$core$IFn$_invoke$arity$2 ? G__14788.cljs$core$IFn$_invoke$arity$2(G__14789,G__14790) : G__14788.call(null,G__14789,G__14790))], null);
});})(G__14779,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core._EQ_,value,state);
var G__14781 = cljs.core.cst$kw$data_DASH_value;
var G__14782 = value;
var G__14783 = cljs.core.cst$kw$click;
var G__14784 = ((function (G__14779,G__14780,G__14781,G__14782,G__14783,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
update_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)));

return toggle();
});})(G__14779,G__14780,G__14781,G__14782,G__14783,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14785 = (function (){var con__13820__auto__ = (new cljs.core.Delay(((function (G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14797 = cljs.core.cst$kw$attr;
var G__14798 = javelin.core.formula(((function (G__14797,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14802){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,G__14802], null);
});})(G__14797,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,icon__$1);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14797,G__14798) : hoplon.core.i.call(null,G__14797,G__14798));
});})(G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13821__auto__ = (new cljs.core.Delay(((function (con__13820__auto__,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13820__auto__,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13822__auto__ = ((function (con__13820__auto__,alt__13821__auto__,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13823__auto__){
var G__14807 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13823__auto__)?con__13820__auto__:alt__13821__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14807) : cljs.core.deref.call(null,G__14807));
});})(con__13820__auto__,alt__13821__auto__,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13822__auto__).call(null,icon__$1);
})();
var G__14786 = (function (){var t__13881__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13881__auto__,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,G__14785,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14813,G__14814,G__14812){
return G__14812.nodeValue = [cljs.core.str(G__14813),cljs.core.str(" "),cljs.core.str(G__14814)].join('');
});})(t__13881__auto__,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,G__14785,vec__14763,value,name,icon__$1,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,name,icon__$1,t__13881__auto__);

return t__13881__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,G__14785,G__14786) : hoplon.core.div.call(null,G__14779,G__14780,G__14781,G__14782,G__14783,G__14784,G__14785,G__14786));
});})(G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14661,G__14662,G__14663,G__14664,G__14665,active,query,toggle,vn,vs,selection,update_BANG_,vec__14619,map__14622,map__14622__$1,attrs,id,state,default$,values,icon,search,class$))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14762) : hoplon.core.div.call(null,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14762));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14661,G__14662,G__14663,G__14664,G__14665,G__14666) : hoplon.core.div.call(null,G__14661,G__14662,G__14663,G__14664,G__14665,G__14666));
})().call(null,cljs.core.cst$kw$class,class$);
};
var amentum$modules$dropdown = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__15083__i = 0, G__15083__a = new Array(arguments.length -  0);
while (G__15083__i < G__15083__a.length) {G__15083__a[G__15083__i] = arguments[G__15083__i + 0]; ++G__15083__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__15083__a,0);
} 
return amentum$modules$dropdown__delegate.call(this,args__13782__auto__);};
amentum$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$modules$dropdown.cljs$lang$applyTo = (function (arglist__15084){
var args__13782__auto__ = cljs.core.seq(arglist__15084);
return amentum$modules$dropdown__delegate(args__13782__auto__);
});
amentum$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$dropdown__delegate;
return amentum$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.modules.sidebar = (function() { 
var amentum$modules$sidebar__delegate = function (args__13782__auto__){
var vec__15096 = hoplon.core.parse_args(args__13782__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15096,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15096,(1),null);
return (function (){var G__15099 = cljs.core.cst$kw$class;
var G__15100 = "ui vertical inverted sticky menu fixed top";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__15099,G__15100) : hoplon.core.div.call(null,G__15099,G__15100));
})().call(null,attrs,kids);
};
var amentum$modules$sidebar = function (var_args){
var args__13782__auto__ = null;
if (arguments.length > 0) {
var G__15113__i = 0, G__15113__a = new Array(arguments.length -  0);
while (G__15113__i < G__15113__a.length) {G__15113__a[G__15113__i] = arguments[G__15113__i + 0]; ++G__15113__i;}
  args__13782__auto__ = new cljs.core.IndexedSeq(G__15113__a,0);
} 
return amentum$modules$sidebar__delegate.call(this,args__13782__auto__);};
amentum$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$modules$sidebar.cljs$lang$applyTo = (function (arglist__15114){
var args__13782__auto__ = cljs.core.seq(arglist__15114);
return amentum$modules$sidebar__delegate(args__13782__auto__);
});
amentum$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$sidebar__delegate;
return amentum$modules$sidebar;
})()
;
