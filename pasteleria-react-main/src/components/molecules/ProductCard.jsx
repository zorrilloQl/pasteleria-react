import React, { useState } from 'react';
import Button from '../atoms/Button';
import Image from '../atoms/Image';

const ProductCard = ({ producto, onAdd }) => {
  const [qty, setQty] = useState(1);
  const handleAdd = () => {
    if (onAdd) onAdd(producto, qty);
  };
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card h-100">
        <Image src={producto.img} alt={producto.nombre} className="card-img-top" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.desc}</p>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <strong className="text-primary">{producto.precio}</strong>
              <div className="d-flex align-items-center">
                <input type="number" min="1" value={qty} onChange={e => setQty(parseInt(e.target.value) || 1)} className="form-control form-control-sm me-2" style={{ width: '80px' }} />
                <Button onClick={handleAdd}>Agregar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
