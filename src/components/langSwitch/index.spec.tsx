import store from "redux/store";
import { Provider } from 'react-redux'
import { render } from "@testing-library/react";

import { LangSwitch } from "./index";

describe("LangSwitch component testing with testing-library", () => {
  const view = render(<Provider store={store}><LangSwitch/></Provider>);

  it("renders without crashing", () => {
    expect(view).toBeTruthy();
  });
});
