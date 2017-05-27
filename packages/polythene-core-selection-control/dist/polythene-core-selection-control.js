!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core"),require("polythene-theme"),require("polythene-core-css")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme","polythene-core-css"],e):e(o.polythene=o.polythene||{},o["polythene-core"],o["polythene-theme"],o["polythene-core-css"])}(this,function(o,e,t,n){"use strict";function r(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function l(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function c(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}var i={component:"pe-control",formLabel:"pe-control__form-label",input:"pe-control__input",label:"pe-control__label",disabled:"pe-control--disabled",inactive:"pe-control--inactive",large:"pe-control--large",medium:"pe-control--medium",off:"pe-control--off",on:"pe-control--on",regular:"pe-control--regular",small:"pe-control--small",box:"pe-control__box",button:"pe-control__button",buttonOff:"pe-control__button--off",buttonOn:"pe-control__button--on"},a=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},_=function(o,e){var t=o.attrs,n=t.value||"1",r=void 0,l=e(),c=function(o){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r&&(r.checked=o,!e&&l(o))},i=function(){if("function"==typeof t.checked){var o=t.checked();return void 0!==o&&o}return void 0!==t.checked&&t.checked},a=function(o,e){c(o,e),t.getState&&t.getState({checked:r?r.checked:i(),value:n,el:r})};return{setInputEl:function(o){r=o,c(i())},setChecked:a,checked:function(){return r?r.checked:i()},toggle:function(){return a(!r.checked)},value:function(){return n},redrawOnUpdate:e.merge([l])}},u={small:i.small,regular:i.regular,medium:i.medium,large:i.large},s=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return u[o]},p=function(o,t){var n=t.keys,r=o.attrs,l=o.state;"function"==typeof r.checked&&l.setChecked(r.checked(),!0);var c=l.checked(),_=void 0!==r.selectable&&r.selectable(c),u=r.disabled||!_;return a({},e.filterSupportedAttributes(r),{className:[i.component,r.instanceClass,c?i.on:i.off,r.disabled?i.disabled:null,u?i.inactive:null,s(r.size),"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.className||r[n.class]].join(" ")},r.events?r.events:null)},d=function(o,e){var t,n=e.renderer,l=e.keys,c=e.Icon,a=e.IconButton,_=o.state,u=o.attrs,s=_.checked(),p=void 0!==u.selectable&&u.selectable(s),d=u.disabled||!p,f=u.name||"",b=u.createControl?u.createControl({h:n,k:l,checked:s,toggle:_.toggle,attrs:u,Icon:c,IconButton:a}):null;return[n("input",(t={className:i.input,name:f,value:_.value(),type:u.type},r(t,l.tabindex,-1),r(t,"checked",s),r(t,"onChange",function(){}),r(t,"key","input"),t)),n("label",{className:i.formLabel,key:"label"},[b,u.label?n("."+i.label,d?null:r({},l.onclick,_.toggle),u.label):null])]},f=function(o){return o.state.setInputEl(o.dom.querySelector("input"))},b=function(o,e,t,n){return a({},t[e]?t[e]:{svg:o.trust(t.icons[e])},{className:n},t.icon,t.size?{size:t.size}:null)},g=function(o){var e=o.h,t=o.k,n=o.attrs,l=o.checked,c=o.toggle,_=o.Icon,u=o.IconButton;return e("div",{className:i.box},e(u,a({},{element:"div",className:i.button,content:[{iconType:"iconOn",className:i.buttonOn},{iconType:"iconOff",className:i.buttonOff}].map(function(o){return e(_,b(e,o.iconType,n,o.className))}),ripple:{center:!0},disabled:n.disabled,events:r({},t.onclick,c)},void 0!==n.selectable?{inactive:!n.selectable(l)}:null,n.iconButton)))},h=Object.freeze({element:"div",getInitialState:_,createProps:p,createContent:d,onMount:f,createControl:g}),v=t.vars.rgba,m={label_font_size:2*t.vars.grid_unit_component,label_height:3*t.vars.grid_unit_component,label_padding_before:4*t.vars.grid_unit,label_padding_after:0,button_size:6*t.vars.grid_unit_component,icon_size:3*t.vars.grid_unit_component,animation_duration:t.vars.animation_duration,color_light_on:t.vars.rgba(t.vars.color_primary),color_light_off:v(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_label:v(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_disabled:v(t.vars.color_light_foreground,t.vars.blend_light_text_disabled),color_light_thumb_off_focus_opacity:.08,color_light_thumb_on_focus_opacity:.11,color_light_focus_on:v(t.vars.color_primary),color_light_focus_on_opacity:.11,color_light_focus_off:v(t.vars.color_light_foreground),color_light_focus_off_opacity:.07,color_dark_on:t.vars.rgba(t.vars.color_primary),color_dark_off:v(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_label:v(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_disabled:v(t.vars.color_dark_foreground,t.vars.blend_dark_text_disabled),color_dark_thumb_off_focus_opacity:.08,color_dark_thumb_on_focus_opacity:.11,color_dark_focus_on:v(t.vars.color_primary),color_dark_focus_on_opacity:.14,color_dark_focus_off:v(t.vars.color_dark_foreground),color_dark_focus_off_opacity:.09},y=function(o,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.vars.unit_icon_size,l=r+o.label_height,c=(l-r)/2;return{" .pe-control__form-label":{height:e+"px"}," .pe-control__box":{width:r+"px",height:r+"px"}," .pe-button__content":{width:l+"px",height:l+"px"," .pe-icon":[n.mixin.fit(c)]}}},k=function(o,e,r){var c;return[l({},o,(c={display:"inline-block",boxSizing:"border-box",margin:0,padding:0},l(c," input[type="+r+"].pe-control__input",{appearance:"none",lineHeight:e.label_height+"px",position:"absolute",zIndex:"-1",width:0,height:0,margin:0,padding:0,opacity:0,border:"none",pointerEvents:"none"}),l(c," .pe-control__form-label",[n.flex.layoutHorizontal,n.flex.layoutCenter,{position:"relative",cursor:"pointer",fontSize:e.label_font_size+"px",lineHeight:e.label_height+"px",margin:0,color:"inherit",":focus":{outline:0}}]),l(c,".pe-control--inactive",{" .pe-control__form-label":{cursor:"default"}}),l(c," .pe-control__box",{position:"relative",display:"inline-block",boxSizing:"border-box",width:e.label_height+"px",height:e.label_height+"px",color:"inherit",":focus":{outline:0}}),l(c," .pe-button.pe-control__button",[n.mixin.defaultTransition("opacity",e.animation_duration),{position:"absolute",left:-(e.button_size-e.icon_size)/2+"px",top:-(e.button_size-e.icon_size)/2+"px",zIndex:1}]),l(c,".pe-control--off",{" .pe-control__button--on":{opacity:0,zIndex:0}," .pe-control__button--off":{opacity:1,zIndex:1}}),l(c,".pe-control--on",{" .pe-control__button--on":{opacity:1,zIndex:1}," .pe-control__button--off":{opacity:0,zIndex:0}}),l(c," .pe-control__label",{paddingLeft:e.label_padding_before+"px",paddingRight:e.label_padding_after+"px"}),l(c,".pe-control--disabled",{" .pe-control__form-label":{cursor:"auto"}," .pe-control__button":{pointerEvents:"none"}}),l(c," .pe-button__content",{" .pe-icon":{position:"absolute"}}),l(c,".pe-control--small",y(e,t.vars.unit_icon_size_small,t.vars.unit_icon_size_small)),l(c,".pe-control--regular",y(e,e.label_height,t.vars.unit_icon_size)),l(c,".pe-control--medium",y(e,t.vars.unit_icon_size_medium,t.vars.unit_icon_size_medium)),l(c,".pe-control--large",y(e,t.vars.unit_icon_size_large,t.vars.unit_icon_size_large)),c))]},x=function(o,e,t,n){return[c({},o.map(function(o){return o+e}).join(","),{color:t["color_"+n+"_on"]," .pe-control__label":{color:t["color_"+n+"_label"]}," .pe-control__box":{" .pe-control__button":{color:"inherit"," .pe-control__button--on":{color:t["color_"+n+"_on_icon"]||"inherit"}," .pe-control__button--off":{color:t["color_"+n+"_off_icon"]||t["color_"+n+"_off"]}}},".pe-control--off":{" .pe-button--focus .pe-button__focus":{opacity:t["color_"+n+"_focus_off_opacity"],backgroundColor:t["color_"+n+"_focus_off"]}},".pe-control--on":{" .pe-button--focus .pe-button__focus":{opacity:t["color_"+n+"_focus_on_opacity"],backgroundColor:t["color_"+n+"_focus_on"]}},".pe-control--disabled":{" .pe-control__label":{color:t["color_"+n+"_disabled"]}," .pe-control__box":{" .pe-control__button--on, .pe-control__button--off":{color:t["color_"+n+"_disabled"]}}}})]},z=function(o,e){return[x([".pe-dark-tone",".pe-dark-tone "],o,e,"dark"),x(["",".pe-light-tone",".pe-light-tone "],o,e,"light")]};o.CoreSelectionControl=h,o.classes=i,o.vars=m,o.layout=k,o.color=z,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-selection-control.js.map
