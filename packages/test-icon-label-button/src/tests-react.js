import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, IconLabelButton, keys } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ IconLabelButton, renderer: h }) => { // eslint-disable-line no-unused-vars

  return [];
};

export default []
  .concat(genericTests({ IconLabelButton, renderer, keys }))
  .concat(reactTests({ IconLabelButton, renderer, keys }));
