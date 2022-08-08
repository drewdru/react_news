import { signup, signin, signout } from "./slices/auth";


describe("Redux Actions", () => {
  describe("Auth Actions", () => {
    const dispatch = jest.fn();
    it("signup should be an action", async () => {
      dispatch(signup({email: "Test", password: "123456789"}));
      expect(dispatch.mock.calls.length).toBe(1);
    });
    it("signin should be an action", () => {
      dispatch(signin({email: "Test", password: "123456789"}));
      expect(dispatch.mock.calls.length).toBe(1);
    });
    it("signout should be an action", () => {
      dispatch(signout());
      expect(dispatch.mock.calls.length).toBe(1);
    });
  });
});
