import { createSlice } from "@reduxjs/toolkit";
import { addArticleAsyncThunk } from "./add-article.asyncThunk";

const initialState = {
  article: null,
  links: null,
  loading: false,
  error: null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addArticleAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addArticleAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.article = action.payload.data.article;
        state.links = action.payload.data.links;
      })
      .addCase(addArticleAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = articleSlice.actions;
export default articleSlice.reducer;
