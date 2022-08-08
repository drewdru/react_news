import { render } from "test";
import { BrowserRouter as Router } from "react-router-dom";
import { NewsCards } from "./index";

describe("Cards component testing with testing-library", () => {
  const view = render(<Router><NewsCards /></Router>);
  it("renders without crashing", () => {
    expect(view).toBeTruthy();
  });
});
