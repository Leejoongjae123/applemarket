import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import Layout from './components/GNB'
import ProductList from './components/ProductList'
import Upload from './components/Upload'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route index element={<ProductList />} />
        <Route path="/upload" element={<Upload/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
