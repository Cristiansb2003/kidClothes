import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Login from './login/Login'
import Registro from './login/registro/Registro'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Noticias from './pages/Noticias'
import Ropa from './pages/Ropa'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Inicio/>}></Route>
            <Route path="/registro" element={<Registro />} />
            <Route path='/login' element={<Login/>}/> 
            <Route path="/home" element={<Inicio/>} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/ropa" element={<Ropa/>} />
            <Route path="/noticias" element={<Noticias/>}/>
            <Route path="/info" element={<Nosotros/>} />
          </Routes>
      </BrowserRouter>

  </React.StrictMode>
)
