import React from "react";
import ListLessPageButton from "../ListLessPageButton";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("matches snapshot", () => {
  const page = {
    name: "page",
    url: "page-url",
    list: false,
  };
  const tree = render(
    <MemoryRouter>
      <ListLessPageButton
        key={1}
        page={page}
        currentPagePath={"/page-url"} //to make the color of the button primary
      />
    </MemoryRouter>
  );

  expect(tree).toMatchSnapshot();
});
