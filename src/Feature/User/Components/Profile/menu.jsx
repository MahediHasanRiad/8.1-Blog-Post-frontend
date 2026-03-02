import React, { useState } from "react";
import MenuItem from "./menu-item";

function Menu({ article, setArticle, about, setAbout, contact, setContact }) {
  
  const articleHandle = () => {
    setArticle(true);
    setAbout(false);
    setContact(false);
  };

  const aboutHandle = () => {
    setAbout(true);
    setArticle(false);
    setContact(false);
  };

  const contactHandler = () => {
    setContact(true);
    setAbout(false);
    setArticle(false);
  };

  return (
    <section className="mt-25">
      <section className="flex space-x-3">
        <MenuItem text={"Article"} show={articleHandle} isActive={article} />
        <MenuItem text={"About"} show={aboutHandle} isActive={about} />
        <MenuItem text={"Contact"} show={contactHandler} isActive={contact} />
      </section>
      <hr />
    </section>
  );
}

export default Menu;
