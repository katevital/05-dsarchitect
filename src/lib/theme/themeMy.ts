import { DefaultTheme } from "styled-components";
import { colors } from "./tokens/colors";

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
        loud: {
          enabled: colors.green[500],
        },
      },
      warning: {
        calm: {
          enabled: colors.yellow[200],
        },
        loud: {
          enabled: colors.yellow[500],
        },
      },
      critical: {
        calm: {
          enabled: colors.red[200],
        },
        loud: {
          enabled: colors.red[500],
        },
      },
      cyan: {
        calm: {
          enabled: colors.cyan[200],
        },
        loud: {
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
        calm: { enabled: colors.green[50] },
        loud: { enabled: colors.green[400] },
      },
      warning: {
        calm: { enabled: colors.yellow[50] },
        loud: { enabled: colors.yellow[400] },
      },
      critical: {
        calm: { enabled: colors.red[200] },
        loud: { enabled: colors.red[500] },
      },
      cyan: {
        calm: { enabled: colors.cyan[200] },
        loud: { enabled: colors.cyan[500] },
      },
    },

    link: {
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
  },

  spacing: {},

  shadows: {},

  typography: {},

  cornerRadius: {},

  zIndices: {},

  animation: {
    base: `0.2s ease-in-out`,
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    bg: {
      calm: {
        section: colors.black,
        global: colors.grey[900],
        disabled: colors.grey[600],
      },
    },

    text: {
      calm: {
        main: colors.grey[700],
      },
      loud: {
        main: colors.grey[100],
        secondary: colors.grey[300],
        disabled: colors.grey[500],
      },
    },
  },
};
