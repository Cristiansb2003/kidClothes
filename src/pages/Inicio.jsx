import Card from "../card/Card"
import Carrucel from "../carrucel/Carrucel"
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
      <Qsomos/>
      <Ffooter/>
    </div>
  )
}

export default Inicio