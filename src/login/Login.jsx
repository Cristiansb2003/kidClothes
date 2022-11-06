import { useState } from "react";
import { useRef } from "react";
import st from "./login.module.css";

const Login = () => {
  // State para consumir el valor del usuario
  const [user, setUser] = useState("");
  // State para consumir el valor de la contraseña
  const [pass, setPass] = useState("");

  // State para actualizar el usuario y contraseña automaticamente
  const [savedData, setSavedData] = useState(false);

  // Esta función almacenará cambios en el input de usuario
  const cambioEntradaUser = (e) => {
    const text = e.target.value;
    setUser(text);
  };

  // Esta función almacenará cambios en el input de constraseña
  const cambioEntradaPass = (e) => {
    const text = e.target.value;
    setPass(text);
  };

  // Variable auxiliar para autoseleccionar un input
  const ref = useRef(null);

  // Esta función es para guardar los datos introducidos
  const saveData = () => {
    // Guardar datos introducidos
    localStorage.setItem("user_l", user);
    localStorage.setItem("password_l", pass);

    // Array con usuarios, seguido del array de contraseñas
    const users = ["root", "admin", "ejemplo"];
    const passs = ["root", "1234", "ejemplo"];
    var i = 0;
    var BAND = 0;

    // Comparación del login
    if (user == localStorage.getItem("user") && pass == localStorage.getItem("password")) {
      // CÓDIGO DE REDIRECCIONAMIENTO A LO QUE SIGA DEL LOGIN
      BAND = 1;
    } else {
      // for para buscar si hay coincidencias con los usuarios preguardados
      for (let i = 0; i < users.length; i++) {
        if (user == users[i] && pass == passs[i]) {
          // CÓDIGO DE REDIRECCIONAMIENTO A LO QUE SIGA DEL LOGIN         
          BAND = 1
          break;
        }
      }
    }

    if (BAND == 1) {
      alert("Bienvenido");
    } else {
      alert("Error: usuario o contraseña incorrectos");
    }

    // Limpiar inputs
    setUser("");
    setPass("");
    ref.current.focus();
  };

  return (
    <div className={st.formulario}>
      <h1>Login</h1>
      <div>
        Usuario <br />
        <input
          type="text"
          ref={ref}
          name="user"
          id="user"
          placeholder="Ingresa tu usuario"
          value={user}
          onChange={cambioEntradaUser}
          autoFocus
        />
        Contraseña <br />
        <input
          type="password"
          name="pass"
          placeholder="Ingresa tu contraseña"
          value={pass}
          onChange={cambioEntradaPass}
        />
        <br />
        <button onClick={saveData}>Iniciar sesión</button>
        <br />
        <a href=""> ¿No tienes una cuenta?, registrate aquí </a>
      </div>

      {
        // Si se clickeo para ir al registro
        // AGREGAR CÓDIGO DE REDIRECCIONAMIENTO AL REGISTRO
      }
    </div>
  );
};

export default Login;
