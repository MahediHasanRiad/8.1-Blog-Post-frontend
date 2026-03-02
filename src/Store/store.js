import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../Feature/Auth/Auth.slice';
import articleSlice from '../Feature/Article/Article.slice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    article: articleSlice,
  }
})