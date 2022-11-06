import './card.css'
function Card(){
    return(<>
    
    <table className='tablagen'>
        <td>
        <div className="externo">
            <div className='superior'></div>
            <div className='inferior'> </div>

            <div className='gris'>

                <img src="\src\imagenes\conjcel.jpg" alt="" className='imagen'/>

            </div>

            <div className='textos'>
            <p className='txt'>Nombre</p>
            <p className='txt'>Precio</p>
            </div>

            <div className='comprar'>
            <img src="\src\imagenes\carrocompras.png" alt="" className='imagen2'/>
            </div>
        </div>
        </td>
        
        <td>
        <div className="externo">
            <div className='superior'></div>
            <div className='inferior'> </div>

            <div className='gris'>

                <img src="\src\imagenes\redim_toddlerb.jpg" alt="" className='imagen'/>

            </div>

            <div className='textos'>
            <p className='txt'>Nombre</p>
            <p className='txt'>Precio</p>
            </div>

            <div className='comprar'>
            <img src="\src\imagenes\carrocompras.png" alt="" className='imagen2'/>
            </div>
        </div>
        </td>
        <td>
        <div className="externo">
            <div className='superior'></div>
            <div className='inferior'> </div>

            <div className='gris'>

                <img src="\src\imagenes\redim_conjnar.jpg" alt="" className='imagen'/>

            </div>

            <div className='textos'>
            <p className='txt'>Nombre</p>
            <p className='txt'>Precio</p>
            </div>

            <div className='comprar'>
            <img src="\src\imagenes\carrocompras.png" alt="" className='imagen2'/>
            </div>
        </div>
        </td>
    </table>

        </>);
}
export default Card