!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-menu"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-menu","polythene-theme"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-menu"],e["polythene-theme"])}(this,function(e,t,n,r){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){return t<e.min_size?e.min_size:t},a=function(e){return"pe-menu--width-"+e.toString().replace(".","-")},s=function(e,t){var n=u(e,t);return i({},"&."+a(n),{width:e.size_factor*n+"px","max-width":"100%"})},c=function(e,n){var o;return[(o={},i(o,e,[n.sizes.map(function(e){return s(n,e)}),i({transitionTimingFunction:"ease-out",transitionProperty:"all",zIndex:r.vars.z_menu,opacity:0,position:"absolute",width:"100%",minWidth:r.vars.grid_unit_menu*n.min_size+"px","&.pe-menu--width-auto":{width:"auto"},"&.pe-menu--visible":{opacity:1},"&.pe-menu--permanent":{position:"relative",opacity:1,zIndex:0}," .pe-menu__content":{width:"100%",borderRadius:n.border_radius+"px"}},"@media (max-width: "+r.vars.unit_screen_size_large+"px)",{"max-width":n.max_size_small_screen*r.vars.grid_unit_menu+"px"})]),i(o," .pe-menu__content",{" .pe-list-tile__title":[t.mixin.ellipsis("none")]}),o)]},l=function(e,t,n,r){return[o({},e.map(function(e){return e+t}).join(","),{" .pe-menu__content":{"background-color":n["color_"+r+"_background"]}})]},p=function(e,t){return[l([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),l(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=[c,p],y="."+n.classes.component,f=function(e,r){return t.styler.generateStyles([e,y],d({},n.vars,r),m)},h=function(e,r){return e?t.styler.createStyleSheets([e,y],d({},n.vars,r),m):t.styler.createStyleSheets([y],n.vars,m)};t.styler.generateStyles([y],n.vars,m),e.addStyle=f,e.getStyle=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-menu.js.map
