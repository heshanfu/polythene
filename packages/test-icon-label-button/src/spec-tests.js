
export default ({ IconLabelButton, keys }) => {
  return [
    {
      name: "No options",
      component: IconLabelButton
    },
    {
      name: "Option: id",
      component: IconLabelButton,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: IconLabelButton,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: IconLabelButton,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: IconLabelButton,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: IconLabelButton,
      attrs: {
        [keys.tabindex]: 3
      }
    },
    {
      name: "Option: value",
      component: IconLabelButton,
      attrs: {
        name: "worth",
        value: "notable"
      }
    },
  ];
};
