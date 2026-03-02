import React from "react";
import { Link, } from "react-router";

function ArticleCard({
  path = "/",
  id,
  authorId,
  authorImage,
  authorName,
  title,
  description,
  articleImage,
}) {

  // tinyMCS store data with HTML tags, so, 
  // if want to display data without HTML tag, then do this function
  const getSummary = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };


  return (
    <article className="w-full flex flex-col p-6">
      {/* Author Info */}
      <div className="flex items-center">
        {authorImage && (
          <img
            src={authorImage}
            alt={authorName}
            className="w-6 h-6 rounded-full object-cover"
          />
        )}
        {authorName && (
          <Link to={`/profile/${authorId}`} className="ml-2 text-xs font-medium text-text-0">
            {authorName}
          </Link>
        )}
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col items-center md:flex-row gap-6">
        <div className="flex-1">
          <Link to={`/article/${id}`}>
            <h4 className="text-xl my-4 md:text-2xl font-bold text-text-0 leading-tight mb-2">
              {title}
            </h4>
          </Link>
          <p className="text-text-0 line-clamp-3 text-sm md:text-base leading-relaxed">
            {/* wrap description for remove html tag  */}
            {getSummary(description)}
          </p>
        </div>

        {/* Article Image Container */}
        <div className="w-full md:w-32 lg:w-40 shrink-0">
          <img
            src={articleImage}
            alt={`Cover for ${title}`}
            className="w-full aspect-square md:aspect-video object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>

      <hr className="mt-4 border-t border-gray-100" />
    </article>
  );
}

export default ArticleCard;
