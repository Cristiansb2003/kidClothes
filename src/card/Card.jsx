import Ffooter from '../footer/Footer'
import img1 from './../imagenes/1.png'
import img2 from './../imagenes/2.png'
import img3 from './../imagenes/3.png'
import carrito from './../imagenes/carrocompras.png'
import st from './card.module.css'
function Card(){
    return(
        <div className={st.contenedor}>
            <table className={st.tablagen}>
        <td>
        <div className={st.externo}>
            <div className={st.superior}></div>
            <div className={st.inferior}> </div> 

            <div className={st.gris}>

                <img src={img1} alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Nombre</p>
            <p className={st.txt}>Precio</p>
            </div>

            <div className={st.comprar}>
            <img src={carrito} alt="" className={st.imagen2}/>
            </div>
        </div>
        </td>
        
        <td>
        <div className={st.externo}>
            <div className={st.superior}></div>
            <div className={st.inferior}> </div>

            <div className={st.gris}>

                <img src={img2} alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Nombre</p>
            <p className={st.txt}>Precio</p>
            </div>

            <div className={st.comprar}>
            <img src={carrito} alt="" className={st.imagen2}/>
            </div>
        </div>
        </td>
        <td>
        <div className={st.externo}>
            <div className={st.superior}></div>
            <div className={st.inferior}> </div>

            <div className={st.gris}>

                <img src={img3} alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Nombre</p>
            <p className={st.txt}>Precio</p>
            </div>

            <div className={st.comprar}>
            <img src={carrito} alt="" className={st.imagen2}/>
            </div>
        </div>
        </td>
    </table>
        </div>
    );
}
export default Card