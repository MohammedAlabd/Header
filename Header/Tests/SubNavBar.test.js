import React from "react";
import SubNavBar from "../SubNavBar";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("matches snapshot", () => {
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
  const tree = render(
    <MemoryRouter>
      <SubNavBar
        pageObject={page}
        currentPagePath={"/page-url/subPage1-url"} //to make the color of the button primary
      />
    </MemoryRouter>
  );

  expect(tree).toMatchSnapshot();
});
