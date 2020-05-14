import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import { Drawer, List, IconButton } from "@material-ui/core";
import NestedListItem from "./NestedListItem";
import SingleListItem from "./SingleListItem";

const drawerWidth = "auto";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function NTKDrawer({
  pages,
  isDrawerOpen,
  handleDrawerClose,
  currentPagePath,
}) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="top"
      open={isDrawerOpen}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ExpandLess />
        </IconButton>
      </div>
      <List>
        {pages.map((page) => {
          if (page.list) {
            return (
              <NestedListItem
                key={page.url}
                handleDrawerClose={handleDrawerClose}
                currentPagePath={currentPagePath}
                page={page}
              />
            );
          } else {
            return (
              <SingleListItem
                key={page.url}
                handleDrawerClose={handleDrawerClose}
                currentPagePath={currentPagePath}
                page={page}
              />
            );
          }
        })}
      </List>
    </Drawer>
  );
}
