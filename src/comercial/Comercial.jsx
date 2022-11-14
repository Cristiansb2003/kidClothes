import img1 from './../imagenes/noticia1.jpeg'
import img2 from './../imagenes/noticia2.jpeg'
import img3 from './../imagenes/noticia3.jpeg'
import st from './comercial.module.css'
function Comercial(){
    return(
        <>
        <h1>Noticias</h1>

        <h2>FALTA POCO PARA LOS NUEVOS DESCUENTOS</h2>

        <img src={img1} alt="" className={st.imagen}/>

        <h2>¡YA TENEMOS ENVIOS A TODO MÉXICO!</h2>
        <img src={img3} alt="" className={st.imagen}/>

        <h2>PROXIMAMENTE NUEVA SUCURSAL</h2>
        <img src={img2} alt="" className={st.imagen}/>
        </>
    )
}

export default Comercial
