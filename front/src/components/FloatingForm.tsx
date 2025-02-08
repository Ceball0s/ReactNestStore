import React, { useState, useEffect } from 'react';
import './FloatingForm.css';
import { Product } from '../types/product';
interface FloatingFormProps {
  onSubmit: (data: Product) => void;
  onClose: () => void;
  producto: Product;
}

const FloatingForm: React.FC<FloatingFormProps> = ({ onSubmit, onClose, producto  }) => {
  const [nombre, setName] = useState(producto?.nombre || '');
  const [descripcion, setDescription] = useState(producto?.descripcion || '');
  const [precio, setPrice] = useState(producto?.precio || 0);
  const [stock, setQuantity] = useState(producto?.stock || 0);

  const handleSubmit = (e: React.FormEvent) => {
    const productData: Product = { nombre, descripcion, precio, stock ,
      ...(producto.id && { id: producto.id })
    };
    onSubmit(productData);
    onClose();
  };

  return (
    <div className="floating-form-container">
      <form onSubmit={handleSubmit} className="floating-form">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label>Cantidad</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Enviar</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </div>
      </form>
    </div>
  );
};

export default FloatingForm;
