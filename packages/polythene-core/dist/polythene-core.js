!function(e,_){"object"==typeof exports&&"undefined"!=typeof module?_(exports):"function"==typeof define&&define.amd?define(["exports"],_):_(e.polythene=e.polythene||{})}(this,function(e){"use strict";var _={rgba:function(e){return"rgba("+e+","+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},hex:function(e){var _=parseInt(e.substring(1),16);return(_>>16&255)+","+(_>>8&255)+","+(255&_)},isInteger:function(e){return"number"==typeof e&&isFinite(e)&&e>-9007199254740992&&e<9007199254740992&&Math.floor(e)===e},grid_unit:4,grid_unit_component:8,grid_unit_menu:56,grid_unit_icon_button:48,unit_block_border_radius:2,unit_item_border_radius:2,unit_indent:72,unit_side_padding:window.innerWidth>=1024?24:16,unit_touch_height:48,unit_icon_size_small:16,unit_icon_size:24,unit_icon_size_medium:32,unit_icon_size_large:40,unit_screen_size_extra_large:1280,unit_screen_size_large:960,unit_screen_size_medium:480,unit_screen_size_small:320,animation_duration:".18s",animation_curve_slow_in_fast_out:"cubic-bezier(.4, 0, .2, 1)",animation_curve_slow_in_linear_out:"cubic-bezier(0, 0, .2, 1)",animation_curve_linear_in_fast_out:"cubic-bezier(.4, 0, 1, 1)",animation_curve_default:"ease-out",font_weight_light:300,font_weight_normal:400,font_weight_medium:500,font_weight_bold:700,font_size_title:20,line_height:1.3,color_primary:"33, 150, 243",color_primary_active:"30, 136, 229",color_primary_dark:"25, 118, 210",color_primary_faded:"100, 181, 249",color_primary_foreground:"255, 255, 255",color_light_background:"255, 255, 255",color_light_foreground:"0, 0, 0",color_dark_background:"34, 34, 34",color_dark_foreground:"255, 255, 255",blend_light_text_primary:.87,blend_light_text_regular:.73,blend_light_text_secondary:.54,blend_light_text_tertiary:.4,blend_light_text_disabled:.26,blend_light_border_light:.11,blend_light_background_active:.14,blend_light_background_hover:.06,blend_light_background_hover_medium:.12,blend_light_background_disabled:.09,blend_light_overlay_background:.3,blend_dark_text_primary:1,blend_dark_text_regular:.87,blend_dark_text_secondary:.7,blend_dark_text_tertiary:.4,blend_dark_text_disabled:.26,blend_dark_border_light:.1,blend_dark_background_active:.14,blend_dark_background_hover:.08,blend_dark_background_hoverMedium:.12,blend_dark_background_disabled:.12,blend_dark_overlay_background:.3,prefixes_animation:["o","moz","webkit"],prefixes_appearance:["o","moz","ms","webkit"],prefixes_background_size:["o","moz","webkit"],prefixes_box_shadow:["moz","webkit"],prefixes_keyframes:["o","moz","webkit"],prefixes_transform:["o","moz","ms","webkit"],prefixes_transition:["o","moz","webkit"],prefixes_user_select:["moz","ms","webkit"],breakpoint_small_handset_portrait:0,breakpoint_medium_handset_portrait:360,breakpoint_large_handset_portrait:400,breakpoint_small_tablet_portrait:600,breakpoint_large_tablet_portrait:720,breakpoint_small_handset_landscape:480,breakpoint_medium_handset_landscape:600,breakpoint_large_handset_landscape:720,env_tablet:window.innerWidth>=600,env_desktop:window.innerWidth>=1024,z_menu:1e3,z_header_container:2e3,z_fixed_header_container:3e3,z_notification:4e3,z_dialog:5e3};e.defaultVariables=_,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core.js.map
