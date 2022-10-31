import st from "./login.module.css";
function Login() {
  return (
    <>
      <div className={st.formulario}>
        <h1>Login</h1>
        <form action="" method="post">
          <div className={st.fomrulario-col}>
            <p>Usuario</p>
            <input type="text" name="user" />
          </div>
          <div className={st.formulario-col}>
            <p>Contraseña</p>
            <input type="password" name="pass" />
          </div>
          <button type="submit" className={st.formulario-button}>Iniciar sesión</button>
        </form>
      </div>
    </>
  );
}

export default Login;
