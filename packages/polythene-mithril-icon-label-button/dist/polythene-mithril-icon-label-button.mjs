import { ViewComponent, StateComponent } from 'polythene-mithril-base';
import { viewControl, coreSelectionControl } from 'polythene-core-selection-control';
import { Icon } from 'polythene-mithril-icon';
import { IconButton } from 'polythene-mithril-icon-button';
import { coreIconLabelButton } from 'polythene-core-icon-label-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = ViewComponent(_extends({}, viewControl, {
  createContent: function createContent(vnode, args) {
    return viewControl.createContent(vnode, _extends(args, { Icon: Icon, IconButton: IconButton }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = StateComponent(_extends$1({}, coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return coreSelectionControl.createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var IconLabelButton = StateComponent(_extends$2({}, coreIconLabelButton, {
  component: SelectionControl
}));

IconLabelButton.displayName = "IconLabelButton";

export { IconLabelButton };
