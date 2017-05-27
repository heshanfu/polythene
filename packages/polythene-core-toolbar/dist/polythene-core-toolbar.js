!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,n,r){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={component:"pe-toolbar",title:"pe-toolbar__title",compact:"pe-toolbar--compact",indentedTitle:"pe-toolbar__title--indent"},l=r.vars.rgba,c=2*r.vars.grid_unit_component-12,p=9*r.vars.grid_unit_component-6*r.vars.grid_unit_component-c,s=7*r.vars.grid_unit_component,d=8*r.vars.grid_unit_component,u={padding_side:c,title_padding:p,indent:r.vars.unit_indent,transition_duration:r.vars.animation_duration,font_size:18,line_height:r.vars.line_height,height:d,height_compact:s,color_light_text:l(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_dark_text:l(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_light_background:"#CFD8DC",color_dark_background:"#37474F"},_=function(e,t){return[o({},e,[n.flex.layout,n.flex.layoutHorizontal,n.flex.layoutCenter,{height:t.height+"px",fontSize:t.font_size+"px",lineHeight:t.line_height+"em",padding:"0 "+t.padding_side+"px",".pe-toolbar--compact":{height:t.height_compact+"px"},"> *:not(.disabled)":{pointerEvents:"auto"}," > span, .pe-toolbar__title, .pe-toolbar__title--indent":[n.flex.layout,n.flex.flex(1),n.mixin.ellipsis(1,r.vars.line_height,"em"),{transformOrigin:"left 50%",lineHeight:r.vars.line_height+"em",wordBreak:"break-all"}]," > span, .pe-toolbar__title":{marginLeft:t.title_padding+"px"}," .pe-toolbar__title--indent":{marginLeft:t.indent-t.padding_side+"px"}," .pe-fit":[n.mixin.fit(),{margin:0}]}])]},h=function(e,t,n,r){return[i({},e.map(function(e){return e+t}).join(","),{color:n["color_"+r+"_text"],backgroundColor:n["color_"+r+"_background"]})]},g=function(e,t){return[h([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),h(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=[_,g],b="."+a.component,v=function(e,t){return n.styler.generateStyles([e,b],f({},u,t),m)};n.styler.generateStyles([b],u,m);var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x=v,k=function(e,n){var r=n.keys,o=e.attrs;return y({},t.filterSupportedAttributes(o),{className:[a.component,o.compact?a.compact:null,"dark"===o.tone?"pe-dark-tone":null,"light"===o.tone?"pe-light-tone":null,o.className||o[r.class]].join(" ")},o.events)},j=function(e){var t=e.attrs;return t.content?t.content:t.children||e.children||t},O=Object.freeze({element:"div",theme:x,createProps:k,createContent:j});e.CoreToolbar=O,e.classes=a,e.vars=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-toolbar.js.map
