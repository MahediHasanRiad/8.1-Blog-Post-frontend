import InputField from "@/Shared/Components/input";
import React, { useEffect } from "react";
import ArticleCard from "../../../Shared/Components/article-card";
import MainLayout from "@/Layout/Main-Layout";
import { useDispatch, useSelector } from "react-redux";
import { allArticleAsyncThunk } from "../allArticle.asyncThunk";

function Articles() {
  const { articles, isLoading, isError } = useSelector(
    (state) => state.article,
  );
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allArticleAsyncThunk())
  }, [])

  return (
    <MainLayout className="">
      {/* articles  */}
      <section className="">
        <InputField
          placeholder={"start a post .."}
          className={"rounded-3xl w-1/2"}
        />
        {articles.article?.map((item) => (
          <ArticleCard
            key={item._id}
            id={item._id}
            authorImage={item.author.avatar}
            authorName={item.author.name}
            title={item.title}
            description={item.body}
            articleImage={item.coverImage}
          />
        ))}
      </section>
    </MainLayout>
  );
}

export default Articles;
