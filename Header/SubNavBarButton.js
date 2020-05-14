import React from "react";
import { Button, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textDecoration: {
    textDecoration: "none",
  },
  activeLink: {
    color: theme.palette.primary.main,
  },
}));

export default function SubNavBarButton({ page, currentPagePath, parentPage }) {
  const classes = useStyles();

  const isPageSelected = currentPagePath === `/${parentPage}/${page.url}`;

  return (
    <NavLink
      to={`/${parentPage}/${page.url}`}
      className={classes.textDecoration}
    >
      <Button color={isPageSelected ? "primary" : "secondary"}>
        <Typography
          color={isPageSelected ? "primary" : "secondary"}
          variant="subtitle1"
        >
          {page.name}
        </Typography>
      </Button>
    </NavLink>
  );
}
