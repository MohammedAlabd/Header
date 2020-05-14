import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import PagesBar from "./PagesBar";
import NTKDrawer from "./NTKDrawer";
import logo from "../footer/media/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#fff",
    borderBottom: "2px solid #ccc",
    boxShadow: "0px 0px 0px",
  },
  appBarShift: {
    width: "100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: "auto",
    flexShrink: 0,
  },
  responsiveDrawer: {
    display: "inline-flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  responsiveNav: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logo: {
    width: 30,
    marginRight: "3%",
    justifyContent: "flex-start",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      marginRight: "5%",
    },
  },
  container: {
    width: "95%",
    height: (props) => props.mainNavbarHeight,
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      paddingRight: 0,
      paddingLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  responsivePagePath: {
    display: "block",
    flexGrow: 1,
    textTransform: "uppercase",
    [theme.breakpoints.up("sm")]: {
      display: "none",
      flexGrow: 0,
    },
  },
}));

export default function Header(props) {
  const { pages, currentPagePath } = props;

  const classes = useStyles(props);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pagePathArray = currentPagePath.split("/");
  const isPageHaveSubPages = pagePathArray.length === 3;

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={`${classes.appBar} ${
          isDrawerOpen ? classes.appBarShift : ""
        }`}
      >
        <Toolbar className={classes.container}>
          <NavLink to="/" className={classes.logo}>
            <img width="35px" src={logo} alt="the Logo of Natakalam" />
          </NavLink>

          <div className={classes.responsiveNav}>
            <PagesBar pages={pages} currentPagePath={currentPagePath} />
          </div>
          <Typography
            className={classes.responsivePagePath}
            color="primary"
            variant="subtitle1"
          >
            {isPageHaveSubPages
              ? `${pagePathArray[1]} \u00BB ${pagePathArray[2]}`
              : `${pagePathArray[1]}`}
          </Typography>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={`${classes.responsiveDrawer} ${
              isDrawerOpen ? classes.hide : ""
            }`}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <NTKDrawer
        pages={pages}
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        currentPagePath={currentPagePath}
      />
    </div>
  );
}
