import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ className = '' }) => (
  <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${className}`}>
    <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/catalogo">Catálogo</Link></li>
    <li className="nav-item"><a className="nav-link" href="#">Blogs y Noticias</a></li>
  </ul>
);

export default NavLinks;
