import Menu from "../menu/Menu";
import st from "./top.module.css"
import logo from "./../assets/logo.jpeg"
function Top() {
  return (
    <div class={st.contenedor}>
    <div className={st.logo}>
        <img src={logo} alt="logo" />
    </div>
      <Menu/>
    </div>
  );
}

export default Top;
