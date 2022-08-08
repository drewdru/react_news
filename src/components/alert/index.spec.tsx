import { render } from "@testing-library/react";

import { AnimatedAlert } from "./index";

describe("AnimatedAlert component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<AnimatedAlert />);
    expect(view).toBeTruthy();
  });
});
