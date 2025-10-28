import React from 'react';
import { Link } from 'react-router-dom';

import '../css/index-style.css';
import logo from '../assets/img/pastelera-mil-sabores-high-resolution-logo-transparent.png';
import menuIcon from '../assets/img/icons8-menu-96.png';
import userIcon from '../assets/img/icons8-usuario-femenino-en-círculo-100.png';

const Header = () => (
  <header className="header">
    <div className="menu container">
  <img className="logo" src={logo} alt="Logo" />
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <img src={menuIcon} className="menu-icono" alt="menu" />
      </label>
      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
          <li><a href="#">Blogs y Noticias</a></li>
        </ul>
      </nav>
      <div>
        <div className="dropdown" style={{ float: 'right' }}>
          <button className="dropbtn"><img src={userIcon} alt="Usuario" /></button>
          <div className="dropdown-content">
            <Link to="/sesion">Iniciar sesión</Link>
            <Link to="/carrito">Carrito de compra</Link>
            <Link to="/seguimiento">Seguimiento</Link>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
