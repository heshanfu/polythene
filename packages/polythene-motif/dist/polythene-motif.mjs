import { addWebFont } from 'polythene-utilities';
import { styler } from 'polythene-core-css';
import { isClient } from 'polythene-core';

var robotoStyles = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

var addRoboto = function addRoboto() {
  return addWebFont('google', 'Roboto:400,500,700,400italic:latin'), styler.add("pe-roboto", robotoStyles);
};

// Global theme variables
// How to change these variables for your app - see the README.

var hex = function hex(_hex) {
    var bigint = parseInt(_hex.substring(1), 16);
    var r = bigint >> 16 & 255;
    var g = bigint >> 8 & 255;
    var b = bigint & 255;
    return r + ',' + g + ',' + b;
};

var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return 'rgba(' + colorStr + ',' + opacity + ')';
};

var isInteger = function isInteger(nVal) {
    return typeof nVal === 'number' && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
};

//const isTablet = window.innerWidth >= 600;
var isDesktop = isClient ? window.innerWidth >= 1024 : true;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = 'cubic-bezier(.4, 0, .2, 1)';
var animation_curve_slow_in_linear_out = 'cubic-bezier(0, 0, .2, 1)';
var animation_curve_linear_in_fast_out = 'cubic-bezier(.4, 0, 1, 1)';

var defaultVariables = {
    // util functions
    rgba: rgba,
    hex: hex,
    isInteger: isInteger,

    grid_unit: grid_unit,
    grid_unit_component: grid_unit_component,
    grid_unit_menu: 56,
    grid_unit_icon_button: 6 * grid_unit_component, // 48

    // common sizes
    unit_block_border_radius: 2,
    unit_item_border_radius: 2,
    unit_indent: 72,
    unit_side_padding: isDesktop ? 24 : 16,

    // buttons
    unit_touch_height: 48,
    unit_icon_size_small: 2 * grid_unit_component, // 16
    unit_icon_size: 3 * grid_unit_component, // 24
    unit_icon_size_medium: 4 * grid_unit_component, // 32
    unit_icon_size_large: 5 * grid_unit_component, // 40

    // screen dimensions
    unit_screen_size_extra_large: 1280,
    unit_screen_size_large: 960,
    unit_screen_size_medium: 480,
    unit_screen_size_small: 320,

    // transitions
    animation_duration: '.18s',
    animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
    animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
    animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
    animation_curve_default: 'ease-out',

    // font
    font_weight_light: 300,
    font_weight_normal: 400,
    font_weight_medium: 500,
    font_weight_bold: 700,
    font_size_title: 20,
    line_height: 1.3,

    // base colors
    color_primary: '33, 150, 243', // blue 500
    color_primary_active: '30, 136, 229', // blue 600
    color_primary_dark: '25, 118, 210', // blue 700
    color_primary_faded: '100, 181, 249', // blue 300
    color_primary_foreground: '255, 255, 255',

    color_light_background: '255, 255, 255',
    color_light_foreground: '0, 0, 0',
    color_dark_background: '34, 34, 34',
    color_dark_foreground: '255, 255, 255',

    // blends
    blend_light_text_primary: .87,
    blend_light_text_regular: .73,
    blend_light_text_secondary: .54,
    blend_light_text_tertiary: .40,
    blend_light_text_disabled: .26,
    blend_light_border_light: .11,
    blend_light_background_active: .14,
    blend_light_background_hover: .06,
    blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
    blend_light_background_disabled: .09,
    blend_light_overlay_background: .3,

    blend_dark_text_primary: 1,
    blend_dark_text_regular: .87,
    blend_dark_text_secondary: .70,
    blend_dark_text_tertiary: .40,
    blend_dark_text_disabled: .26,
    blend_dark_border_light: .10,
    blend_dark_background_active: .14,
    blend_dark_background_hover: .08,
    blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
    blend_dark_background_disabled: .12,
    blend_dark_overlay_background: .3,

    // css vendor prefixes
    prefixes_animation: ['o', 'moz', 'webkit'],
    prefixes_appearance: ['o', 'moz', 'ms', 'webkit'],
    prefixes_background_size: ['o', 'moz', 'webkit'],
    prefixes_box_shadow: ['moz', 'webkit'],
    prefixes_keyframes: ['o', 'moz', 'webkit'],
    prefixes_transform: ['o', 'moz', 'ms', 'webkit'],
    prefixes_transition: ['o', 'moz', 'webkit'],
    prefixes_user_select: ['moz', 'ms', 'webkit'],

    // breakpoints
    breakpoint_small_handset_portrait: 0,
    breakpoint_medium_handset_portrait: 360,
    breakpoint_large_handset_portrait: 400,
    breakpoint_small_tablet_portrait: 600,
    breakpoint_large_tablet_portrait: 720,
    // landscape
    breakpoint_small_handset_landscape: 480,
    breakpoint_medium_handset_landscape: 600,
    breakpoint_large_handset_landscape: 720,

    // environment
    env_tablet: isClient ? window.innerWidth >= 600 : false,
    env_desktop: isClient ? window.innerWidth >= 1024 : true,

    // z-index
    z_menu: 1000,
    z_header_container: 2000,
    z_fixed_header_container: 3000,
    z_notification: 4000,
    z_dialog: 5000
};

var fontSize = 14;

var typographyStyles = [{
  " h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
    padding: 0
  }
}, {
  " h1 small, h2 small, h3 small, h4 small, h5 small, h6 small": {
    "font-weight": defaultVariables.font_weight_normal,
    "line-height": defaultVariables.line_height,
    "letter-spacing": "-0.02em",
    "font-size": "0.6em"
  }
}, {
  " h1": {
    "font-size": "56px",
    "font-weight": defaultVariables.font_weight_normal,
    "line-height": defaultVariables.line_height,
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h2": {
    "font-size": "45px",
    "font-weight": defaultVariables.font_weight_normal,
    "line-height": "48px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h3": {
    "font-size": "34px",
    "font-weight": defaultVariables.font_weight_normal,
    "line-height": "40px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h4": {
    "font-size": "24px",
    "font-weight": defaultVariables.font_weight_normal,
    "line-height": "32px",
    "-moz-osx-font-smoothing": "grayscale",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h5": {
    "font-size": "20px",
    "font-weight": defaultVariables.font_weight_medium,
    "line-height": "1",
    "letter-spacing": "-0.02em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h6": {
    "font-size": "16px",
    "font-weight": defaultVariables.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0.04em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " html, body": {
    "font-size": fontSize + "px",
    "line-height": "20px",
    "font-weight": defaultVariables.font_weight_normal
  },
  " p": {
    "font-size": fontSize + "px",
    "font-weight": defaultVariables.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0",
    "margin-bottom": "16px"
  },
  " blockquote": {
    "position": "relative",
    "font-size": "24px",
    "font-weight": defaultVariables.font_weight_normal,
    "font-style": "italic",
    "line-height": defaultVariables.line_height,
    "letter-spacing": "0.08em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  },
  " ul, ol": {
    "font-size": fontSize + "px",
    "font-weight": defaultVariables.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": 0
  },
  " b, strong": {
    "font-weight": defaultVariables.font_weight_medium
  }
}];

var resetStyles = [{
  // apply a natural box layout model to all elements, but allow elements to change
  " html": {
    "box-sizing": "border-box"
  },
  " *, *:before, *:after": {
    "box-sizing": "inherit"
  },
  " *": [
  // remove tap highlight in mobile Safari
  {
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
  }, {
    "-webkit-tap-highlight-color": "transparent" // For some Androids
  }],

  // Remove dotted link borders in Firefox
  " a, a:active, a:focus, input:active, input[type]:focus": {
    outline: 0
  },

  // Mobile Safari: override default fading of disabled elements
  " input:disabled": {
    opacity: 1
  }
}];

var addTypography = function addTypography() {
  return styler.add("pe-material-design-typography", resetStyles, typographyStyles);
};

export { addRoboto, addTypography, defaultVariables };
