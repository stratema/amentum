// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.nav');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('secretary.core');
(goog.history.Html5History.prototype["getUrl_"] = (function (token){
var this$ = this;
if(cljs.core.truth_(this$.useFragment_)){
return [cljs.core.str("#"),cljs.core.str(token)].join('');
} else {
return [cljs.core.str(this$.pathPrefix_),cljs.core.str(token)].join('');
}
}));
if(typeof amentum.nav.history !== 'undefined'){
} else {
amentum.nav.history = (cljs.core.truth_(goog.history.Html5History.isSupported())?(function (){var G__15387 = (new goog.history.Html5History());
G__15387.setUseFragment(false);

G__15387.setPathPrefix("");

return G__15387;
})():(new goog.History()));
}
/**
 * Expand the uri into the component parts and return as a map
 */
amentum.nav.parse_uri = (function amentum$nav$parse_uri(uri){
var u = goog.Uri.parse(uri);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,u.getScheme(),cljs.core.cst$kw$domain,u.getDomain(),cljs.core.cst$kw$port,u.getPort(),cljs.core.cst$kw$path,u.getPath(),cljs.core.cst$kw$query,u.getQuery(),cljs.core.cst$kw$fragment,u.getFragment()], null);
});
/**
 * Return the path, query and fragment from an expanded uri
 */
amentum.nav.pqf = (function amentum$nav$pqf(u){
return [cljs.core.str(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(u)),cljs.core.str((function (){var temp__4657__auto__ = cljs.core.not_empty(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(u));
if(cljs.core.truth_(temp__4657__auto__)){
var q = temp__4657__auto__;
return [cljs.core.str("?"),cljs.core.str(q)].join('');
} else {
return null;
}
})()),cljs.core.str((function (){var temp__4657__auto__ = cljs.core.not_empty(cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(u));
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return [cljs.core.str("#"),cljs.core.str(f)].join('');
} else {
return null;
}
})())].join('');
});
amentum.nav.push = (function amentum$nav$push(var_args){
var args15388 = [];
var len__7950__auto___15391 = arguments.length;
var i__7951__auto___15392 = (0);
while(true){
if((i__7951__auto___15392 < len__7950__auto___15391)){
args15388.push((arguments[i__7951__auto___15392]));

var G__15393 = (i__7951__auto___15392 + (1));
i__7951__auto___15392 = G__15393;
continue;
} else {
}
break;
}

var G__15390 = args15388.length;
switch (G__15390) {
case 1:
return amentum.nav.push.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return amentum.nav.push.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15388.length)].join('')));

}
});

amentum.nav.push.cljs$core$IFn$_invoke$arity$1 = (function (path){
return amentum.nav.push.cljs$core$IFn$_invoke$arity$2(path,null);
});

amentum.nav.push.cljs$core$IFn$_invoke$arity$2 = (function (path,title){
return amentum.nav.history.setToken(path,title);
});

amentum.nav.push.cljs$lang$maxFixedArity = 2;

amentum.nav.on_document_click = (function amentum$nav$on_document_click(e){
var tag_name = e.target.tagName;
var parent = e.target.parentElement;
var target = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"A"))?e.target:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"I"))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent.tagName,"A"))?parent:false):false
));
if(cljs.core.truth_(target)){
var href = target.href;
var title = target.title;
var map__15397 = amentum.nav.parse_uri(href);
var map__15397__$1 = ((((!((map__15397 == null)))?((((map__15397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15397):map__15397);
var u = map__15397__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15397__$1,cljs.core.cst$kw$path);
var fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15397__$1,cljs.core.cst$kw$fragment);
var route = secretary.core.locate_route(path);
if(cljs.core.truth_(route)){
amentum.nav.push.cljs$core$IFn$_invoke$arity$2(amentum.nav.pqf(u),title);

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});
amentum.nav.on_history_navigate = (function amentum$nav$on_history_navigate(e){
return secretary.core.dispatch_BANG_(e.token);
});
amentum.nav.setup_navigation = (function amentum$nav$setup_navigation(){
amentum.nav.history.setEnabled(true);

goog.events.listen(document,"click",amentum.nav.on_document_click);

goog.events.listen(amentum.nav.history,goog.history.EventType.NAVIGATE,amentum.nav.on_history_navigate);

return amentum.nav.push.cljs$core$IFn$_invoke$arity$2(goog.Uri.parse(window.location).getPath(),null);
});
amentum.nav.dispatch_path_BANG_ = (function amentum$nav$dispatch_path_BANG_(){
var map__15401 = amentum.nav.parse_uri(window.location);
var map__15401__$1 = ((((!((map__15401 == null)))?((((map__15401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15401):map__15401);
var uri = map__15401__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15401__$1,cljs.core.cst$kw$path);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15401__$1,cljs.core.cst$kw$query);
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,"/")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,"/home"))){
return secretary.core.dispatch_BANG_(amentum.nav.pqf(uri));
} else {
return null;
}
});
