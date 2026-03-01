import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserAsyncThunk = createAsyncThunk(
  "user/updateUserAsyncThunk",
  async (formData, { rejectWithValue }) => {
    try {
      console.log('f', formData)
      const response = await axios.patch("/api/v1/user/update", formData, {
        withCredentials: true, // {withCredentials: true => send cookie in backend
      }); 
      return response.data;
    } 
    catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
