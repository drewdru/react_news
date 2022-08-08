import { render } from "test";

import { Logo } from "./index";

describe("Logo component testing with testing-library", () => {
  const view = render(<Logo />);

  it("renders without crashing", () => {
    expect(view).toBeTruthy();
  });
});
