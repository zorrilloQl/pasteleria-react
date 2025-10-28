
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicio from './componentes/PaginaInicio';
import Catalogo from './componentes/Catalogo';
import CarritoDeCompras from './componentes/CarritoDeCompras';
import Registro from './componentes/Registro';
import Seguimiento from './componentes/Seguimiento';
import Sesion from './componentes/Sesion';
import Extras from './componentes/Extras';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<CarritoDeCompras />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/sesion" element={<Sesion />} />
        <Route path="/extras" element={<Extras />} />
      </Routes>
    </Router>
  );
}

export default App;
