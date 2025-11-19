import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Registro = () => (
  <>
    <Header />
    <main>
      <div className="form-sheet">
        <form id="form">
          <h1>Registrarse</h1>
          <div className="group">
            <input type="text" id="name" required /><span className="user-name"></span>
            <label htmlFor="name">Nombre de usuario</label>
          </div>
          <div className="group">
            <input type="email" id="email" required /><span className="barra"></span>
            <label htmlFor="email">Correo electrónico</label>
          </div>
          <div className="group">
            <input type="password" id="password" required /><span className="barra"></span>
            <label htmlFor="password">Contraseña</label>
          </div>
          <input type="submit" value="Registrarse" />
          <div className="links">
            <a href="/">Volver al inicio | </a>
            <a href="/sesion">Iniciar sesión</a>
            <p className="warnings" id="warnings"></p>
          </div>
        </form>
      </div>
    </main>
    <Footer />
  </>
);

export default Registro;
