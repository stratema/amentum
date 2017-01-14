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
var amentum$doc$views$elements$button__delegate = function (args__13749__auto__){
var vec__14878 = hoplon.core.parse_args(args__13749__auto__);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [amentum.doc.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Types",amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Button",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A standard button") : hoplon.core.p.call(null,"A standard button")),(function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (c,vec__14878){
return (function (G__14881){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__14881], null);
});})(c,vec__14878))
).call(null,c),cljs.core.cst$kw$click,((function (c,vec__14878){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.not);
});})(c,vec__14878))
,javelin.core.formula(((function (c,vec__14878){
return (function (G__14882){
if(cljs.core.truth_(G__14882)){
return "Following";
} else {
return "Follow";
}
});})(c,vec__14878))
).call(null,c)], 0));
})()], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14883 = cljs.core.cst$kw$class;
var G__14884 = "ui ignored warning message";
var G__14885 = "Although any tag can be used for a button, it will only be\n        keyboard focusable if you use a <button> tag or you add the\n        property tabindex=";
var G__14886 = (0);
var G__14887 = ". Keyboard accessible buttons will\n        preserve focus styles after click, which may be visually\n        jarring.";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14883,G__14884,G__14885,G__14886,G__14887) : hoplon.core.div.call(null,G__14883,G__14884,G__14885,G__14886,G__14887));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$type,"button","Button"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$tabindex,(0),"Focusable"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Emphasis",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to show different levels of emphasis") : hoplon.core.p.call(null,"A button can be formatted to show different levels of emphasis")),(function (){var G__14888 = cljs.core.cst$kw$class;
var G__14889 = "ui ignored info message";
var G__14890 = "Setting your brand colors to primary and secondary color\n         variables in ";
var G__14891 = (function (){var G__14893 = cljs.core.cst$kw$href;
var G__14894 = "semantic-ui.com/usage/theming.html";
var G__14895 = (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1("site-variables") : hoplon.core.code.call(null,"site-variables"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__14893,G__14894,G__14895) : hoplon.core.a.call(null,G__14893,G__14894,G__14895));
})();
var G__14892 = " will allow you to use your color theming for UI elements";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14888,G__14889,G__14890,G__14891,G__14892) : hoplon.core.div.call(null,G__14888,G__14889,G__14890,G__14891,G__14892));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"primary","Save"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Discard"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"secondary","Okay"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cancel"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Animated",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can animate to show hidden content") : hoplon.core.p.call(null,"A button can animate to show hidden content")),(function (){var G__14896 = cljs.core.cst$kw$class;
var G__14897 = "ui ignored message";
var G__14898 = "The button will be automatically sized according to the\n      visible content size. Make sure there is enough room for the\n      hidden content to show";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14896,G__14897,G__14898) : hoplon.core.div.call(null,G__14896,G__14897,G__14898));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"animated",(function (){var G__14899 = cljs.core.cst$kw$class;
var G__14900 = "visible content";
var G__14901 = "Next";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14899,G__14900,G__14901) : hoplon.core.div.call(null,G__14899,G__14900,G__14901));
})(),(function (){var G__14902 = cljs.core.cst$kw$class;
var G__14903 = "hidden content";
var G__14904 = (function (){var G__14905 = cljs.core.cst$kw$class;
var G__14906 = "right arrow icon";
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14905,G__14906) : hoplon.core.i.call(null,G__14905,G__14906));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14902,G__14903,G__14904) : hoplon.core.div.call(null,G__14902,G__14903,G__14904));
})()], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"vertical animated",cljs.core.cst$kw$tabindex,(0),(function (){var G__14907 = cljs.core.cst$kw$class;
var G__14908 = "visible content";
var G__14909 = "Shop";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14907,G__14908,G__14909) : hoplon.core.div.call(null,G__14907,G__14908,G__14909));
})(),(function (){var G__14910 = cljs.core.cst$kw$class;
var G__14911 = "hidden content";
var G__14912 = (function (){var G__14913 = cljs.core.cst$kw$class;
var G__14914 = "shop icon";
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14913,G__14914) : hoplon.core.i.call(null,G__14913,G__14914));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14910,G__14911,G__14912) : hoplon.core.div.call(null,G__14910,G__14911,G__14912));
})()], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"animated fade",cljs.core.cst$kw$tabindex,(0),(function (){var G__14915 = cljs.core.cst$kw$class;
var G__14916 = "visible content";
var G__14917 = "Sign up for a Pro account";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14915,G__14916,G__14917) : hoplon.core.div.call(null,G__14915,G__14916,G__14917));
})(),(function (){var G__14918 = cljs.core.cst$kw$class;
var G__14919 = "hidden content";
var G__14920 = "$12.99 a month";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14918,G__14919,G__14920) : hoplon.core.div.call(null,G__14918,G__14919,G__14920));
})()], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Labeled",(function (){var G__14921 = "A button can appear alongside a ";
var G__14922 = (function (){var G__14923 = cljs.core.cst$kw$href;
var G__14924 = "/elements/label";
var G__14925 = "Label";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__14923,G__14924,G__14925) : hoplon.core.a.call(null,G__14923,G__14924,G__14925));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__14921,G__14922) : hoplon.core.p.call(null,G__14921,G__14922));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","2,048"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic right pointing","2,048"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","1,048"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"icon",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["fork"], 0))], 0))], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"red",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","2,048"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic blue",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["fork"], 0)),"Fork"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic left pointing blue","1,048"], 0))], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Icon",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can have only an icon") : hoplon.core.p.call(null,"A button can have only an icon")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,"cloud"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Labeled Icon",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can use an icon as a label") : hoplon.core.p.call(null,"A button can use an icon as a label")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled icon",cljs.core.cst$kw$icon,"pause","Pause"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"right labeled icon",cljs.core.cst$kw$icon,"right arrow","Next"], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Basic",cljs.core.cst$kw$class,"another spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A basic button is less pronounced") : hoplon.core.p.call(null,"A basic button is less pronounced")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic",cljs.core.cst$kw$icon,"user","Add Friend"], 0))], 0)),(function (){var c = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["primary","secondary","positive","negative"], null);
return amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (c,vec__14878){
return (function (p1__14821_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,[cljs.core.str(p1__14821_SHARP_),cljs.core.str(" basic")].join(''),clojure.string.capitalize(p1__14821_SHARP_)], 0));
});})(c,vec__14878))
,c)], 0));
})(),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14878){
return (function (p1__14822_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14822_SHARP_,cljs.core.cst$kw$class,"basic",clojure.string.capitalize(p1__14822_SHARP_)], 0));
});})(vec__14878))
,amentum.doc.views.elements.colors)], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Inverted",cljs.core.cst$kw$class,"another spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to appear on dark backgrounds") : hoplon.core.p.call(null,"A button can be formatted to appear on dark backgrounds")),amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"inverted",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14878){
return (function (p1__14823_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14823_SHARP_,cljs.core.cst$kw$class,"inverted",clojure.string.capitalize(p1__14823_SHARP_)], 0));
});})(vec__14878))
,amentum.doc.views.elements.colors)], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"inverted",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14878){
return (function (p1__14824_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14824_SHARP_,cljs.core.cst$kw$class,"inverted basic",[cljs.core.str("Basic "),cljs.core.str(clojure.string.capitalize(p1__14824_SHARP_))].join('')], 0));
});})(vec__14878))
,amentum.doc.views.elements.colors)], 0))], 0))], 0)),amentum.doc.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Groups",amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Buttons can exist together as a group") : hoplon.core.p.call(null,"Buttons can exist together as a group")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14878){
return (function (p1__14825_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.string.capitalize(p1__14825_SHARP_)], 0));
});})(vec__14878))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null))], 0))], 0)),amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Icon Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Button groups can show groups of icons") : hoplon.core.p.call(null,"Button groups can show groups of icons")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14878){
return (function (p1__14826_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,[cljs.core.str("align "),cljs.core.str(p1__14826_SHARP_)].join('')], 0));
});})(vec__14878))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","center","right","justify"], null))], 0)),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14878){
return (function (p1__14827_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,[cljs.core.str("align "),cljs.core.str(p1__14827_SHARP_)].join('')], 0));
});})(vec__14878))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold","underline","text width"], null))], 0))], 0))], 0)),amentum.doc.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Content",amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Conditionals",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Button groups can contain conditionals") : hoplon.core.p.call(null,"Button groups can contain conditionals")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cancel"], 0)),(function (){var G__14926 = cljs.core.cst$kw$class;
var G__14927 = "or";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14926,G__14927) : hoplon.core.div.call(null,G__14926,G__14927));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"positive","Save"], 0))], 0))], 0))], 0)),amentum.doc.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"States",amentum.doc.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Active",(hoplon.core.p.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$0() : hoplon.core.p.call(null))], 0))], 0))], null);
};
var amentum$doc$views$elements$button = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14928__i = 0, G__14928__a = new Array(arguments.length -  0);
while (G__14928__i < G__14928__a.length) {G__14928__a[G__14928__i] = arguments[G__14928__i + 0]; ++G__14928__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14928__a,0);
} 
return amentum$doc$views$elements$button__delegate.call(this,args__13749__auto__);};
amentum$doc$views$elements$button.cljs$lang$maxFixedArity = 0;
amentum$doc$views$elements$button.cljs$lang$applyTo = (function (arglist__14929){
var args__13749__auto__ = cljs.core.seq(arglist__14929);
return amentum$doc$views$elements$button__delegate(args__13749__auto__);
});
amentum$doc$views$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$elements$button__delegate;
return amentum$doc$views$elements$button;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.views.elements.container = (function() { 
var amentum$doc$views$elements$container__delegate = function (args__13749__auto__){
var vec__14933 = hoplon.core.parse_args(args__13749__auto__);
return null;
};
var amentum$doc$views$elements$container = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14936__i = 0, G__14936__a = new Array(arguments.length -  0);
while (G__14936__i < G__14936__a.length) {G__14936__a[G__14936__i] = arguments[G__14936__i + 0]; ++G__14936__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14936__a,0);
} 
return amentum$doc$views$elements$container__delegate.call(this,args__13749__auto__);};
amentum$doc$views$elements$container.cljs$lang$maxFixedArity = 0;
amentum$doc$views$elements$container.cljs$lang$applyTo = (function (arglist__14937){
var args__13749__auto__ = cljs.core.seq(arglist__14937);
return amentum$doc$views$elements$container__delegate(args__13749__auto__);
});
amentum$doc$views$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$elements$container__delegate;
return amentum$doc$views$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.views.elements.icon = (function() { 
var amentum$doc$views$elements$icon__delegate = function (args__13749__auto__){
var vec__14941 = hoplon.core.parse_args(args__13749__auto__);
return null;
};
var amentum$doc$views$elements$icon = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14944__i = 0, G__14944__a = new Array(arguments.length -  0);
while (G__14944__i < G__14944__a.length) {G__14944__a[G__14944__i] = arguments[G__14944__i + 0]; ++G__14944__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14944__a,0);
} 
return amentum$doc$views$elements$icon__delegate.call(this,args__13749__auto__);};
amentum$doc$views$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$doc$views$elements$icon.cljs$lang$applyTo = (function (arglist__14945){
var args__13749__auto__ = cljs.core.seq(arglist__14945);
return amentum$doc$views$elements$icon__delegate(args__13749__auto__);
});
amentum$doc$views$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$elements$icon__delegate;
return amentum$doc$views$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.doc.views.elements.header = (function() { 
var amentum$doc$views$elements$header__delegate = function (args__13749__auto__){
var vec__14949 = hoplon.core.parse_args(args__13749__auto__);
return null;
};
var amentum$doc$views$elements$header = function (var_args){
var args__13749__auto__ = null;
if (arguments.length > 0) {
var G__14952__i = 0, G__14952__a = new Array(arguments.length -  0);
while (G__14952__i < G__14952__a.length) {G__14952__a[G__14952__i] = arguments[G__14952__i + 0]; ++G__14952__i;}
  args__13749__auto__ = new cljs.core.IndexedSeq(G__14952__a,0);
} 
return amentum$doc$views$elements$header__delegate.call(this,args__13749__auto__);};
amentum$doc$views$elements$header.cljs$lang$maxFixedArity = 0;
amentum$doc$views$elements$header.cljs$lang$applyTo = (function (arglist__14953){
var args__13749__auto__ = cljs.core.seq(arglist__14953);
return amentum$doc$views$elements$header__delegate(args__13749__auto__);
});
amentum$doc$views$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$doc$views$elements$header__delegate;
return amentum$doc$views$elements$header;
})()
;
