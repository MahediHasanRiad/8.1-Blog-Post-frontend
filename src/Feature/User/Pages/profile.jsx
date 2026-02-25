import React, { useState } from "react";
import ProfileImages from "../Components/Profile/profile-images";
import Menu from "../Components/Profile/menu";
import ArticleCard from "@/Shared/Components/article-card";
import Info from "../Components/Profile/info";

function Profile() {
  const [article, setArticle] = useState(true);
  const [about, setAbout] = useState(false);

  return (
    <section>
      <ProfileImages />
      <Menu
        article={article}
        setArticle={setArticle}
        about={about}
        setAbout={setAbout}
      />
      {/* show articles  */}
      {article && (
        <ArticleCard
          path={""}
          title={"my new 1st year blog"}
          description={
            "I was working in Hyderabad, fairly settled and not actively planning a job switch, when I received a call from an Uber recruiter via InstaHire. The role was based in Bangalore, which made me pause — relocation, a new team, new expectations."
          }
          articleImage={"/public/cover-image.jpg"}
        />
      )}

      {/* show about section  */}
      {about && <Info />}
    </section>
  );
}

export default Profile;
