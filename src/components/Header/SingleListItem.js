import React from "react";
import { ListItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textDecoration: {
    textDecoration: "none",
  },
}));

export default function SingleListItem({
  page,
  currentPagePath,
  handleDrawerClose,
}) {
  const classes = useStyles();

  const handlePageSelect = () => {
    handleDrawerClose();
  };

  const isPageSelected = currentPagePath === `/${page.url}`;

  return (
    <>
      <Link
        to={`/${page.url}`}
        className={classes.textDecoration}
        key={page.url}
        onClick={handlePageSelect}
      >
        <ListItem button>
          <Typography
            color={isPageSelected ? "primary" : "secondary"}
            variant="subtitle1"
          >
            {page.name.toLocaleUpperCase()}
          </Typography>
        </ListItem>
      </Link>
    </>
  );
}
