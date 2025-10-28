import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Sesion = () => (
  <>
    <Header />
    <main>
      <div className="form-sheet">
        <h1>Iniciar sesión</h1>
        <form method="post">
          <div className="user-name">
            <input type="text" required />
            <label>Nombre de usuario</label>
          </div>
          <div className="password">
            <input type="password" required />
            <label>Contraseña</label>
          </div>
          <div className="forgot-password">No recuerdo mi contraseña</div>
          <input type="submit" value="Iniciar sesión" />
          <div className="register">
            <a href="/">Volver al inicio |</a>
            <a href="/registro">Registrarme</a>
          </div>
        </form>
      </div>
    </main>
    <Footer />
  </>
);

export default Sesion;
