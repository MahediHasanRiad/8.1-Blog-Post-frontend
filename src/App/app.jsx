import Articles from "@/Feature/Article/Pages/article.page";
import SingleArticle from "@/Feature/Article/Pages/single-article.page";
import EditProfile from "@/Feature/Dashboard/pages/edit-profile";
import Profile from "@/Feature/User/Pages/profile";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles/single" element={<SingleArticle />} />
        <Route path="/dashboard" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
