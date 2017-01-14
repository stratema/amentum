// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.doc.views.elements');
goog.require('cljs.core');
goog.require('amentum.collections');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('amentum.elements');
goog.require('amentum.doc.core');
goog.require('clojure.string');
amentum.doc.views.elements.colors = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"], null);
/**
 * @param {...*} var_args
 */
amentum.doc.views.elements.button = (function() { 
var amentum$doc$views$elements$button__delegate = function (args__13753__auto__){
var vec__14882 = hoplon.core.parse_args(args__13753__auto__);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [amentum.doc.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Types",amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Button",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A standard button") : hoplon.core.p.call(null,"A standard button")),(function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (c,vec__14882){
return (function (G__14885){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__14885], null);
});})(c,vec__14882))
).call(null,c),cljs.core.cst$kw$click,((function (c,vec__14882){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.not);
});})(c,vec__14882))
,javelin.core.formula(((function (c,vec__14882){
return (function (G__14886){
if(cljs.core.truth_(G__14886)){
return "Following";
} else {
return "Follow";
}
});})(c,vec__14882))
).call(null,c)], 0));
})()], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14887 = cljs.core.cst$kw$class;
var G__14888 = "ui ignored warning message";
var G__14889 = "Although any tag can be used for a button, it will only be\n        keyboard focusable if you use a <button> tag or you add the\n        property tabindex=";
var G__14890 = (0);
var G__14891 = ". Keyboard accessible buttons will\n        preserve focus styles after click, which may be visually\n        jarring.";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14887,G__14888,G__14889,G__14890,G__14891) : hoplon.core.div.call(null,G__14887,G__14888,G__14889,G__14890,G__14891));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$type,"button","Button"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$tabindex,(0),"Focusable"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Emphasis",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to show different levels of emphasis") : hoplon.core.p.call(null,"A button can be formatted to show different levels of emphasis")),(function (){var G__14892 = cljs.core.cst$kw$class;
var G__14893 = "ui ignored info message";
var G__14894 = "Setting your brand colors to primary and secondary color\n         variables in ";
var G__14895 = (function (){var G__14897 = cljs.core.cst$kw$href;
var G__14898 = "semantic-ui.com/usage/theming.html";
var G__14899 = (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1("site-variables") : hoplon.core.code.call(null,"site-variables"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__14897,G__14898,G__14899) : hoplon.core.a.call(null,G__14897,G__14898,G__14899));
})();
var G__14896 = " will allow you to use your color theming for UI elements";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14892,G__14893,G__14894,G__14895,G__14896) : hoplon.core.div.call(null,G__14892,G__14893,G__14894,G__14895,G__14896));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"primary","Save"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Discard"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"secondary","Okay"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cancel"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Animated",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can animate to show hidden content") : hoplon.core.p.call(null,"A button can animate to show hidden content")),(function (){var G__14900 = cljs.core.cst$kw$class;
var G__14901 = "ui ignored message";
var G__14902 = "The button will be automatically sized according to the\n      visible content size. Make sure there is enough room for the\n      hidden content to show";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14900,G__14901,G__14902) : hoplon.core.div.call(null,G__14900,G__14901,G__14902));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"animated",(function (){var G__14903 = cljs.core.cst$kw$class;
var G__14904 = "visible content";
var G__14905 = "Next";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14903,G__14904,G__14905) : hoplon.core.div.call(null,G__14903,G__14904,G__14905));
})(),(function (){var G__14906 = cljs.core.cst$kw$class;
var G__14907 = "hidden content";
var G__14908 = (function (){var G__14909 = cljs.core.cst$kw$class;
var G__14910 = "right arrow icon";
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14909,G__14910) : hoplon.core.i.call(null,G__14909,G__14910));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14906,G__14907,G__14908) : hoplon.core.div.call(null,G__14906,G__14907,G__14908));
})()], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"vertical animated",cljs.core.cst$kw$tabindex,(0),(function (){var G__14911 = cljs.core.cst$kw$class;
var G__14912 = "visible content";
var G__14913 = "Shop";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14911,G__14912,G__14913) : hoplon.core.div.call(null,G__14911,G__14912,G__14913));
})(),(function (){var G__14914 = cljs.core.cst$kw$class;
var G__14915 = "hidden content";
var G__14916 = (function (){var G__14917 = cljs.core.cst$kw$class;
var G__14918 = "shop icon";
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14917,G__14918) : hoplon.core.i.call(null,G__14917,G__14918));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14914,G__14915,G__14916) : hoplon.core.div.call(null,G__14914,G__14915,G__14916));
})()], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"animated fade",cljs.core.cst$kw$tabindex,(0),(function (){var G__14919 = cljs.core.cst$kw$class;
var G__14920 = "visible content";
var G__14921 = "Sign up for a Pro account";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14919,G__14920,G__14921) : hoplon.core.div.call(null,G__14919,G__14920,G__14921));
})(),(function (){var G__14922 = cljs.core.cst$kw$class;
var G__14923 = "hidden content";
var G__14924 = "$12.99 a month";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14922,G__14923,G__14924) : hoplon.core.div.call(null,G__14922,G__14923,G__14924));
})()], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Labeled",(function (){var G__14925 = "A button can appear alongside a ";
var G__14926 = (function (){var G__14927 = cljs.core.cst$kw$href;
var G__14928 = "/elements/label";
var G__14929 = "Label";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__14927,G__14928,G__14929) : hoplon.core.a.call(null,G__14927,G__14928,G__14929));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__14925,G__14926) : hoplon.core.p.call(null,G__14925,G__14926));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","2,048"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic right pointing","2,048"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","1,048"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"icon",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["fork"], 0))], 0))], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"red",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","2,048"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic blue",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["fork"], 0)),"Fork"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic left pointing blue","1,048"], 0))], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Icon",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can have only an icon") : hoplon.core.p.call(null,"A button can have only an icon")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,"cloud"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Labeled Icon",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can use an icon as a label") : hoplon.core.p.call(null,"A button can use an icon as a label")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled icon",cljs.core.cst$kw$icon,"pause","Pause"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"right labeled icon",cljs.core.cst$kw$icon,"right arrow","Next"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Basic",cljs.core.cst$kw$class,"another spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A basic button is less pronounced") : hoplon.core.p.call(null,"A basic button is less pronounced")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic",cljs.core.cst$kw$icon,"user","Add Friend"], 0))], 0)),(function (){var c = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["primary","secondary","positive","negative"], null);
return amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (c,vec__14882){
return (function (p1__14825_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,[cljs.core.str(p1__14825_SHARP_),cljs.core.str(" basic")].join(''),clojure.string.capitalize(p1__14825_SHARP_)], 0));
});})(c,vec__14882))
,c)], 0));
})(),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14882){
return (function (p1__14826_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14826_SHARP_,cljs.core.cst$kw$class,"basic",clojure.string.capitalize(p1__14826_SHARP_)], 0));
});})(vec__14882))
,amentum.doc.views.elements.colors)], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Inverted",cljs.core.cst$kw$class,"another spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to appear on dark backgrounds") : hoplon.core.p.call(null,"A button can be formatted to appear on dark backgrounds")),amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"inverted",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14882){
return (function (p1__14827_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14827_SHARP_,cljs.core.cst$kw$class,"inverted",clojure.string.capitalize(p1__14827_SHARP_)], 0));
});})(vec__14882))
,amentum.doc.views.elements.colors)], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"inverted",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14882){
return (function (p1__14828_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14828_SHARP_,cljs.core.cst$kw$class,"inverted basic",[cljs.core.str("Basic "),cljs.core.str(clojure.string.capitalize(p1__14828_SHARP_))].join('')], 0));
});})(vec__14882))
,amentum.doc.views.elements.colors)], 0))], 0))], 0)),amentum.doc.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Groups",amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Buttons can exist together as a group") : hoplon.core.p.call(null,"Buttons can exist together as a group")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14882){
return (function (p1__14829_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.string.capitalize(p1__14829_SHARP_)], 0));
});})(vec__14882))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null))], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Icon Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Button groups can show groups of icons") : hoplon.core.p.call(null,"Button groups can show groups of icons")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14882){
return (function (p1__14830_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,[cljs.core.str("align "),cljs.core.str(p1__14830_SHARP_)].join('')], 0));
});})(vec__14882))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","center","right","justify"], null))], 0)),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14882){
return (function (p1__14831_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,[cljs.core.str("align "),cljs.core.str(p1__14831_SHARP_)].join('')], 0));
});})(vec__14882))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold","underline","text width"], null))], 0))], 0))], 0)),amentum.doc.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Content",amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Conditionals",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Button groups can contain conditionals") : hoplon.core.p.call(null,"Button groups can contain conditionals")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cancel"], 0)),(function (){var G__14930 = cljs.core.cst$kw$class;
var G__14931 = "or";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14930,G__14931) : hoplon.core.div.call(null,G__14930,G__14931));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"positive","Save"], 0))], 0))], 0))], 0)),amentum.doc.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"States",amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Active",(hoplon.core.p.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$0() : hoplon.core.p.call(null))], 0))], 0))], null);
};
var amentum$doc$views$elements$button = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14932__i = 0, G__14932__a = new Array(arguments.length -  0);
while (G__14932__i < G__14932__a.length) {G__14932__a[G__14932__i] = arguments[G__14932__i + 0]; ++G__14932__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14932__a,0);
} 
return amentum$doc$views$elements$button__delegate.call(this,args__13753__auto__);};
amentum$doc$views$elements$button.cljs$lang$maxFixedArity = 0;
amentum$doc$views$elements$button.cljs$lang$applyTo = (function (arglist__14933){
var args__13753__auto__ = cljs.core.seq(arglist__14933);
return amentum$doc$views$elements$button__delegate(args__13753__auto__);
});
amentum$doc$views$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$elements$button__delegate;
return amentum$doc$views$elements$button;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.views.elements.container = (function() { 
var amentum$doc$views$elements$container__delegate = function (args__13753__auto__){
var vec__14937 = hoplon.core.parse_args(args__13753__auto__);
return null;
};
var amentum$doc$views$elements$container = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14940__i = 0, G__14940__a = new Array(arguments.length -  0);
while (G__14940__i < G__14940__a.length) {G__14940__a[G__14940__i] = arguments[G__14940__i + 0]; ++G__14940__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14940__a,0);
} 
return amentum$doc$views$elements$container__delegate.call(this,args__13753__auto__);};
amentum$doc$views$elements$container.cljs$lang$maxFixedArity = 0;
amentum$doc$views$elements$container.cljs$lang$applyTo = (function (arglist__14941){
var args__13753__auto__ = cljs.core.seq(arglist__14941);
return amentum$doc$views$elements$container__delegate(args__13753__auto__);
});
amentum$doc$views$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$elements$container__delegate;
return amentum$doc$views$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.views.elements.icon = (function() { 
var amentum$doc$views$elements$icon__delegate = function (args__13753__auto__){
var vec__14945 = hoplon.core.parse_args(args__13753__auto__);
return null;
};
var amentum$doc$views$elements$icon = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14948__i = 0, G__14948__a = new Array(arguments.length -  0);
while (G__14948__i < G__14948__a.length) {G__14948__a[G__14948__i] = arguments[G__14948__i + 0]; ++G__14948__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14948__a,0);
} 
return amentum$doc$views$elements$icon__delegate.call(this,args__13753__auto__);};
amentum$doc$views$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$doc$views$elements$icon.cljs$lang$applyTo = (function (arglist__14949){
var args__13753__auto__ = cljs.core.seq(arglist__14949);
return amentum$doc$views$elements$icon__delegate(args__13753__auto__);
});
amentum$doc$views$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$elements$icon__delegate;
return amentum$doc$views$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.views.elements.header = (function() { 
var amentum$doc$views$elements$header__delegate = function (args__13753__auto__){
var vec__14953 = hoplon.core.parse_args(args__13753__auto__);
return null;
};
var amentum$doc$views$elements$header = function (var_args){
var args__13753__auto__ = null;
if (arguments.length > 0) {
var G__14956__i = 0, G__14956__a = new Array(arguments.length -  0);
while (G__14956__i < G__14956__a.length) {G__14956__a[G__14956__i] = arguments[G__14956__i + 0]; ++G__14956__i;}
  args__13753__auto__ = new cljs.core.IndexedSeq(G__14956__a,0);
} 
return amentum$doc$views$elements$header__delegate.call(this,args__13753__auto__);};
amentum$doc$views$elements$header.cljs$lang$maxFixedArity = 0;
amentum$doc$views$elements$header.cljs$lang$applyTo = (function (arglist__14957){
var args__13753__auto__ = cljs.core.seq(arglist__14957);
return amentum$doc$views$elements$header__delegate(args__13753__auto__);
});
amentum$doc$views$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$elements$header__delegate;
return amentum$doc$views$elements$header;
})()
;
