(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-core-tabs')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-core-tabs'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-core-tabs']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCoreTabs) { 'use strict';

  var buttonClasses = {
    base: "pe-button",
    component: "pe-button pe-text-button",
    row: "pe-button-row",

    // elements
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",

    // states
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected"
  };

  var classes = {
    component: "pe-tabs",

    // elements
    indicator: "pe-tabs__indicator",
    scrollButton: "pe-tabs__scroll-button",
    scrollButtonAtEnd: "pe-tabs__scroll-button-end",
    scrollButtonAtStart: "pe-tabs__scroll-button-start",
    tab: "pe-tabs__tab",
    tabContent: "pe-tabs__tab-content",
    tabRow: "pe-tabs__row",

    // states
    activeSelectable: "pe-tabs__active--selectable",
    isAtEnd: "pe-tabs--end",
    isAtStart: "pe-tabs--start",
    isAutofit: "pe-tabs--autofit",
    isMenu: "pe-tabs--menu",
    scrollable: "pe-tabs--scrollable",
    compactTabs: "pe-tabs--compact",
    tabHasIcon: "pe-tabs__tab--icon",
    tabRowCentered: "pe-tabs__row--centered",
    tabRowIndent: "pe-tabs__row--indent",

    // lookup
    label: buttonClasses.label
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function (componentVars) {
      return {
        " .pe-tabs__row": {
          ".pe-tabs__row--indent": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", componentVars.tabs_indent + "px")
        },
        " .pe-tabs__indicator": _defineProperty({
          transformOrigin: isRTL ? "right 50%" : "left 50%"
        }, isRTL ? "right" : "left", 0)
      };
    };
  };

  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var layout = (function (selector, componentVars) {
    return [_defineProperty({}, selector, [alignLeft(componentVars), _defineProperty({
      userSelect: "none",
      transform: "translate3d(0,0,0)",
      "-webkit-overflow-scrolling": "touch",

      "& ::-webkit-scrollbar": {
        "display": "none"
      },

      ".pe-tabs--menu": {
        // reset sizes to fit within a small space
        " .pe-tabs__tab": {
          height: componentVars.menu_tab_height + "px"
        },
        " .pe-tabs__tab--icon": {
          height: componentVars.menu_tab_icon_label_height + "px"
        },
        " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab--icon, .pe-tabs__tab.pe-text-button": {
          minWidth: 0,
          height: componentVars.menu_tab_icon_label_height + "px",

          " .pe-button__content": {
            padding: "0 " + componentVars.tab_menu_content_padding_v + "px",
            height: componentVars.menu_tab_height + "px",

            " .pe-icon": {
              marginBottom: 0
            },
            " .pe-button__content": {
              fontSize: "10px",
              lineHeight: "12px",
              textTransform: "none"
            }
          }
        }
      },

      ".pe-tabs--scrollable": {
        display: "flex",
        // hide scrollbar (this approach is required for Firefox)
        "max-height": componentVars.tab_height + "px",
        "-ms-overflow-style": "none",

        " .pe-tabs__scroll-button": {
          // default hide, show with html.pe-no-touch
          display: "none"
        },

        " .pe-tabs__row": {
          marginBottom: -componentVars.scrollbar_offset + "px"
        },
        " .pe-tabs__tab": {
          minWidth: 0
        }
      },

      " .pe-no-touch &": {
        ".pe-tabs--scrollable": {
          backgroundColor: "inherit"
        },

        " .pe-tabs__scroll-button": {
          position: "relative",
          display: "block",
          backgroundColor: "inherit",
          zIndex: 1,
          borderRadius: 0,
          width: componentVars.scroll_button_size + "px",
          height: componentVars.scroll_button_size + "px",

          " .pe-button__content": {
            borderRadius: 0,
            backgroundColor: "inherit",
            transitionProperty: componentVars.tab_label_transition_property,
            transitionDuration: componentVars.scroll_button_fade_duration + "s",
            transitionTimingFunction: "ease-in-out",
            transitionDelay: componentVars.scroll_button_fade_delay + "s",
            opacity: componentVars.scroll_button_opacity
          }
        },
        ".pe-tabs--start .pe-tabs__scroll-button-start": {
          pointerEvents: "none",
          cursor: "default",
          opacity: 0
        },
        ".pe-tabs--end .pe-tabs__scroll-button-end": {
          pointerEvents: "none",
          cursor: "default",
          opacity: 0
        }
      },

      " .pe-tabs__row": [polytheneCoreCss.flex.layoutHorizontal, {
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",

        ".pe-tabs__row--indent": {
          margin: 0,
          overflow: "auto"
        },

        ".pe-tabs__row--centered": polytheneCoreCss.flex.layoutCenterJustified
      }],

      " .pe-tabs__scroll-button-offset": [polytheneCoreCss.flex.flex(), polytheneCoreCss.flex.flexIndex("none")],

      " .pe-tabs__tab": [polytheneCoreCss.flex.flex(), polytheneCoreCss.flex.flexIndex("none"), polytheneCoreCss.mixin.defaultTransition("color"), {
        userSelect: "none",
        margin: 0,
        borderRadius: 0,
        height: componentVars.tab_height + "px",
        padding: 0,
        color: "inherit",
        minWidth: !isNaN(componentVars.tab_min_width) ? componentVars.tab_min_width + "px" : componentVars.tab_min_width, // for smaller screens, see also media query below
        maxWidth: !isNaN(componentVars.tab_max_width) ? componentVars.tab_max_width + "px" : componentVars.tab_max_width,

        ".pe-text-button .pe-button__content": {
          padding: "0 " + componentVars.tab_content_padding_v + "px",
          height: componentVars.tab_height + "px",
          lineHeight: polytheneTheme.vars.line_height + "em",
          borderRadius: 0,
          position: "relative",

          " .pe-button__label, .pe-icon": {
            maxWidth: componentVars.label_max_width + "px", // or .pe-tabs width minus 56dp
            lineHeight: componentVars.tab_label_line_height + "px",
            maxHeight: 2 * componentVars.tab_label_line_height + "px",
            overflow: "hidden",
            whiteSpace: "normal"
          },
          " .pe-button__label": [polytheneCoreCss.mixin.defaultTransition("opacity", componentVars.animation_duration), {
            margin: componentVars.tab_label_vertical_offset + "px 0 0 0",
            padding: 0,
            opacity: componentVars.label_opacity,
            width: "100%" // for IE 11
          }],
          " .pe-icon": {
            marginLeft: "auto",
            marginRight: "auto"
          },
          " .pe-button__focus": {
            display: "none"
          }
        },
        ".pe-button--selected .pe-button__content": {
          " .pe-button__label": {
            opacity: 1
          }
        },
        ".pe-tabs__tab--icon": {
          "&, .pe-button__content": [{
            height: componentVars.tab_icon_label_height + "px"
          }, {
            " .pe-button__content, .pe-icon": {
              margin: "0 auto"
            }
          }, {
            " .pe-icon": {
              marginBottom: componentVars.tab_icon_label_icon_spacing + "px"
            }
          }]
        }
      }],

      ".pe-tabs--compact": {
        " .pe-tabs__tab": {
          minWidth: "initial"
        }
      },

      " .pe-tabs__tab-content": [polytheneCoreCss.flex.layoutCenterCenter, polytheneCoreCss.flex.layoutVertical, {
        height: "inherit"
      }],

      ".pe-tabs--autofit .pe-tabs__tab": [polytheneCoreCss.flex.flex(), {
        minWidth: "initial",
        maxWidth: "none"
      }],

      ".pe-tabs__active--selectable": {
        " .pe-tabs__tab.pe-button--selected": {
          cursor: "pointer",
          pointerEvents: "initial"
        }
      },

      " .pe-tabs__indicator": {
        transform: "translate3d(0,0,0)",
        // transformOrigin set in alignSide
        transitionProperty: "all",
        transitionTimingFunction: "ease-in-out",
        position: "absolute",
        zIndex: 1,
        height: componentVars.tab_indicator_height + "px",
        bottom: 0,
        // left/right set in alignSide
        width: "100%" // and transformed with js
        // background-color defined in implementation/theme css
      },

      " .pe-toolbar--tabs .pe-toolbar__bar &": [polytheneCoreCss.mixin.fit(), {
        width: "auto",
        margin: 0,
        top: "auto"
      }]

    }, "@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_landscape_up + "px)", _defineProperty({}, selector, {
      ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit):not(.pe-tabs--scrollable) .pe-tabs__tab": {
        minWidth: componentVars.tab_min_width_tablet + "px"
      }
    }))]), _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(componentVars)])];
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      color: componentVars["color_" + tint],

      " .pe-tabs__tab.pe-button--selected": {
        color: componentVars["color_" + tint + "_selected"],

        " .pe-button__content": {
          background: componentVars["color_" + tint + "_selected_background"]
        }
      },
      " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
        color: componentVars["color_" + tint + "_icon"]
      },
      " .pe-tabs__indicator": {
        backgroundColor: componentVars["color_" + tint + "_tab_indicator"]
      },
      " .pe-tabs__scroll-button": {
        color: "inherit"
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
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreTabs.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreTabs.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreTabs.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreTabs.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-tabs.js.map
