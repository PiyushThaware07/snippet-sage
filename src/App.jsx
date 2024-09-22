import './App.css';
import React from 'react'
// RRD
import { Routes, Route } from "react-router-dom";
// components
import MainLayout from './components/common/MainLayout';
import Blogs from './pages/blogs/Blogs';
import BlogsPost from './pages/blogs/BlogsPost';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route index element={<Blogs />} />
        <Route path=':blogsId' element={<BlogsPost />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
