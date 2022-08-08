import { combineReducers } from "redux";

import auth from "redux/slices/auth";
import message from "redux/slices/message";

import { store } from "./store";

const rootReducer = combineReducers({ auth, message });

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
