import st from "./menu.module.css";
import user2 from "./../assets/user2.png"
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className={st.contenedor}>
      <div className={st.container}>
        <nav>
          <ul>
            <NavLink to="/home"><li  className={st.ini}>Inicio</li></NavLink>
            <NavLink to="/ropa"><li className={st.rop}>Ropa</li></NavLink>
            <NavLink to="/noticias"><li className={st.not}>Noticias</li></NavLink>
            <NavLink to="/info"><li className={st.inf}>Info</li></NavLink>
            <Link to="/login"><li className={st.us}><img src={user2}/></li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
