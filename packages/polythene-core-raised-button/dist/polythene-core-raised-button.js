!function(o,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],r):r(o.polythene=o.polythene||{},o["polythene-core"],o["polythene-core-css"],o["polythene-theme"])}(this,function(o,r,e,t){"use strict";function n(o,r,e){return r in o?Object.defineProperty(o,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[r]=e,o}var a={component:"pe-button pe-text-button pe-raised-button"},c=t.vars.rgba,l={color_light_background:"#e0e0e0",color_light_text:c(t.vars.color_light_foreground,t.vars.blend_light_text_primary),color_light_hover_background:"transparent",color_light_focus_background:c(t.vars.color_light_foreground,t.vars.blend_light_background_hover),color_light_active_background:c(t.vars.color_light_foreground,t.vars.blend_light_background_hover),color_light_disabled_background:c(t.vars.color_light_foreground,t.vars.blend_light_background_disabled),color_light_disabled_text:c(t.vars.color_light_foreground,t.vars.blend_light_text_disabled),color_dark_background:c(t.vars.color_primary),color_dark_text:c(t.vars.color_dark_foreground,t.vars.blend_dark_text_primary),color_dark_hover_background:t.vars.color_primary_active,color_dark_focus_background:t.vars.color_primary_active,color_dark_active_background:t.vars.color_primary_dark,color_dark_disabled_background:c(t.vars.color_dark_foreground,t.vars.blend_dark_background_disabled),color_dark_disabled_text:c(t.vars.color_dark_foreground,t.vars.blend_dark_text_disabled)},d=function(o,r,e,t){var a=e["color_"+t+"_border"]||"transparent",c=e["color_"+t+"_active_border"]||a,l=e["color_"+t+"_disabled_border"]||a;return[n({},o.map(function(o){return o+r}).join(","),{"&, &:link, &:visited":{color:e["color_"+t+"_text"]}," .pe-button__content":{backgroundColor:e["color_"+t+"_background"],borderColor:a},".pe-button--disabled":{color:e["color_"+t+"_disabled_text"]," .pe-button__content":{backgroundColor:e["color_"+t+"_disabled_background"],borderColor:l}},".pe-button--selected":{" .pe-button__content":{backgroundColor:e["color_"+t+"_active_background"],borderColor:c}," .pe-button__focus":{opacity:1,backgroundColor:e["color_"+t+"_focus_background"]}},".pe-button--focus":{" .pe-button__focus":{opacity:1,backgroundColor:e["color_"+t+"_focus_background"]}}})]},_=function(o,r,e,t){var a=e["color_"+t+"_border"],c=e["color_"+t+"_border"]||a;return[n({},o.map(function(o){return o+r+":hover"}).join(","),{":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash":{backgroundColor:e["color_"+t+"_hover_background"],borderColor:c}})]},i=function(o,r){return[d([".pe-dark-tone",".pe-dark-tone "],o,r,"dark"),d(["",".pe-light-tone",".pe-light-tone "],o,r,"light"),_(["html.pe-no-touch .pe-dark-tone "],o,r,"dark"),_(["html.pe-no-touch ","html.pe-no-touch .pe-light-tone "],o,r,"light")]},u=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}return o},s=[i],b="."+a.component.replace(/ /g,"."),p=function(o,r){return e.styler.generateStyles([o,b],u({},l,r),s)};e.styler.generateStyles([b],l,s);var h=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}return o},g=p,v=function(o){var r=void 0!==o.z?o.z:1;return{zBase:r,z:r,tapEventsInited:!1}},f=void 0,k=function(){},m=[];r.subscribe(r.touchEndEvent,function(){return k()});var y=function(o,r){var e=r.state.zBase,t=r.attrs.increase||1,n=r.state.z;"down"===o&&e<5?n=Math.min(e+t,5):"up"===o&&(n=Math.max(n-t,e)),n!==r.state.z&&r.updateState("z",n)},x=function(o,e){"down"===o&&m.push(h({},e)),e.attrs.animateOnTap!==!1&&!r.isTouch&&y(o,e)},C=function(o){f=function(){return x("down",o)},k=function(){m.map(function(o){return x("up",o)}),m=[]},o.dom.addEventListener(r.touchStartEvent,f)},j=function(o){return o.dom.removeEventListener(r.touchStartEvent,f)},z=function(o,r){var e=r.renderer,t=r.Shadow,n=o.attrs,c=o.state,l=n.children||o.children||[];return h({},{parentClassName:[n.parentClassName||a.component].join(" "),animateOnTap:!1,shadowComponent:e(t,{z:c.z,animated:!0}),children:l},n)},E=function(){return null},O=function(o){!o.dom||o.attrs.disabled||o.state.inactive||o.state.tapEventsInited||(C(o),o.state.tapEventsInited=!0)},w=function(o){o.state.tapEventsInited&&j(o)},S={getInitialState:v,createProps:z,createContent:E,onMount:O,onUnmount:w,theme:g,classes:a,vars:l};o.raisedButton=S,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-raised-button.js.map
