import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const Theme: ThemeOptions = createMuiTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#FF5241",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#E5F4D5",
      contrastText: "#000",
    },
    background: {
      default: "#f3f3f3",
    },
  },
});
