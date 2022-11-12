import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Inicio from './pages/Inicio';
import Login from './login/Login';
import Registro from './login/registro/Registro';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/registro' element={<Registro/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
