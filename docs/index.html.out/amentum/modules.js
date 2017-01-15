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
var amentum$modules$dropdown__delegate = function (args__13756__auto__){
var vec__14636 = hoplon.core.parse_args(args__13756__auto__);
var map__14639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14636,(0),null);
var map__14639__$1 = ((((!((map__14639 == null)))?((((map__14639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14639):map__14639);
var attrs = map__14639__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14639__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14639__$1,cljs.core.cst$kw$state);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14639__$1,cljs.core.cst$kw$default);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14639__$1,cljs.core.cst$kw$values);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14639__$1,cljs.core.cst$kw$icon);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14639__$1,cljs.core.cst$kw$search,false);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14639__$1,cljs.core.cst$kw$class,"");
var active = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var query = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var toggle = ((function (active,query,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active,cljs.core.not);
});})(active,query,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
var vn = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active,query,toggle,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (m,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(v),v);
});})(active,query,toggle,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
,cljs.core.PersistentArrayMap.EMPTY,values);
var vs = javelin.core.formula(((function (active,query,toggle,vn,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14644,G__14647,G__14643,G__14648,G__14646,G__14645){
if(cljs.core.truth_((G__14643.cljs$core$IFn$_invoke$arity$1 ? G__14643.cljs$core$IFn$_invoke$arity$1(G__14644) : G__14643.call(null,G__14644)))){
return G__14645;
} else {
var G__14649 = ((function (active,query,toggle,vn,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14356_SHARP_){
var G__14651 = (function (){var G__14653 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__14356_SHARP_);
return (G__14648.cljs$core$IFn$_invoke$arity$1 ? G__14648.cljs$core$IFn$_invoke$arity$1(G__14653) : G__14648.call(null,G__14653));
})();
var G__14652 = G__14644;
return (G__14647.cljs$core$IFn$_invoke$arity$2 ? G__14647.cljs$core$IFn$_invoke$arity$2(G__14651,G__14652) : G__14647.call(null,G__14651,G__14652));
});})(active,query,toggle,vn,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14650 = G__14645;
return (G__14646.cljs$core$IFn$_invoke$arity$2 ? G__14646.cljs$core$IFn$_invoke$arity$2(G__14649,G__14650) : G__14646.call(null,G__14649,G__14650));
}
});})(active,query,toggle,vn,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,clojure.string.starts_with_QMARK_,cljs.core.empty_QMARK_,clojure.string.lower_case,cljs.core.filter,values);
var selection = javelin.core.formula(((function (active,query,toggle,vn,vs,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14654,G__14656,G__14655){
return (G__14654.cljs$core$IFn$_invoke$arity$2 ? G__14654.cljs$core$IFn$_invoke$arity$2(G__14655,G__14656) : G__14654.call(null,G__14655,G__14656));
});})(active,query,toggle,vn,vs,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core.get,state,vn);
var update_BANG_ = ((function (active,query,toggle,vn,vs,selection,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14357_SHARP_){
return javelin.core.dosync_STAR_(((function (active,query,toggle,vn,vs,selection,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,p1__14357_SHARP_) : cljs.core.reset_BANG_.call(null,state,p1__14357_SHARP_));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(query,"") : cljs.core.reset_BANG_.call(null,query,""));
});})(active,query,toggle,vn,vs,selection,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
);
});})(active,query,toggle,vn,vs,selection,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (function (){var G__14657 = cljs.core.cst$kw$class;
var G__14658 = javelin.core.formula(((function (G__14657,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14663,G__14664){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$search,G__14663,cljs.core.cst$kw$dropdown,true,cljs.core.cst$kw$selection,true,cljs.core.cst$kw$active,G__14664], null);
});})(G__14657,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,search,active);
var G__14659 = (function (){var G__14666 = cljs.core.cst$kw$class;
var G__14667 = "dropdown icon";
var G__14668 = cljs.core.cst$kw$click;
var G__14669 = toggle;
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$4(G__14666,G__14667,G__14668,G__14669) : hoplon.core.i.call(null,G__14666,G__14667,G__14668,G__14669));
})();
var G__14660 = (function (){var con__13794__auto__ = (new cljs.core.Delay(((function (G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14671 = cljs.core.cst$kw$class;
var G__14672 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search,search], null);
var G__14673 = cljs.core.cst$kw$value;
var G__14674 = query;
var G__14675 = cljs.core.cst$kw$autocomplete;
var G__14676 = "off";
var G__14677 = cljs.core.cst$kw$tabindex;
var G__14678 = "0";
var G__14679 = cljs.core.cst$kw$input;
var G__14680 = ((function (G__14671,G__14672,G__14673,G__14674,G__14675,G__14676,G__14677,G__14678,G__14679,G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14361_SHARP_){
var G__14683 = query;
var G__14684 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14361_SHARP_) : cljs.core.deref.call(null,p1__14361_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14683,G__14684) : cljs.core.reset_BANG_.call(null,G__14683,G__14684));
});})(G__14671,G__14672,G__14673,G__14674,G__14675,G__14676,G__14677,G__14678,G__14679,G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14681 = cljs.core.cst$kw$click;
var G__14682 = ((function (G__14671,G__14672,G__14673,G__14674,G__14675,G__14676,G__14677,G__14678,G__14679,G__14680,G__14681,G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(active,true) : cljs.core.reset_BANG_.call(null,active,true));
});})(G__14671,G__14672,G__14673,G__14674,G__14675,G__14676,G__14677,G__14678,G__14679,G__14680,G__14681,G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$12(G__14671,G__14672,G__14673,G__14674,G__14675,G__14676,G__14677,G__14678,G__14679,G__14680,G__14681,G__14682) : hoplon.core.input.call(null,G__14671,G__14672,G__14673,G__14674,G__14675,G__14676,G__14677,G__14678,G__14679,G__14680,G__14681,G__14682));
});})(G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13795__auto__ = (new cljs.core.Delay(((function (con__13794__auto__,G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13794__auto__,G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13796__auto__ = ((function (con__13794__auto__,alt__13795__auto__,G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13797__auto__){
var G__14690 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13797__auto__)?con__13794__auto__:alt__13795__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14690) : cljs.core.deref.call(null,G__14690));
});})(con__13794__auto__,alt__13795__auto__,G__14657,G__14658,G__14659,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13796__auto__).call(null,search);
})();
var G__14661 = (function (){var G__14696 = cljs.core.cst$kw$class;
var G__14699 = javelin.core.formula(((function (G__14696,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14707,G__14706,G__14705,G__14712,G__14708){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default,((G__14705 == null)) && ((G__14706.cljs$core$IFn$_invoke$arity$1 ? G__14706.cljs$core$IFn$_invoke$arity$1(G__14707) : G__14706.call(null,G__14707))),cljs.core.cst$kw$text,true,cljs.core.cst$kw$filtered,(function (){var and__6830__auto__ = G__14708;
if(cljs.core.truth_(and__6830__auto__)){
return (G__14712.cljs$core$IFn$_invoke$arity$1 ? G__14712.cljs$core$IFn$_invoke$arity$1(G__14707) : G__14712.call(null,G__14707));
} else {
return and__6830__auto__;
}
})()], null);
});})(G__14696,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,cljs.core.empty_QMARK_,state,cljs.core.not_empty,active);
var G__14700 = (function (){var con__13794__auto__ = (new cljs.core.Delay(((function (G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14715 = cljs.core.cst$kw$class;
var G__14716 = javelin.core.formula(((function (G__14715,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14718){
return cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(G__14718);
});})(G__14715,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14715,G__14716) : hoplon.core.i.call(null,G__14715,G__14716));
})(),(function (){var t__13855__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13855__auto__,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14722,G__14721){
return G__14721.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14722);
});})(t__13855__auto__,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection,t__13855__auto__);

return t__13855__auto__;
})()], null);
});})(G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13795__auto__ = (new cljs.core.Delay(((function (con__13794__auto__,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var t__13855__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13855__auto__,con__13794__auto__,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14731,G__14730){
return G__14730.nodeValue = G__14731;
});})(t__13855__auto__,con__13794__auto__,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,default$,t__13855__auto__);

return t__13855__auto__;
});})(con__13794__auto__,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13796__auto__ = ((function (con__13794__auto__,alt__13795__auto__,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13797__auto__){
var G__14735 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13797__auto__)?con__13794__auto__:alt__13795__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14735) : cljs.core.deref.call(null,G__14735));
});})(con__13794__auto__,alt__13795__auto__,G__14696,G__14699,G__14657,G__14658,G__14659,G__14660,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13796__auto__).call(null,selection);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14696,G__14699,G__14700) : hoplon.core.div.call(null,G__14696,G__14699,G__14700));
})();
var G__14662 = (function (){var G__14736 = cljs.core.cst$kw$class;
var G__14737 = "menu";
var G__14738 = cljs.core.cst$kw$toggle;
var G__14739 = active;
var G__14740 = cljs.core.cst$kw$tabindex;
var G__14741 = "-1";
var G__14742 = hoplon.core.loop_tpl_STAR_(vs,((function (G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (item__13786__auto__){
var vec__14744 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__14747){
var map__14748 = p__14747;
var map__14748__$1 = ((((!((map__14748 == null)))?((((map__14748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14748):map__14748);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14748__$1,cljs.core.cst$kw$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14748__$1,cljs.core.cst$kw$name);
var icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14748__$1,cljs.core.cst$kw$icon);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,name,icon__$1], null);
});})(G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,item__13786__auto__));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14744,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14744,(1),null);
var icon__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14744,(2),null);
var G__14755 = cljs.core.cst$kw$class;
var G__14756 = javelin.core.formula(((function (G__14755,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14763,G__14765,G__14764){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,true,cljs.core.cst$kw$active,(G__14763.cljs$core$IFn$_invoke$arity$2 ? G__14763.cljs$core$IFn$_invoke$arity$2(G__14764,G__14765) : G__14763.call(null,G__14764,G__14765))], null);
});})(G__14755,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core._EQ_,value,state);
var G__14757 = cljs.core.cst$kw$data_DASH_value;
var G__14758 = value;
var G__14759 = cljs.core.cst$kw$click;
var G__14760 = ((function (G__14755,G__14756,G__14757,G__14758,G__14759,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
update_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)));

return toggle();
});})(G__14755,G__14756,G__14757,G__14758,G__14759,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14761 = (function (){var con__13794__auto__ = (new cljs.core.Delay(((function (G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14766 = cljs.core.cst$kw$attr;
var G__14767 = javelin.core.formula(((function (G__14766,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14769){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,G__14769], null);
});})(G__14766,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,icon__$1);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14766,G__14767) : hoplon.core.i.call(null,G__14766,G__14767));
});})(G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13795__auto__ = (new cljs.core.Delay(((function (con__13794__auto__,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13794__auto__,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13796__auto__ = ((function (con__13794__auto__,alt__13795__auto__,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13797__auto__){
var G__14770 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13797__auto__)?con__13794__auto__:alt__13795__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14770) : cljs.core.deref.call(null,G__14770));
});})(con__13794__auto__,alt__13795__auto__,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13796__auto__).call(null,icon__$1);
})();
var G__14762 = (function (){var t__13855__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13855__auto__,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14777,G__14778,G__14776){
return G__14776.nodeValue = [cljs.core.str(G__14777),cljs.core.str(" "),cljs.core.str(G__14778)].join('');
});})(t__13855__auto__,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,vec__14744,value,name,icon__$1,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,name,icon__$1,t__13855__auto__);

return t__13855__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14762) : hoplon.core.div.call(null,G__14755,G__14756,G__14757,G__14758,G__14759,G__14760,G__14761,G__14762));
});})(G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14657,G__14658,G__14659,G__14660,G__14661,active,query,toggle,vn,vs,selection,update_BANG_,vec__14636,map__14639,map__14639__$1,attrs,id,state,default$,values,icon,search,class$))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14742) : hoplon.core.div.call(null,G__14736,G__14737,G__14738,G__14739,G__14740,G__14741,G__14742));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14657,G__14658,G__14659,G__14660,G__14661,G__14662) : hoplon.core.div.call(null,G__14657,G__14658,G__14659,G__14660,G__14661,G__14662));
})().call(null,cljs.core.cst$kw$class,class$);
};
var amentum$modules$dropdown = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14847__i = 0, G__14847__a = new Array(arguments.length -  0);
while (G__14847__i < G__14847__a.length) {G__14847__a[G__14847__i] = arguments[G__14847__i + 0]; ++G__14847__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14847__a,0);
} 
return amentum$modules$dropdown__delegate.call(this,args__13756__auto__);};
amentum$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$modules$dropdown.cljs$lang$applyTo = (function (arglist__14848){
var args__13756__auto__ = cljs.core.seq(arglist__14848);
return amentum$modules$dropdown__delegate(args__13756__auto__);
});
amentum$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$dropdown__delegate;
return amentum$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.modules.sidebar = (function() { 
var amentum$modules$sidebar__delegate = function (args__13756__auto__){
var vec__14854 = hoplon.core.parse_args(args__13756__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14854,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14854,(1),null);
return (function (){var G__14857 = cljs.core.cst$kw$class;
var G__14858 = "ui vertical inverted sticky menu fixed top";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14857,G__14858) : hoplon.core.div.call(null,G__14857,G__14858));
})().call(null,attrs,kids);
};
var amentum$modules$sidebar = function (var_args){
var args__13756__auto__ = null;
if (arguments.length > 0) {
var G__14859__i = 0, G__14859__a = new Array(arguments.length -  0);
while (G__14859__i < G__14859__a.length) {G__14859__a[G__14859__i] = arguments[G__14859__i + 0]; ++G__14859__i;}
  args__13756__auto__ = new cljs.core.IndexedSeq(G__14859__a,0);
} 
return amentum$modules$sidebar__delegate.call(this,args__13756__auto__);};
amentum$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$modules$sidebar.cljs$lang$applyTo = (function (arglist__14860){
var args__13756__auto__ = cljs.core.seq(arglist__14860);
return amentum$modules$sidebar__delegate(args__13756__auto__);
});
amentum$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$sidebar__delegate;
return amentum$modules$sidebar;
})()
;
