import './footer.css'
function Ffooter(){
    return(
        <>
        <footer>
            <div className='ubicaciones'>
                <h2 className='hacheuno'>UBICACIONES</h2>
                <p>1: <a className='linkss' href='https://www.google.com/maps/d/u/0/edit?mid=1TIruhkXKWZwBq-csEe5Krtjj5vuewis&usp=sharing' target={'blank'}>San Pedro</a></p>
                <p>2: <a className='linkss' href='https://www.google.com/maps/d/u/0/edit?mid=1XId2WdZDurd25oULHmgxWzmx0LBOEmU&usp=sharing' target={'blank'}>Guadalupe</a></p>
                <p>3: <a className='linkss' href='https://www.google.com/maps/d/u/0/edit?mid=1_fFlM-0c1qGTcT51URKnVTeBLw7odJo&usp=sharing' target={'blank'}>Monterrey</a></p>

            </div>
            <div className='info'>
                <h2 className='hacheuno'>INFORMACION GENERAL</h2>
                <img src='\src\imagenes\llamada.png' className='iconos'></img><p>8184567858</p>
                
                <img src='\src\imagenes\email.png' className='iconos'></img><p className='conespacio'>kidclothes@gmail.com</p>

            </div>
            <div className='copyright'>
                <p>Derechos reservados || KidClothes 2022</p>
            </div>
        </footer>
        </>

    )
}
export default Ffooter