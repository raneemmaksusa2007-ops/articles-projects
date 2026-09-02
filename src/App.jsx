
import './App.css'
import { BrowserRouter, Routes, Route, useParams } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './componnents/Navbar';
import Articles from './pages/Articles';
import AddArticle from './pages/AddArticle';
import ArticleDetails from './pages/ArticleDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const {id} = useParams();
  const [isLoding, setIsloding] = useState(true);
  const [isErorr, setIsErorr] = useState(null);
  const [articles, setArticle] = useState([]);

  const addArticle = (newArticle) => {
    const articleWithExtra = {
      ...newArticle,
      id: Date.now()
    }
    setArticle([...articles, newArticle])
  }

  useEffect(() => {
    async function getData() {
      try {
        setIsloding(true)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
        setArticle(response.data);
      } catch (err) {
        setIsErorr("there is Erorr unexpected")
      } finally {
        setIsloding(false);
      }
    }
    getData();
  }, [])

  if (isLoding) {
    return <p>Loading...</p>
  }

  if (isErorr) {
    return <p>{isErorr}</p>
  }

  function handleDelete(articleId){
    const updatedArticle = articles.filter((article) => article.id !== articleId);
    setArticle(updatedArticle)
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles articles={articles} handleDelete={handleDelete}/>} />
        <Route path="/article/:id" element={<ArticleDetails/>}/>
        <Route path="/add" element={<AddArticle onAdd={addArticle} />} />
      </Routes>
    </div>

  );
 
}

export default App