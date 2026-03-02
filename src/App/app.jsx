import Articles from "@/Feature/Article/Pages/article.page";
import SingleArticlePage from "@/Feature/Article/Pages/single-article.page";
import AddNewArticle from "@/Feature/Dashboard/pages/add-article.page";
import ChangePassword from "@/Feature/Dashboard/pages/change-password.page";
import EditProfile from "@/Feature/Dashboard/pages/edit-profile.page";
import Profile from "@/Feature/User/Pages/profile.page";
import { Routes, Route } from "react-router";
import Test from "./test";
import Register from "@/Feature/Auth/Pages/register.page";
import LogIn from "@/Feature/Auth/Pages/login.page";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../Feature/Auth/Auth.slice";

function App() {
  const dispatch = useDispatch();

  // check user login or not
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/v1/user/me", {
          withCredentials: true,
        });
        dispatch(setUser(response.data.data));
      } catch (error) {
        dispatch(logout());
      }
    })();
  }, []);

  return (
    <>
      <Routes>
        {/* auth  */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />

        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/" element={<Articles />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/article/:id" element={<SingleArticlePage />} />
        <Route path="/dashboard" element={<EditProfile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/newArticle" element={<AddNewArticle />} />
      </Routes>
    </>
  );
}

export default App;
