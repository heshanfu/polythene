import { StateComponent } from "polythene-mithril-base";
import { coreIconLabelButton as core } from "polythene-core-icon-label-button";
import { SelectionControl } from "./selection-control";

export const IconLabelButton = StateComponent(Object.assign(
  {},
  core,
  {
    component: SelectionControl
  }
));

IconLabelButton.displayName = "IconLabelButton";
