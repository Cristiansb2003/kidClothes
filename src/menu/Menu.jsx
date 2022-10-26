import st from "./menu.module.css";
function Menu() {
  return (
    <div className={st.contenedor}>
      <div className={st.container}>
        <nav>
          <ul>
            <li className={st.ini}>Inicio</li>
            <li className={st.rop}>Ropa</li>
            <li className={st.not}>Noticias</li>
            <li className={st.inf}>Info</li>
            <li className={st.us}>Usuario</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
