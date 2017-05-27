!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,r,i,o){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t="default"in t?t.default:t;var l={component:"pe-slider",control:"pe-slider__control",label:"pe-slider__label",pin:"pe-slider__pin",thumb:"pe-slider__thumb",tick:"pe-slider__ticks-tick",ticks:"pe-slider__ticks",track:"pe-slider__track",trackBar:"pe-slider__track-bar",trackBarValue:"pe-slider__track-bar-value",trackPart:"pe-slider__track-part",trackPartRest:"pe-slider__track-rest",trackPartValue:"pe-slider__track-value",hasFocus:"pe-slider--focus",hasPin:"pe-slider--pin",hasTicks:"pe-slider--ticks",hasTrack:"pe-slider--track",isActive:"pe-slider--active",isAtMin:"pe-slider--min",isDisabled:"pe-slider--disabled"},c=o.vars.rgba,s=o.vars.color_light_foreground,_=o.vars.color_dark_foreground,d=o.vars.color_primary,u=Math.max(40,12),p=Math.max(u,18),h=Math.max(52,18),f=Math.max(10,p/2-6),b={height:h,side_spacing:f,horizontal_layout_side_spacing:f+4,thumb_size:12,thumb_touch_size:u,track_height:h,bar_height:2,thumb_border_width:2,active_thumb_scale:1.5,animation_duration:o.vars.animation_duration,disabled_thumb_scale:2/3,active_pin_thumb_scale:2/6,step_width:2,pin_height:32,pin_width:26,pin_font_size:10,color_light_track_active:c(s,.38),color_light_track_inactive:c(s,.26),color_light_track_value:c(d),color_light_thumb_off:c(s,.26),color_light_thumb_off_focus:c(s),color_light_thumb_off_focus_opacity:.08,color_light_thumb_on:c(d),color_light_thumb_on_focus_opacity:.11,color_light_thumb_inactive:c(s,.26),color_light_tick:c(s,1),color_light_icon:o.vars.rgba(o.vars.color_light_foreground,o.vars.blend_light_text_secondary),color_light_disabled_icon:o.vars.rgba(o.vars.color_light_foreground,o.vars.blend_light_text_disabled),color_light_label:o.vars.rgba(o.vars.color_light_foreground,o.vars.blend_light_text_secondary),color_light_disabled_label:o.vars.rgba(o.vars.color_light_foreground,o.vars.blend_light_text_disabled),color_dark_track_active:c(_,.3),color_dark_track_inactive:c(_,.2),color_dark_track_value:c(d),color_dark_thumb_off:c(_,.2),color_dark_thumb_off_focus:c(_),color_dark_thumb_off_focus_opacity:.08,color_dark_thumb_on:c(d),color_dark_thumb_on_focus_opacity:.11,color_dark_thumb_inactive:c(_,.2),color_dark_tick:c(_,1),color_dark_icon:o.vars.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_text_secondary),color_dark_disabled_icon:o.vars.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_text_disabled),color_dark_label:o.vars.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_text_secondary),color_dark_disabled_label:o.vars.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_text_disabled)},g=function(e,t){return{borderWidth:t+"px",width:e-2*t+"px",height:e-2*t+"px",left:"2px",top:"2px"}},v=function(e,t){var r=Math.max(t.thumb_size,2*t.thumb_border_width),n=(t.active_thumb_scale-1)*r/2,l=r/2,c=Math.max(1,t.thumb_border_width/t.active_thumb_scale),s=t.thumb_touch_size,_=l-1;return[a({},e,[i.flex.layoutHorizontal,i.flex.flexGrow(1),{userSelect:"none",height:t.height+"px",marginTop:(t.height-t.track_height)/2+"px "," > .pe-icon":[i.flex.layoutCenter,{height:t.height+"px"}]," .pe-slider__track":[i.flex.layoutHorizontal,i.flex.flexGrow(1),i.mixin.defaultTransition("transform",t.animation_duration),{userSelect:"none",position:"relative",height:t.track_height+"px",margin:"0 "+t.side_spacing+"px",outline:0}]," div + .pe-slider__track":{margin:"0 "+t.horizontal_layout_side_spacing+"px"}," .pe-slider__control":[i.flex.selfCenter,i.mixin.defaultTransition("transform, background",t.animation_duration),{userSelect:"none",width:r+"px",height:r+"px",lineHeight:0,borderRadius:"50%",outline:0,zIndex:1,position:"relative","&:before":[i.mixin.defaultTransition("background-color",t.animation_duration),{content:'""',position:"absolute",borderRadius:"50%",left:-s/2+r/2+"px",top:-s/2+r/2+"px",width:s+"px",height:s+"px"}],"&:after":[i.mixin.defaultTransition("border",t.animation_duration),g(r,t.thumb_border_width),{content:'""',position:"absolute",borderRadius:"50%",borderStyle:"solid"}]}]," .pe-slider__thumb":[i.mixin.defaultTransition("opacity",t.animation_duration),i.mixin.fit(),{"&, .pe-icon":{width:"inherit",height:"inherit"}}]," .pe-slider__label":{height:t.height+"px",lineHeight:t.height+"px",minWidth:o.vars.unit_icon_size+"px",textAlign:"center",fontSize:"16px",fontWeight:o.vars.font_weight_medium}," .pe-slider__track-part":[i.flex.flex(),{userSelect:"none",height:t.bar_height+"px",margin:(t.track_height-t.bar_height)/2+"px 0",overflow:"hidden"}]," .pe-slider__track-value, .pe-slider__track-rest":i.flex.layoutHorizontal," .pe-slider__track-bar":[i.flex.flex(),{position:"relative",overflow:"hidden"}]," .pe-slider__track-bar-value":[i.flex.flex(),i.mixin.defaultTransition("transform, background-color",t.animation_duration),{height:t.bar_height+"px"}]," .pe-slider__track-value .pe-slider__track-bar":{marginLeft:l+"px"}," .pe-slider__track-rest .pe-slider__track-bar":{marginRight:l+"px"}," .pe-slider__ticks":[i.flex.layoutJustified,{userSelect:"none",position:"absolute",width:"calc(100% - "+2*_+"px)",height:t.bar_height+"px",left:0,top:t.height/2-1+"px",margin:"0 "+_+"px",pointerEvents:"none"}]," .pe-slider__ticks-tick":{width:t.step_width+"px",height:t.bar_height+"px"}," .pe-slider__pin":[i.mixin.defaultTransition("transform",".11s"),{transform:"translateZ(0) scale(0) translate(0, 0)",transformOrigin:"bottom",position:"absolute",zIndex:1,width:t.pin_width+"px",height:0,left:0,top:0,margin:"0 "+_+"px 0 "+(_-t.pin_width/2+1)+"px",pointerEvents:"none","&::before":{transform:"rotate(-45deg)",content:'""',position:"absolute",top:0,left:0,width:t.pin_width+"px",height:t.pin_width+"px",borderRadius:"50% 50% 50% 0",backgroundColor:"inherit"},"&::after":{content:"attr(value)",position:"absolute",top:0,left:0,width:t.pin_width+"px",height:t.pin_height+"px",textAlign:"center",color:"#fff",fontSize:t.pin_font_size+"px",lineHeight:t.pin_width+"px"}}],"&.pe-slider--active:not(.pe-slider--ticks)":{" .pe-slider__control":{transform:"scale("+t.active_thumb_scale+")",borderWidth:c+"px"}," .pe-slider__track-value .pe-slider__track-bar-value":{transform:"translateX("+-n+"px)"}," .pe-slider__track-rest .pe-slider__track-bar-value":{transform:"translateX("+n+"px)"}},"&.pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus":{" .pe-slider__pin":{transform:"translateZ(0) scale(1) translate(0, -24px)"}," .pe-slider__control":{transform:"scale("+t.active_pin_thumb_scale+")"}},"&:not(.pe-slider--disabled)":{" .pe-slider__control":{cursor:"pointer"},"&.pe-slider--track":{" .pe-slider__track":{cursor:"pointer"}}},"&.pe-slider--disabled":{" .pe-slider__control":{transform:"scale("+t.disabled_thumb_scale+")",borderWidth:0},"&.pe-slider--min":{" .pe-slider__control:after":[g(r,1/t.disabled_thumb_scale*t.thumb_border_width)]}}}])]},m=function(e,t,r,i){return[n({},e.map(function(e){return e+t}).join(","),{color:r["color_"+i+"_thumb_on"]," .pe-slider__control":{"&:after":{borderColor:"transparent"}}," .pe-slider__track-bar-value":{background:r["color_"+i+"_track_inactive"]}," .pe-slider__ticks-tick":{background:r["color_"+i+"_tick"]}," .pe-slider__pin":{backgroundColor:"currentcolor"}," > .pe-icon":{color:r["color_"+i+"_disabled_icon"]}," .pe-slider__label":{color:r["color_"+i+"_disabled_label"]},"&.pe-slider--active":{" .pe-slider__track-bar-value":{background:r["color_"+i+"_track_active"]}},".pe-slider--disabled":{" .pe-slider__control":{background:r["color_"+i+"_thumb_inactive"]}},"&:not(.pe-slider--disabled)":{" .pe-slider__control":{backgroundColor:r["color_"+i+"_thumb_background"]||"currentcolor","&:before":{opacity:r["color_"+i+"_thumb_off_focus_opacity"]}}," .pe-slider__track-value .pe-slider__track-bar-value":{background:"currentcolor"},"&.pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,      &.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before":{backgroundColor:r["color_"+i+"_thumb_off_focus"]},"&.pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,      &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before":{backgroundColor:"currentcolor",opacity:r["color_"+i+"_thumb_on_focus_opacity"]}," > .pe-icon":{color:r["color_"+i+"_icon"]}," .pe-slider__label":{color:r["color_"+i+"_label"]}},"&.pe-slider--min:not(.pe-slider--disabled)":{" .pe-slider__control":{backgroundColor:"transparent"}," .pe-slider__thumb":{opacity:0}," .pe-slider__control:after":{borderColor:r["color_"+i+"_track_inactive"]},"&.pe-slider--active .pe-slider__control:after":{borderColor:r["color_"+i+"_track_active"]},"&.pe-slider--ticks":{" .pe-slider__control":{backgroundColor:r["color_"+i+"_tick"]}," .pe-slider__control:after":{borderColor:"transparent"}}," .pe-slider__pin":{backgroundColor:r["color_"+i+"_track_inactive"]}}})]},k=function(e,t){return[m([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),m(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},y=[v,k],w="."+l.component,E=function(e,t){return i.styler.generateStyles([e,w],x({},b,t),y)};i.styler.generateStyles([w],b,y);var T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},C=void 0,z=function(e){C&&C.blur(),C=void 0,e.hasFocus=!1},O=function(e,t){z(e),C=t,e.hasFocus=!0},W=function(e,t){return r.isTouch?t?e.touches[0].pageY:e.touches[0].pageX:t?e.pageY:e.pageX},P=function(e){if(e.controlEl&&e.pinEl){var t=e.fraction()*e.rangeWidth;e.pinEl.style.left=t+"px"}},M=function(e,t){e.setValue(t),P(e)},N=function(e,r,i){for(var o=[],a=Math.round((r-e)/i)+1;a>0;)o.push(t("div",{className:l.tick})),a--;return o},S=function(e){if(e.controlEl){e.controlWidth=b.thumb_size,e.rangeWidth=e.trackEl.getBoundingClientRect().width-e.controlWidth;var t=window.getComputedStyle(e.trackEl);e.rangeOffset=parseFloat(t.marginLeft)}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.clickOffset=e.trackEl.getBoundingClientRect().left-(e.rangeOffset-e.controlWidth/2)+t},D=function(e,t){var r=e.controlEl.getBoundingClientRect().left,i=W(t)-r-e.controlWidth/2;A(e,i)},j=function(e){return A(e,0)},R=function(e,r){var i=W(r)-e.clickOffset,o=e.min+(i-e.rangeOffset)/e.rangeWidth*(e.max-e.min);M(e,o),t.redraw()},V=function(e,i,o){if(!e.isDragging){o.preventDefault(),e.isDragging=!0,e.isActive=!0,z(e);var a=function(t){e.isDragging&&R(e,t)},n=function i(){e.isDragging&&(e.isDragging=!1,e.isActive=!1,z(e),window.removeEventListener(r.moveEvent,a),window.removeEventListener(r.endEvent,i),t.redraw())};window.addEventListener(r.moveEvent,a),window.addEventListener(r.endEvent,n),S(e),i.pin&&P(e)}},B=function(e,t,r){r.preventDefault(),e.isDragging||(S(e),j(e),R(e,r),V(e,t,r))},F=function(e,i,o,a){var n=e.fraction(),c=Math.max(10,parseInt(i.step,10)||1),s=function(t){return B(e,i,t)},_=function(t){S(e),D(e,t),V(e,i,t)},d=n+" 1 0%",u=1-n,p=u+" 1 0%";return[t("div",T({},{className:l.track,oncreate:function(t){var r=t.dom;e.trackEl=r,i.pin&&setTimeout(function(){P(e)},0)}},!a||i.disabled||r.isTouch?null:{onmousedown:s},a&&!i.disabled&&r.isTouch?{ontouchstart:s}:null),[t("div",{className:l.trackPart+" "+l.trackPartValue,style:{flex:d,"-ms-flex":d,webkitFlex:d}},t("div",{className:l.trackBar},t("div",{className:l.trackBarValue}))),t("div",T({},{className:l.control,oncreate:function(t){var r=t.dom;return e.controlEl=r}},i.disabled?{disabled:!0}:{tabindex:i.tabindex||0,onfocus:function(){return O(e,e.controlEl)},onblur:function(){return z(e)},onkeydown:function(t){27===t.which?e.controlEl.blur(t):37===t.which?e.decrease(t.shiftKey):38===t.which?e.increase(t.shiftKey):39===t.which?e.increase(t.shiftKey):40===t.which&&e.decrease(t.shiftKey),S(e),P(e)}},i.disabled||r.isTouch?null:{onmousedown:_},!i.disabled&&r.isTouch?{ontouchstart:_}:null,i.events?i.events:null,o?{step:c}:null),i.icon?t("div",{className:l.thumb},i.icon):null),t("div",{className:l.trackPart+" "+l.trackPartRest,style:{flex:p,"-ms-flex":p,webkitFlex:p,maxWidth:100*u+"%"}},t("div",{className:l.trackBar},t("div",{className:l.trackBarValue}))),o&&!i.disabled?t("div",{className:l.ticks},N(e.min,e.max,c)):null,o&&i.pin&&!i.disabled?t("div",{className:l.pin,value:Math.round(e.value()),oncreate:function(t){var r=t.dom;return e.pinEl=r}}):null])]},H={theme:E,oninit:function(e){var t=e.attrs,r=void 0!==t.min?t.min:0,i=void 0!==t.max?t.max:100,o=void 0!==t.step?t.step:1,a=r,n=0;if("function"==typeof t.value){var l=t.value();n=void 0!==l?l:0}else n=void 0!==t.value?t.value:0;var c=function(e){e<r&&(e=r),e>i&&(e=i),n=o?Math.round(e/o)*o:e,a=(n-r)/(i-r),t.getValue&&t.getValue(n)};c(n),e.state=T(e.state,{min:r,max:i,trackEl:null,controlEl:null,pinEl:null,setValue:c,value:function(){return n},fraction:function(){return a},increase:function(e){return c(n+(e?10:1)*(o||1))},decrease:function(e){return c(n-(e?10:1)*(o||1))},isActive:!1,hasFocus:!1,isDragging:!1,controlWidth:0,rangeWidth:0,rangeOffset:0,clickOffset:0})},view:function(e){var i=e.attrs,o=e.state;"function"==typeof i.value&&o.setValue(i.value());var a=i.element||"div",n=void 0!==i.ticks&&!1!==i.ticks,c=void 0===i.interactiveTrack||i.interactiveTrack,s=T({},r.filterSupportedAttributes(i),{className:[l.component,i.disabled?l.isDisabled:null,i.pin?l.hasPin:null,c?l.hasTrack:null,o.isActive?l.isActive:null,o.hasFocus?l.hasFocus:null,0===o.fraction()?l.isAtMin:null,n?l.hasTicks:null,"dark"===i.tone?"pe-dark-tone":null,"light"===i.tone?"pe-light-tone":null,i.class].join(" ")}),_=F(o,i,n,c);return t(a,s,[i.before,_,i.after])}};e.default=H,e.classes=l,e.vars=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-slider.js.map
