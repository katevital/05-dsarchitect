import { colors, spacers, typography } from "./tokens";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    bg: {
      disabled: colors.grey[100],
      neutral: {
        section: {
          calm: colors.base.white,
          calmInverted: colors.grey[800],
          bold: colors.grey[800],
          lightStatic: colors.base.white,
          darkStatic: colors.grey[800],
        },
        global: {
          calm: colors.grey[50],
        },
      },
      grey: {
        calm: {
          enabled: colors.grey[50],
          hover: colors.grey[100],
          active: colors.grey[200],
          focus: colors.grey[50],
        },
        loud: {
          enabled: colors.grey[400],
          hover: colors.grey[500],
          active: colors.grey[600],
          focus: colors.grey[400],
        },
        bold: {
          enabled: colors.grey[500],
          hover: colors.grey[600],
          active: colors.grey[700],
          focus: colors.grey[500],
        },
      },
      accent: {
        calm: {
          enabled: colors.blue[50],
          hover: colors.blue[100],
          active: colors.blue[200],
          focus: colors.blue[50],
        },
        loud: {
          enabled: colors.blue[400],
          hover: colors.blue[500],
          active: colors.blue[600],
          focus: colors.blue[400],
        },
        loudStatic: {
          enabled: colors.blue[400],
          hover: colors.blue[500],
          active: colors.blue[600],
          focus: colors.blue[400],
        },
        bold: {
          enabled: colors.blue[500],
          hover: colors.blue[600],
          active: colors.blue[700],
          focus: colors.blue[500],
        },
      },
      success: {
        calm: {
          enabled: colors.green[50],
          hover: colors.green[100],
          active: colors.green[200],
          focus: colors.green[50],
        },
        loud: {
          enabled: colors.green[400],
          hover: colors.green[500],
          active: colors.green[600],
          focus: colors.green[400],
        },
        bold: {
          enabled: colors.green[500],
          hover: colors.green[600],
          active: colors.green[700],
          focus: colors.green[500],
        },
      },
      warning: {
        calm: {
          enabled: colors.yellow[50],
          hover: colors.yellow[100],
          active: colors.yellow[200],
          focus: colors.yellow[50],
        },
        loud: {
          enabled: colors.yellow[400],
          hover: colors.yellow[500],
          active: colors.yellow[600],
          focus: colors.yellow[400],
        },
        bold: {
          enabled: colors.yellow[500],
          hover: colors.yellow[600],
          active: colors.yellow[700],
          focus: colors.yellow[500],
        },
      },
      critical: {
        calm: {
          enabled: colors.red[50],
          hover: colors.red[100],
          active: colors.red[200],
          focus: colors.red[50],
        },
        loud: {
          enabled: colors.red[400],
          hover: colors.red[500],
          active: colors.red[600],
          focus: colors.red[400],
        },
        bold: {
          enabled: colors.red[500],
          hover: colors.red[600],
          active: colors.red[700],
          focus: colors.red[500],
        },
      },
      cyan: {
        calm: {
          enabled: colors.cyan[50],
          hover: colors.cyan[100],
          active: colors.cyan[200],
          focus: colors.cyan[50],
        },
        loud: {
          enabled: colors.cyan[400],
          hover: colors.cyan[500],
          active: colors.cyan[600],
          focus: colors.cyan[400],
        },
        bold: {
          enabled: colors.cyan[500],
          hover: colors.cyan[600],
          active: colors.cyan[700],
          focus: colors.cyan[500],
        },
      },
    },
    border: {
      disabled: colors.grey[100],
      grey: {
        calm: {
          enabled: colors.grey[200],
          hover: colors.grey[300],
          active: colors.grey[400],
          focus: colors.grey[200],
        },
        loud: {
          enabled: colors.grey[400],
          hover: colors.grey[500],
          active: colors.grey[600],
          focus: colors.grey[400],
        },
      },
      accent: {
        calm: {
          enabled: colors.blue[100],
          hover: colors.blue[200],
          active: colors.blue[300],
          focus: colors.blue[100],
        },
        loud: {
          enabled: colors.blue[400],
          hover: colors.blue[500],
          active: colors.blue[600],
          focus: colors.blue[400],
        },
        onLight: {
          enabled: colors.blue[400],
          hover: colors.blue[500],
          active: colors.blue[600],
          focus: colors.blue[400],
        },
        onDark: {
          enabled: colors.blue[200],
          hover: colors.blue[100],
          active: colors.blue[50],
          focus: colors.blue[200],
        },
        inverted: {
          enabled: colors.blue[200],
          hover: colors.blue[100],
          active: colors.blue[50],
          focus: colors.blue[200],
        },
      },
      success: {
        calm: {
          enabled: colors.green[200],
        },
        bold: {
          enabled: colors.green[500],
        },
      },
      warning: {
        calm: {
          enabled: colors.yellow[200],
        },
        bold: {
          enabled: colors.yellow[500],
        },
      },
      critical: {
        calm: {
          enabled: colors.red[200],
        },
        bold: {
          enabled: colors.red[500],
        },
      },
      cyan: {
        calm: {
          enabled: colors.cyan[200],
        },
        bold: {
          enabled: colors.cyan[500],
        },
      },
    },
    text: {
      main: colors.grey[800],
      mainOnLight: colors.grey[800],
      mainOnDark: colors.grey[50],
      secondary: colors.grey[500],
      tertiary: colors.grey[400],
      disabled: colors.grey[300],
      inverted: colors.base.white,

      grey: {
        calm: {
          enabled: colors.grey[200],
        },
        loud: {
          enabled: colors.grey[600],
        },
      },
      accent: {
        calm: {
          enabled: colors.blue[200],
          hover: colors.blue[100],
          active: colors.blue[50],
          focus: colors.blue[200],
        },
        loud: {
          enabled: colors.blue[400],
          hover: colors.blue[500],
          active: colors.blue[600],
          focus: colors.blue[400],
        },
      },
      success: {
        calm: {
          enabled: colors.green[50],
        },
        loud: {
          enabled: colors.green[400],
        },
      },
      warning: {
        calm: {
          enabled: colors.yellow[50],
        },
        loud: {
          enabled: colors.yellow[400],
        },
      },
      critical: {
        calm: {
          enabled: colors.red[50],
        },
        loud: {
          enabled: colors.red[400],
        },
      },
      cyan: {
        calm: {
          enabled: colors.grey[50],
        },
        loud: {
          enabled: colors.grey[400],
        },
      },
    },
    link: {
      calm: {
        enabled: colors.blue[100],
        hover: colors.blue[200],
        active: colors.blue[300],
        focus: colors.blue[400],
      },
      loud: {
        enabled: colors.blue[400],
        hover: colors.blue[500],
        active: colors.blue[600],
        focus: colors.blue[400],
      },
      onLight: {
        enabled: colors.blue[400],
        hover: colors.blue[500],
        active: colors.blue[600],
        focus: colors.blue[400],
      },
      onDark: {
        enabled: colors.blue[200],
        hover: colors.blue[100],
        active: colors.blue[50],
        focus: colors.blue[200],
      },
      inverted: {
        enabled: colors.blue[200],
        hover: colors.blue[100],
        active: colors.blue[50],
        focus: colors.blue[200],
      },
    },
  },

  typography: {
    fontFamily: {
      text: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
      heading: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
      monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
    },
    fontSize: {
      heading: {
        h1: typography.fontSize.h1,
        h2: typography.fontSize.h2,
        h3: typography.fontSize.h3,
        h4: typography.fontSize.h4,
        h5: typography.fontSize.h5,
        h6: typography.fontSize.h6,
      },
      text: {
        base: typography.fontSize.base,
        large: typography.fontSize.large,
        small: typography.fontSize.small,
        extrasmall: typography.fontSize.extraSmall,
      },
      component: {
        base: typography.fontSize.base,
        large: typography.fontSize.large,
        small: typography.fontSize.small,
        extrasmall: typography.fontSize.extraSmall,
      },
    },
    lineHeight: {
      heading: {
        h1: typography.lineHeight.h1,
        h2: typography.lineHeight.h2,
        h3: typography.lineHeight.h3,
        h4: typography.lineHeight.h4,
        h5: typography.lineHeight.h5,
        h6: typography.lineHeight.h6,
      },
      text: {
        base: typography.lineHeight.base,
        large: typography.lineHeight.large,
        small: typography.lineHeight.small,
        extrasmall: typography.lineHeight.extraSmall,
      },
      component: {
        base: typography.lineHeight.base,
        large: typography.lineHeight.large,
        small: typography.lineHeight.small,
        extrasmall: typography.lineHeight.extraSmall,
      },
    },
    fontWeight: {
      regular: typography.fontWeight.regular,
      medium: typography.fontWeight.medium,
      semiBold: typography.fontWeight.semiBold,
    },
  },

  spacing: {
    inner: {
      noGap: spacers[0],
      closest: spacers[2],
      close: spacers[4],
      related: spacers[8],
      grouped: spacers[16],
    },
    outer: {
      related: spacers[8],
      grouped: spacers[16],
      subSection: spacers[24],
      section: spacers[48],
    },
    padding: {
      compact: spacers[4],
      small: spacers[8],
      medium: spacers[12],
      mediumRelaxed: spacers[16],
      relaxed: spacers[32],
    },
    height: {
      none: spacers[0],
      xxxxxSmall: spacers[2],
      xxxxSmall: spacers[4],
      xxxSmall: spacers[8],
      xxSmall: spacers[16],
      xSmall: spacers[24],
      small: spacers[32],
      base: spacers[40],
      large: spacers[48],
      xLarge: spacers[56],
      xxLarge: spacers[64],
      xxxLarge: spacers[72],
    },
  },

  borderRadius: {
    rounded: spacers[999],
    micro: spacers[2],
    componentInner: spacers[4],
    componentBase: spacers[8],
    sectionInner: spacers[12],
    sectionBase: spacers[24],
  },
};

export const onDarkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    bg: {
      disabled: colors.grey[700],
      neutral: {
        section: {
          calm: colors.grey[800],
          calmInverted: colors.base.white,
          bold: colors.grey[100],
          lightStatic: colors.base.white,
          darkStatic: colors.grey[800],
        },
        global: {
          calm: colors.grey[900],
        },
      },
      grey: {
        calm: {
          enabled: colors.grey[800],
          hover: colors.grey[700],
          active: colors.grey[600],
          focus: colors.grey[800],
        },
        loud: {
          enabled: colors.grey[200],
          hover: colors.grey[100],
          active: colors.grey[50],
          focus: colors.grey[200],
        },
        bold: {
          enabled: colors.grey[300],
          hover: colors.grey[200],
          active: colors.grey[100],
          focus: colors.grey[300],
        },
      },
      accent: {
        calm: {
          enabled: colors.blue[800],
          hover: colors.blue[700],
          active: colors.blue[600],
          focus: colors.blue[800],
        },
        loud: {
          enabled: colors.blue[200],
          hover: colors.blue[100],
          active: colors.blue[50],
          focus: colors.blue[200],
        },
        loudStatic: {
          enabled: colors.blue[400],
          hover: colors.blue[500],
          active: colors.blue[600],
          focus: colors.blue[400],
        },
        bold: {
          enabled: colors.blue[300],
          hover: colors.blue[200],
          active: colors.blue[100],
          focus: colors.blue[300],
        },
      },
      success: {
        calm: {
          enabled: colors.green[800],
          hover: colors.green[700],
          active: colors.green[600],
          focus: colors.green[800],
        },
        loud: {
          enabled: colors.green[200],
          hover: colors.green[100],
          active: colors.green[50],
          focus: colors.green[200],
        },
        bold: {
          enabled: colors.green[300],
          hover: colors.green[200],
          active: colors.green[100],
          focus: colors.green[300],
        },
      },
      warning: {
        calm: {
          enabled: colors.yellow[800],
          hover: colors.yellow[700],
          active: colors.yellow[600],
          focus: colors.yellow[800],
        },
        loud: {
          enabled: colors.yellow[200],
          hover: colors.yellow[100],
          active: colors.yellow[50],
          focus: colors.yellow[200],
        },
        bold: {
          enabled: colors.yellow[300],
          hover: colors.yellow[200],
          active: colors.yellow[100],
          focus: colors.yellow[300],
        },
      },
      critical: {
        calm: {
          enabled: colors.red[800],
          hover: colors.red[700],
          active: colors.red[600],
          focus: colors.red[800],
        },
        loud: {
          enabled: colors.red[200],
          hover: colors.red[100],
          active: colors.red[50],
          focus: colors.red[200],
        },
        bold: {
          enabled: colors.red[300],
          hover: colors.red[200],
          active: colors.red[100],
          focus: colors.red[300],
        },
      },
      cyan: {
        calm: {
          enabled: colors.cyan[800],
          hover: colors.cyan[700],
          active: colors.cyan[600],
          focus: colors.cyan[800],
        },
        loud: {
          enabled: colors.cyan[200],
          hover: colors.cyan[100],
          active: colors.cyan[50],
          focus: colors.cyan[200],
        },
        bold: {
          enabled: colors.cyan[300],
          hover: colors.cyan[200],
          active: colors.cyan[100],
          focus: colors.cyan[300],
        },
      },
    },
    border: {
      disabled: colors.grey[800],
      grey: {
        calm: {
          enabled: colors.grey[700],
          hover: colors.grey[800],
          active: colors.grey[900],
          focus: colors.grey[700],
        },
        loud: {
          enabled: colors.grey[200],
          hover: colors.grey[100],
          active: colors.grey[50],
          focus: colors.grey[200],
        },
      },
      accent: {
        calm: {
          enabled: colors.blue[700],
          hover: colors.blue[800],
          active: colors.blue[900],
          focus: colors.blue[700],
        },
        loud: {
          enabled: colors.blue[200],
          hover: colors.blue[100],
          active: colors.blue[50],
          focus: colors.blue[200],
        },
        onLight: {
          enabled: colors.blue[400],
          hover: colors.blue[500],
          active: colors.blue[600],
          focus: colors.blue[400],
        },
        onDark: {
          enabled: colors.blue[200],
          hover: colors.blue[100],
          active: colors.blue[50],
          focus: colors.blue[200],
        },
        inverted: {
          enabled: colors.blue[400],
          hover: colors.blue[500],
          active: colors.blue[600],
          focus: colors.blue[400],
        },
      },
      success: {
        calm: {
          enabled: colors.green[600],
        },
        bold: {
          enabled: colors.green[300],
        },
      },
      warning: {
        calm: {
          enabled: colors.yellow[600],
        },
        bold: {
          enabled: colors.yellow[300],
        },
      },
      critical: {
        calm: {
          enabled: colors.red[600],
        },
        bold: {
          enabled: colors.red[300],
        },
      },
      cyan: {
        calm: {
          enabled: colors.cyan[600],
        },
        bold: {
          enabled: colors.cyan[300],
        },
      },
    },
    text: {
      main: colors.grey[50],
      mainOnLight: colors.grey[800],
      mainOnDark: colors.grey[50],
      secondary: colors.grey[200],
      tertiary: colors.grey[300],
      disabled: colors.grey[400],
      inverted: colors.grey[800],

      grey: {
        calm: {
          enabled: colors.grey[800],
        },
        loud: {
          enabled: colors.grey[200],
        },
      },
      accent: {
        calm: {
          enabled: colors.blue[700],
          hover: colors.blue[800],
          active: colors.blue[900],
          focus: colors.blue[700],
        },
        loud: {
          enabled: colors.blue[200],
          hover: colors.blue[100],
          active: colors.blue[50],
          focus: colors.blue[200],
        },
      },
      success: {
        calm: {
          enabled: colors.green[800],
        },
        loud: {
          enabled: colors.green[200],
        },
      },
      warning: {
        calm: {
          enabled: colors.yellow[800],
        },
        loud: {
          enabled: colors.yellow[200],
        },
      },
      critical: {
        calm: {
          enabled: colors.red[800],
        },
        loud: {
          enabled: colors.red[200],
        },
      },
      cyan: {
        calm: {
          enabled: colors.cyan[800],
        },
        loud: {
          enabled: colors.cyan[200],
        },
      },
    },
    link: {
      calm: {
        enabled: colors.blue[600],
        hover: colors.blue[500],
        active: colors.blue[400],
        focus: colors.blue[600],
      },
      loud: {
        enabled: colors.blue[200],
        hover: colors.blue[100],
        active: colors.blue[50],
        focus: colors.blue[200],
      },
      onLight: {
        enabled: colors.blue[400],
        hover: colors.blue[500],
        active: colors.blue[600],
        focus: colors.blue[400],
      },
      onDark: {
        enabled: colors.blue[200],
        hover: colors.blue[100],
        active: colors.blue[50],
        focus: colors.blue[200],
      },
      inverted: {
        enabled: colors.blue[400],
        hover: colors.blue[500],
        active: colors.blue[600],
        focus: colors.blue[400],
      },
    },
  },
};
