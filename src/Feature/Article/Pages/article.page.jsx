import InputField from "@/Shared/Components/input";
import React, { useEffect } from "react";
import ArticleCard from "../../../Shared/Components/article-card";
import MainLayout from "@/Layout/Main-Layout";
import { useDispatch, useSelector } from "react-redux";
import { allArticleAsyncThunk } from "../allArticle.asyncThunk";
import PaginationForm from "@/Shared/Components/pagination";

function Articles() {
  const { articles, isLoading, isError } = useSelector(
    (state) => state.article,
  );
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allArticleAsyncThunk())
  }, [])
console.log('articles', articles)
  return (
    <MainLayout className="">
      {/* articles  */}
      <section className="">
        <InputField
          placeholder={"start a post .."}
          className={"rounded-3xl w-1/2"}
        />
        {articles.article?.map((item) => (
          // console.log('aus', item.author._id)
          <ArticleCard
            key={item._id}
            id={item._id}
            authorId={item.author._id}
            authorImage={item.author.avatar}
            authorName={item.author.name}
            title={item.title}
            description={item.body}
            articleImage={item.coverImage}
          />
        ))}

        {/* pagination  */}
        <section className="w-full my-4 mx-auto">
          <PaginationForm />
        </section>
      </section>
    </MainLayout>
  );
}

export default Articles;
