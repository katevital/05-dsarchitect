import { spacers } from "./spacers";

export const typography = {
  fontFamily: {
    base: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    heading: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
  },

  fontSize: {
    h1: spacers[48],
    h2: spacers[36],
    h3: spacers[32],
    h4: spacers[24],
    h5: spacers[20],
    h6: spacers[16],
    large: spacers[24],
    base: spacers[16],
    small: spacers[14],
    extraSmall: spacers[12],
  },

  lineHeight: {
    h1: "56px",
    h2: "44px",
    h3: "40px",
    h4: "32px",
    h5: "26px",
    h6: "24px",
    large: "32px",
    base: "24px",
    small: "20px",
    extraSmall: "18px",
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    semiBold: "600",
  },
};
