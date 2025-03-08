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
        success: { calm: { enabled: string }; loud: { enabled: string } };
        warning: { calm: { enabled: string }; loud: { enabled: string } };
        critical: { calm: { enabled: string }; loud: { enabled: string } };
        cyan: { calm: { enabled: string }; loud: { enabled: string } };
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
          calm: { enabled: string };
          loud: { enabled: string };
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
          calm: { enabled: string };
          loud: { enabled: string };
        };
        warning: {
          calm: { enabled: string };
          loud: { enabled: string };
        };
        critical: {
          calm: { enabled: string };
          loud: { enabled: string };
        };
        cyan: {
          calm: { enabled: string };
          loud: { enabled: string };
        };
      };
      link: {
        calm: { enabled: string; hover: string; active: string; focus: string };
        loud: { enabled: string; hover: string; active: string; focus: string };
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
  }
}
