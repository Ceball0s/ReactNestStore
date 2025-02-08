import React, { useState, useEffect } from 'react';
import './FloatingForm.css';
import { Product } from '../types/product';
interface FloatingFormProps {
  onSubmit: (data: { name: string; description: string; price: number; quantity: number }) => void;
  onClose: () => void;
  producto: Product;
}

const FloatingForm: React.FC<FloatingFormProps> = ({ onSubmit, onClose, producto  }) => {
  const [name, setName] = useState(producto?.nombre || '');
  const [description, setDescription] = useState(producto?.description || '');
  const [price, setPrice] = useState(producto?.precio || 0);
  const [quantity, setQuantity] = useState(producto?.stock || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, price, quantity });
    onClose(); // Cerrar el formulario después de enviar
  };

  return (
    <div className="floating-form-container">
      <form onSubmit={handleSubmit} className="floating-form">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label>Cantidad</label>
          <input
            type="number"
            value={quantity}
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
