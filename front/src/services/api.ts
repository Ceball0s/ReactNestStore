import axios from 'axios';
import { Product } from '../types/product';

const API_URL = 'http://127.0.0.1:3000';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/productos`);
    const products = response.data.map((product: Product) => ({
      ...product,
      id: product._id,
    }));
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/productos/${id}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

