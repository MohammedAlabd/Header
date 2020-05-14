import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { List, ListItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  textDecoration: {
    textDecoration: "none",
  },
}));

export default function NestedListItem({
  page,
  currentPagePath,
  handleDrawerClose,
}) {
  const classes = useStyles();

  const [isNestedListOpen, setIsNestedListOpen] = useState(false);

  const handlePageSelect = () => {
    handleToggleNestedList();
    handleDrawerClose();
  };

  const handleToggleNestedList = () => {
    setIsNestedListOpen(!isNestedListOpen);
  };

  // this regex used to search for the page name in the url
  const listName = new RegExp(`/${page.url}`, "i");
  const isListSelected = currentPagePath.search(listName) === 0;

  return (
    <>
      <ListItem
        button
        data-testid="openMenuButton"
        onClick={handleToggleNestedList}
      >
        <Typography
          color={isListSelected ? "primary" : "secondary"}
          variant="subtitle1"
        >
          {page.name.toLocaleUpperCase()}
        </Typography>
        {isNestedListOpen ? (
          <ExpandLess color={isListSelected ? "primary" : "secondary"} />
        ) : (
          <ExpandMore color={isListSelected ? "primary" : "secondary"} />
        )}
      </ListItem>
      <Collapse in={isNestedListOpen} timeout="auto" unmountOnExit>
        <List data-testid="nestedMenu" component="div" disablePadding>
          {page.list.map((listItem) => {
            const isPageSelected =
              currentPagePath === `/${page.url}/${listItem.url}`;
            return (
              <Link
                key={listItem.url}
                to={`/${page.url}/${listItem.url}`}
                className={classes.textDecoration}
                onClick={handlePageSelect}
              >
                <ListItem button>
                  <Typography
                    color={isPageSelected ? "primary" : "secondary"}
                    variant="subtitle1"
                  >
                    {listItem.name.toLocaleUpperCase()}
                  </Typography>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
