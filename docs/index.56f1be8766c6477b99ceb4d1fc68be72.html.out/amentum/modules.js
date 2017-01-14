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
var amentum$modules$dropdown__delegate = function (args__13749__auto__){
var vec__14386 = hoplon.core.parse_args(args__13749__auto__);
var map__14389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14386,(0),null);
var map__14389__$1 = ((((!((map__14389 == null)))?((((map__14389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14389):map__14389);
var attrs = map__14389__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,cljs.core.cst$kw$state);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,cljs.core.cst$kw$default);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,cljs.core.cst$kw$values);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,cljs.core.cst$kw$icon);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14389__$1,cljs.core.cst$kw$search,false);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14389__$1,cljs.core.cst$kw$class,"");
var active = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var query = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var toggle = ((function (active,query,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active,cljs.core.not);
});})(active,query,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
var vn = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active,query,toggle,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (m,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(v),v);
});})(active,query,toggle,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
,cljs.core.PersistentArrayMap.EMPTY,values);
var vs = javelin.core.formula(((function (active,query,toggle,vn,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14392,G__14395,G__14391,G__14396,G__14394,G__14393){
if(cljs.core.truth_((G__14391.cljs$core$IFn$_invoke$arity$1 ? G__14391.cljs$core$IFn$_invoke$arity$1(G__14392) : G__14391.call(null,G__14392)))){
return G__14393;
} else {
var G__14397 = ((function (active,query,toggle,vn,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14290_SHARP_){
var G__14399 = (function (){var G__14401 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__14290_SHARP_);
return (G__14396.cljs$core$IFn$_invoke$arity$1 ? G__14396.cljs$core$IFn$_invoke$arity$1(G__14401) : G__14396.call(null,G__14401));
})();
var G__14400 = G__14392;
return (G__14395.cljs$core$IFn$_invoke$arity$2 ? G__14395.cljs$core$IFn$_invoke$arity$2(G__14399,G__14400) : G__14395.call(null,G__14399,G__14400));
});})(active,query,toggle,vn,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14398 = G__14393;
return (G__14394.cljs$core$IFn$_invoke$arity$2 ? G__14394.cljs$core$IFn$_invoke$arity$2(G__14397,G__14398) : G__14394.call(null,G__14397,G__14398));
}
});})(active,query,toggle,vn,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,clojure.string.starts_with_QMARK_,cljs.core.empty_QMARK_,clojure.string.lower_case,cljs.core.filter,values);
var selection = javelin.core.formula(((function (active,query,toggle,vn,vs,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14402,G__14404,G__14403){
return (G__14402.cljs$core$IFn$_invoke$arity$2 ? G__14402.cljs$core$IFn$_invoke$arity$2(G__14403,G__14404) : G__14402.call(null,G__14403,G__14404));
});})(active,query,toggle,vn,vs,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core.get,state,vn);
var update_BANG_ = ((function (active,query,toggle,vn,vs,selection,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14291_SHARP_){
return javelin.core.dosync_STAR_(((function (active,query,toggle,vn,vs,selection,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,p1__14291_SHARP_) : cljs.core.reset_BANG_.call(null,state,p1__14291_SHARP_));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(query,"") : cljs.core.reset_BANG_.call(null,query,""));
});})(active,query,toggle,vn,vs,selection,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
);
});})(active,query,toggle,vn,vs,selection,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (function (){var G__14405 = cljs.core.cst$kw$class;
var G__14406 = javelin.core.formula(((function (G__14405,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14411,G__14412){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ui,true,cljs.core.cst$kw$search,G__14411,cljs.core.cst$kw$dropdown,true,cljs.core.cst$kw$selection,true,cljs.core.cst$kw$active,G__14412], null);
});})(G__14405,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,search,active);
var G__14407 = (function (){var G__14413 = cljs.core.cst$kw$class;
var G__14414 = "dropdown icon";
var G__14415 = cljs.core.cst$kw$click;
var G__14416 = toggle;
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$4(G__14413,G__14414,G__14415,G__14416) : hoplon.core.i.call(null,G__14413,G__14414,G__14415,G__14416));
})();
var G__14408 = (function (){var con__13787__auto__ = (new cljs.core.Delay(((function (G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14417 = cljs.core.cst$kw$class;
var G__14418 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search,search], null);
var G__14419 = cljs.core.cst$kw$value;
var G__14420 = query;
var G__14421 = cljs.core.cst$kw$autocomplete;
var G__14422 = "off";
var G__14423 = cljs.core.cst$kw$tabindex;
var G__14424 = "0";
var G__14425 = cljs.core.cst$kw$input;
var G__14426 = ((function (G__14417,G__14418,G__14419,G__14420,G__14421,G__14422,G__14423,G__14424,G__14425,G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p1__14292_SHARP_){
var G__14429 = query;
var G__14430 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14292_SHARP_) : cljs.core.deref.call(null,p1__14292_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14429,G__14430) : cljs.core.reset_BANG_.call(null,G__14429,G__14430));
});})(G__14417,G__14418,G__14419,G__14420,G__14421,G__14422,G__14423,G__14424,G__14425,G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14427 = cljs.core.cst$kw$click;
var G__14428 = ((function (G__14417,G__14418,G__14419,G__14420,G__14421,G__14422,G__14423,G__14424,G__14425,G__14426,G__14427,G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(active,true) : cljs.core.reset_BANG_.call(null,active,true));
});})(G__14417,G__14418,G__14419,G__14420,G__14421,G__14422,G__14423,G__14424,G__14425,G__14426,G__14427,G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$12(G__14417,G__14418,G__14419,G__14420,G__14421,G__14422,G__14423,G__14424,G__14425,G__14426,G__14427,G__14428) : hoplon.core.input.call(null,G__14417,G__14418,G__14419,G__14420,G__14421,G__14422,G__14423,G__14424,G__14425,G__14426,G__14427,G__14428));
});})(G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13788__auto__ = (new cljs.core.Delay(((function (con__13787__auto__,G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13787__auto__,G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13789__auto__ = ((function (con__13787__auto__,alt__13788__auto__,G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13790__auto__){
var G__14431 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13790__auto__)?con__13787__auto__:alt__13788__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14431) : cljs.core.deref.call(null,G__14431));
});})(con__13787__auto__,alt__13788__auto__,G__14405,G__14406,G__14407,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13789__auto__).call(null,search);
})();
var G__14409 = (function (){var G__14432 = cljs.core.cst$kw$class;
var G__14433 = javelin.core.formula(((function (G__14432,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14437,G__14436,G__14435,G__14439,G__14438){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default,((G__14435 == null)) && ((G__14436.cljs$core$IFn$_invoke$arity$1 ? G__14436.cljs$core$IFn$_invoke$arity$1(G__14437) : G__14436.call(null,G__14437))),cljs.core.cst$kw$text,true,cljs.core.cst$kw$filtered,(function (){var and__6830__auto__ = G__14438;
if(cljs.core.truth_(and__6830__auto__)){
return (G__14439.cljs$core$IFn$_invoke$arity$1 ? G__14439.cljs$core$IFn$_invoke$arity$1(G__14437) : G__14439.call(null,G__14437));
} else {
return and__6830__auto__;
}
})()], null);
});})(G__14432,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,query,cljs.core.empty_QMARK_,state,cljs.core.not_empty,active);
var G__14434 = (function (){var con__13787__auto__ = (new cljs.core.Delay(((function (G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14440 = cljs.core.cst$kw$class;
var G__14441 = javelin.core.formula(((function (G__14440,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14442){
return cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(G__14442);
});})(G__14440,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14440,G__14441) : hoplon.core.i.call(null,G__14440,G__14441));
})(),(function (){var t__13848__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13848__auto__,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14444,G__14443){
return G__14443.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14444);
});})(t__13848__auto__,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,selection,t__13848__auto__);

return t__13848__auto__;
})()], null);
});})(G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13788__auto__ = (new cljs.core.Delay(((function (con__13787__auto__,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var t__13848__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13848__auto__,con__13787__auto__,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14445,G__14446){
return G__14445.nodeValue = G__14446;
});})(t__13848__auto__,con__13787__auto__,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,t__13848__auto__,default$);

return t__13848__auto__;
});})(con__13787__auto__,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13789__auto__ = ((function (con__13787__auto__,alt__13788__auto__,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13790__auto__){
var G__14447 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13790__auto__)?con__13787__auto__:alt__13788__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14447) : cljs.core.deref.call(null,G__14447));
});})(con__13787__auto__,alt__13788__auto__,G__14432,G__14433,G__14405,G__14406,G__14407,G__14408,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13789__auto__).call(null,selection);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14432,G__14433,G__14434) : hoplon.core.div.call(null,G__14432,G__14433,G__14434));
})();
var G__14410 = (function (){var G__14448 = cljs.core.cst$kw$class;
var G__14449 = "menu";
var G__14450 = cljs.core.cst$kw$toggle;
var G__14451 = active;
var G__14452 = cljs.core.cst$kw$tabindex;
var G__14453 = "-1";
var G__14454 = hoplon.core.loop_tpl_STAR_(vs,((function (G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (item__13779__auto__){
var vec__14455 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__14458){
var map__14459 = p__14458;
var map__14459__$1 = ((((!((map__14459 == null)))?((((map__14459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14459):map__14459);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14459__$1,cljs.core.cst$kw$value);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14459__$1,cljs.core.cst$kw$name);
var icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14459__$1,cljs.core.cst$kw$icon);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,name,icon__$1], null);
});})(G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,item__13779__auto__));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14455,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14455,(1),null);
var icon__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14455,(2),null);
var G__14461 = cljs.core.cst$kw$class;
var G__14462 = javelin.core.formula(((function (G__14461,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14469,G__14471,G__14470){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,true,cljs.core.cst$kw$active,(G__14469.cljs$core$IFn$_invoke$arity$2 ? G__14469.cljs$core$IFn$_invoke$arity$2(G__14470,G__14471) : G__14469.call(null,G__14470,G__14471))], null);
});})(G__14461,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,cljs.core._EQ_,value,state);
var G__14463 = cljs.core.cst$kw$data_DASH_value;
var G__14464 = value;
var G__14465 = cljs.core.cst$kw$click;
var G__14466 = ((function (G__14461,G__14462,G__14463,G__14464,G__14465,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
update_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)));

return toggle();
});})(G__14461,G__14462,G__14463,G__14464,G__14465,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
var G__14467 = (function (){var con__13787__auto__ = (new cljs.core.Delay(((function (G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
var G__14472 = cljs.core.cst$kw$attr;
var G__14473 = javelin.core.formula(((function (G__14472,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14474){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,G__14474], null);
});})(G__14472,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,icon__$1);
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14472,G__14473) : hoplon.core.i.call(null,G__14472,G__14473));
});})(G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var alt__13788__auto__ = (new cljs.core.Delay(((function (con__13787__auto__,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (){
return null;
});})(con__13787__auto__,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
,null));
var tpl__13789__auto__ = ((function (con__13787__auto__,alt__13788__auto__,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (p__13790__auto__){
var G__14475 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13790__auto__)?con__13787__auto__:alt__13788__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14475) : cljs.core.deref.call(null,G__14475));
});})(con__13787__auto__,alt__13788__auto__,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
;
return javelin.core.formula(tpl__13789__auto__).call(null,icon__$1);
})();
var G__14468 = (function (){var t__13848__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13848__auto__,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,G__14467,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$){
return (function (G__14476,G__14477,G__14478){
return G__14476.nodeValue = [cljs.core.str(G__14477),cljs.core.str(" "),cljs.core.str(G__14478)].join('');
});})(t__13848__auto__,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,G__14467,vec__14455,value,name,icon__$1,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
).call(null,t__13848__auto__,name,icon__$1);

return t__13848__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,G__14467,G__14468) : hoplon.core.div.call(null,G__14461,G__14462,G__14463,G__14464,G__14465,G__14466,G__14467,G__14468));
});})(G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14405,G__14406,G__14407,G__14408,G__14409,active,query,toggle,vn,vs,selection,update_BANG_,vec__14386,map__14389,map__14389__$1,attrs,id,state,default$,values,icon,search,class$))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14454) : hoplon.core.div.call(null,G__14448,G__14449,G__14450,G__14451,G__14452,G__14453,G__14454));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14405,G__14406,G__14407,G__14408,G__14409,G__14410) : hoplon.core.div.call(null,G__14405,G__14406,G__14407,G__14408,G__14409,G__14410));
})().call(null,cljs.core.cst$kw$class,class$);
};
var amentum$modules$dropdown = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14479__i = 0, G__14479__a = new Array(arguments.length -  0);
while (G__14479__i < G__14479__a.length) {G__14479__a[G__14479__i] = arguments[G__14479__i + 0]; ++G__14479__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14479__a,0);
} 
return amentum$modules$dropdown__delegate.call(this,args__13749__auto__);};
amentum$modules$dropdown.cljs$lang$maxFixedArity = 0;
amentum$modules$dropdown.cljs$lang$applyTo = (function (arglist__14480){
var args__13749__auto__ = cljs.core.seq(arglist__14480);
return amentum$modules$dropdown__delegate(args__13749__auto__);
});
amentum$modules$dropdown.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$dropdown__delegate;
return amentum$modules$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
amentum.modules.sidebar = (function() { 
var amentum$modules$sidebar__delegate = function (args__13749__auto__){
var vec__14486 = hoplon.core.parse_args(args__13749__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14486,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14486,(1),null);
return (function (){var G__14489 = cljs.core.cst$kw$class;
var G__14490 = "ui vertical inverted sticky menu fixed top";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14489,G__14490) : hoplon.core.div.call(null,G__14489,G__14490));
})().call(null,attrs,kids);
};
var amentum$modules$sidebar = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14491__i = 0, G__14491__a = new Array(arguments.length -  0);
while (G__14491__i < G__14491__a.length) {G__14491__a[G__14491__i] = arguments[G__14491__i + 0]; ++G__14491__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14491__a,0);
} 
return amentum$modules$sidebar__delegate.call(this,args__13749__auto__);};
amentum$modules$sidebar.cljs$lang$maxFixedArity = 0;
amentum$modules$sidebar.cljs$lang$applyTo = (function (arglist__14492){
var args__13749__auto__ = cljs.core.seq(arglist__14492);
return amentum$modules$sidebar__delegate(args__13749__auto__);
});
amentum$modules$sidebar.cljs$core$IFn$_invoke$arity$variadic = amentum$modules$sidebar__delegate;
return amentum$modules$sidebar;
})()
;
