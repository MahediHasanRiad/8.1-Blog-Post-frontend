import { createSlice } from "@reduxjs/toolkit";
import { registerAsyncThunk } from "./register.asychThunk";
import { loginAsyncThunk } from "./login.asyncThunk";
import { updateUserAsyncThunk } from "../Dashboard/redux/update-user-Info.asyncThunk";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      ((state.user = null), (state.token = null));
    },
  },
  extraReducers: (builder) => {
    // register
    builder
      .addCase(registerAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // login
    builder
      .addCase(loginAsyncThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginAsyncThunk.fulfilled, (state, action) => {
        const { accessToken, loginUser } = action.payload.data;
        state.loading = false;
        state.user = loginUser;
        state.token = accessToken;
      })
      .addCase(loginAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // update profile
    builder
    .addCase(updateUserAsyncThunk.pending, (state) => {
      state.loading = true
    })
    .addCase(updateUserAsyncThunk.fulfilled, (state, action) => {
      state.loading = false
      
      state.user = {
        ...state.user,
        ...action.payload.data
      }
    })
    .addCase(updateUserAsyncThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    })
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
