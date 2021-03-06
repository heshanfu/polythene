import { StateComponent, renderer as h } from "polythene-mithril-base";
import { Conditional } from "polythene-core";
import { coreMenu as core } from "polythene-core-menu";
import classes from "polythene-css-classes/menu";
import { Shadow } from "polythene-mithril-shadow";

const MenuInstance = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow }))
  }
));

const MenuToggle = StateComponent(Conditional);
MenuToggle.displayName = "MenuToggle";

export const Menu = {
  view: vnode =>
    h(MenuToggle, Object.assign({},
      vnode.attrs,
      {
        placeholderClassName: classes.placeholder,
        instance: MenuInstance
      }
    ))
};

Menu.displayName = "Menu";
