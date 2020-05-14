import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./components/Header/Header";

const theme1 = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#026FC2",
    },
    secondary: {
      main: "#9dafbd",
    },
    warning: {
      main: "#F1C40F",
    },
    success: {
      main: "#2ECC71",
    },
    error: {
      main: "#E74C3C",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontSize: "2.3rem",
      [theme1.breakpoints.up("sm")]: {
        fontSize: "2.8rem",
      },
      [theme1.breakpoints.up("md")]: {
        fontSize: "3.375rem",
      },
    },

    h2: {
      fontSize: "1.8rem",
      [theme1.breakpoints.up("sm")]: {
        fontSize: "2.1rem",
      },
      [theme1.breakpoints.up("md")]: {
        fontSize: "2.125rem",
      },
    },

    h3: {
      fontSize: "1rem",
      [theme1.breakpoints.up("sm")]: {
        fontSize: "1.125rem",
      },
      [theme1.breakpoints.up("md")]: {
        fontSize: "1.125rem",
      },
    },
    subtitle1: {
      fontSize: "0.875rem",
    },
    subtitle2: {
      fontSize: "0.75rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
