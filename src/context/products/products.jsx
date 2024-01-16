"use client"
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //GET PRODUCTS: al iniciar la app

  }, []);

  const getProductById = async (productId) => {
    //POST PRODUCT: en front
  };

  const addProduct = async (newProduct) => {
    //POST PRODUCT: en back y front
  };

  const deleteProduct = async (productId) => {
    //DELETE PRODUCT: en back y front
  };

  const updateProduct = async (productId) => {
    //PUT PRODUCT: en back y front
  };

  return (
    <ProductContext.Provider value={{ products, getProductById, addProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };