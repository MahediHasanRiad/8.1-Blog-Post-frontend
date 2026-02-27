import Articles from "@/Feature/Article/Pages/article.page";
import SingleArticle from "@/Feature/Article/Pages/single-article.page";
import AddNewArticle from "@/Feature/Dashboard/pages/add-article.page";
import ChangePassword from "@/Feature/Dashboard/pages/change-password.page";
import EditProfile from "@/Feature/Dashboard/pages/edit-profile.page";
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
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/newArticle" element={<AddNewArticle />} />
      </Routes>
    </>
  );
}

export default App;
