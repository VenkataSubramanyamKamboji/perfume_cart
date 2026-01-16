import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const productService = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get featured products
  getFeaturedProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products/featured`);
      return response.data;
    } catch (error) {
      console.error('Error fetching featured products:', error);
      throw error;
    }
  },

  // Get product by ID
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Add review to product
  addReview: async (productId, reviewData) => {
    try {
      const response = await axios.post(`${API_URL}/products/${productId}/reviews`, reviewData);
      return response.data;
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  },

  // Search products
  searchProducts: async (searchTerm) => {
    try {
      const response = await axios.get(`${API_URL}/search?q=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  }
};
