import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, keys, Button, RaisedButton, Dialog, DialogInstance } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ renderer, keys, Button, RaisedButton, Dialog, DialogInstance }).concat(reactTests),
  renderer
});
