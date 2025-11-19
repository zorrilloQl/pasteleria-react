
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicio from './components/pages/PaginaInicio';
import Catalogo from './components/pages/Catalogo';
import CarritoDeCompras from './components/pages/CarritoDeCompras';
import Registro from './components/pages/Registro';
import Seguimiento from './components/pages/Seguimiento';
import Sesion from './components/pages/Sesion';
import Extras from './components/pages/Extras';

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
