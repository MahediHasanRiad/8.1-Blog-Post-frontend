import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addArticleAsyncThunk = createAsyncThunk(
  "article/addArticleAsyncThunk",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/article", formData, {
        withCredentials: true,
      });
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
