!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,i,l,o){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t="default"in t?t.default:t;var _={component:"pe-textfield",counter:"pe-textfield__counter",error:"pe-textfield__error",errorPlaceholder:"pe-textfield__error-placeholder",focusHelp:"pe-textfield__help-focus",help:"pe-textfield__help",input:"pe-textfield__input",inputArea:"pe-textfield__input-area",label:"pe-textfield__label",optionalIndicator:"pe-textfield__optional-indicator",requiredIndicator:"pe-textfield__required-indicator",hasCounter:"pe-textfield--counter",hasFloatingLabel:"pe-textfield--floating-label",hasFullWidth:"pe-textfield--full-width",hideClear:"pe-textfield--hide-clear",hideSpinner:"pe-textfield--hide-spinner",hideValidation:"pe-textfield--hide-validation",isDense:"pe-textfield--dense",isRequired:"pe-textfield--required",stateDirty:"pe-textfield--dirty",stateDisabled:"pe-textfield--disabled",stateFocused:"pe-textfield--focused",stateInvalid:"pe-textfield--invalid",stateReadonly:"pe-textfield--readonly"},d=o.vars.rgba,p={vertical_spacing_top:6,vertical_spacing_bottom:7,input_focus_border_width:2,input_focus_border_animation_duration:o.vars.animation_duration,floating_label_vertical_spacing_top:30,floating_label_vertical_spacing_bottom:7,floating_label_top:14,floating_label_animation_duration:".12s",input_padding_h:0,input_padding_v:7,input_border_width:1,margin_top_error_message:6,font_size_input:16,font_size_error:12,font_size_floating_label:12,line_height_input:20,dense_floating_label_vertical_spacing_top:23,dense_floating_label_vertical_spacing_bottom:4,dense_floating_label_top:10,dense_font_size_input:13,dense_font_size_floating_label:13,full_width_input_padding_h:20,full_width_input_padding_v:18,dense_full_width_input_padding_h:16,dense_full_width_input_padding_v:15,dense_full_width_font_size_input:13,color_light_input_text:d(o.vars.color_light_foreground,o.vars.blend_light_text_primary),color_light_input_background:"transparent",color_light_highlight_text:d(o.vars.color_primary,o.vars.blend_light_text_primary),color_light_input_bottom_border:d(o.vars.color_light_foreground,o.vars.blend_light_border_light),color_light_input_error_text:d("221, 44, 0"),color_light_input_error_border:d("221, 44, 0"),color_light_input_placeholder:d(o.vars.color_light_foreground,o.vars.blend_light_text_tertiary),color_light_label_text:d(o.vars.color_light_foreground,o.vars.blend_light_text_tertiary),color_light_disabled_label_text:d(o.vars.color_light_foreground,o.vars.blend_light_text_disabled),color_light_readonly_label_text:d(o.vars.color_light_foreground,o.vars.blend_light_text_tertiary),color_light_help_text:d(o.vars.color_light_foreground,o.vars.blend_light_text_tertiary),color_light_required_symbol:d("221, 44, 0"),color_light_focus_border:d(o.vars.color_primary),color_light_counter_ok_border:d(o.vars.color_primary),color_dark_input_text:d(o.vars.color_dark_foreground,o.vars.blend_dark_text_primary),color_dark_input_background:"transparent",color_dark_highlight_text:d(o.vars.color_primary,o.vars.blend_dark_text_primary),color_dark_input_bottom_border:d(o.vars.color_dark_foreground,o.vars.blend_dark_border_light),color_dark_input_error_text:d("222, 50, 38"),color_dark_input_error_border:d("222, 50, 38"),color_dark_input_placeholder:d(o.vars.color_dark_foreground,o.vars.blend_dark_text_tertiary),color_dark_label_text:d(o.vars.color_dark_foreground,o.vars.blend_dark_text_tertiary),color_dark_disabled_label_text:d(o.vars.color_dark_foreground,o.vars.blend_dark_text_disabled),color_dark_readonly_label_text:d(o.vars.color_dark_foreground,o.vars.blend_dark_text_tertiary),color_dark_help_text:d(o.vars.color_dark_foreground,o.vars.blend_dark_text_tertiary),color_dark_required_symbol:d("221, 44, 0"),color_dark_focus_border:d(o.vars.color_primary),color_dark_counter_ok_border:d(o.vars.color_primary)},u=function(e,t){return[r({},e,[l.mixin.clearfix(),{position:"relative",lineHeight:o.vars.line_height,display:"inline-block",boxSizing:"border-box",margin:0,overflow:"visible",paddingBottom:t.vertical_spacing_bottom+"px",width:"100%",maxWidth:"100%"," .pe-textfield__input-area":{position:"relative",paddingTop:t.vertical_spacing_top+"px","&:after":[l.mixin.defaultTransition("opacity",t.input_focus_border_animation_duration),{position:"absolute",content:'""',bottom:0,left:0,height:t.input_focus_border_width+"px",width:"100%",opacity:0}]},".pe-textfield--focused .pe-textfield__input-area:after":{opacity:1}," .pe-textfield__input":{display:"block",fontSize:t.font_size_input+"px",lineHeight:t.line_height_input+"px",width:"100%",background:"none",textAlign:"left",color:"inherit",borderWidth:t.input_border_width+"px",borderStyle:"none none solid none",borderRadius:0,margin:0,padding:t.input_padding_v+"px "+t.input_padding_h+"px","&:textfield--invalid":{boxShadow:"none"},":invalid":{boxShadow:"none"}}," textarea.pe-textfield__input":{margin:t.input_padding_v+"px "+t.input_padding_h+"px",padding:0,display:"block"}," textfield__input:focus, &.pe-textfield--focused .pe-textfield__input":{"border-width":t.input_border_width+"px",outline:"none"}," .pe-textfield__label":{position:"absolute",display:"block",top:t.vertical_spacing_top+t.input_padding_v+"px",bottom:0,left:t.input_padding_h+"px",right:t.input_padding_h+"px",fontSize:t.font_size_input+"px",lineHeight:t.line_height_input+"px",pointerEvents:"none",whiteSpace:"nowrap",textAlign:"left",cursor:"text"},".pe-textfield--dirty .pe-textfield__label":{visibility:"hidden"},"&:not(.pe-textfield--no-char)":{" .pe-textfield__required-indicator, .pe-textfield__optional-indicator":{padding:"0 0 0 .25em"}},".pe-textfield--floating-label":{paddingBottom:t.floating_label_vertical_spacing_bottom+"px"," .pe-textfield__input-area":{paddingTop:t.floating_label_vertical_spacing_top+"px"}," .pe-textfield__label":[l.mixin.defaultTransition("all",t.floating_label_animation_duration),{top:t.floating_label_vertical_spacing_top+t.input_padding_v+"px"}],".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{fontSize:t.font_size_floating_label+"px",top:t.floating_label_top+"px",visibility:"visible"}},".pe-textfield--dense":{fontSize:t.dense_font_size_input+"px",paddingBottom:t.dense_floating_label_vertical_spacing_bottom+"px"," .pe-textfield__input-area":{paddingTop:t.dense_floating_label_vertical_spacing_top+"px"}," .pe-textfield__input":{fontSize:t.dense_font_size_input+"px"}," .pe-textfield__label":{fontSize:t.dense_font_size_input+"px",top:t.dense_floating_label_vertical_spacing_top+t.input_padding_v+"px"},".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{fontSize:t.dense_font_size_floating_label+"px",top:t.dense_floating_label_top+"px"}}}},".pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__label":{cursor:"auto"}," .pe-textfield__input":{"border-bottom":"none"}," .pe-textfield__input-area:after":{opacity:1,height:"1px",bottom:"-1px",backgroundPosition:"top",backgroundSize:"4px 1px",backgroundRepeat:"repeat-x"}}," .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter":{marginTop:t.margin_top_error_message+"px",fontSize:t.font_size_error+"px",lineHeight:o.vars.line_height,minHeight:t.font_size_error*o.vars.line_height+"px"}," .pe-textfield__counter":{textAlign:"right",float:"right",padding:"0 0 0 16px"}," .pe-textfield__help-focus":[l.mixin.defaultTransition("opacity"),{opacity:0}],".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus":{opacity:1},".pe-textfield--hide-clear":{" .pe-textfield__input::-ms-clear":{display:"none"}},".pe-textfield--hide-spinner":{" input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":{"-webkit-appearance":"none",margin:0}," input[type=number]":{"-moz-appearance":"textfield"}}},{".pe-textfield--full-width":{width:"100%",padding:0," .pe-textfield__input-area":{padding:0}," .pe-textfield__input":{padding:t.full_width_input_padding_v+"px "+t.full_width_input_padding_h+"px"}," .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter":{paddingLeft:t.full_width_input_padding_h+"px",paddingRight:t.full_width_input_padding_h+"px"}," .pe-textfield__label":{top:t.full_width_input_padding_v+"px",left:t.full_width_input_padding_h+"px",right:t.full_width_input_padding_h+"px"},".pe-textfield--dense":{" .pe-textfield__input":{fontSize:t.dense_full_width_font_size_input+"px",padding:t.dense_full_width_input_padding_v+"px "+t.dense_full_width_input_padding_h+"px"}," .pe-textfield__label":{fontSize:t.dense_full_width_font_size_input+"px",top:t.dense_full_width_input_padding_v+"px",left:t.dense_full_width_input_padding_h+"px",right:t.dense_full_width_input_padding_h+"px"}}}}])]},c=function(e,t,i,l){return[n({},e.map(function(e){return e+t}).join(","),{color:i["color_"+l+"_focus_border"]," .pe-textfield__input-area":{color:"inherit",backgroundColor:i["color_"+l+"_input_background"],"&:after":{backgroundColor:"currentcolor"}},"&.pe-textfield--counter ":{" .pe-textfield__input-area:after":{backgroundColor:i["color_"+l+"_counter_ok_border"]}}," .pe-textfield__input":{color:i["color_"+l+"_input_text"],borderColor:i["color_"+l+"_input_bottom_border"]}," .pe-textfield__label":{color:i["color_"+l+"_label_text"]},"&.pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__input-area:after":{backgroundColor:"transparent",backgroundImage:"linear-gradient(to right, "+i["color_"+l+"_disabled_label_text"]+" 20%, rgba(255, 255, 255, 0) 0%)"}},"&.pe-textfield--disabled":{" .pe-textfield__input, .pe-textfield__label":{color:i["color_"+l+"_disabled_label_text"]}},"&.pe-textfield--readonly":{" .pe-textfield__input, .pe-textfield__label":{color:i["color_"+l+"_readonly_label_text"]}},"&.pe-textfield--focused":{"&.pe-textfield--floating-label .pe-textfield__label":{color:i["color_"+l+"_highlight_text"]},"&.pe-textfield--required.pe-textfield--floating-label":{" .pe-textfield__required-indicator":{color:i["color_"+l+"_required_symbol"]}}}," .pe-textfield__help, .pe-textfield__counter":{color:i["color_"+l+"_help_text"]},"&.pe-textfield--invalid:not(.pe-textfield--hide-validation)":{" .pe-textfield__input":{borderColor:i["color_"+l+"_input_error_border"],boxShadow:"none"}," .pe-textfield__label":{color:i["color_"+l+"_input_error_text"]}," .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help":{color:i["color_"+l+"_input_error_text"]},"&.pe-textfield--required .pe-textfield__label":{color:i["color_"+l+"_input_error_text"]},"&, &.pe-textfield--counter":{" .pe-textfield__input-area:after":{backgroundColor:i["color_"+l+"_input_error_border"]}}}," .pe-textfield__input:-webkit-autofill":{"-webkit-box-shadow":"0 0 0px 1000px "+i["color_"+l+"_input_background"]+" inset",color:i["color_"+l+"_input_text"]+" !important"}})]},f=function(e,t){return[c([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),c(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},x=[u,f],h="."+_.component,g=function(e,t){return l.styler.generateStyles([e,h],s({},p,t),x)};l.styler.generateStyles([h],p,x);var b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},v=function(e,t){var i=t.validate(e.value);return{invalid:i&&!i.valid,message:i&&i.error}},m=function(e,t){return{invalid:e.value.length>t.counter,message:t.error}},y=function(e,t){return{invalid:!e.inputEl().checkValidity(),message:t.error}},k=function(e,t){var i={invalid:!1,message:void 0};return e.touched&&e.isInvalid&&0===e.value.length&&t.validateResetOnClear&&(e.touched=!1,e.isInvalid=!1,e.error=void 0),!i.invalid&&t.counter&&(i=m(e,t)),!i.invalid&&e.inputEl()&&e.inputEl().checkValidity&&(i=y(e,t)),!i.invalid&&t.validate&&(i=v(e,t)),i},w=function(e,i){var l=e.touched||i.validateAtStart?k(e,i):{invalid:!1,message:void 0},o=e.isInvalid;e.error=l.message,e.isInvalid=l.invalid,l.invalid!==o&&setTimeout(t.redraw,0),l.invalid||(e.error=void 0)},z=function(e){return e.isDirty=e.value.toString().length>0},S=function(e,t){return w(e,t),z(e)},q=function(e,t){if(t.getState){var i=k(e,t);t.getState({focus:e.focus(),dirty:e.isDirty,value:e.value,el:e.inputEl(),invalid:i.invalid,error:i.error})}},I=function(e,t){return e.ignoreEvents&&-1!==e.ignoreEvents.indexOf(t)},E={theme:g,oninit:function(e){var t=e.attrs,l=void 0,o=!1,r=t.error||"",n=i.prop(),a=t.focus||!1;if("function"==typeof t.value){var _=t.value();l=void 0!==_?_:""}else l=void 0!==t.value?t.value:"";""!==l&&(o=!0);var d=function(e){if(void 0===e)return a;a=e,e&&n()&&setTimeout(function(){return n()&&n().focus&&n().focus()},0)};e.state=b(e.state,{value:l,error:r,el:void 0,inputEl:n,focus:d,isInvalid:!1,touched:o})},view:function(e){var l=e.state,o=e.attrs;S(l,o);var r=l.inputEl(),n=l.isInvalid,d=o.element||"div",p=o.multiline?"textarea":"input",u=o.multiline?null:o.type&&"submit"!==o.type&&"search"!==o.type?o.type:"text",c=n&&l.error,f=o.validate||o.min||o.max||o.minlength||o.required||o.pattern,s=o.disabled||o.readonly;if(!o.focus||l.focus()||s||(l.focus(!0),r&&r.focus()),"function"==typeof o.value&&r&&!l.focus()&&!s){var x=o.value().toString();l.value=x,l.touched=!0,S(l,o),q(l,o),r.value=x}var h=b({},i.filterSupportedAttributes(o),{className:[_.component,n?_.stateInvalid:"",l.focus()?_.stateFocused:"",o.floatingLabel?_.hasFloatingLabel:"",o.disabled?_.stateDisabled:"",o.readonly?_.stateReadonly:"",l.isDirty?_.stateDirty:"",o.dense?_.isDense:"",o.required?_.isRequired:"",o.fullWidth?_.hasFullWidth:"",o.counter?_.hasCounter:"",!1!==o.hideSpinner?_.hideSpinner:"",!1!==o.hideClear?_.hideClear:"",o.hideValidation?_.hideValidation:"","dark"===o.tone?"pe-dark-tone":null,"light"===o.tone?"pe-light-tone":null,o.class].join(" "),oncreate:function(e){var t=e.dom;l.el=t,s||S(l,o)}}),g=o.required&&""!==o.requiredIndicator?t("span",{className:_.requiredIndicator},o.requiredIndicator||"*"):null,v=!o.required&&o.optionalIndicator?t("span",{className:_.optionalIndicator},o.optionalIndicator):null,m=o.label?[o.label,g,v]:null,y=[t("div",{className:_.inputArea},[m?t("label",a({className:_.label},"on"+i.touchStartEvent,function(){s||setTimeout(function(){l.inputEl().focus()},0)}),m):null,t(p,b({},{className:_.input,disabled:o.disabled},u?{type:u}:null,o.name?{name:o.name}:null,I(o,"onclick")?null:{onclick:function(){s||(l.focus(!0),q(l,o))}},I(o,"onfocus")?null:{onfocus:function(){s||(l.focus(!0),l.el&&l.el.classList.add(_.stateFocused),q(l,o))}},I(o,"onblur")?null:{onblur:function(e){l.focus(!1),l.touched=!0,l.value=e.target.value,S(l,o),q(l,o),l.el.classList.remove(_.stateFocused)}},I(o,"oninput")?null:{oninput:function(e){l.value=e.target.value,o.validateOnInput&&(l.touched=!0),S(l,o),q(l,o),o.oninput&&o.oninput(l.value,e)}},I(o,"onkeydown")?null:{onkeydown:function(e){13===e.which?(l.touched=!0,S(l,o),q(l,o)):27===e.which?l.inputEl().blur(e):9===e.which&&setTimeout(function(){t.redraw(),setTimeout(t.redraw,250)},1)}},{oncreate:function(e){var t=e.dom;l.inputEl(t),l.inputEl().value=l.value,q(l,o)}},o.events?o.events:null,void 0!==o.readonly?{readonly:!0}:null,void 0!==o.pattern?{pattern:o.pattern}:null,void 0!==o.maxlength?{maxlength:o.maxlength}:null,void 0!==o.minlength?{minlength:o.minlength}:null,void 0!==o.max?{max:o.max}:null,void 0!==o.min?{min:o.min}:null,void 0!==o.autofocus?{autofocus:o.autofocus}:null,void 0!==o.required?{required:o.required}:null,void 0!==o.tabindex?{tabindex:o.tabindex}:null,void 0!==o.rows?{rows:o.rows}:null))]),o.counter?t("div",{className:_.counter},l.value.length+" / "+o.counter):null,o.help&&!c?t("div",{className:[_.help,o.focusHelp?_.focusHelp:""].join(" ")},o.help):null,c?t("div",{className:_.error},l.error):f&&!o.help?t("div",{className:_.errorPlaceholder}):null];return t(d,h,[o.before,y,o.after])}};e.default=E,e.classes=_,e.vars=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-textfield.js.map
