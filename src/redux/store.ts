import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import { useDispatch } from "react-redux";

import rootReducer from "./reducers";

export const store = configureStore({
  reducer: {
    rootReducer,
    authReducer,
    messageReducer,
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
