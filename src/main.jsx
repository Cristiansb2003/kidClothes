import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './card/Card'
import Cardg from './cardgirls/Cardg'
import Contacto from './contacto/Contacto'
import Ffooter from './footer/Footer'
import './index.css'
import Qsomos from './qsomos/qsomos'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Card/>
    <Cardg/>
    <Qsomos/>
    <Contacto/>
    <Ffooter/>
    
    

    
  </React.StrictMode>
)
