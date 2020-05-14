import React from "react";
import SubNavBarButton from "../SubNavBarButton";
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
      <SubNavBarButton
        key={1}
        page={page}
        parentPage={"/page-url"} //to make the color of the button primary
        currentPagePath={"/page-url/subPage1-url"} //to make the color of the button primary
      />
    </MemoryRouter>
  );

  expect(tree).toMatchSnapshot();
});
