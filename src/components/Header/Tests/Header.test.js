import React from "react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("matches snapshot", () => {
  const tree = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(tree).toMatchSnapshot();
});
