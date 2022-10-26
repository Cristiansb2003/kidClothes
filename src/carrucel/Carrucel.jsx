import img1 from "./../assets/img/1.jpeg";
import img2 from "./../assets/img/2.jpeg";
import img3 from "./../assets/img/3.jpeg";
import st from "./carrucel.module.css";
function Carrucel() {
  return (
    <div className={st.contenedor}>
      <div className={st.slider}>
        <ul>
          <li>
            <img src={img1} alt="imagen 1" />
          </li>
          <li>
            <img src={img2} alt="imagen 2" />
          </li>
          <li>
            <img src={img3} alt="imagen 3" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Carrucel;
