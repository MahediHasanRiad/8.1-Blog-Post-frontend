import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allArticleAsyncThunk = createAsyncThunk(
  "article/allArticleAsyncThunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/article/all");
      return response.data;
    } 
    catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
