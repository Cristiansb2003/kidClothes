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

                <img src="\src\imagenes\conjcel.jpg" alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Nombre</p>
            <p className={st.txt}>Precio</p>
            </div>

            <div className={st.comprar}>
            <img src="\src\imagenes\carrocompras.png" alt="" className={st.imagen2}/>
            </div>
        </div>
        </td>
        
        <td>
        <div className={st.externo}>
            <div className={st.superior}></div>
            <div className={st.inferior}> </div>

            <div className={st.gris}>

                <img src="\src\imagenes\redim_toddlerb.jpg" alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Nombre</p>
            <p className={st.txt}>Precio</p>
            </div>

            <div className={st.comprar}>
            <img src="\src\imagenes\carrocompras.png" alt="" className={st.imagen2}/>
            </div>
        </div>
        </td>
        <td>
        <div className={st.externo}>
            <div className={st.superior}></div>
            <div className={st.inferior}> </div>

            <div className={st.gris}>

                <img src="\src\imagenes\redim_conjnar.jpg" alt="" className={st.imagen}/>

            </div>

            <div className={st.textos}>
            <p className={st.txt}>Nombre</p>
            <p className={st.txt}>Precio</p>
            </div>

            <div className={st.comprar}>
            <img src="\src\imagenes\carrocompras.png" alt="" className={st.imagen2}/>
            </div>
        </div>
        </td>
    </table>
        </div>
    );
}
export default Card