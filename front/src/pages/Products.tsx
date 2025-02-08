import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts, deleteProduct } from "../services/api";
import { Product } from '../types/product';
import './Products.css';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = () => {
    // Lógica para añadir un producto
  };

  const removeProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Productos</h2>
      <ul className="mb-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard {...product} onDelete={() => removeProduct(product.id!)} />
          </div>
        ))}
      </ul>
      <button 
        onClick={addProduct} 
        className="add-product-button">
        Añadir Producto
      </button>
    </div>
  );
};

export default ProductList;
