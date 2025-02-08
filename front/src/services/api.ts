import axios from 'axios';
import { Product } from '../types/product';

const API_URL = 'http://127.0.0.1:3000';

const gettingProduct = (response: any): Product => {
  if (!response || !response.data) {
    throw new Error('Invalid response from server');
  }
  let product: Product = response.data;
  if (!product._id) {
    throw new Error('Product does not have an _id');
  }
  product.id = product._id;
  return product;
}

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

export const addProduct = async (newProduct: Product): Promise<Product> => {
  try {
    const response = await axios.post(`${API_URL}/productos`, newProduct);
    return gettingProduct(response);
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const updateProduct = async (updatedProduct: Product): Promise<Product> => {
  try {
    const { id, ...productWithoutId } = updatedProduct;
    const response = await axios.put(`${API_URL}/productos/${id}`, productWithoutId);
    return gettingProduct(response);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};