import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    danger: {
      main: string;
    };
    button: {
      main: string;
    };
    white: string;
    disabled: string;
  }
  interface PaletteOptions {
    danger: {
      main: string;
    };
    button: {
      main: string;
    };
    white: string;
    disabled: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#CEE3F6",
    },
    secondary: {
      main: "#1D476F",
    },
    white: "#FFFFFF",
    warning: {
      main: "#FEC107",
    },
    success: {
      main: "#01C853",
    },
    danger: {
      main: "#D74315",
    },
    button: {
      main: "#3B8EDE",
    },
    disabled: "#B9B9B9",
  },
});
