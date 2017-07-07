import Webfont from 'webfontloader';
import { styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var robotoStyles = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

var addRoboto = function addRoboto() {
  return Webfont.load({
    google: {
      families: ["Roboto:400,500,700,400italic:latin"]
    }
  }), styler.add("pe-roboto", robotoStyles);
};

var fontSize = 14;

var typographyStyles = [{
  " h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
    padding: 0
  }
}, {
  " h1 small, h2 small, h3 small, h4 small, h5 small, h6 small": {
    "font-weight": vars.font_weight_normal,
    "line-height": vars.line_height,
    "font-size": "0.6em"
  }
}, {
  " h1": {
    "font-size": "56px",
    "font-weight": vars.font_weight_normal,
    "line-height": vars.line_height,
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h2": {
    "font-size": "45px",
    "font-weight": vars.font_weight_normal,
    "line-height": "48px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h3": {
    "font-size": "34px",
    "font-weight": vars.font_weight_normal,
    "line-height": "40px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h4": {
    "font-size": "24px",
    "font-weight": vars.font_weight_normal,
    "line-height": "32px",
    "-moz-osx-font-smoothing": "grayscale",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h5": {
    "font-size": "20px",
    "font-weight": vars.font_weight_medium,
    "line-height": "1",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h6": {
    "font-size": "16px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " html, body": {
    "font-size": fontSize + "px",
    "line-height": "20px",
    "font-weight": vars.font_weight_normal
  },
  " p": {
    "font-size": fontSize + "px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px",
    "margin-bottom": "16px"
  },
  " blockquote": {
    "position": "relative",
    "font-size": "24px",
    "font-weight": vars.font_weight_normal,
    "font-style": "italic",
    "line-height": vars.line_height,
    "margin-top": "24px",
    "margin-bottom": "16px"
  },
  " ul, ol": {
    "font-size": fontSize + "px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px"
  },
  " b, strong": {
    "font-weight": vars.font_weight_medium
  }
}];

var resetStyles = [{
  // apply a natural box layout model to all elements, but allow elements to change
  " html": {
    "box-sizing": "border-box"
  },
  " *, *:before, *:after": {
    "box-sizing": "inherit"
  },
  " *": [
  // remove tap highlight in mobile Safari
  {
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
  }, {
    "-webkit-tap-highlight-color": "transparent" // For some Androids
  }],

  // Remove dotted link borders in Firefox
  " a, a:active, a:focus, input:active, input[type]:focus": {
    outline: 0
  },

  // Mobile Safari: override default fading of disabled elements
  " input:disabled": {
    opacity: 1
  }
}];

var addTypography = function addTypography() {
  return styler.add("pe-material-design-typography", resetStyles, typographyStyles);
};

export { addRoboto, addTypography };
