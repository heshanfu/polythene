(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css'), require('polythene-core-menu')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css', 'polythene-core-menu'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css'],global['polythene-core-menu']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss,polytheneCoreMenu) { 'use strict';

  var listTileClasses = {
    component: "pe-list-tile",

    // elements
    content: "pe-list-tile__content",
    highSubtitle: "pe-list-tile__high-subtitle",
    primary: "pe-list-tile__primary",
    secondary: "pe-list-tile__secondary",
    subtitle: "pe-list-tile__subtitle",
    title: "pe-list-tile__title",
    contentFront: "pe-list-tile__content-front",

    // states
    compact: "pe-list-tile--compact",
    compactFront: "pe-list-tile--compact-front",
    disabled: "pe-list-tile--disabled",
    hasFront: "pe-list-tile--front",
    hasHighSubtitle: "pe-list-tile--high-subtitle",
    hasSubtitle: "pe-list-tile--subtitle",
    header: "pe-list-tile--header",
    hoverable: "pe-list-tile--hoverable",
    selectable: "pe-list-tile--selectable",
    selected: "pe-list-tile--selected",
    highlight: "pe-list-tile--highlight",
    sticky: "pe-list-tile--sticky",
    navigation: "pe-list-tile--navigation"
  };

  var classes = {
    component: "pe-menu",

    // elements
    content: "pe-menu__content",
    placeholder: "pe-menu__placeholder",
    target: "pe-menu__target",

    // states
    permanent: "pe-menu--permanent",
    fullHeight: "pe-menu--full-height",
    floating: "pe-menu--floating",
    visible: "pe-menu--visible",
    width_auto: "pe-menu--width-auto",
    width_n: "pe-menu--width-",

    // lookup
    listTile: listTileClasses.component,
    selectedListTile: listTileClasses.selected
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var unifySize = function unifySize(componentVars, size) {
    return size < componentVars.min_size ? componentVars.min_size : size;
  };

  var widthClass = function widthClass(size) {
    var sizeStr = size.toString().replace(".", "-");
    return "pe-menu--width-" + sizeStr;
  };

  var widthStyle = function widthStyle(componentVars, size) {
    var s = unifySize(componentVars, size);
    return _defineProperty({}, "&." + widthClass(s), {
      width: componentVars.size_factor * s + "px"
      // We can't set maxWidth because we don't know the size of the container
    });
  };

  var layout = (function (selector, componentVars) {
    return [_defineProperty({}, selector, [componentVars.sizes.map(function (size) {
      return widthStyle(componentVars, size);
    }), componentVars.animation_hide_css, {
      transitionDelay: componentVars.animation_delay,
      transitionDuration: componentVars.animation_duration,
      transitionTimingFunction: componentVars.animation_timing_function,
      transitionProperty: "all",
      zIndex: polytheneTheme.vars.z_menu,
      opacity: 0,
      position: "absolute",
      minWidth: polytheneTheme.vars.grid_unit_menu * componentVars.min_size + "px",

      "&.pe-menu--width-auto": {
        width: "auto"
      },

      "&.pe-menu--visible": [componentVars.animation_show_css],

      "&.pe-menu--permanent": {
        position: "relative",
        opacity: 1,
        zIndex: 0
      },

      " .pe-menu__content": {
        width: "100%"
      },

      ".pe-menu--floating": {
        " .pe-menu__content": {
          borderRadius: componentVars.border_radius + "px"
        }
      },

      ".pe-menu--full-height": {
        height: "100%",

        " .pe-menu__content": {
          height: "100%"
        }
      }
    }])];
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      " .pe-menu__content": {
        "background-color": componentVars["color_" + tint + "_background"]
      }
    })];
  };

  var color = (function (selector, componentVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreMenu.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreMenu.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreMenu.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreMenu.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-menu.js.map
