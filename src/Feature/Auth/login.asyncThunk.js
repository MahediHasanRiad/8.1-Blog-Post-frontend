import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAsyncThunk = createAsyncThunk(
  "login/loginAsyncThunk",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/user/login", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
