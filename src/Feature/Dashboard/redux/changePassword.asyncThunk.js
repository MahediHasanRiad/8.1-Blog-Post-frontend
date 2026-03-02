import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const changePasswordAsyncThunk = createAsyncThunk(
  "changePassword/changePasswordAsyncThunk",
  async ({ oldPass, newPass }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/v1/user/changePassword",
        { oldPass, newPass },
        { withCredentials: true },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
