import { createSlice } from "@reduxjs/toolkit";
import { registerAsyncThunk } from "./register.asychThunk";
import { loginAsyncThunk } from "./login.asyncThunk";
import { updateUserAsyncThunk } from "../Dashboard/redux/update-user-Info.asyncThunk";
import { changePasswordAsyncThunk } from "../Dashboard/redux/changePassword.asyncThunk";
import { logoutAsyncthuck } from "./logout.asyncThuck";

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
      state.user = null;
      state.token = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
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
        state.error = null;
        state.user = action.payload;
        console.log(action.payload.data)
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
        state.error = null;
        state.user = loginUser;
        state.token = accessToken;
      })
      .addCase(loginAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // logout
    builder
      .addCase(logoutAsyncthuck.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAsyncthuck.fulfilled, (state) => {
        state.user = null;
        state.error = null;
        state.loading = false;
      })
      .addCase(logoutAsyncthuck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // update profile
    builder
      .addCase(updateUserAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.user = {
          ...state.user,
          ...action.payload.data,
        };
      })
      .addCase(updateUserAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });

    // reset password
    builder
      .addCase(changePasswordAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePasswordAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(changePasswordAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
