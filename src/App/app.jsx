import Articles from "@/Feature/Article/Pages/article.page";
import SingleArticle from "@/Feature/Article/Pages/single-article.page";
import Profile from "@/Feature/User/Pages/profile";
import MainLayout from "@/Layout/Main-Layout";
import {Routes, Route} from 'react-router'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles/single" element={<SingleArticle />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
