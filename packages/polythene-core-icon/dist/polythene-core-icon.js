!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],r):r(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,r,n,t){"use strict";function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var l={component:"pe-icon",avatar:"pe-icon--avatar",large:"pe-icon--large",medium:"pe-icon--medium",regular:"pe-icon--regular",small:"pe-icon--small"},a={size_small:t.vars.unit_icon_size_small,size_regular:t.vars.unit_icon_size,size_medium:t.vars.unit_icon_size_medium,size_large:t.vars.unit_icon_size_large,color_light:"currentcolor",color_dark:"currentcolor"},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.vars.unit_icon_size;return{width:e+"px",height:e+"px"}},s=function(e,r){return[i({},e,{display:"inline-block",verticalAlign:"middle",backgroundRepeat:"no-repeat",position:"relative",fontSize:0,lineHeight:0,".pe-icon--avatar img":{border:"none",borderRadius:"50%",width:"inherit",height:"inherit"}," img":{height:"inherit"}," .pe-svg, .pe-svg > div":{width:"inherit",height:"inherit"},".pe-icon--small":c(r.size_small),".pe-icon--regular":c(r.size_regular),".pe-icon--medium":c(r.size_medium),".pe-icon--large":c(r.size_large)})]},u=function(e,r,n,t){return[o({},e.map(function(e){return e+r}).join(","),{color:n["color_"+t]||"currentcolor"})]},p=function(e,r){return[u([".pe-dark-tone",".pe-dark-tone "],e,r,"dark"),u(["",".pe-light-tone",".pe-light-tone "],e,r,"light")]},h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},g=[s,p],d="."+l.component,m=function(e,r){return n.styler.generateStyles([e,d],h({},a,r),g)};n.styler.generateStyles([d],a,g);var v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f=m,y={small:l.small,regular:l.regular,medium:l.medium,large:l.large},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return y[e]},b=function(e,n){var t=n.keys,i=e.attrs;return v({},r.filterSupportedAttributes(i),{className:[l.component,_(i.size),i.avatar?l.avatar:null,"dark"===i.tone?"pe-dark-tone":null,"light"===i.tone?"pe-light-tone":null,i.className||i[t.class]].join(" ")},i.events?i.events:null)},z=function(e,r){var n=r.renderer,t=r.SVG,i=e.attrs;return i.content?i.content:i.svg?n(t,i.svg):i.src?n("img",{src:i.src}):i.children||e.children},j=Object.freeze({element:"div",theme:f,createProps:b,createContent:z});e.CoreIcon=j,e.classes=l,e.vars=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-icon.js.map
