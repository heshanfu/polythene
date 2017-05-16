!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-selection-control"),require("polythene-mithril"),require("polythene-core-css"),require("polythene-theme"),require("polythene-core-icon-button")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-selection-control","polythene-mithril","polythene-core-css","polythene-theme","polythene-core-icon-button"],t):t(o.polythene=o.polythene||{},o.m,o["polythene-selection-control"],o["polythene-mithril"],o["polythene-core-css"],o["polythene-theme"],o["polythene-core-icon-button"])}(this,function(o,t,r,e,n,c,l){"use strict";function i(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function _(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}t="default"in t?t.default:t;var a={component:"pe-switch-control",knob:"pe-switch-control__knob",thumb:"pe-switch-control__thumb",track:"pe-switch-control__track"},s=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},u=function(o,r){var n=void 0!==r.zOff?r.zOff:1,c=void 0!==r.zOn?r.zOn:2,l=o?c:n,i=!r.disabled&&(void 0===r.raised||r.raised);return[t("div",{class:a.track}),t(e.IconButton,s({},{class:a.thumb,content:[t("div",{class:a.knob},[r.icon?r.icon:null,i?t(e.Shadow,{z:l,animated:!0}):null])],style:r.style,disabled:r.disabled,events:r.events,ink:r.ink||!1},void 0!==r.selectable?{inactive:!r.selectable(o)}:null,r.iconButton))]},p=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},h=c.vars.rgba,d=(c.vars.grid_unit_icon_button-c.vars.unit_icon_size)/2,f=p({},r.vars,{track_height:14,track_length:36,thumb_size:20,padding:c.vars.grid_unit_component,icon_button_padding:l.vars.padding,hit_area_padding:d,animation_duration:c.vars.animation_duration,color_light_thumb_on:h(c.vars.color_primary),color_light_thumb_off:"#f1f1f1",color_light_thumb_disabled:"#bdbdbd",color_light_wash_on:h(c.vars.color_primary),color_light_wash_off:l.vars.color_light_wash,color_light_track_on:h(c.vars.color_primary_faded),color_light_track_on_opacity:.55,color_light_track_off:h(c.vars.color_light_foreground,c.vars.blend_light_text_regular),color_light_track_off_opacity:.55,color_light_track_disabled:h(c.vars.color_light_foreground,c.vars.blend_light_background_disabled),color_light_track_disabled_opacity:1,color_dark_thumb_on:h(c.vars.color_primary),color_dark_thumb_off:"#bdbdbd",color_dark_thumb_disabled:"#555",color_dark_wash_on:h(c.vars.color_primary),color_dark_wash_off:l.vars.color_dark_wash,color_dark_track_on:h(c.vars.color_primary_faded,c.vars.blend_dark_text_tertiary),color_dark_track_on_opacity:9,color_dark_track_off:"#717171",color_dark_track_off_opacity:.55,color_dark_track_disabled:"#717171",color_dark_track_disabled_opacity:.3}),b=function(o,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.animation_duration;return[n.mixin.defaultTransition(t,r,"ease-out")]},g=function(o,t){var r=t/c.vars.unit_icon_size,e=2*Math.floor(.5*o.thumb_size*r),n=2*Math.floor(.5*o.track_height*r),l=2*Math.floor(.5*o.track_length*r),i=2*Math.floor(.5*o.thumb_size*r),_=(o.label_height*r-n)/2,a=o.icon_button_padding,s=(t-i)/2,u=t+2*a,p=e/2-u/2,h=p+l-e,d=p+s;return{" .pe-control__form-label":{height:t+"px",minWidth:l+"px"}," .pe-control__label":{paddingLeft:o.padding*r+8+l+"px"}," .pe-switch-control__track":{left:"0.3px",height:n+"px",width:l-.6+"px",top:_+"px",borderRadius:n+"px"}," .pe-switch-control__thumb":{top:d+"px",left:p+"px"}," .pe-switch-control__knob":{width:i+"px",height:i+"px",margin:s+"px"}," .pe-button__content":{padding:a+"px"},".pe-control--on":{" .pe-switch-control__thumb":{left:h+"px"}}}},k=function(o,t){return r.layout(o,t,"checkbox").concat([i({},o,{" .pe-switch-control__track":[b(t,"background, opacity"),{position:"absolute",left:0}]," .pe-switch-control__thumb":[b(t,"left, color"),{position:"absolute",zIndex:1,color:"inherit",":focus":{outline:0}}]," .pe-switch-control__knob":{position:"relative",borderRadius:"50%"}," .pe-button__content .pe-switch-control__knob .pe-icon":[n.mixin.fit(),b(t,"color"),{width:"100%",height:"100%"}]," .pe-button__focus":[b(t,"all")],".pe-control--small":g(t,c.vars.unit_icon_size_small),".pe-control--regular":g(t,c.vars.unit_icon_size),".pe-control--medium":g(t,c.vars.unit_icon_size_medium),".pe-control--large":g(t,c.vars.unit_icon_size_large)})])},m=function(o,t,r,e){return[_({},o.map(function(o){return o+t}).join(","),{".pe-control--off":{" .pe-switch-control__track":{opacity:r["color_"+e+"_track_off_opacity"],backgroundColor:r["color_"+e+"_track_off"]}," .pe-switch-control__thumb":{color:r["color_"+e+"_thumb_off"]}," .pe-switch-control__knob":{backgroundColor:"currentcolor"}," .pe-button--focus":{" .pe-button__focus":{opacity:r["color_"+e+"_focus_off_opacity"],backgroundColor:r["color_"+e+"_focus_off"]}}," .pe-icon":{color:r["color_"+e+"_icon_off"]||"currentcolor"}},".pe-control--on":{" .pe-switch-control__track":{opacity:r["color_"+e+"_track_on_opacity"],backgroundColor:r["color_"+e+"_track_on"]}," .pe-switch-control__thumb":{color:r["color_"+e+"_thumb_on"]}," .pe-switch-control__knob":{backgroundColor:"currentcolor"}," .pe-button--focus":{" .pe-button__focus":{opacity:r["color_"+e+"_focus_on_opacity"],backgroundColor:r["color_"+e+"_focus_on"]}}," .pe-icon":{color:r["color_"+e+"_icon_on"]||"currentcolor"}},".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-switch-control__track":{opacity:r["color_"+e+"_track_disabled_opacity"],backgroundColor:r["color_"+e+"_track_disabled"]}," .pe-switch-control__thumb":{color:r["color_"+e+"_thumb_disabled"]}}})]},y=function(o,t,r,e){return[_({},o.map(function(o){return o+t+":hover"}).join(","),{".pe-control--on":{" .pe-button__wash":{backgroundColor:r["color_"+e+"_wash_on"]}},".pe-control--off":{" .pe-button__wash":{backgroundColor:r["color_"+e+"_wash_off"]}}})]},v=function(o,t){return[m([".pe-dark-tone",".pe-dark-tone "],o,t,"dark"),m(["",".pe-light-tone",".pe-light-tone "],o,t,"light"),y(["html.pe-no-touch .pe-dark-tone "],o,t,"dark"),y(["html.pe-no-touch ","html.pe-no-touch .pe-light-tone "],o,t,"light")]},w=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},x=[k,v],O="."+a.component,z=function(o,t){return n.styler.generateStyles([o,O],w({},f,t),x)};n.styler.generateStyles([O],f,x);var j=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},C=function(o){return t(r.selectionControl,j({},o.attrs,{controlView:u,selectable:o.attrs.selectable||function(){return!0},instanceClass:a.component,type:"checkbox"}))},P={theme:z,view:C};o.default=P,o.classes=a,o.controlView=u,o.vars=f,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-switch-button.js.map
