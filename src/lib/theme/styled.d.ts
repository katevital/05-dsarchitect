import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: {
        disabled: string;
        neutral: {
          section: {
            calm: string;
            calmInverted: string;
            bold: string;
            lightStatic: string;
            darkStatic: string;
          };
          global: { calm: string };
        };
        grey: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          bold: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
        accent: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loudStatic: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          bold: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
        success: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          bold: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
        warning: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          bold: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
        critical: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          bold: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
        cyan: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          bold: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
      };
      border: {
        disabled: string;
        grey: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
        accent: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          onLight: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          onDark: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          inverted: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
        success: {
          calm: {
            enabled: string;
          };
          bold: {
            enabled: string;
          };
        };
        warning: {
          calm: {
            enabled: string;
          };
          bold: {
            enabled: string;
          };
        };
        critical: {
          calm: {
            enabled: string;
          };
          bold: {
            enabled: string;
          };
        };
        cyan: {
          calm: {
            enabled: string;
          };
          bold: {
            enabled: string;
          };
        };
      };
      text: {
        main: string;
        mainOnLight: string;
        mainOnDark: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        inverted: string;

        grey: {
          calm: {
            enabled: string;
          };
          loud: {
            enabled: string;
          };
        };
        accent: {
          calm: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
          loud: {
            enabled: string;
            hover: string;
            active: string;
            focus: string;
          };
        };
        success: {
          calm: {
            enabled: string;
          };
          loud: {
            enabled: string;
          };
        };
        warning: {
          calm: {
            enabled: string;
          };
          loud: {
            enabled: string;
          };
        };
        critical: {
          calm: {
            enabled: string;
          };
          loud: {
            enabled: string;
          };
        };
        cyan: {
          calm: {
            enabled: string;
          };
          loud: {
            enabled: string;
          };
        };
      };
      link: {
        calm: {
          enabled: string;
          hover: string;
          active: string;
          focus: string;
        };
        loud: {
          enabled: string;
          hover: string;
          active: string;
          focus: string;
        };
        onLight: {
          enabled: string;
          hover: string;
          active: string;
          focus: string;
        };
        onDark: {
          enabled: string;
          hover: string;
          active: string;
          focus: string;
        };
        inverted: {
          enabled: string;
          hover: string;
          active: string;
          focus: string;
        };
      };
    };

    typography: {
      fontFamily: {
        heading: string;
        text: string;
        monospace: string;
      };
      fontSize: {
        heading: {
          h1: string;
          h2: string;
          h3: string;
          h4: string;
          h5: string;
          h6: string;
        };
        text: {
          base: string;
          large: string;
          small: string;
          extrasmall: string;
        };
        component: {
          base: string;
          large: string;
          small: string;
          extrasmall: string;
        };
      };
      lineHeight: {
        heading: {
          h1: string;
          h2: string;
          h3: string;
          h4: string;
          h5: string;
          h6: string;
        };
        text: {
          base: string;
          large: string;
          small: string;
          extrasmall: string;
        };
        component: {
          base: string;
          large: string;
          small: string;
          extrasmall: string;
        };
      };
      fontWeight: {
        regular: string;
        medium: string;
        semiBold: string;
      };
    };

    spacing: {
      inner: {
        noGap: string;
        closest: string;
        close: string;
        related: string;
        grouped: string;
      };
      outer: {
        related: string;
        grouped: string;
        subSection: string;
        section: string;
      };
      padding: {
        compact: string;
        small: string;
        medium: string;
        mediumRelaxed: string;
        relaxed: string;
        large: string;
      };
      height: {
        none: string;
        xxxxxSmall: string;
        xxxxSmall: string;
        xxxSmall: string;
        xxSmall: string;
        xSmall: string;
        small: string;
        base: string;
        large: string;
        xLarge: string;
        xxLarge: string;
        xxxLarge: string;
      };
    };
    spacing;
    borderRadius: {
      rounded: string;
      micro: string;
      componentInner: string;
      componentBase: string;
      sectionInner: string;
      sectionBase: string;
    };
  }
}
