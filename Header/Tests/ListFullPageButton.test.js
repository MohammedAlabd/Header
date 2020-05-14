import React from "react";
import ListFullPageButton from "../ListFullPageButton";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("ListFullPageButton Test", () => {
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
        <ListFullPageButton
          page={page}
          currentPagePath={"/page-url/subPage1-url"} //to make the color of the button primary
        />
      </MemoryRouter>
    );
  });

  it("matches snapshot", () => {
    expect(tree).toMatchSnapshot();
  });

  it("open the correct menu", () => {
    let btn = tree.getByTestId("openMenuButton");
    fireEvent.click(btn);
    expect(tree.getByTestId("menu")).toBeVisible();
  });
});
