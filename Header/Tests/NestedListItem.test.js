import React from "react";
import NestedListItem from "../NestedListItem";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("test for NestedListItem", () => {
  const page = {
    name: "Page",
    url: "page-url", //to make the color of the button primary
    list: [
      {
        name: "subPage1",
        url: "subPage1-url", //to make the color of the button primary
      },
    ],
  };

  let tree;

  beforeEach(() => {
    tree = render(
      <MemoryRouter>
        <NestedListItem
          key={1}
          page={page}
          currentPagePath={"/page-url/subPage1-url"} //to make the color of the button primary
          handleDrawerClose={jest.fn()}
        />
      </MemoryRouter>
    );
  });

  it("matches snapshot", () => {
    expect(tree).toMatchSnapshot();
  });

  it("open the correct nested menu", () => {
    let btn = tree.getByTestId("openMenuButton");
    fireEvent.click(btn);
    expect(tree.getByTestId("nestedMenu")).toBeVisible();
  });
});
