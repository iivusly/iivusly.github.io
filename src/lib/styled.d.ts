import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      primary: string;
      hard: string;
      soft: string;
      mutter: string;
      selection: string;
      highlight: string;
      faint: string;
    };
    foreground: {
      primary: string;
      highContrast: string;
      medium: string;
      low: string;
      faded: string;
    };
    palette: {
      [key: string]: {
        dark: string;
        light: string;
      };
    };
  }
}
