import { AnyAction } from 'redux'
import Messages from "./index";

describe("Redux Messages Reducer", () => {
  it("should create reducer with initial props", () => {
    const initialState = { message: "" };
    const action: AnyAction = {
      type: Number
    };
    const reducer = Messages(initialState, action);
    expect(reducer).toEqual(initialState);
  });
});
