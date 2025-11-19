import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  return (
    <div className="d-flex align-items-center" ref={ref}>
      <div className="dropdown">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" onClick={() => setOpen(!open)}>
          Usuario
        </button>
        <ul className={`dropdown-menu ${open ? 'show' : ''}`}>
          <li><Link className="dropdown-item" to="/sesion">Iniciar sesión</Link></li>
          <li><Link className="dropdown-item" to="/carrito">Carrito de compra</Link></li>
          <li><Link className="dropdown-item" to="/seguimiento">Seguimiento</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
