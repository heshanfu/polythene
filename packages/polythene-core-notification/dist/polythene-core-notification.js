!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-utilities"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-utilities","polythene-core-css","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-utilities"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,n,i,o){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={component:"pe-notification",action:"pe-notification__action",content:"pe-notification__content",holder:"pe-notification__holder",placeholder:"pe-notification__placeholder",title:"pe-notification__title",hasContainer:"pe-notification--container",horizontal:"pe-notification--horizontal",multilineTitle:"pe-notification__title--multiline",vertical:"pe-notification--vertical"},s={width:274,min_height:80,border_radius:o.vars.unit_block_border_radius,title_padding_h:8,title_single_padding_v:14,title_multi_padding_v:20,side_padding:16,font_size:14,line_height:20,color_light_background:i.rgba(o.vars.color_light_background),color_light_text:i.rgba(o.vars.color_light_foreground,o.vars.blend_light_dark_primary),color_dark_background:i.rgba(o.vars.color_dark_background),color_dark_text:i.rgba(o.vars.color_dark_foreground,o.vars.blend_light_text_primary)},d=function(e,t){return[r({},e,[i.flex.layoutCenter,{width:t.width+"px",minHeight:t.min_height+"px",position:"relative",padding:"0 "+t.side_padding+"px",margin:"0 auto",borderRadius:t.border_radius+"px",pointerEvents:"all"," .pe-notification__content":{width:"100%"}," .pe-notification__title":{padding:t.title_single_padding_v+"px "+t.title_padding_h+"px",fontSize:t.font_size+"px",lineHeight:t.line_height+"px"}," .pe-notification__action":{" .pe-button":{margin:0}},"&.pe-notification--horizontal":{" .pe-notification__content":i.flex.layoutHorizontal," .pe-notification__title":i.flex.flex()," .pe-notification__title--multi-line":{paddingTop:t.title_multi_padding_v+"px",paddingBottom:t.title_multi_padding_v+"px"}," .pe-notification__action":i.flex.layoutCenter},"&.pe-notification--vertical":{" .pe-notification__content":i.flex.layoutVertical," .pe-notification__title":{paddingBottom:"4px"}," .pe-notification__title--multi-line":{paddingTop:t.title_multi_padding_v+"px"}," .pe-notification__action":i.flex.layoutEndJustified}}])]},p=function(e,t,n,i){return[a({},e.map(function(e){return e+t}).join(","),{color:n["color_"+i+"_text"],background:n["color_"+i+"_background"]})]},f=function(e,t){return[p([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},_=function(e){var t;return[(t={},l(t,e,[i.flex.layoutCenterCenter,{top:0,right:0,bottom:0,left:0,zIndex:o.vars.z_notification,pointerEvents:"none",".pe-multiple--screen":{position:"fixed"}}]),l(t,":not(.pe-notification--container) .pe-multiple--container",{position:"absolute"}),t)]},h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g=[d,f],m="."+u.component,v=[_],y="."+u.holder,b=function(e,t){return i.styler.generateStyles([e,m],h({},s,t),g)};i.styler.generateStyles([m],s,g),i.styler.generateStyles([y],s,v);var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},x=function(e){return e.attrs.element||"div"},k=b,S=function(e){e.paused(!0),e.timer&&e.timer.pause()},E=function(e){e.paused(!1),e.timer&&e.timer.resume()},C=function(e){e.timer&&e.timer.stop()},j=function(e,n){!e.containerEl&&t.isClient&&(e.containerEl=document.querySelector(n.containerSelector||n.holderSelector)),!e.containerEl&&t.isClient&&console.error("No container element found"),n.containerSelector&&e.containerEl&&e.containerEl.classList.add(u.hasContainer)},D=function(e,n){if(e.transitioning())return Promise.resolve();e.transitioning(!0),C(e),j(e,n);var i=n.instanceId,o=n.transitions;return t.show(w({},n,o.show(w({},n,{containerEl:e.containerEl,el:e.el})))).then(function(){n.multipleDidShow&&n.multipleDidShow(i);var t=n.timeout;if(0===t);else{var o=void 0!==t?t:3;e.timer.start(function(){I(e,n)},o)}e.visible(!0),e.transitioning(!1)})},I=function(e,n){if(e.transitioning())return Promise.resolve();e.transitioning(!0),C(e);var i=n.instanceId,o=n.transitions;return t.hide(w({},n,o.hide(w({},n,{containerEl:e.containerEl,el:e.el})))).then(function(){e.transitioning(!1),n.multipleDidHide&&n.multipleDidHide(i),e.visible(!1)})},O=function(e){t.isServer||e.getBoundingClientRect().height>parseInt(window.getComputedStyle(e).lineHeight,10)+parseInt(window.getComputedStyle(e).paddingTop,10)+parseInt(window.getComputedStyle(e).paddingBottom,10)&&e.classList.add(u.multilineTitle)},z=function(e,t){var i=t(!1),o=t(!1),r=t(!1),a=t(!1);return{cleanUp:void 0,containerEl:void 0,dismissEl:void 0,el:void 0,timer:new n.Timer,paused:o,transitioning:i,visible:a,mounted:r,redrawOnUpdate:t.merge([a])}},P=function(e){var t=e.dom;if(t){var n=e.state,i=e.attrs;n.el=t;var o=n.el.querySelector("."+u.title);o&&O(o),i.showInstance&&!n.visible()&&D(n,i),n.mounted(!0)}},N=function(e){return e.state.mounted(!1)},q=function(e,n){var i=n.keys,o=e.attrs;return w({},t.filterSupportedAttributes(o),c({className:[u.component,"light"===o.tone?null:"pe-dark-tone","light"===o.tone?"pe-light-tone":null,o.containerSelector?u.hasContainer:null,"vertical"===o.layout?u.vertical:u.horizontal,"dark"===o.tone?"pe-dark-tone":null,"light"===o.tone?"pe-light-tone":null,o.className||o[i.class]].join(" ")},i.onclick,function(e){return e.preventDefault()}))},H=function(e,t){var n=t.renderer,i=e.state,o=e.attrs;return i.mounted()&&!i.transitioning()&&(o.hideInstance&&i.visible()?I(i,o):o.showInstance&&!i.visible()&&D(i,o)),o.pauseInstance&&!i.paused()?S(i):o.unpauseInstance&&i.paused()&&E(i),n("div",{className:u.content,style:o.style},o.content||[o.title?n("div",{className:u.title},o.title):null,o.action?n("div",{className:u.action},o.action):null])},T=Object.freeze({getElement:x,theme:k,getInitialState:z,onMount:P,onUnMount:N,createProps:q,createContent:H}),B={show:function(e){var t=e.el,n=e.showDuration,i=e.showDelay;return{el:t,showDuration:n||.5,showDelay:i||0,beforeShow:function(){return t.style.opacity=0},show:function(){return t.style.opacity=1}}},hide:function(e){var t=e.el,n=e.hideDuration,i=e.hideDelay;return{el:t,hideDuration:n||.5,hideDelay:i||0,hide:function(){return t.style.opacity=0}}}};e.coreNotificationInstance=T,e.classes=u,e.vars=s,e.transitions=B,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-notification.js.map
