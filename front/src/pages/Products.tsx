import { useState } from "react";
import ProductCard from "../components/ProductCard";


const ProductList = () => {
    const products = [
    {
        image: 'front/src/assets/images/tech-logo.png',
        name: 'Smartphone X',
        description: 'El último en tecnología móvil.',
        price: 999,
        available: true,
    },
    {
        image: 'front/src/assets/images/phone-2.png',
        name: 'Galaxy Ultra',
        description: 'Potente y con una gran cámara.',
        price: 1199,
        available: false,
    },
    {
        image: 'front/src/assets/images/phone-3.png',
        name: 'Pixel Pro',
        description: 'El mejor software y cámara de Google.',
        price: 899,
        available: true,
    },
    ];

  const addProduct = () => {

  };

  const removeProduct = (id: number) => {
    //setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Celulares</h2>
      <ul className="mb-4">
        {products.map((product, index) => (
        <div key={index} className="flex justify-center">
            <ProductCard {...product} />
        </div>
        ))}
      </ul>
      <button 
        onClick={addProduct} 
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Añadir Producto
      </button>
    </div>
  );
};

export default ProductList;
