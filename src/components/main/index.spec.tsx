
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
  const view = render(<Router><Main /></Router>);
  it("renders without crashing", () => {
    expect(view).toBeTruthy();
  });
});
