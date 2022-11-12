import Anuncio from "../anuncio/Anuncio"
import Card from "../card/Card"
import Carrucel from "../carrucel/Carrucel"
import Contacto from "../contacto/Contacto"
import Ffooter from "../footer/Footer"
import Qsomos from "../qsomos/qsomos"
import Top from "../top/Top"

function Inicio(){

  return (
    <div>
      <Top/>
      <Carrucel/>
      <Card/>
      <Card/>
      <Anuncio/>
      <Qsomos/>
      <Contacto/>
      <Ffooter/>
    </div>
  )
}

export default Inicio