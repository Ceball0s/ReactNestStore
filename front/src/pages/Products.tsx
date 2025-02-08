import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts, deleteProduct } from "../services/api";
import { Product } from '../types/product';
import './Products.css';
import FloatingForm from "../components/FloatingForm";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFormVisible, setFormVisible] = useState(false);
  let producto: Product = {
    id: '1',
    nombre: 'Producto de ejemplo',
    description: 'Descripción del producto de ejemplo',
    precio: 100,
    stock: 10
  };

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
    setFormVisible(true);
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
      <div className="button-container">
        <button 
          onClick={addProduct} 
          className="add-product-button"
        >
          Añadir Producto
        </button>
        {isFormVisible && (
          <FloatingForm 
            producto={producto}
            onSubmit={(data) => {
              // Aquí puedes manejar el envío del formulario
              setFormVisible(false);
            }}
            onClose={() => setFormVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
