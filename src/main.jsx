import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './card/Card'
import Ffooter from './footer/Footer'
import './index.css'
import Inicio from './pages/Inicio';
import Login from './login/Login';
import Registro from './login/registro/Registro';

import Qsomos from './qsomos/qsomos'
import Carrucel from './carrucel/Carrucel'
import Top from './top/Top'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/index" element={<Inicio/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/registro' element={<Registro/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
