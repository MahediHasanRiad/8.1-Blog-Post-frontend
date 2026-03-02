import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logoutAsyncthuck = createAsyncThunk('logout/logoutAsyncThunk', async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get('/api/v1/user/logout', {withCredentials: true})
    return response.data
  } 
  catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})