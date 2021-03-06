import { mixin, flex } from "polythene-core-css";
import { vars } from "polythene-theme";

const compactStyle = componentVars => ({
  height: componentVars.height_compact + "px"
});

export default (selector, componentVars) => [{
  [selector]: [
    flex.layout,
    flex.layoutHorizontal,
    flex.layoutCenter,
    {
      height: componentVars.height + "px",
      lineHeight: componentVars.line_height + "em",
      padding: "0 " + componentVars.padding_side + "px",
      position: "relative", 
      zIndex: vars.z_toolbar,

      ".pe-toolbar--fullbleed": {
        padding: 0
      },

      ".pe-toolbar--border": {
        borderWidth: "1px",
        borderStyle: "none none solid none",
      },

      ".pe-toolbar--compact": compactStyle(componentVars),

      " > div": {
        width: "100%"
      },

      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        fontSize: componentVars.font_size + "px",
        lineHeight: componentVars.line_height,
        width: "100%",
        display: "block",
        wordBreak: "break-all",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        marginLeft: componentVars.title_padding + "px" // reverse for RTL - see below
      },

      " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent": {
        marginLeft: componentVars.title_after_icon_padding + "px" // reverse for RTL - see below
      },

      " .pe-toolbar__title--indent": {
        marginLeft: (componentVars.indent - componentVars.padding_side) + "px" // reverse for RTL - see below
      },

      " .pe-toolbar__title--center": {
        textAlign: "center",
        justifyContent: "center",
        marginLeft: componentVars.title_padding + "px",
        marginRight: componentVars.title_padding + "px"
      },

      " > .pe-action": {
        paddingLeft: "12px",
        paddingRight: "12px",
      },

      " .pe-fit": [
        mixin.fit(), {
          margin: 0
        }
      ]
    }
  ],
  ["@media (min-width: " + vars.breakpoint_for_phone_only + "px) and (orientation: landscape)"]: {
    [selector]: compactStyle(componentVars)
  },
  ["@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)"]: {
    [selector]: {
      height: componentVars.height_large + "px",
      padding: "0 " + componentVars.padding_side_large + "px",
    }
  },
  "*[dir=rtl], .pe-rtl ": {
    [selector]: {
      " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
        marginLeft: 0,
        marginRight: componentVars.title_padding + "px"
      },
      " > * + span, * + .pe-toolbar__title, * + .pe-toolbar__title--indent": {
        marginLeft: 0,
        marginRight: componentVars.title_after_icon_padding + "px"
      },
      " .pe-toolbar__title--indent": {
        marginLeft: 0,
        marginRight: (componentVars.indent - componentVars.padding_side) + "px"
      },
    }
  },
}];
