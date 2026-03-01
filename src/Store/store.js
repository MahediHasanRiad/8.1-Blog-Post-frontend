import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../Feature/Auth/Auth.slice';
import articleSlice from '../Feature/Dashboard/redux/article.slice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    article: articleSlice,
  }
})