import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const singleArticleAsychThunk = createAsyncThunk(
  "article/singleArticleAsychThunk",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/v1/article/${id}`);
      console.log(response)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
