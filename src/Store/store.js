import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../Feature/Auth/Auth.slice';
import articleSlice from '../Feature/Article/article.slice';
import userSlice from '../Feature/User/User.slice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    article: articleSlice,
  }
})