import MainLayout from "@/Layout/Main-Layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { singleArticleAsychThunk } from "../singleArticle.asyncThunk";
import DOMPurify from "dompurify";


function SingleArticlePage() {
  const { id } = useParams();
  const { singleArticle, isLoading } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleArticleAsychThunk(id));
  }, [id]);

  return (
    <MainLayout className="p-6 space-y-4">
      {isLoading && (
        <p className="text-2xl mx-auto flex items-center">Loading...</p>
      )}
      {/* article title  */}
      <div>
        <h1 className="text-4xl font-semibold">{singleArticle?.title}</h1>
      </div>
      {/* author info  */}
      <div className="flex items-center space-x-2 mt-2">
        <img
          src={singleArticle?.author?.avatar}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <Link to={`/profile/${singleArticle?.author?._id}`}
          className="text-sm text-text-0 hover:underline hover:text-secondary-0 cursor-pointer"
        >
          {singleArticle?.author?.name}
        </Link>
      </div>
      {/* article image  */}
      <img
        src={singleArticle?.coverImage}
        alt=""
        className="w-full rounded h-auto object-fill my-4"
      />
      {/* article description  */}
      <span
        // {dangerouslySetInnerHTML} => to remove html tag from body
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(singleArticle?.body),
        }}
      ></span>
    </MainLayout>
  );
}

export default SingleArticlePage;
