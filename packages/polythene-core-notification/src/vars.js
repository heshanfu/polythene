import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

const buttonPaddingH = 8; // padding, inner text space

export default {
  width:                  288,
  min_height:             80,
  border_radius:          vars.unit_block_border_radius,
  title_padding_h:        buttonPaddingH,
  title_single_padding_v: 14,
  title_multi_padding_v:  20, // 24 - natural line height
  side_padding:           24 - buttonPaddingH,
  font_size:              14,
  line_height:            20,

  animation_delay:           "0s",
  animation_duration:        ".3s",
  animation_timing_function: "ease-in-out",
  animation_hide_css:        "opacity: 0;",
  animation_show_css:        "opacity: 1;",

  color_light_background: rgba(vars.color_light_background),
  color_light_text:       rgba(vars.color_light_foreground, vars.blend_light_dark_primary),

  color_dark_background:  rgba(vars.color_dark_background),
  color_dark_text:        rgba(vars.color_dark_foreground, vars.blend_light_text_primary)
};
