!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-switch"),require("polythene-css-selection-control"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-switch","polythene-css-selection-control","polythene-theme"],t):t(o.polythene={},o["polythene-core-css"],o["polythene-core-switch"],o["polythene-css-selection-control"],o["polythene-theme"])}(this,function(o,t,e,r,n){"use strict";function c(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}function l(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var i=function(o,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.animation_duration;return[t.mixin.defaultTransition(e,r,"ease-out")]},_=function(o,e){var r=e/n.vars.unit_icon_size,c=2*Math.floor(.5*o.thumb_size*r),l=2*Math.floor(.5*o.track_height*r),i=2*Math.floor(.5*o.track_length*r),_=2*Math.floor(.5*o.thumb_size*r),a=(o.label_height*r-l)/2,p=o.icon_button_padding,u=(e-_)/2,s=-(e+2*p)/2+c/2,h=s+i-c,f=s+u;return{" .pe-control__form-label":{height:e+"px",minWidth:i+"px"}," .pe-control__label":[t.mixin.defaultTransition("all",o.animation_duration),{paddingLeft:o.padding*r+8+i+"px"}]," .pe-switch-control__track":{left:"0.3px",height:l+"px",width:i-.6+"px",top:a+"px",borderRadius:l+"px"}," .pe-switch-control__thumb":{top:f+"px",left:s+"px"}," .pe-switch-control__knob":{width:_+"px",height:_+"px",margin:u+"px"}," .pe-button__content":{padding:p+"px"},".pe-control--on":{" .pe-switch-control__thumb":{left:h+"px"}}}},a=function(o,e){return r.layout(o,e,"checkbox").concat([c({},o,{" .pe-switch-control__track":[i(e,"background, opacity"),{position:"absolute",left:0}]," .pe-switch-control__thumb":[i(e,"left, color"),{position:"absolute",zIndex:1,color:"inherit",":focus":{outline:0}}]," .pe-switch-control__knob":{position:"relative",borderRadius:"50%"}," .pe-button__content .pe-switch-control__knob .pe-icon":[t.mixin.fit(),i(e,"color"),{width:"100%",height:"100%"}]," .pe-button__focus":[i(e,"all")],".pe-control--small":_(e,n.vars.unit_icon_size_small),".pe-control--regular":_(e,n.vars.unit_icon_size),".pe-control--medium":_(e,n.vars.unit_icon_size_medium),".pe-control--large":_(e,n.vars.unit_icon_size_large)})])},p=function(o,t,e,r){return[l({},o.map(function(o){return o+t}).join(","),{" .pe-control__label":{color:e["color_"+r+"_label"]},".pe-control--off":{" .pe-switch-control__track":{opacity:e["color_"+r+"_track_off_opacity"],backgroundColor:e["color_"+r+"_track_off"]}," .pe-switch-control__thumb":{color:e["color_"+r+"_thumb_off"]}," .pe-switch-control__knob":{backgroundColor:"currentcolor"}," .pe-button--focus":{" .pe-button__focus":{opacity:e["color_"+r+"_focus_off_opacity"],backgroundColor:e["color_"+r+"_focus_off"]}}," .pe-icon":{color:e["color_"+r+"_icon_off"]||"currentcolor"}," .pe-control__label":{color:e["color_"+r+"_off_label"]}},".pe-control--on":{" .pe-switch-control__track":{opacity:e["color_"+r+"_track_on_opacity"],backgroundColor:e["color_"+r+"_track_on"]}," .pe-switch-control__thumb":{color:e["color_"+r+"_thumb_on"]}," .pe-switch-control__knob":{backgroundColor:"currentcolor"}," .pe-button--focus":{" .pe-button__focus":{opacity:e["color_"+r+"_focus_on_opacity"],backgroundColor:e["color_"+r+"_focus_on"]}}," .pe-icon":{color:e["color_"+r+"_icon_on"]||"currentcolor"}," .pe-control__label":{color:e["color_"+r+"_on_label"]}},".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-control__label":{color:e["color_"+r+"_disabled"]}," .pe-switch-control__track":{opacity:e["color_"+r+"_track_disabled_opacity"],backgroundColor:e["color_"+r+"_track_disabled"]}," .pe-switch-control__thumb":{color:e["color_"+r+"_thumb_disabled"]}}})]},u=function(o,t,e,r){return[l({},o.map(function(o){return o+t+":hover"}).join(","),{".pe-control--on":{" .pe-button__wash":{backgroundColor:e["color_"+r+"_wash_on"]}},".pe-control--off":{" .pe-button__wash":{backgroundColor:e["color_"+r+"_wash_off"]}}})]},s=function(o,t){return[p([".pe-dark-tone",".pe-dark-tone "],o,t,"dark"),p(["",".pe-light-tone",".pe-light-tone "],o,t,"light"),u(["html.pe-no-touch .pe-dark-tone "],o,t,"dark"),u(["html.pe-no-touch ","html.pe-no-touch .pe-light-tone "],o,t,"light")]},h=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r])}return o},f=[a,s],b="."+e.classes.component,d=function(o,r){return t.styler.generateStyles([o,b],h({},e.vars,r),f)},y=function(o,r){return o?t.styler.createStyleSheets([o,b],h({},e.vars,r),f):t.styler.createStyleSheets([b],e.vars,f)};t.styler.generateStyles([b],e.vars,f),o.addStyle=d,o.getStyle=y,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-switch.js.map
