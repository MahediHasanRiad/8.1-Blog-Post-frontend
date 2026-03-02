import React, { useEffect, useState } from "react";
import ProfileImages from "../Components/Profile/profile-images";
import Menu from "../Components/Profile/menu";
import ArticleCard from "@/Shared/Components/article-card";
import Info from "../Components/Profile/info";
import MainLayout from "@/Layout/Main-Layout";
import ContactInfo from "../Components/Profile/contact";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { viewProfileAsyncThunk } from "../redux/profile.asyncThunk";

function Profile() {
  const [article, setArticle] = useState(true);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(viewProfileAsyncThunk(id));
  }, [id]);
console.log('profile', user)
  return (
    <MainLayout>
      <ProfileImages profile={user?.avatar} coverImage={user?.coverImage} />
      <Menu
        article={article}
        setArticle={setArticle}
        about={about}
        setAbout={setAbout}
        contact={contact}
        setContact={setContact}
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
      {about && <Info bio={user.bio} />}

      {/* show contact info  */}
      {contact && <ContactInfo info={user} />}
    </MainLayout>
  );
}

export default Profile;
