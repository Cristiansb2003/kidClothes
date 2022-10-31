import st from "./login.module.css";
function Login() {
  return (
    <>
      <div className={st.formulario}>
        <h1>Login</h1>
        <form action="#" method="post">
          <p>Usuario</p>
          <input type="text" name="user" />
          <p>Contraseña</p>
          <input type="password" name="pass" />
          <br />
          <button type="submit" className={st.formulario_button}>Iniciar sesión</button>
        </form>
      </div>
    </>
  );
}

export default Login;
