import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Registro from './login/registro/Registro';
import Top from './top/Top';
import Qsomos from './qsomos/qsomos';
import Ffooter from './footer/Footer';
import Ropa from './pages/Ropa';
function App() {
  return (
    <div>
        <Top/>
          <Routes>
            <Route path="/home" element={<Inicio/>} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/ropa" element={<Ropa/>} />
            <Route path="/info" element={<Qsomos/>} />
          </Routes>
      <Ffooter/>
    </div>
  );
}

export default App;
