"use client"
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);

        if (response.status === 200) {
          setProducts(response.data.payload);
        }

      } catch (error) {
        console.error('Error en el Context:', error);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = async (productId) => {
    const product = products.find((product) => product._id === productId);
    return product || null;
  };

  const postProduct = async (info) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, { info }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setProducts((prevProducts) => [...prevProducts, response.data.payload]);
        return response;
      }

      return response;

    } catch (error) {
      console.error('Error en el Context:', error);
      return {
        status: "error",
        message: "Error en el Context",
        error: error
      };
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, { info }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== response.data.payload._id));
        return response;
      }

      return response;

    } catch (error) {
      console.error('Error en el Context:', error);
      return {
        status: "error",
        message: "Error en el Context",
        error: error
      };
    }
  };

  const updateProduct = async (productId) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, { info }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setExtras(prevProducts => prevProducts.map(product =>
          product._id === response.data.payload._id ? response.data.payload : product
        ));
        return response;
      }

      return response;

    } catch (error) {
      console.error('Error en el Context:', error);
      return {
        status: "error",
        message: "Error en el Context",
        error: error
      };
    }
  };

  return (
    <ProductContext.Provider value={{ products, getProductById, postProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };