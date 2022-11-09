import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Inicio from './pages/Inicio';
import Login from './login/Login';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Inicio/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
