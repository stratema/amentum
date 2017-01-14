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
var amentum$modules$dropdown__delegate = function (args__13753__auto__){
var vec__14559 = hoplon.core.parse_args(args__13753__auto__);
var map__14562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14559,(0),null);
var map__14562__$1 = ((((!((map__14562 == null)))?((((map__14562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14562):map__14562);
var attrs = map__14562__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14562__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14562__$1,cljs.core.cst$kw$state);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14562__$1,cljs.core.cst$kw$default);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14562__$1,cljs.core.cst$kw$values);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14562__$1,cljs.core.cst$kw$icon);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14562__$1,cljs.core.cst$kw$search,false);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14562__$1,cljs.core.cst$kw$class,"");
var active = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var query = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var toggle = ((function (active,query,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active,cljs.core.not);
});})(active,query,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
var vn = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active,query,toggle,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (m,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(v),v);
});})(active,query,toggle,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
,cljs.core.PersistentArrayMap.EMPTY,values);
var vs = javelin.core.formula(((function (active,query,toggle,vn,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14565,G__14568,G__14564,G__14569,G__14567,G__14566){
if(cljs.core.truth_((G__14564.cljs$core$IFn$_invoke$arity$1 ? G__14564.cljs$core$IFn$_invoke$arity$1(G__14565) : G__14564.call(null,G__14565)))){
return G__14566;
} else {
var G__14570 = ((function (active,query,toggle,vn,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14463_SHARP_){
var G__14572 = (function (){var G__14574 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__14463_SHARP_);
return (G__14569.cljs$core$IFn$_invoke$arity$1 ? G__14569.cljs$core$IFn$_invoke$arity$1(G__14574) : G__14569.call(null,G__14574));
})();
var G__14573 = G__14565;
return (G__14568.cljs$core$IFn$_invoke$arity$2 ? G__14568.cljs$core$IFn$_invoke$arity$2(G__14572,G__14573) : G__14568.call(null,G__14572,G__14573));
});})(active,query,toggle,vn,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14571 = G__14566;
return (G__14567.cljs$core$IFn$_invoke$arity$2 ? G__14567.cljs$core$IFn$_invoke$arity$2(G__14570,G__14571) : G__14567.call(null,G__14570,G__14571));
}
});})(active,query,toggle,vn,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,clojure.string.starts_with_QMARK_,cljs.core.empty_QMARK_,clojure.string.lower_case,cljs.core.filter,values);
var selection = javelin.core.formula(((function (active,query,toggle,vn,vs,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14575,G__14577,G__14576){
return (G__14575.cljs$core$IFn$_invoke$arity$2 ? G__14575.cljs$core$IFn$_invoke$arity$2(G__14576,G__14577) : G__14575.call(null,G__14576,G__14577));
});})(active,query,toggle,vn,vs,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core.get,state,vn);
var update_BANG_ = ((function (active,query,toggle,vn,vs,selection,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14464_SHARP_){
return javelin.core.dosync_STAR_(((function (active,query,toggle,vn,vs,selection,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,p1__14464_SHARP_) : cljs.core.reset_BANG_.call(null,state,p1__14464_SHARP_));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(query,"") : cljs.core.reset_BANG_.call(null,query,""));
});})(active,query,toggle,vn,vs,selection,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
);
});})(active,query,toggle,vn,vs,selection,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (function (){var G__14578 = cljs.core.cst$kw$class;
var G__14579 = javelin.core.formula(((function (G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14584,G__14585){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$search,G__14584,cljs.core.cst$kw$dropdown,true,cljs.core.cst$kw$selection,true,cljs.core.cst$kw$active,G__14585], null);
});})(G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,search,active);
var G__14580 = (function (){var G__14586 = cljs.core.cst$kw$class;
var G__14587 = "dropdown icon";
var G__14588 = cljs.core.cst$kw$click;
var G__14589 = toggle;
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$4(G__14586,G__14587,G__14588,G__14589) : hoplon.core.i.call(null,G__14586,G__14587,G__14588,G__14589));
})();
var G__14581 = (function (){var con__13791__auto__ = (new cljs.core.Delay(((function (G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14590 = cljs.core.cst$kw$class;
var G__14591 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search,search], null);
var G__14592 = cljs.core.cst$kw$value;
var G__14593 = query;
var G__14594 = cljs.core.cst$kw$autocomplete;
var G__14595 = "off";
var G__14596 = cljs.core.cst$kw$tabindex;
var G__14597 = "0";
var G__14598 = cljs.core.cst$kw$input;
var G__14599 = ((function (G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14465_SHARP_){
var G__14602 = query;
var G__14603 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14465_SHARP_) : cljs.core.deref.call(null,p1__14465_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14602,G__14603) : cljs.core.reset_BANG_.call(null,G__14602,G__14603));
});})(G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14600 = cljs.core.cst$kw$click;
var G__14601 = ((function (G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14599,G__14600,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(active,true) : cljs.core.reset_BANG_.call(null,active,true));
});})(G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14599,G__14600,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$12(G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14599,G__14600,G__14601) : hoplon.core.input.call(null,G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14599,G__14600,G__14601));
});})(G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13792__auto__ = (new cljs.core.Delay(((function (con__13791__auto__,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13791__auto__,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13793__auto__ = ((function (con__13791__auto__,alt__13792__auto__,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13794__auto__){
var G__14604 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13794__auto__)?con__13791__auto__:alt__13792__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14604) : cljs.core.deref.call(null,G__14604));
});})(con__13791__auto__,alt__13792__auto__,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13793__auto__).call(null,search);
})();
var G__14582 = (function (){var G__14605 = cljs.core.cst$kw$class;
var G__14606 = javelin.core.formula(((function (G__14605,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14610,G__14609,G__14608,G__14612,G__14611){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default,((G__14608 == null)) && ((G__14609.cljs$core$IFn$_invoke$arity$1 ? G__14609.cljs$core$IFn$_invoke$arity$1(G__14610) : G__14609.call(null,G__14610))),cljs.core.cst$kw$text,true,cljs.core.cst$kw$filtered,(function (){var and__6830__auto__ = G__14611;
if(cljs.core.truth_(and__6830__auto__)){
return (G__14612.cljs$core$IFn$_invoke$arity$1 ? G__14612.cljs$core$IFn$_invoke$arity$1(G__14610) : G__14612.call(null,G__14610));
} else {
return and__6830__auto__;
}
})()], null);
});})(G__14605,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,cljs.core.empty_QMARK_,state,cljs.core.not_empty,active);
var G__14607 = (function (){var con__13791__auto__ = (new cljs.core.Delay(((function (G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14613 = cljs.core.cst$kw$class;
var G__14614 = javelin.core.formula(((function (G__14613,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14615){
return cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(G__14615);
});})(G__14613,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14613,G__14614) : hoplon.core.i.call(null,G__14613,G__14614));
})(),(function (){var t__13852__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13852__auto__,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14617,G__14616){
return G__14616.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14617);
});})(t__13852__auto__,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection,t__13852__auto__);

return t__13852__auto__;
})()], null);
});})(G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13792__auto__ = (new cljs.core.Delay(((function (con__13791__auto__,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var t__13852__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13852__auto__,con__13791__auto__,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14618,G__14619){
return G__14618.nodeValue = G__14619;
});})(t__13852__auto__,con__13791__auto__,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,t__13852__auto__,default$);

return t__13852__auto__;
});})(con__13791__auto__,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13793__auto__ = ((function (con__13791__auto__,alt__13792__auto__,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13794__auto__){
var G__14620 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13794__auto__)?con__13791__auto__:alt__13792__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14620) : cljs.core.deref.call(null,G__14620));
});})(con__13791__auto__,alt__13792__auto__,G__14605,G__14606,G__14578,G__14579,G__14580,G__14581,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13793__auto__).call(null,selection);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14605,G__14606,G__14607) : hoplon.core.div.call(null,G__14605,G__14606,G__14607));
})();
var G__14583 = (function (){var G__14621 = cljs.core.cst$kw$class;
var G__14622 = "menu";
var G__14623 = cljs.core.cst$kw$toggle;
var G__14624 = active;
var G__14625 = cljs.core.cst$kw$tabindex;
var G__14626 = "-1";
var G__14627 = hoplon.core.loop_tpl_STAR_(vs,((function (G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (item__13783__auto__){
var vec__14628 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__14631){
var map__14632 = p__14631;
var map__14632__$1 = ((((!((map__14632 == null)))?((((map__14632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14632):map__14632);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14632__$1,cljs.core.cst$kw$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14632__$1,cljs.core.cst$kw$name);
var icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14632__$1,cljs.core.cst$kw$icon);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,name,icon__$1], null);
});})(G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,item__13783__auto__));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14628,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14628,(1),null);
var icon__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14628,(2),null);
var G__14634 = cljs.core.cst$kw$class;
var G__14635 = javelin.core.formula(((function (G__14634,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14642,G__14644,G__14643){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,true,cljs.core.cst$kw$active,(G__14642.cljs$core$IFn$_invoke$arity$2 ? G__14642.cljs$core$IFn$_invoke$arity$2(G__14643,G__14644) : G__14642.call(null,G__14643,G__14644))], null);
});})(G__14634,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core._EQ_,value,state);
var G__14636 = cljs.core.cst$kw$data_DASH_value;
var G__14637 = value;
var G__14638 = cljs.core.cst$kw$click;
var G__14639 = ((function (G__14634,G__14635,G__14636,G__14637,G__14638,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
update_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)));

return toggle();
});})(G__14634,G__14635,G__14636,G__14637,G__14638,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14640 = (function (){var con__13791__auto__ = (new cljs.core.Delay(((function (G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14645 = cljs.core.cst$kw$attr;
var G__14646 = javelin.core.formula(((function (G__14645,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14647){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,G__14647], null);
});})(G__14645,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,icon__$1);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14645,G__14646) : hoplon.core.i.call(null,G__14645,G__14646));
});})(G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13792__auto__ = (new cljs.core.Delay(((function (con__13791__auto__,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13791__auto__,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13793__auto__ = ((function (con__13791__auto__,alt__13792__auto__,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13794__auto__){
var G__14648 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13794__auto__)?con__13791__auto__:alt__13792__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14648) : cljs.core.deref.call(null,G__14648));
});})(con__13791__auto__,alt__13792__auto__,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13793__auto__).call(null,icon__$1);
})();
var G__14641 = (function (){var t__13852__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13852__auto__,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,G__14640,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14649,G__14650,G__14651){
return G__14649.nodeValue = [cljs.core.str(G__14650),cljs.core.str(" "),cljs.core.str(G__14651)].join('');
});})(t__13852__auto__,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,G__14640,vec__14628,value,name,icon__$1,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,t__13852__auto__,name,icon__$1);

return t__13852__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,G__14640,G__14641) : hoplon.core.div.call(null,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639,G__14640,G__14641));
});})(G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14578,G__14579,G__14580,G__14581,G__14582,active,query,toggle,vn,vs,selection,update_BANG_,vec__14559,map__14562,map__14562__$1,attrs,id,state,default$,values,icon,search,class$))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14627) : hoplon.core.div.call(null,G__14621,G__14622,G__14623,G__14624,G__14625,G__14626,G__14627));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14578,G__14579,G__14580,G__14581,G__14582,G__14583) : hoplon.core.div.call(null,G__14578,G__14579,G__14580,G__14581,G__14582,G__14583));
})().call(null,cljs.core.cst$kw$class,class$);
};
var amentum$modules$dropdown = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14652__i = 0, G__14652__a = new Array(arguments.length -  0);
while (G__14652__i < G__14652__a.length) {G__14652__a[G__14652__i] = arguments[G__14652__i + 0]; ++G__14652__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14652__a,0);
} 
return amentum$modules$dropdown__delegate.call(this,args__13753__auto__);};
amentum$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$modules$dropdown.cljs$lang$applyTo = (function (arglist__14653){
var args__13753__auto__ = cljs.core.seq(arglist__14653);
return amentum$modules$dropdown__delegate(args__13753__auto__);
});
amentum$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$dropdown__delegate;
return amentum$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.modules.sidebar = (function() { 
var amentum$modules$sidebar__delegate = function (args__13753__auto__){
var vec__14659 = hoplon.core.parse_args(args__13753__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14659,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14659,(1),null);
return (function (){var G__14662 = cljs.core.cst$kw$class;
var G__14663 = "ui vertical inverted sticky menu fixed top";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14662,G__14663) : hoplon.core.div.call(null,G__14662,G__14663));
})().call(null,attrs,kids);
};
var amentum$modules$sidebar = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14664__i = 0, G__14664__a = new Array(arguments.length -  0);
while (G__14664__i < G__14664__a.length) {G__14664__a[G__14664__i] = arguments[G__14664__i + 0]; ++G__14664__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14664__a,0);
} 
return amentum$modules$sidebar__delegate.call(this,args__13753__auto__);};
amentum$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$modules$sidebar.cljs$lang$applyTo = (function (arglist__14665){
var args__13753__auto__ = cljs.core.seq(arglist__14665);
return amentum$modules$sidebar__delegate(args__13753__auto__);
});
amentum$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$sidebar__delegate;
return amentum$modules$sidebar;
})()
;
