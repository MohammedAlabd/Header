import React from "react";
import SingleListItem from "../SingleListItem";
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
      <SingleListItem
        key={1}
        page={page}
        currentPagePath={"/page-url"} //to make the color of the button primary
        handleDrawerClose={jest.fn()}
      />
    </MemoryRouter>
  );

  expect(tree).toMatchSnapshot();
});
