import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#023047",
    },
    secondary: {
      main: "#FFB703",
    },
    error: {
      main: "#EE1B29",
    },
    background: {
      default: "#fff",
    }
  },
  typography: {
    fontFamily: ["Lato Regular", "Arial", "san-serif"].join(","),
  },
});

export default theme;
