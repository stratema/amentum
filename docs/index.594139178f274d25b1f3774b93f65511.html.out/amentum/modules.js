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
var amentum$modules$dropdown__delegate = function (args__13751__auto__){
var vec__14557 = hoplon.core.parse_args(args__13751__auto__);
var map__14560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14557,(0),null);
var map__14560__$1 = ((((!((map__14560 == null)))?((((map__14560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14560):map__14560);
var attrs = map__14560__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14560__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14560__$1,cljs.core.cst$kw$state);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14560__$1,cljs.core.cst$kw$default);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14560__$1,cljs.core.cst$kw$values);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14560__$1,cljs.core.cst$kw$icon);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14560__$1,cljs.core.cst$kw$search,false);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14560__$1,cljs.core.cst$kw$class,"");
var active = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var query = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var toggle = ((function (active,query,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active,cljs.core.not);
});})(active,query,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
var vn = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active,query,toggle,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (m,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(v),v);
});})(active,query,toggle,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
,cljs.core.PersistentArrayMap.EMPTY,values);
var vs = javelin.core.formula(((function (active,query,toggle,vn,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14563,G__14566,G__14562,G__14567,G__14565,G__14564){
if(cljs.core.truth_((G__14562.cljs$core$IFn$_invoke$arity$1 ? G__14562.cljs$core$IFn$_invoke$arity$1(G__14563) : G__14562.call(null,G__14563)))){
return G__14564;
} else {
var G__14568 = ((function (active,query,toggle,vn,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14461_SHARP_){
var G__14570 = (function (){var G__14572 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__14461_SHARP_);
return (G__14567.cljs$core$IFn$_invoke$arity$1 ? G__14567.cljs$core$IFn$_invoke$arity$1(G__14572) : G__14567.call(null,G__14572));
})();
var G__14571 = G__14563;
return (G__14566.cljs$core$IFn$_invoke$arity$2 ? G__14566.cljs$core$IFn$_invoke$arity$2(G__14570,G__14571) : G__14566.call(null,G__14570,G__14571));
});})(active,query,toggle,vn,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14569 = G__14564;
return (G__14565.cljs$core$IFn$_invoke$arity$2 ? G__14565.cljs$core$IFn$_invoke$arity$2(G__14568,G__14569) : G__14565.call(null,G__14568,G__14569));
}
});})(active,query,toggle,vn,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,clojure.string.starts_with_QMARK_,cljs.core.empty_QMARK_,clojure.string.lower_case,cljs.core.filter,values);
var selection = javelin.core.formula(((function (active,query,toggle,vn,vs,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14573,G__14575,G__14574){
return (G__14573.cljs$core$IFn$_invoke$arity$2 ? G__14573.cljs$core$IFn$_invoke$arity$2(G__14574,G__14575) : G__14573.call(null,G__14574,G__14575));
});})(active,query,toggle,vn,vs,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core.get,state,vn);
var update_BANG_ = ((function (active,query,toggle,vn,vs,selection,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14462_SHARP_){
return javelin.core.dosync_STAR_(((function (active,query,toggle,vn,vs,selection,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,p1__14462_SHARP_) : cljs.core.reset_BANG_.call(null,state,p1__14462_SHARP_));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(query,"") : cljs.core.reset_BANG_.call(null,query,""));
});})(active,query,toggle,vn,vs,selection,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
);
});})(active,query,toggle,vn,vs,selection,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (function (){var G__14576 = cljs.core.cst$kw$class;
var G__14577 = javelin.core.formula(((function (G__14576,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14582,G__14583){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$search,G__14582,cljs.core.cst$kw$dropdown,true,cljs.core.cst$kw$selection,true,cljs.core.cst$kw$active,G__14583], null);
});})(G__14576,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,search,active);
var G__14578 = (function (){var G__14584 = cljs.core.cst$kw$class;
var G__14585 = "dropdown icon";
var G__14586 = cljs.core.cst$kw$click;
var G__14587 = toggle;
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$4(G__14584,G__14585,G__14586,G__14587) : hoplon.core.i.call(null,G__14584,G__14585,G__14586,G__14587));
})();
var G__14579 = (function (){var con__13789__auto__ = (new cljs.core.Delay(((function (G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14588 = cljs.core.cst$kw$class;
var G__14589 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search,search], null);
var G__14590 = cljs.core.cst$kw$value;
var G__14591 = query;
var G__14592 = cljs.core.cst$kw$autocomplete;
var G__14593 = "off";
var G__14594 = cljs.core.cst$kw$tabindex;
var G__14595 = "0";
var G__14596 = cljs.core.cst$kw$input;
var G__14597 = ((function (G__14588,G__14589,G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14463_SHARP_){
var G__14600 = query;
var G__14601 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14463_SHARP_) : cljs.core.deref.call(null,p1__14463_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14600,G__14601) : cljs.core.reset_BANG_.call(null,G__14600,G__14601));
});})(G__14588,G__14589,G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14598 = cljs.core.cst$kw$click;
var G__14599 = ((function (G__14588,G__14589,G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(active,true) : cljs.core.reset_BANG_.call(null,active,true));
});})(G__14588,G__14589,G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$12(G__14588,G__14589,G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14599) : hoplon.core.input.call(null,G__14588,G__14589,G__14590,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596,G__14597,G__14598,G__14599));
});})(G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13790__auto__ = (new cljs.core.Delay(((function (con__13789__auto__,G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13789__auto__,G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13791__auto__ = ((function (con__13789__auto__,alt__13790__auto__,G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13792__auto__){
var G__14602 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13792__auto__)?con__13789__auto__:alt__13790__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14602) : cljs.core.deref.call(null,G__14602));
});})(con__13789__auto__,alt__13790__auto__,G__14576,G__14577,G__14578,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13791__auto__).call(null,search);
})();
var G__14580 = (function (){var G__14603 = cljs.core.cst$kw$class;
var G__14604 = javelin.core.formula(((function (G__14603,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14608,G__14607,G__14606,G__14610,G__14609){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default,((G__14606 == null)) && ((G__14607.cljs$core$IFn$_invoke$arity$1 ? G__14607.cljs$core$IFn$_invoke$arity$1(G__14608) : G__14607.call(null,G__14608))),cljs.core.cst$kw$text,true,cljs.core.cst$kw$filtered,(function (){var and__6830__auto__ = G__14609;
if(cljs.core.truth_(and__6830__auto__)){
return (G__14610.cljs$core$IFn$_invoke$arity$1 ? G__14610.cljs$core$IFn$_invoke$arity$1(G__14608) : G__14610.call(null,G__14608));
} else {
return and__6830__auto__;
}
})()], null);
});})(G__14603,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,cljs.core.empty_QMARK_,state,cljs.core.not_empty,active);
var G__14605 = (function (){var con__13789__auto__ = (new cljs.core.Delay(((function (G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14611 = cljs.core.cst$kw$class;
var G__14612 = javelin.core.formula(((function (G__14611,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14613){
return cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(G__14613);
});})(G__14611,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14611,G__14612) : hoplon.core.i.call(null,G__14611,G__14612));
})(),(function (){var t__13850__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13850__auto__,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14615,G__14614){
return G__14614.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14615);
});})(t__13850__auto__,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection,t__13850__auto__);

return t__13850__auto__;
})()], null);
});})(G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13790__auto__ = (new cljs.core.Delay(((function (con__13789__auto__,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var t__13850__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13850__auto__,con__13789__auto__,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14617,G__14616){
return G__14616.nodeValue = G__14617;
});})(t__13850__auto__,con__13789__auto__,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,default$,t__13850__auto__);

return t__13850__auto__;
});})(con__13789__auto__,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13791__auto__ = ((function (con__13789__auto__,alt__13790__auto__,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13792__auto__){
var G__14618 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13792__auto__)?con__13789__auto__:alt__13790__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14618) : cljs.core.deref.call(null,G__14618));
});})(con__13789__auto__,alt__13790__auto__,G__14603,G__14604,G__14576,G__14577,G__14578,G__14579,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13791__auto__).call(null,selection);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14603,G__14604,G__14605) : hoplon.core.div.call(null,G__14603,G__14604,G__14605));
})();
var G__14581 = (function (){var G__14619 = cljs.core.cst$kw$class;
var G__14620 = "menu";
var G__14621 = cljs.core.cst$kw$toggle;
var G__14622 = active;
var G__14623 = cljs.core.cst$kw$tabindex;
var G__14624 = "-1";
var G__14625 = hoplon.core.loop_tpl_STAR_(vs,((function (G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (item__13781__auto__){
var vec__14626 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__14629){
var map__14630 = p__14629;
var map__14630__$1 = ((((!((map__14630 == null)))?((((map__14630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14630):map__14630);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14630__$1,cljs.core.cst$kw$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14630__$1,cljs.core.cst$kw$name);
var icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14630__$1,cljs.core.cst$kw$icon);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,name,icon__$1], null);
});})(G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,item__13781__auto__));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626,(1),null);
var icon__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626,(2),null);
var G__14632 = cljs.core.cst$kw$class;
var G__14633 = javelin.core.formula(((function (G__14632,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14640,G__14642,G__14641){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,true,cljs.core.cst$kw$active,(G__14640.cljs$core$IFn$_invoke$arity$2 ? G__14640.cljs$core$IFn$_invoke$arity$2(G__14641,G__14642) : G__14640.call(null,G__14641,G__14642))], null);
});})(G__14632,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core._EQ_,value,state);
var G__14634 = cljs.core.cst$kw$data_DASH_value;
var G__14635 = value;
var G__14636 = cljs.core.cst$kw$click;
var G__14637 = ((function (G__14632,G__14633,G__14634,G__14635,G__14636,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
update_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)));

return toggle();
});})(G__14632,G__14633,G__14634,G__14635,G__14636,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14638 = (function (){var con__13789__auto__ = (new cljs.core.Delay(((function (G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14643 = cljs.core.cst$kw$attr;
var G__14644 = javelin.core.formula(((function (G__14643,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14645){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,G__14645], null);
});})(G__14643,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,icon__$1);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14643,G__14644) : hoplon.core.i.call(null,G__14643,G__14644));
});})(G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13790__auto__ = (new cljs.core.Delay(((function (con__13789__auto__,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13789__auto__,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13791__auto__ = ((function (con__13789__auto__,alt__13790__auto__,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13792__auto__){
var G__14646 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13792__auto__)?con__13789__auto__:alt__13790__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14646) : cljs.core.deref.call(null,G__14646));
});})(con__13789__auto__,alt__13790__auto__,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13791__auto__).call(null,icon__$1);
})();
var G__14639 = (function (){var t__13850__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13850__auto__,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,G__14638,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14648,G__14649,G__14647){
return G__14647.nodeValue = [cljs.core.str(G__14648),cljs.core.str(" "),cljs.core.str(G__14649)].join('');
});})(t__13850__auto__,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,G__14638,vec__14626,value,name,icon__$1,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,name,icon__$1,t__13850__auto__);

return t__13850__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639) : hoplon.core.div.call(null,G__14632,G__14633,G__14634,G__14635,G__14636,G__14637,G__14638,G__14639));
});})(G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14576,G__14577,G__14578,G__14579,G__14580,active,query,toggle,vn,vs,selection,update_BANG_,vec__14557,map__14560,map__14560__$1,attrs,id,state,default$,values,icon,search,class$))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14625) : hoplon.core.div.call(null,G__14619,G__14620,G__14621,G__14622,G__14623,G__14624,G__14625));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14576,G__14577,G__14578,G__14579,G__14580,G__14581) : hoplon.core.div.call(null,G__14576,G__14577,G__14578,G__14579,G__14580,G__14581));
})().call(null,cljs.core.cst$kw$class,class$);
};
var amentum$modules$dropdown = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14650__i = 0, G__14650__a = new Array(arguments.length -  0);
while (G__14650__i < G__14650__a.length) {G__14650__a[G__14650__i] = arguments[G__14650__i + 0]; ++G__14650__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14650__a,0);
} 
return amentum$modules$dropdown__delegate.call(this,args__13751__auto__);};
amentum$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$modules$dropdown.cljs$lang$applyTo = (function (arglist__14651){
var args__13751__auto__ = cljs.core.seq(arglist__14651);
return amentum$modules$dropdown__delegate(args__13751__auto__);
});
amentum$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$dropdown__delegate;
return amentum$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.modules.sidebar = (function() { 
var amentum$modules$sidebar__delegate = function (args__13751__auto__){
var vec__14657 = hoplon.core.parse_args(args__13751__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14657,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14657,(1),null);
return (function (){var G__14660 = cljs.core.cst$kw$class;
var G__14661 = "ui vertical inverted sticky menu fixed top";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14660,G__14661) : hoplon.core.div.call(null,G__14660,G__14661));
})().call(null,attrs,kids);
};
var amentum$modules$sidebar = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__14662__i = 0, G__14662__a = new Array(arguments.length -  0);
while (G__14662__i < G__14662__a.length) {G__14662__a[G__14662__i] = arguments[G__14662__i + 0]; ++G__14662__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__14662__a,0);
} 
return amentum$modules$sidebar__delegate.call(this,args__13751__auto__);};
amentum$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$modules$sidebar.cljs$lang$applyTo = (function (arglist__14663){
var args__13751__auto__ = cljs.core.seq(arglist__14663);
return amentum$modules$sidebar__delegate(args__13751__auto__);
});
amentum$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$sidebar__delegate;
return amentum$modules$sidebar;
})()
;
