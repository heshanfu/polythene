!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-css"),require("polythene-core-material-design-spinner")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-material-design-spinner"],r):r(e.polythene={},e["polythene-core-css"],e["polythene-core-material-design-spinner"])}(this,function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var o="cubic-bezier(0.4, 0.0, 0.2, 1) infinite both",a=function(){return c(1)},p=function(){return c(-1)},c=function(e){return{" from":{transform:"rotate("+130*e+"deg)"}," 50%":{transform:"rotate("+-5*e+"deg)"}," to":{transform:"rotate("+130*e+"deg)"}}},l=function(e){return{" 12.5%":{transform:"rotate("+.5*e.arc_size+"deg)"}," 25%":{transform:"rotate("+1*e.arc_size+"deg)"}," 37.5%":{transform:"rotate("+1.5*e.arc_size+"deg)"}," 50%":{transform:"rotate("+2*e.arc_size+"deg)"}," 62.5%":{transform:"rotate("+2.5*e.arc_size+"deg)"}," 75%":{transform:"rotate("+3*e.arc_size+"deg)"}," 87.5%":{transform:"rotate("+3.5*e.arc_size+"deg)"}," to":{transform:"rotate("+4*e.arc_size+"deg)"}}},s=function(e,r){return n({},"&.pe-md-spinner__layer-"+r,{animation:"mdSpinnerFillUnfillRotate "+4*e.arc_time+"s "+o+",  mdSpinnerLayer"+r+"FadeInOut "+4*e.arc_time+"s "+o})},d=function(e,t){return[n({},e,{" .pe-md-spinner__animation":{animation:"mdSpinnerRotate "+t.rotation_duration+"s linear infinite",position:"relative",width:"100%",height:"100%",direction:"ltr"}," .pe-md-spinner__gap-patch":{position:"absolute",boxSizing:"border-box",top:0,left:"45%",width:"10%",height:"100%",overflow:"hidden",borderColor:"inherit"}," .pe-md-spinner__gap-patch .pe-md-spinner__circle":{width:"1000%",left:"-450%"}," .pe-md-spinner__circle-clipper":{display:"inline-block",fontSize:0,lineHeight:0,position:"relative",width:"50%",height:"100%",overflow:"hidden",borderColor:"inherit"}," .pe-md-spinner__circle-clipper .pe-md-spinner__circle":{width:"200%"}," .pe-md-spinner__circle":[r.mixin.fit(),{animation:"none",boxSizing:"border-box",height:"100%",borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",borderBottomColor:"transparent !important"}],"&":["small","regular","medium","large","fab"].map(function(e){return n({},"&.pe-spinner--"+e,{" .pe-md-spinner__circle":{borderWidth:t["border_width_"+e]+"px"}})})," .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle":{transform:"rotate(129deg)",animation:"mdSpinnerLeftSpin "+t.arc_time+"s "+o,borderRightColor:"transparent !important"}," .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle":{transform:"rotate(-129deg)",animation:"mdSpinnerRightSpin "+t.arc_time+"s "+o,left:"-100%",borderLeftColor:"transparent !important"}," .pe-md-spinner__layer":[[1,2,3,4].map(function(e){return s(t,e)}),{animation:"mdSpinnerFillUnfillRotate "+4*t.arc_time+"s "+o,position:"absolute",width:"100%",height:"100%",whiteSpace:"nowrap"}],"@keyframes mdSpinnerRotate":{" to":{transform:"rotate(360deg)"}},"@keyframes mdSpinnerRightSpin":p(),"@keyframes mdSpinnerLeftSpin":a(),"@keyframes mdSpinnerFadeOut":{" from":{opacity:.99}," to":{opacity:0}},"@keyframes mdSpinnerFillUnfillRotate":l(t),"@keyframes mdSpinnerLayer1FadeInOut":{" from":{opacity:.99}," 25%":{opacity:.99}," 26%":{opacity:0}," 89%":{opacity:0}," 90%":{opacity:.99}," 100%":{opacity:.99}},"@keyframes mdSpinnerLayer2FadeInOut":{" from":{opacity:0}," 15%":{opacity:0}," 25%":{opacity:.99}," 50%":{opacity:.99}," 51%":{opacity:0}},"@keyframes mdSpinnerLayer3FadeInOut":{" from":{opacity:0}," 40%":{opacity:0}," 50%":{opacity:.99}," 75%":{opacity:.99}," 76%":{opacity:0}},"@keyframes mdSpinnerLayer4FadeInOut":{" from":{opacity:0}," 65%":{opacity:0}," 75%":{opacity:.99}," 90%":{opacity:.99}," 100%":{opacity:0}}})]},m=function(e,r,t,n){return[i({},e.map(function(e){return e+r}).join(","),{color:t["color_"+n+"_single"]," .pe-md-spinner__layer":{borderColor:"currentcolor"},":not(.pe-spinner--single-color)":{" .pe-md-spinner__layer-1":{borderColor:t["color_"+n+"_1"]}," .pe-md-spinner__layer-2":{borderColor:t["color_"+n+"_2"]}," .pe-md-spinner__layer-3":{borderColor:t["color_"+n+"_3"]}," .pe-md-spinner__layer-4":{borderColor:t["color_"+n+"_4"]}}})]},f=function(e,r){return[m([".pe-dark-tone",".pe-dark-tone "],e,r,"dark"),m(["",".pe-light-tone",".pe-light-tone "],e,r,"light")]},y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_=[d,f],u="."+t.classes.component,h=function(e,n){return r.styler.generateStyles([e,u],y({},t.vars,n),_)},g=function(e,n){return e?r.styler.createStyleSheets([e,u],y({},t.vars,n),_):r.styler.createStyleSheets([u],t.vars,_)};r.styler.generateStyles([u],t.vars,_),e.addStyle=h,e.getStyle=g,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-material-design-spinner.js.map
