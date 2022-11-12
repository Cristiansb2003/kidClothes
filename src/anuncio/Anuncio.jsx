import st from "./anuncio.module.css";
import model from "./../assets/img/ropaModelo.png";
import { useRef, useState } from "react";
import { useEffect } from "react";

function Anuncio() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTImerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdowDate = new Date("November 23, 2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdowDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTImerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  // componenteDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className={st.contenedor}>
      <div className={st.imagen}>
        <img src={model} alt="modelos" />
      </div>
      <div className={st.info}>
        <div className={st.contenido}>
          <div className={st.titulo}>
            <p>Ofertas de Buen Fin</p>
          </div>
          <section className={st.timer_container}>
            <section className={st.timer}>
              <div>
                <section>
                  <p>{timerDays}</p>
                  <p>
                    <small>Dias</small>
                  </p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerHours}</p>
                  <p>
                    <small>Horas</small>
                  </p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerMinutes}</p>
                  <p>
                    <small>Minutos</small>
                  </p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerSeconds}</p>
                  <p>
                    <small>Segundos</small>
                  </p>
                </section>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Anuncio;
