import Anuncio from "../anuncio/Anuncio"
import Carrucel from "../carrucel/Carrucel"
import Contacto from "../contacto/Contacto"
import Ffooter from "../footer/Footer"
import Nuevo from "../nuevo/Nuevo"
import Qsomos from "../qsomos/qsomos"
import Top from "../top/Top"

function Inicio(){

  return (
    <div>
      <Top/>
      <Carrucel/>
      <Nuevo/>
      <Anuncio/>
      <Qsomos/>
      <Contacto/>
      <Ffooter/>
    </div>
  )
}

export default Inicio