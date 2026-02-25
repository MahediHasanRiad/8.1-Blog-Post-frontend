import React from "react";

function Card({ authorImage, authorName, title, description, articleImage }) {
  return (
    <article className="w-full flex flex-col p-6">
      {/* Author Info */}
      <div className="flex items-center mb-4">
        <img
          src={authorImage}
          alt={authorName}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="ml-2 text-xs font-medium text-text-0">
          {authorName}
        </span>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h4 className="text-xl md:text-2xl font-bold text-text-0 leading-tight mb-2">
            {title}
          </h4>
          <p className="text-text-0 line-clamp-3 text-sm md:text-base leading-relaxed">
            {description}
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

export default Card;
