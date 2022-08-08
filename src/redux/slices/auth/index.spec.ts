import { AnyAction } from 'redux'
import Auth from "./index";

describe("Redux Auth Reducer", () => {
  it("should create reducer with initial props", () => {
    const initialState = { isLoggedIn: false, user: null, refreshToken: null, token: null };
    const action: AnyAction = {
      type: Number
    };
    const reducer = Auth(initialState, action);
    expect(reducer).toEqual(initialState);
  });
});
