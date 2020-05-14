import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SubNavBarButton from "./SubNavBarButton";
import SocialBar from "../socialBar/SocialBar";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "0 0 0 12%",
    backgroundColor: "#FBFDFD",
    alignItems: "center",
    position: "fixed",
    display: "flex",
    top: (props) => props.mainNavbarHeight + 2,
    height: (props) => props.mainNavbarHeight * 0.75,
    width: "100%",
    borderBottom: "1px solid #ccc",
    zIndex: 1100,
    display: "none",
    [theme.breakpoints.up("xs")]: {
      paddingLeft: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      paddingLeft: "11.2%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "14%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "16.15%",
    },
  },
  marginRight: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginRight: "4%",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "10%",
    },
  },
}));

export default function SubHeader(props) {
  const classes = useStyles(props);

  const { pageObject, currentPagePath } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {pageObject.list.map((page) => {
          return (
            <Grid item key={page.url}>
              <SubNavBarButton
                page={page}
                parentPage={pageObject.url}
                currentPagePath={currentPagePath}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid item className={classes.marginRight}>
        <SocialBar />
      </Grid>
    </div>
  );
}
