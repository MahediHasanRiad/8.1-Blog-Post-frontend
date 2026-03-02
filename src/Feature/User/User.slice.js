import { createSlice } from "@reduxjs/toolkit";
import { getUserAsychThunk } from "./redux/getUser.asyncThunk";

const initialState = {
  user: null,
  isLoading: false,
  isError: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // check user login or not
    builder
      .addCase(getUserAsychThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserAsychThunk.fulfilled, (state, action) => {
        state.isError = null;
        state.isLoading = false;
      })
      .addCase(getUserAsychThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
