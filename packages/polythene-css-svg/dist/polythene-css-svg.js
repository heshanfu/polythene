!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-svg")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-svg"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-svg"])}(this,function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(e){return[n({},e,{lineHeight:1," svg":{width:"inherit",height:"inherit"}})]},l=function(e,t,r,n){return[o({},e.map(function(e){return e+t}).join(","),{color:"inherit"," svg":{color:"inherit"," path, rect, circle, polygon":{"&:not([fill=none])":{fill:r["color_"+n]||"currentcolor"}}}})]},c=function(e,t){return[l([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),l(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=[i,c],a="."+r.classes.component,f=function(e,n){return t.styler.generateStyles([e,a],s({},r.vars,n),u)},p=function(e,n){return e?t.styler.createStyleSheets([e,a],s({},r.vars,n),u):t.styler.createStyleSheets([a],r.vars,u)};t.styler.generateStyles([a],r.vars,u),e.addStyle=f,e.getStyle=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-svg.js.map
