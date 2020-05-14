import React from "react";
import NTKDrawer from "../NTKDrawer";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("matches snapshot", () => {
  const pages = [
    { name: "Page1", url: "page1-url", list: false },
    {
      name: "Page2",
      url: "Page2-url",
      list: [{ name: "SubPage2", url: "subPage2-url" }],
    },
  ];
  const tree = render(
    <MemoryRouter>
      <NTKDrawer
        pages={pages}
        currentPagePath={"/page1-url"} //to make the color of Page1 button primary
        isDrawerOpen={true}
        handleDrawerClose={jest.fn}
      />
    </MemoryRouter>
  );

  expect(tree).toMatchSnapshot();
});
