import { StateComponent } from "polythene-mithril-base";
import { coreDialogPane as core } from "polythene-core-dialog-pane";

export const DialogPane = StateComponent(core);

DialogPane.theme = core.theme;
DialogPane.displayName = "DialogPane";