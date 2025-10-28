import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';



const PRODUCTOS = [
  { nombre: 'Torta Cuadrada de Chocolate', precio: 45000 },
  { nombre: 'Torta Cuadrada de Frutas', precio: 50000 },
  { nombre: 'Torta Circular de Vainilla', precio: 40000 },
  { nombre: 'Torta Circular de Manjar', precio: 42000 },
];

const CarritoDeCompras = () => {
  const [carrito, setCarrito] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(PRODUCTOS[0].nombre);

  const handleAgregar = () => {
    const producto = PRODUCTOS.find(p => p.nombre === productoSeleccionado);
    setCarrito(prev => {
      const existe = prev.find(item => item.nombre === producto.nombre);
      if (existe) {
        return prev.map(item =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const handleEliminar = (nombre) => {
    setCarrito(prev => prev.filter(item => item.nombre !== nombre));
  };

  const handleCantidad = (nombre, cantidad) => {
    setCarrito(prev => prev.map(item =>
      item.nombre === nombre ? { ...item, cantidad: cantidad } : item
    ));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <>
      <Header />
      <main>
        <section className="seleccion-producto">
          <h2>Selecciona tu Pastel:</h2>
          <div className="opciones">
            <select
              value={productoSeleccionado}
              onChange={e => setProductoSeleccionado(e.target.value)}
            >
              {PRODUCTOS.map(p => (
                <option key={p.nombre} value={p.nombre} data-precio={p.precio}>
                  {p.nombre} (${p.precio.toLocaleString('es-CL')})
                </option>
              ))}
            </select>
            <button onClick={handleAgregar}>Añadir al Carrito</button>
          </div>
        </section>

        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-contenido">
            <h2>Resumen de tu Carrito</h2>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carrito.length === 0 ? (
                  <tr><td colSpan="5">No hay productos en el carrito</td></tr>
                ) : (
                  carrito.map(item => (
                    <tr key={item.nombre}>
                      <td>{item.nombre}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={item.cantidad}
                          onChange={e => handleCantidad(item.nombre, parseInt(e.target.value) || 1)}
                          style={{ width: '60px' }}
                        />
                      </td>
                      <td>${item.precio.toLocaleString('es-CL')}</td>
                      <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                      <td>
                        <button onClick={() => handleEliminar(item.nombre)}>Eliminar</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="resumen-total">
              <p>Total a pagar: <span id="Total-carrito">${total.toLocaleString('es-CL')}</span></p>
            </div>

            <div className="formulario-cliente">
              <h3>Datos de contacto</h3>
              <input type="text" id="nombre-cliente" placeholder="Nombre completo" />
              <input type="email" id="email-cliente" placeholder="Correo electrónico" />
              <input type="tel" id="telefono-cliente" placeholder="Teléfono" />
            </div>

            <button className="boton-comprar">Comprar</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CarritoDeCompras;
