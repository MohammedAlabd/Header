import React, { useState } from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Button, Menu, MenuItem, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textDecoration: {
    textDecoration: "none",
  },
}));

export default function ListFullPage({ page, currentPagePath }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // this regex used to search for the page name in the url
  const listName = new RegExp(`/${page.url}`, "i");
  const isListSelected = currentPagePath.search(listName) === 0;

  return (
    <>
      <Button
        data-testid="openMenuButton"
        color={isListSelected ? "primary" : "secondary"}
        onClick={handleOpenMenu}
      >
        <Typography
          color={isListSelected ? "primary" : "secondary"}
          variant="subtitle1"
        >
          {page.name}
        </Typography>
        {Boolean(anchorEl) ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Menu
        data-testid="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {page.list.map((listItem) => {
          const isPageSelected =
            currentPagePath === `/${page.url}/${listItem.url}`;

          return (
            <NavLink
              onClick={handleCloseMenu}
              to={`/${page.url}/${listItem.url}`}
              className={classes.textDecoration}
              key={listItem.url}
            >
              <MenuItem>
                <Typography
                  variant="subtitle1"
                  color={isPageSelected ? "primary" : "secondary"}
                >
                  {listItem.name.toLocaleUpperCase()}
                </Typography>
              </MenuItem>
            </NavLink>
          );
        })}
      </Menu>
    </>
  );
}
