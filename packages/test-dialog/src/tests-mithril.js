import { renderer, keys, Button, RaisedButton, Dialog, DialogPane, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile } from "polythene-mithril";
import genericTests from "./tests-generic";
import form from "./components/form-mithril";
import Updating from "./components/updating-mithril";
import Spawns from "./components/spawns-mithril";

const mithrilTests = ({ renderer, keys, Dialog, RaisedButton }) => {

  const Opener = (dialogAttrs, label = "Open") => renderer(RaisedButton, {
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs)
    }
  });

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Conditional button states",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener(form)
      }
    },
    {
      name: "Updating dialog",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          renderer(Updating)
      }
    },
    {
      name: "Spawns and ids",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          renderer(Spawns)
      }
    },
  ];
};

export default []
  .concat(genericTests({ Dialog, DialogPane, Button, RaisedButton, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile, renderer, keys }))
  .concat(mithrilTests({ Dialog, DialogPane, Button, RaisedButton, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile, renderer, keys }));

