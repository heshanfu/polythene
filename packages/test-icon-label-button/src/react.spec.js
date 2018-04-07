import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, keys, IconLabelButton } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ IconLabelButton, renderer, keys }).concat(reactTests),
  renderer
});
