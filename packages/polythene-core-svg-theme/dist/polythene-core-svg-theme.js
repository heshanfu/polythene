!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-theme"),require("polythene-core-css"),require("polythene-core-svg")):"function"==typeof define&&define.amd?define(["exports","polythene-theme","polythene-core-css","polythene-core-svg"],t):t(e.polythene={},e["polythene-theme"],e["polythene-core-css"],e["polythene-core-svg"])}(this,function(e,t,r,n){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={color_light:"currentcolor",color_dark:"currentcolor"},c=function(e){return[o({},e,{lineHeight:1," svg":{width:"inherit",height:"inherit"}})]},u=function(e,t,r,n){return[i({},e.map(function(e){return e+t}).join(","),{color:"inherit",border:"2px solid red"," svg":{color:"inherit"," path, rect, circle, polygon":{"&:not([fill=none])":{fill:r["color_"+n]||"currentcolor"}}}})]},s=function(e,t){return[u([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),u(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=[c,s],a="."+n.classes.component,f=function(e,t){return r.styler.generateStyles([e,a],h({},l,t),p)};"js"===t.vars.css&&r.styler.generateStyles([a],l,p);var y=function(){return r.styler.createStyleSheets([a],l,p)};e.theme=f,e.styles=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-svg-theme.js.map
