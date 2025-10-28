import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Seguimiento = () => (
  <>
    <Header />
    <main>
      <div className="contenedor-seguimiento">
        <h2>¡Tu Pedido Ha Sido Recibido!</h2>
        <p><strong>Número de Pedido:</strong> <span id="numero-pedido">#{Math.floor(Math.random() * 10000) + 10000}</span></p>
        <p>El estado actual de tu pedido es:</p>
        <div className="estado">Preparación en Curso</div>
        <br />
        <a href="/">Volver a la página principal</a>
      </div>
    </main>
    <Footer />
  </>
);

export default Seguimiento;
