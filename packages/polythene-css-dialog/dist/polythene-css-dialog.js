!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-dialog"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-dialog","polythene-theme"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-dialog"],e["polythene-theme"])}(this,function(e,t,r,o){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(e,r){return[n({},e,[t.flex.layoutCenterCenter,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:o.vars.z_dialog,height:"100%",padding:r.padding+"px 40px",".pe-dialog--full-screen":{padding:0}," .pe-dialog__content":{position:"relative",borderRadius:r.border_radius+"px"}}])]},a=function(e,t,r,o){return[l({},e.map(function(e){return e+t}).join(","),{" .pe-dialog__content":{backgroundColor:r["color_"+o+"_background"],color:r["color_"+o+"_text"]},"&.pe-dialog--backdrop":{backgroundColor:r["color_"+o+"_backdrop_background"]}})]},c=function(e,t){return[a([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),a(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=[i,c],d="."+r.classes.component,s=function(e,o){return t.styler.generateStyles([e,d],p({},r.vars,o),u)},f=function(e,o){return e?t.styler.createStyleSheets([e,d],p({},r.vars,o),u):t.styler.createStyleSheets([d],r.vars,u)};t.styler.generateStyles([d],r.vars,u),e.addStyle=s,e.getStyle=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-dialog.js.map
