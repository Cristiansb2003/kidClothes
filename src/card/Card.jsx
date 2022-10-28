import './card.css'
function Card(){
    return(<>
    
    <table>
        <td>
        <div className="externo">
            <div className='superior'></div>
            <div className='inferior'> </div>

            <div className='gris'>

                <img src="\src\imagenes\redim_toddlerb.jpg" alt="" className='imagen'/>

            </div>

            <div className='textos'>
                <p>Nombre</p>
                <p>Precio</p>
                <a href='https://www.google.com' className='links'><img src="\src\imagenes\carrito.png" alt="" className='imagen2'/></a>
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
                <p>Nombre</p>
                <p>Precio</p>
                <a href='https://www.google.com' className='links'><img src="\src\imagenes\carrito.png" alt="" className='imagen2'/></a>
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
                <p>Nombre</p>
                <p>Precio</p>
                <a href='https://www.google.com' className='links'><img src="\src\imagenes\carrito.png" alt="" className='imagen2'/></a>
            </div>
        </div>
        </td>
    </table>

        </>);
}
export default Card