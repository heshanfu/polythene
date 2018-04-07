(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-selection-control'), require('polythene-core-css'), require('polythene-core-icon-label-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-selection-control', 'polythene-core-css', 'polythene-core-icon-label-button'], factory) :
  (factory((global.polythene = {}),global['polythene-css-selection-control'],global['polythene-core-css'],global['polythene-core-icon-label-button']));
}(this, (function (exports,polytheneCssSelectionControl,polytheneCoreCss,polytheneCoreIconLabelButton) { 'use strict';

  var classes = {
    component: "pe-icon-label-button"
  };

  var layout = (function (selector, componentVars) {
    return polytheneCssSelectionControl.layout(selector, componentVars, "checkbox");
  });

  var color = (function (selector, componentVars) {
    return polytheneCssSelectionControl.color(selector, componentVars);
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreIconLabelButton.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreIconLabelButton.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreIconLabelButton.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreIconLabelButton.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-icon-label-button.js.map
