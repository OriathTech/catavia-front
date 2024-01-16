"use client"
import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantityTotalProducts, setQuantityTotalProducts] = useState(0);

    const addProductCart = async (productId, quantity) => {
        //POST: en front
    };

    const deleteProductCart = async (productId) => {
        //POST: en front
    };

    const deleteAllProductsCart = async () => {
        //POST: en front
    };

    const updateQuantityProduct = async (productId, quantity) => {
        //POST: en front
    };

    const checkout = async (deliveryDate) => {
        //POST: en front
    };

    return (
        <CartContext.Provider value={{ cart, quantityTotalProducts, addProductCart, deleteProductCart, deleteAllProductsCart, updateQuantityProduct, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };