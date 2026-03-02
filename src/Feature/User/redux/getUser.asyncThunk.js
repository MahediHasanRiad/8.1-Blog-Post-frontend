import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAsychThunk = createAsyncThunk('user/getUserAsychThunk', async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get('/api/v1/user/me', {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})