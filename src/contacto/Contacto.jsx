import stc from './contacto.module.css'
import { useState } from 'react'


function Contacto(){
    const [formul, setForm] = useState("");
    const [formul2, setForm2] = useState("");
    const [formul3, setForm3] = useState("");

    const clearForm = () => {
    setForm("");
    setForm2("");
    setForm3("");
    };
    
    const cambioEntradas = (e) =>{
        const text = e.target.value;
        setForm(text);
    }

    const cambioEntradas2 = (e) =>{
        const text = e.target.value;
        setForm2(text);
    }

    const cambioEntradas3 = (e) =>{
        const text = e.target.value;
        setForm3(text);
    }
    return(

   

        <>
        {/*
        AQUI DEBE IR EL FORMULARIO DE CONTACTO QUE SE SUPONE ESTA HACIENDO JC

        */}
        
        
        <div className={stc.InfoCont}>
        <div className={stc.Info}>
            <h1 className={stc.tituloqs}><b>Contactanos</b></h1>
            <p className={stc.desc}>Nos interesa saber tu opinion acerca de nuestros productos</p>
        </div>
        <div className={stc.formulario}>
         
        
            <input type="text" className={stc.Name} placeholder='Nombre...' value={formul} onChange={cambioEntradas} />
            <input type="text"  className={stc.Email} placeholder='Correo...' value={formul2} onChange={cambioEntradas2}/>
            <input type="text" className={stc.Message} placeholder='Escriba su sugerencia...' value={formul3} onChange={cambioEntradas3} />
            <button className={stc.btt} onClick={clearForm}>ENVIAR</button>
        

        </div>
    </div>
        </>
    )
}

export default Contacto