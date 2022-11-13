import stq from './qsomos.module.css'
import video from '/src/imagenes/kidclothesVIDEO.mp4'

function Qsomos(){
    return(
        <div className={stq.contenedor}>
            <h1 className={stq.tituloqs}>¿QUIÉNES SOMOS?</h1>
        <video src={video} type='video/mp4' controls className={stq.videoqs}>
        </video>
        <div className={stq.infos}>
        <table>
            <td className={stq.columnas}> Historia
                <th> KidClothes fue fundada como una empresa de venta de ropa
                    pero con el tiempo se fue especializando concretamente
                    en la ropa para niños
                </th>
            </td>
            <td className={stq.columnas}> Objetivo
                <th> Ser la marca #1 de ropa para niños durante esta decada</th>
            </td>
            <td className={stq.columnas}> Miembros
                <th> <ul>
                    <li>Cristian Salazar</li>
                    <li>Angel Alvarado</li>
                    <li>Juan Carlos Tapia</li>
                    <li>Pedro Gonzalez</li>
                    <li>Ximena Mata</li>
                    <li>Ricardo Clark</li>
                    <li>Diego López</li>
                    </ul></th>
            </td>
        </table>
        </div>
        <br/>
        <h1 className={stq.tituloqs}>Mapa de ubicaciones</h1>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1spAc6cjZaZZ-y8UzpXtinPdyjGwR41k&ehbc=2E312F" className={stq.mapa}></iframe>
        
        </div>
    )

}

export default Qsomos