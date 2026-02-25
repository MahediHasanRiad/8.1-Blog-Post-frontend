import Articles from "@/Feature/Article/Pages/article.page";
import MainLayout from "@/Layout/Main-Layout";
import {Routes, Route} from 'react-router'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
