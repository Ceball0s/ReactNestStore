import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, price, available }) => {
  return (
    <div className="product-card border rounded-lg shadow-lg p-4 text-center">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-600 text-sm truncate max-w-xs mx-auto" title={description}>{description.length > 100 ? `${description.substring(0, 100)}...` : description}</p>
      <p className="text-xl font-semibold mt-2">${price}</p>
      <p className={`text-sm ${available ? 'text-green-500' : 'text-red-500'}`}>
        {available ? "Disponible" : "No disponible"}
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Modificar</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;
