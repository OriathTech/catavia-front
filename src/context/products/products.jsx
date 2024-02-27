"use client"
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);

      if (response.status === 200) {
        setProducts(response.data.payload);
      }

    } catch (error) {
      const handledError = errorHandler(error)
      return handledError;
    }
  };

  useEffect(() => {
    console.log("Cargando productos")
    fetchProducts();
    console.log(products)
  }, []);

  useEffect(() => {
    const newCategories = products.reduce((acc, product) => {
      if (product.category.length > 0) {
        product.category.forEach(category => {
          const categoryLabel = category[0].toUpperCase() + category.slice(1);
          acc.push({
            value: category,
            label: categoryLabel,
          });
        });
      }
      return acc;
    }, []);
    newCategories.unshift({ value: "todos", label: "Todos",})
    const uniqueCategories = newCategories.filter((category, index, self) =>
      index === self.findIndex((c) =>
        c.value === category.value && c.label === category.label
      )
    );
    setCategories(uniqueCategories);
  }, [products]);

  const getProductById = (productId) => {
    const product = products.find((product) => product._id === productId);
    return product || null;
  };

  const postProduct = async (info) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, info, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setProducts((prevProducts) => [...prevProducts, response.data.payload]);
        return response.data;
      }

      return response.data;

    } catch (error) {
      const handledError = errorHandler(error)
      return handledError;
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
        return response.data;
      }

      return response.data;

    } catch (error) {
      const handledError = errorHandler(error)
      return handledError;
    }
  };

  const updateProduct = async (productId, info) => {
    try {
      console.log(`Aca empezamos: ${productId} ${info}`)

      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, info, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setProducts(prevProducts => prevProducts.map(product =>
          product._id === response.data.payload._id ? response.data.payload : product
        ));
        return response.data;
      }

      return response.data;

    } catch (error) {
      const handledError = errorHandler(error)
      return handledError;
    }
  };

  return (
    <ProductContext.Provider value={{ products, categories, getProductById, postProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };