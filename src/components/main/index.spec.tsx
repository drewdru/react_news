import { screen } from '@testing-library/react';
import { render } from "test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Main />);

    expect(view).toBeTruthy();
  });

  it("renders texts successfuly", () => {
    render(<Main />);

    screen.getByText("superplate");
    screen.getByText(
      "hello"
    );
  });

  it("renders button successfuly", () => {
    render(<Main />);

    screen.getByText("documentation");
  });
});
