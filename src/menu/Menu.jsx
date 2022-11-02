import st from "./menu.module.css";
import user from "./../assets/user.svg"
import user2 from "./../assets/user2.png"
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
            <li className={st.us}><img src={user2}/></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
