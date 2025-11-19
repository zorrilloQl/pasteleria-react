
import TC001 from '../assets/img-product/TC001.jpg';
import TC002 from '../assets/img-product/TC002.jpg';
import TT001 from '../assets/img-product/TT001.jpg';
import TT002 from '../assets/img-product/TT002.jpg';
import PI001 from '../assets/img-product/PI001.jpg';
import PI002 from '../assets/img-product/PI002.jpg';
import PSA001 from '../assets/img-product/PSA001.jpg';
import PSA002 from '../assets/img-product/PSA002.jpg';
import PT001 from '../assets/img-product/PT001.jpg';
import PT002 from '../assets/img-product/PT002.jpg';
import PG001 from '../assets/img-product/PG001.jpg';
import PG002 from '../assets/img-product/PG002.jpg';
import PV001 from '../assets/img-product/PV001.jpg';
import PV002 from '../assets/img-product/PV002.jpg';
import TE001 from '../assets/img-product/TE001.jpg';
import TE002 from '../assets/img-product/TE002.jpg';

const productos = [
  { img: TC001, nombre: 'Torta Cuadrada de chocolate', desc: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizado con mensajes especiales en crema.', precio: '$45.000', id: 'TC001' },
  { img: TC002, nombre: 'Torta Cuadrada de frutas', desc: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.', precio: '$50.000', id: 'TC002' },
  { img: TT001, nombre: 'Torta circular de vainilla', desc: 'Bizcocho de vainilla clasico relleno con crema pastelera y cubierto en un glaseado dulce, perfecto para cualquier ocasión.', precio: '$40.000', id: 'TT001' },
  { img: TT002, nombre: 'Torta circular de manjar', desc: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.', precio: '$42.000', id: 'TT002' },
  { img: PI001, nombre: 'Mousse de chocolate', desc: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.', precio: '$5.000', id: 'PI001' },
  { img: PI002, nombre: 'Tiramisu clasico', desc: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.', precio: '$5.500', id: 'PI002' },
  { img: PSA001, nombre: 'Torta sin azucar de naranja', desc: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables', precio: '$45.000', id: 'PSA001' },
  { img: PSA002, nombre: 'Cheesecake sin azucar', desc: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.', precio: '$45.000', id: 'PSA002' },
  { img: PT001, nombre: 'Empanada de manzana', desc: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.', precio: '$3.000', id: 'PT001' },
  { img: PT002, nombre: 'Tarta de Santiago', desc: 'Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.', precio: '$6.000', id: 'PT002' },
  { img: PG001, nombre: 'Brownie sin gluten', desc: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.', precio: '$4.000', id: 'PG001' },
  { img: PG002, nombre: 'Pan sin gluten', desc: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.', precio: '$3.500', id: 'PG002' },
  { img: PV001, nombre: 'Torta vegana de chocolate', desc: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.', precio: '$50.000', id: 'PV001' },
  { img: PV002, nombre: 'Galletas veganas de avena', desc: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.', precio: '$4.500', id: 'PV002' },
  { img: TE001, nombre: 'Torta especial de cumpleaños', desc: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.', precio: '$55.000', id: 'TE001' },
  { img: TE002, nombre: 'Torta especial de bodas', desc: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.', precio: '$60.000', id: 'TE002' },
];

const Catalogo = () => (
  <>
    <Header />
    <main className="products container" id="list-1">
      <h2>Catálogo</h2>
      <div className="product-content responsive-grid">
        {productos.map(producto => (
          <div className="product" key={producto.id}>
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
    </main>
    <Footer />
  </>
);

export default Catalogo;
