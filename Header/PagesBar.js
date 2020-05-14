import React from "react";
import { Grid } from "@material-ui/core";
import ListFullPageButton from "./ListFullPageButton";
import ListLessPageButton from "./ListLessPageButton";

export default function PagesBar({ pages, currentPagePath }) {
  // we don't need to render the home page because we already have the logo
  const pagesToBeRendered = pages.slice(1);

  return (
    <Grid container spacing={3}>
      {pagesToBeRendered.map((page) => {
        if (page.list) {
          return (
            <Grid item key={page.url}>
              <ListFullPageButton
                page={page}
                currentPagePath={currentPagePath}
              />
            </Grid>
          );
        } else {
          return (
            <Grid item key={page.url}>
              <ListLessPageButton
                page={page}
                currentPagePath={currentPagePath}
              />
            </Grid>
          );
        }
      })}
    </Grid>
  );
}
