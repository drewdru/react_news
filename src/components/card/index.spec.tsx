import { render } from "@testing-library/react";

import { ShadowCard } from "./index";

describe("Card component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<ShadowCard />);
    expect(view).toBeTruthy();
  });
});
