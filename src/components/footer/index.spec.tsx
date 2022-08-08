import { render } from "test";
import { screen } from '@testing-library/react';

import { Footer } from "./index";

describe("Footer component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Footer />);

    expect(view).toBeTruthy();
  });

  it("renders pankod logo and directed to the correct url", () => {
    render(<Footer />);
    const logo = screen.getByTestId("pankod-logo");

    expect(logo.getAttribute("href")).toStrictEqual(
      "https://github.com/pankod"
    );
  });

  it("should render 4 icons successfully", () => {
    render(<Footer />);
    const icons = screen.getByTestId("icons-container").childNodes;
    expect(icons).toHaveLength(4);
  });
});
