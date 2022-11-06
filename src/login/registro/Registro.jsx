import { useState } from "react";
import st from "./registro.module.css";
import Login from "../Login";

const Registro = () => {

  // State para consumir el valor del usuario
  const [user, setUser] = useState('');
  // State para consumir el valor de la contraseña
  const [pass, setPass] = useState('');
  
  // State para actualizar el usuario y contraseña automaticamente
  const [savedData, setSavedData] = useState(false);

  // Esta función almacenará cambios en el input de usuario
  const cambioEntradaUser = (e) => {
    const text = e.target.value
    setUser(text);
  }

  // Esta función almacenará cambios en el input de constraseña
  const cambioEntradaPass = (e) => {
    const text = e.target.value
    setPass(text);
  }

  // Esta función es para guardar los datos
  const saveData = () => {
    localStorage.setItem("user", user);
    localStorage.setItem("password", pass);

    alert('El usuario ' + user + ' ha sido registrado éxitosamente');
    setSavedData(true);
  }

  return (
    <div className={st.formulario}>
      <h1>Registro</h1>
      <div>
        Usuario <br />
        <input 
          type="text" name="user" placeholder="Ingresa tu usuario"
          onChange = {cambioEntradaUser}
          autoFocus
        />
        Contraseña <br />
        <input 
          type="password" name="pass" placeholder="Ingresa tu contraseña" 
          onChange={cambioEntradaPass}
        />
        <br />
        <button onClick={saveData} >Registrarse</button>
      </div>

      { 
        // Si los datos se guardaron vuelve al menú
        // CÓDIGO DE REDIRECCIÓNAMIENTO AL MENÚ DE LOGIN
      }

    </div>
  )
}

export default Registro;