import React from 'react'
import ReactDOM from 'react-dom/client'
import Carrucel from './carrucel/Carrucel'
import './index.css'
import Top from './top/Top'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Top/>
    <Carrucel/>
    </>
  </React.StrictMode>
)
