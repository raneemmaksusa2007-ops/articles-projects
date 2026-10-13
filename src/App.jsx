
import './App.css'
import { BrowserRouter, Routes, Route, useParams } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './componnents/Navbar';
import Articles from './pages/Articles';
import AddArticle from './pages/AddArticle';
import ArticleDetails from './pages/ArticleDetails';
import Footer from './componnents/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/add" element={<AddArticle  />} />
        <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>

  );
}



export default App