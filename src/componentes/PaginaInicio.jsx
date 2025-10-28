import React from 'react';
import '../css/layout-centro.css';

import TC001 from '../assets/img-product/TC001.jpg';
import TC002 from '../assets/img-product/TC002.jpg';
import TT001 from '../assets/img-product/TT001.jpg';
import TT002 from '../assets/img-product/TT002.jpg';
import PI001 from '../assets/img-product/PI001.jpg';
import PI002 from '../assets/img-product/PI002.jpg';
import christiann from '../assets/img/christiann-koepke-AigxB1zfRVo-unsplash.jpg';
import Header from './Header';
import Footer from './Footer';

const productos = [
  { img: TC001, nombre: 'Torta Cuadrada de chocolate', desc: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizado con mensajes especiales en crema.', precio: '$45.000', id: 'TC001' },
  { img: TC002, nombre: 'Torta Cuadrada de frutas', desc: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.', precio: '$50.000', id: 'TC002' },
  { img: TT001, nombre: 'Torta circular de vainilla', desc: 'Bizcocho de vainilla clasico relleno con crema pastelera y cubierto en un glaseado dulce, perfecto para cualquier ocasión.', precio: '$40.000', id: 'TT001' },
  { img: TT002, nombre: 'Torta circular de manjar', desc: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.', precio: '$42.000', id: 'TT002' },
  { img: PI001, nombre: 'Mousse de chocolate', desc: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.', precio: '$5.000', id: 'PI001' },
  { img: PI002, nombre: 'Tiramisu clasico', desc: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.', precio: '$5.500', id: 'PI002' },
];


const PaginaInicio = () => (
  <>
    <Header />
    <main
      className="products container"
      id="list-1"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      <h2 style={{ textAlign: 'center', width: '100%' }}>Productos</h2>
      <div
        className="product-content responsive-grid"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        {productos.map(producto => (
          <div className="product" key={producto.id} style={{ margin: '0 auto' }}>
            <img src={producto.img} alt={producto.nombre} style={{ display: 'block', margin: '0 auto' }} />
            <div className="product-decription">
              <h3>{producto.nombre}</h3>
              <p>{producto.desc}</p>
              <p className="price">{producto.precio}</p>
              <a href="/carrito" className="agregar-carrito btn-2" data-id={producto.id}>Agregar al carrito</a>
            </div>
          </div>
        ))}
      </div>
      <div className="main-catalogo" style={{ textAlign: 'center', width: '100%', margin: '48px 0 48px 0' }}>
        <a href="/catalogo" style={{ fontSize: '2rem', color: 'var(--color4)', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.5px' }}>Ver catálogo completo</a>
      </div>
    </main>
    <section>
      <div className="aboutus-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ textAlign: 'center', width: '100%', color: '#8B4513', fontWeight: 700, fontSize: '2.2rem', letterSpacing: '0.5px', marginBottom: '1.5rem' }}>Sobre nosotros</h2>
        <div className="aboutus-content" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', background: 'var(--color1)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '2rem', margin: '2rem 0' }}>
          <div className="aboutus-text" style={{ flex: 1, minWidth: 200, padding: '1rem' }}>
            <h3 style={{ fontFamily: 'Pacifico, cursive', color: 'var(--color4)', fontSize: 28, marginBottom: 10 }}>Nuestra misión</h3>
            <p style={{ color: 'var(--color4)', fontSize: 16, marginBottom: 18 }}>
              Endulzar la vida de nuestros clientes con productos de pastelería artesanal, elaborados con ingredientes de la más alta calidad y un toque de creatividad, entregando experiencias únicas en cada celebración.
            </p>
            <h3 style={{ fontFamily: 'Pacifico, cursive', color: 'var(--color4)', fontSize: 28, marginBottom: 10 }}>Nuestra visión</h3>
            <p style={{ color: 'var(--color4)', fontSize: 16, marginBottom: 18 }}>
              Ser reconocidos como la pastelería líder en innovación y sabor en la región, manteniendo siempre el compromiso con la excelencia y la satisfacción de nuestros clientes.
            </p>
            <h3 style={{ fontFamily: 'Pacifico, cursive', color: 'var(--color4)', fontSize: 28, marginBottom: 10 }}>Nuestra historia</h3>
            <p style={{ color: 'var(--color4)', fontSize: 16, marginBottom: 18 }}>
              Fundada en 2010, Pastelería Mil Sabores nació del sueño de una familia apasionada por la repostería. A lo largo de los años, hemos crecido gracias a la confianza de nuestros clientes y la dedicación de nuestro equipo, manteniendo siempre la tradición y la innovación en cada receta.
            </p>
            <h3 style={{ fontFamily: 'Pacifico, cursive', color: 'var(--color4)', fontSize: 28, marginBottom: 10 }}>¡Un récord dulce!</h3>
            <p style={{ color: 'var(--color4)', fontSize: 16 }}>
              En 2022, obtuvimos el récord Guinness a la torta de chocolate más grande de la ciudad, compartiendo más de 500 porciones con la comunidad y reafirmando nuestro compromiso de celebrar juntos los momentos más dulces.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={christiann} alt="Pastelería Mil Sabores" style={{ display: 'block', margin: '0 auto', maxWidth: '350px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default PaginaInicio;
