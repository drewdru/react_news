import store from "./store";

describe("Redux Store", () => {
  it("should create store with auth reducer", () => {
    const currentState = store.getState();
    expect(currentState).toHaveProperty("rootReducer.auth");
  });
});
