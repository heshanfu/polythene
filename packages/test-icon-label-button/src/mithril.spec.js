import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, keys, IconLabelButton } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ IconLabelButton, renderer, keys }).concat(mithrilTests),
  renderer
});
