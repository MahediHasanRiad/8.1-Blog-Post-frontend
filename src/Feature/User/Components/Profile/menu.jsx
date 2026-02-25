import React, { useState } from "react";
import MenuItem from "./menu-item";

function Menu({ article, setArticle, about, setAbout }) {
  
  const articleHandle = () => {
    setArticle(true);
    setAbout(false);
  };

  const aboutHandle = () => {
    setAbout(true);
    setArticle(false);
  };

  return (
    <section className="mt-25">
      <section className="flex space-x-3">
        <MenuItem text={"Article"} show={articleHandle} isActive={article} />
        <MenuItem text={"About"} show={aboutHandle} isActive={about} />
      </section>
      <hr />
    </section>
  );
}

export default Menu;
