import Ffooter from '../footer/Footer'
import img1 from './../imagenes/1.png'
import img2 from './../imagenes/2.png'
import img3 from './../imagenes/3.png'
import img4 from './../imagenes/conjusa.png'
import img5 from './../imagenes/conjrayas.png'
import img6 from './../imagenes/ninarosa4.png'
import carrito from './../imagenes/carrocompras.png'
import st from './card.module.css'
function Card(){
    return(
        <div className={st.contenedor}>
            <table className={st.tablagen}>
                <tr>
        <td>
        <div className={st.externo}>
            <div className={st.superior}></div>
            <div className={st.inferior}> </div> 

            <div className={st.gris}>

                <img src={img1} alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Gato Bco</p>
            <p className={st.txt}>$250</p>
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
            <p className={st.txt}>Carros</p>
            <p className={st.txt}>$200</p>
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
            <p className={st.txt}>Sudadera R</p>
            <p className={st.txt}>$400</p>
            </div>

            <div className={st.comprar}>
            <img src={carrito} alt="" className={st.imagen2}/>
            </div>
        </div>
        </td>
        </tr>

        <tr>
        <td>
        <div className={st.externo}>
            <div className={st.superior}></div>
            <div className={st.inferior}> </div> 

            <div className={st.gris}>

                <img src={img5} alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Rayas</p>
            <p className={st.txt}>$150</p>
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

                <img src={img4} alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>U.S.A</p>
            <p className={st.txt}>$225</p>
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

                <img src={img6} alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Mono rosa</p>
            <p className={st.txt}>$175</p>
            </div>

            <div className={st.comprar}>
            <img src={carrito} alt="" className={st.imagen2}/>
            </div>
        </div>
        </td>
        </tr>
        
    </table>
    
        </div>
    );
}
export default Card