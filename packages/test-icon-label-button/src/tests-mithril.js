import { renderer, IconLabelButton, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ IconLabelButton, renderer, keys }))
  .concat(mithrilTests({ IconLabelButton, renderer, keys }));
