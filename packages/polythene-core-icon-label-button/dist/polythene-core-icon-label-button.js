(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-selection-control')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-selection-control'], factory) :
  (factory((global.polythene = {}),global['polythene-core-selection-control']));
}(this, (function (exports,polytheneCoreSelectionControl) { 'use strict';

  var classes = {
    component: "pe-icon-label-button"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-icon-label-button)

  // Props to be passed to a selection control

  var createProps = function createProps(vnode) {
    var attrs = vnode.attrs;
    return _extends({}, attrs, {
      icons: {
        iconOff: attrs.icon,
        iconOn: attrs.icon
      },
      selectable: attrs.selectable || function () {
        return true;
      }, // default: always selectable, regardless the checked state
      instanceClass: classes.component,
      type: "checkbox"
    });
  };

  var iconLabelButton = /*#__PURE__*/Object.freeze({
    createProps: createProps
  });

  exports.vars = polytheneCoreSelectionControl.vars;
  exports.coreIconLabelButton = iconLabelButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-icon-label-button.js.map
