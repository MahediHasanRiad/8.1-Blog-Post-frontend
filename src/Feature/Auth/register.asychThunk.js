import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerAsyncThunk = createAsyncThunk(
  "register/authRegisterThunk",
  async (userData, { rejectWithValue }) => {
    // rejectWithValue = inbuild error handler from asyncThunk
    try {
      const response = await axios.post("/api/v1/user/register", userData);
      return response.data;
    } 
    catch (error) {
      // generate custom error from backend
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
