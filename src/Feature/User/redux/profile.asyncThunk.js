import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const viewProfileAsyncThunk = createAsyncThunk(
  "user/viewProfileAsyncThunk",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/v1/user/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
