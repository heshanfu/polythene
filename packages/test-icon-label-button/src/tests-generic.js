import { IconLabelButtonCSS } from "polythene-css";

const iconStarOutlineSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z \"/></svg>";

export default ({ IconLabelButton, renderer: h }) => {
  
  const trustedIconStarsOutline = h.trust(iconStarOutlineSVG);

  const themeColor = "#ff1744";
  IconLabelButtonCSS.addStyle(".tests-icon-label-button-themed", {
    label_font_size: 28,
    color_light_on:    themeColor,
    color_light_off:   themeColor,
    color_dark_on:     themeColor,
    color_dark_off:    themeColor,
    color_light_label: themeColor,
    color_dark_label:  themeColor
  });

  const sizeNames = ["small", "regular", "medium", "large"];

  const sizes = (sizes, attrs) => sizes.map(size =>
    h(IconLabelButton, Object.assign(
      {},
      attrs,
      {
        label: size,
        size
      }
    ))
  );

  return [
    {
      name: "Option: label",
      component: IconLabelButton,
      attrs: {
        label: "Label",
        icon: {
          svg: { content: trustedIconStarsOutline }
        },
      }
    },
    {
      name: "Option: size",
      component: {
        view: () => h(".multiple",
          sizes(sizeNames, {
            label: "Label",
            icon: {
              svg: { content: trustedIconStarsOutline }
            },
          })
        )
      }
    },
    {
      name: "Styled IconLabelButton",
      component: IconLabelButton,
      attrs: {
        label: "Label",
        icon: {
          svg: { content: trustedIconStarsOutline }
        },
        style: {
          color: "#ff0000"
        }
      }
    },
    {
      name: "Themed IconLabelButton (color and font size)",
      component: IconLabelButton,
      attrs: {
        label: "Label",
        icon: {
          svg: { content: trustedIconStarsOutline }
        },
        className: "tests-icon-label-button-themed"
      }
    },
    {
      name: "Option: disabled",
      interactive: true,
      component: {
        view: () =>
          h(".multiple", [
            h(IconLabelButton, {
              disabled: true,
              label: "Off",
              icon: {
                svg: { content: trustedIconStarsOutline }
              },
            })
          ])
      }
    },

    {
      name: "Option: iconButton (custom hover behaviour)",
      interactive: true,
      component: IconLabelButton,
      attrs: {
        label: "Label",
        icon: {
          svg: { content: trustedIconStarsOutline }
        },
        iconButton: {
          wash: true,
          ink: false
        }
      }
    },
    {
      name: "Option: label (RTL)",
      component: {
        view: () => h("div",
          { className: "pe-rtl" },
          h(IconLabelButton,
            {
              label: "ضع الكلمة المناسبة",
              icon: {
                svg: { content: trustedIconStarsOutline }
              },
            }
          )
        )
      }
    },

    // Dark tone

    {
      name: "Option: label -- dark tone class",
      className: "pe-dark-tone",
      component: IconLabelButton,
      attrs: {
        label: "Label",
        icon: {
          svg: { content: trustedIconStarsOutline }
        },
      }
    },
  ];
};
