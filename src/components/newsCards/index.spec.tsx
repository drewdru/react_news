import { render } from "test";
import { screen } from '@testing-library/react';

import data from "../../meta.json";
import { NewsCards } from "./index";

describe("Cards component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<NewsCards />);

    expect(view).toBeTruthy();
  });

  it("cards length must be equal to the length of the meta data", () => {
    render(<NewsCards />);

    const cardContainer = screen.getAllByTestId("container");
    expect(cardContainer).toHaveLength(data.plugins.length);
  });
});
