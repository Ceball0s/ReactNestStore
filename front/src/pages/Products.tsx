import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts, deleteProduct, addProduct, updateProduct } from "../services/api";
import { Product } from '../types/product';
import './Products.css';
import FloatingForm from "../components/FloatingForm";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

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

  const removeProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setFormVisible(true);
  };

  const handleSubmit = async (product: Product) => {
    try {
      if (product.id) {
        await updateProduct(product);
        setProducts(products.map(p => (p.id === product.id ? product : p)));
      } else {
        const newProduct = await addProduct(product);
        setProducts([...products, newProduct]);
      }
      setFormVisible(false);
      setCurrentProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Productos</h2>
      <ul className="mb-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard 
              {...product} 
              onDelete={() => removeProduct(product.id!)} 
              onEdit={() => handleEditProduct(product)} 
            />
          </div>
        ))}
      </ul>
      <div className="button-container">
        <button 
          onClick={() => {
            setCurrentProduct(null);
            setFormVisible(true);
          }} 
          className="add-product-button"
        >
          Añadir Producto
        </button>
        {isFormVisible && (
          <FloatingForm 
            producto={currentProduct || { nombre: '', descripcion: '', precio: 0, stock: 0 }}
            onSubmit={handleSubmit}
            onClose={() => setFormVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
