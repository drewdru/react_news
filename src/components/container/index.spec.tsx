import { render } from "@testing-library/react";

import { MainContainer } from "./index";

describe("MainContainer component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<MainContainer />);
    expect(view).toBeTruthy();
  });
});
