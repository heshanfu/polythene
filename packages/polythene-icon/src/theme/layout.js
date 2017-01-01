import { mixin } from "polythene-css";
import { vars } from "polythene-theme";

const iconSizesPx = (size = vars.unit_icon_size) => ({
  width: size + "px",
  height: size + "px"
});

const createStyles = componentVars => {
  return [{
    ".pe-icon": {
      display: "inline-block",
      "vertical-align": "middle",
      "background-repeat": "no-repeat",
      fill: "currentcolor",
      position: "relative",
      "font-size": 0,
      "line-height": 0,

      "&.pe-icon--avatar img": {
        border: "none",
        "border-radius": "50%",
        width: "100%",
        height: "100%"
      },

      " img": {
        height: "100%"
      },

      " svg": {
        width: "100%",
        height: "100%",
        fill: "currentcolor",
        color: "inherit",

        " path, rect, polygon": {
          "&:not([fill=none])": {
            fill: "currentcolor"
          }
        }
      },

      "&.pe-icon--small": iconSizesPx(componentVars.size_small),
      "&.pe-icon--regular": iconSizesPx(componentVars.size_regular),
      "&.pe-icon--medium": iconSizesPx(componentVars.size_medium),
      "&.pe-icon--large": iconSizesPx(componentVars.size_large)
    }
  }];
};

export default componentVars => mixin.createStyles(componentVars, createStyles);

