"use client"
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "65b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas","frutales",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "cupcake.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "65b015ea9e9cd4aa01fc2523",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "chocolateria","salados"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "65b015ea9e9cd4aa01fc352b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          ,
          "chocolateria"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "65b015ea9e9cd5aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          ,
          "frutales"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "65b015ea4e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          ,
          "frutales"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          ,
          "frutales"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          ,
          "frutales"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          ,
          "frutales"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          ,
          "frutales"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
        "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tartas","frutales"
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "regalos",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  {
      "thumbnails": {
          "first": {
              "url": "tortafrutilla1.jpeg"
          },
          "second": {
              "url": "cupcake.jpeg"
          },
          "third": {
              "url": null
          }
      },
      "_id": "62b015ea9e9cd4aa01fc252b",
      "name": "Torta de frutillas",
      "description": "",
      "category": [
          "tortas",
      ],
      "status": "featured",
      "price": 200,
      "ingredients": [
          {
              "ingredient": "65b012adbf555c3a711163ab",
              "quantity": 200,
              "_id": "65b1037c356f3523ae42909d"
          }
      ],
      "extras": [],
      "__v": 0
  },
  ]);

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