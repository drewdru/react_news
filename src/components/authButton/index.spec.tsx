import { BrowserRouter as Router } from "react-router-dom";
import store from "redux/store";
import { Provider } from 'react-redux'
import { render } from "@testing-library/react";

import { AuthButton } from "./index";

describe("AuthButton component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Router><Provider store={store}><AuthButton/></Provider></Router>);
    expect(view).toBeTruthy();
  });
});
