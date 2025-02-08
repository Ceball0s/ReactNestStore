import React from 'react';
import { Product } from '../types/product';
import './ProductCard.css';

interface ProductCardProps extends Product {
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, nombre, description = '', precio, stock, onDelete }) => {
  const defaultImage = 'https://img.freepik.com/psd-gratis/plantilla-telefono-psd-marco-blanco-diseno_1409-4126.jpg'; // Ruta de la imagen predeterminada
  return (
    <div className="product-card border rounded-lg shadow-lg p-4 text-center">
      <img src={image || defaultImage} alt={nombre} className="product-image w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-2">{nombre}</h3>
      <p className="text-gray-600 text-sm truncate max-w-xs mx-auto" title={description}>{description.length > 100 ? `${description.substring(0, 100)}...` : description}</p>
      <p className="text-xl font-semibold mt-2">${precio}</p>
      <p className={`text-sm ${stock === 0 ? 'text-red-500' : 'text-green-500'}`}>
        {stock !== 0 ? `Disponible ${stock} unidades` : "No disponible"}
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Modificar</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;
