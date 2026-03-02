import { createSlice } from "@reduxjs/toolkit";
import { addArticleAsyncThunk } from "../Dashboard/redux/add-article.asyncThunk";
import { allArticleAsyncThunk } from "./allArticle.asyncThunk";
import { singleArticleAsychThunk } from "./singleArticle.asyncThunk";

const initialState = {
  articles: [],
  singleArticle: null,
  isLoading: false,
  isError: null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add new article
    builder
      .addCase(addArticleAsyncThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addArticleAsyncThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(addArticleAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });

    // list of all article
    builder
      .addCase(allArticleAsyncThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(allArticleAsyncThunk.fulfilled, (state, action) => {
        state.isError = null;
        state.isLoading = false;

        state.articles = action.payload.data;
      })
      .addCase(allArticleAsyncThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });

    // find a single article
    builder
      .addCase(singleArticleAsychThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singleArticleAsychThunk.fulfilled, (state, action) => {
        state.isError = null;
        state.isLoading = false;
console.log(action.payload.data.article)
        state.singleArticle = action.payload.data.article
      })
      .addCase(singleArticleAsychThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
  },
});

export const {} = articleSlice.actions;
export default articleSlice.reducer;
