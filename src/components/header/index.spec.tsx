import { BrowserRouter as Router } from "react-router-dom";

import { screen } from '@testing-library/react';
import { render } from "test";

import { Header } from "./index";

describe("Header component testing with testing-library", () => {
  render(<Router><Header/></Router>);
  const container = screen.getByTestId("container");
  const logo = screen.getByAltText("logo");

  it("renders without crashing", () => {
    expect(container).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(logo).toBeDefined();
  });
});
