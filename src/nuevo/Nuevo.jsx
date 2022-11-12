import Card from "../card/Card";
import st from './nuevo.module.css'
function Nuevo(){
    return(
        <div className={st.contenedor}>
            <div>
                <ul className={st.controls}>
                    <li className={st.active}>Promociones</li>
                    <li>Temporada</li>
                    <li>Lo mas nuevo</li>
                </ul>
            </div>
            <Card/>
            <Card/>
        </div>
    )
}

export default Nuevo;