import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "redux/slices/message";
import { IAuthRefreshToken, IAuthUser, IAuthUserResponse } from "./index.types"

import AuthService from "./index.service";

let storageUser = localStorage.getItem("user");
const user = !storageUser ? null : JSON.parse(storageUser);
let refreshToken = localStorage.getItem("refreshToken");

export const signup = createAsyncThunk<IAuthUserResponse, IAuthUser>(
  "auth/signup",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.signup(email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return { data: response.data.data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(undefined);
    }
  }
);

export const signin = createAsyncThunk<IAuthUserResponse, IAuthUser>(
  "auth/signin",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.signin(email, password);
      return { data: response.data.data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(undefined);
    }
  }
);



export const refreshtoken = createAsyncThunk<IAuthUserResponse, IAuthRefreshToken>(
  "auth/refresh-token",
  async ({ refreshToken }, thunkAPI) => {
    try {
      const response = await AuthService.refreshtoken(refreshToken);
      return { data: response.data.data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(undefined);
    }
  }
);


export const signout = createAsyncThunk("auth/signout", async () => {
  await AuthService.signout();
});

const initialState = user
  ? { isLoggedIn: true, user, refreshToken, token: null }
  : { isLoggedIn: false, user: null, refreshToken: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    })
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoggedIn = false;
    })
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.data.user;
      state.refreshToken = action.payload.data.refreshToken;
      state.token = action.payload.data.token;
    })
    builder.addCase(signin.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.refreshToken = null;
      state.token = null;
    })
    builder.addCase(signout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.refreshToken = null;
      state.token = null;
    })
    builder.addCase(refreshtoken.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.data.user;
      state.refreshToken = action.payload.data.refreshToken;
      state.token = action.payload.data.token;
    })
    builder.addCase(refreshtoken.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.refreshToken = null;
      state.token = null;
    })
  },
});

export default authSlice.reducer;