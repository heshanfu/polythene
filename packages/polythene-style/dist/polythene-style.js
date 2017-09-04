!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-utilities"),require("polythene-core-css"),require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-utilities","polythene-core-css","polythene-core"],t):t(e.polythene={},e["polythene-utilities"],e["polythene-core-css"],e["polythene-core"])}(this,function(e,t,i,n){"use strict";var o=[{"html, body, button, input, select, textarea":{fontFamily:"Roboto, Helvetica, Arial, sans-serif"}}],_=function(){return t.addWebFont("google","Roboto:400,500,700,400italic:latin"),i.styler.add("pe-roboto",o)},r={css:"file",grid_unit:4,grid_unit_component:8,grid_unit_menu:56,grid_unit_icon_button:48,unit_block_border_radius:2,unit_item_border_radius:2,unit_indent:72,unit_side_padding:!n.isClient||window.innerWidth>=1024?24:16,unit_touch_height:48,unit_icon_size_small:16,unit_icon_size:24,unit_icon_size_medium:32,unit_icon_size_large:40,unit_screen_size_extra_large:1280,unit_screen_size_large:960,unit_screen_size_medium:480,unit_screen_size_small:320,animation_duration:".18s",animation_curve_slow_in_fast_out:"cubic-bezier(.4, 0, .2, 1)",animation_curve_slow_in_linear_out:"cubic-bezier(0, 0, .2, 1)",animation_curve_linear_in_fast_out:"cubic-bezier(.4, 0, 1, 1)",animation_curve_default:"ease-out",font_weight_light:300,font_weight_normal:400,font_weight_medium:500,font_weight_bold:700,font_size_title:20,line_height:1.3,color_primary:"33, 150, 243",color_primary_active:"30, 136, 229",color_primary_dark:"25, 118, 210",color_primary_faded:"100, 181, 249",color_primary_foreground:"255, 255, 255",color_light_background:"255, 255, 255",color_light_foreground:"0, 0, 0",color_dark_background:"34, 34, 34",color_dark_foreground:"255, 255, 255",blend_light_text_primary:.87,blend_light_text_regular:.73,blend_light_text_secondary:.54,blend_light_text_tertiary:.4,blend_light_text_disabled:.26,blend_light_border_light:.11,blend_light_background_active:.14,blend_light_background_hover:.06,blend_light_background_hover_medium:.12,blend_light_background_disabled:.09,blend_light_overlay_background:.3,blend_dark_text_primary:1,blend_dark_text_regular:.87,blend_dark_text_secondary:.7,blend_dark_text_tertiary:.4,blend_dark_text_disabled:.26,blend_dark_border_light:.1,blend_dark_background_active:.14,blend_dark_background_hover:.08,blend_dark_background_hoverMedium:.12,blend_dark_background_disabled:.12,blend_dark_overlay_background:.3,prefixes_animation:["o","moz","webkit"],prefixes_appearance:["o","moz","ms","webkit"],prefixes_background_size:["o","moz","webkit"],prefixes_box_shadow:["moz","webkit"],prefixes_keyframes:["o","moz","webkit"],prefixes_transform:["o","moz","ms","webkit"],prefixes_transition:["o","moz","webkit"],prefixes_user_select:["moz","ms","webkit"],breakpoint_small_handset_portrait:0,breakpoint_medium_handset_portrait:360,breakpoint_large_handset_portrait:400,breakpoint_small_tablet_portrait:600,breakpoint_large_tablet_portrait:720,breakpoint_small_handset_landscape:480,breakpoint_medium_handset_landscape:600,breakpoint_large_handset_landscape:720,env_tablet:!!n.isClient&&window.innerWidth>=600,env_desktop:!n.isClient||window.innerWidth>=1024,z_menu:1e3,z_header_container:2e3,z_fixed_header_container:3e3,z_notification:4e3,z_dialog:5e3},a=[{" h1, h2, h3, h4, h5, h6, p":{margin:0,padding:0}},{" h1 small, h2 small, h3 small, h4 small, h5 small, h6 small":{"font-weight":r.font_weight_normal,"line-height":r.line_height,"letter-spacing":"-0.02em","font-size":"0.6em"}},{" h1":{"font-size":"56px","font-weight":r.font_weight_normal,"line-height":r.line_height,"margin-top":"24px","margin-bottom":"24px"}},{" h2":{"font-size":"45px","font-weight":r.font_weight_normal,"line-height":"48px","margin-top":"24px","margin-bottom":"24px"}},{" h3":{"font-size":"34px","font-weight":r.font_weight_normal,"line-height":"40px","margin-top":"24px","margin-bottom":"24px"}},{" h4":{"font-size":"24px","font-weight":r.font_weight_normal,"line-height":"32px","-moz-osx-font-smoothing":"grayscale","margin-top":"24px","margin-bottom":"16px"}},{" h5":{"font-size":"20px","font-weight":r.font_weight_medium,"line-height":"1","letter-spacing":"-0.02em","margin-top":"24px","margin-bottom":"16px"}},{" h6":{"font-size":"16px","font-weight":r.font_weight_normal,"line-height":"24px","letter-spacing":"0.04em","margin-top":"24px","margin-bottom":"16px"}},{" html, body":{"font-size":"14px","line-height":"20px","font-weight":r.font_weight_normal}," p":{"font-size":"14px","font-weight":r.font_weight_normal,"line-height":"24px","letter-spacing":"0","margin-bottom":"16px"}," blockquote":{position:"relative","font-size":"24px","font-weight":r.font_weight_normal,"font-style":"italic","line-height":r.line_height,"letter-spacing":"0.08em","margin-top":"24px","margin-bottom":"16px"}," ul, ol":{"font-size":"14px","font-weight":r.font_weight_normal,"line-height":"24px","letter-spacing":0}," b, strong":{"font-weight":r.font_weight_medium}}],l=[{" html":{"box-sizing":"border-box"}," *, *:before, *:after":{"box-sizing":"inherit"}," *":[{"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},{"-webkit-tap-highlight-color":"transparent"}]," a, a:active, a:focus, input:active, *:focus":{outline:0}," input:disabled":{opacity:1}}],d=function(){return i.styler.add("pe-material-design-typography",l,a)};e.addRoboto=_,e.addTypography=d,e.vars=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-style.js.map
