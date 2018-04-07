import classes from "polythene-css-classes/icon-label-button";

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-icon-label-button)

// Props to be passed to a selection control

export const createProps = vnode => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    attrs,
    {
      icons: {
        iconOff: attrs.icon,
        iconOn: attrs.icon
      },
      selectable: attrs.selectable || (() => true), // default: always selectable, regardless the checked state
      instanceClass: classes.component,
      type: "checkbox"
    }
  );
};
