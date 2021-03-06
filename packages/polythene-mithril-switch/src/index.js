import { StateComponent } from "polythene-mithril-base";
import { coreSwitch as core } from "polythene-core-switch";
import { SelectionControl } from "./selection-control";

export const Switch = StateComponent(Object.assign(
  {},
  core,
  {
    component: SelectionControl
  }
));

Switch.displayName = "Switch";
