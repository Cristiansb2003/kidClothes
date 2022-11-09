import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './card/Card'
import Ffooter from './footer/Footer'
import './index.css'
import Qsomos from './qsomos/qsomos'
import Carrucel from './carrucel/Carrucel'
import Top from './top/Top'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Top/>
    <Carrucel/>
    <Card/>
    <Card/>
    <Qsomos/>
    <Ffooter/>
  </React.StrictMode>
)
