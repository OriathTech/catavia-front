"use client"
import { createContext, useState } from 'react';
import { errorHandler } from '@/utils/errorHandler';
import axios from 'axios';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({
        products: [
            { _id: 1, url: "tortafrutilla2.jpeg", name: "Torta de Fresa", quantity: 10, price: 500 },
            { _id: 2, url: "tortafrutilla2.jpeg", name: "Pastel de Frutas", quantity: 5, price: 600 },
            { _id: 3, url: "tortafrutilla2.jpeg", name: "Cheesecake de Frutilla", quantity: 8, price: 300 },
            { _id: 4, url: "tortafrutilla2.jpeg", name: "Tarta de Frutilla", quantity: 12, price: 800 },
            { _id: 5, url: "tortafrutilla2.jpeg", name: "Cupcakes de Frutilla", quantity: 20, price: 900 }
        ],
        total: 38000,
        deliveryDate: null

    });
    const [quantityTotalProducts, setQuantityTotalProducts] = useState(0);

    const addProductCart = (product, quantity) => {
        const indexProductCart = cart.products.findIndex((p) => p._id === product._id);

        if (indexProductCart !== -1) {
            const updatedCart = { ...cart };
            updatedCart.products[indexProductCart].quantity = quantity;
            setCart(updatedCart);
        } else {
            const productToAdd = {
                _id: product._id,
                name: product.name,
                price: product.price,
                quantity: quantity
            };

            if (product.thumbnails.first.url) {
                productToAdd.thumnail = product.thumbnails.first.url;
            }

            setCart((prevCart) => ({
                ...prevCart,
                products: [...prevCart.products, productToAdd]
            }));
        }

        const totalQuantity = cart.products.reduce((total, p) => total + p.quantity, 0);
        setQuantityTotalProducts(totalQuantity);
    };

    const deleteProductCart = (productId) => {
        const updatedCart = {
            ...cart,
            products: cart.products.filter((product) => product._id !== productId),
        };

        setCart(updatedCart);
        const totalQuantity = updatedCart.products.reduce((total, p) => total + p.quantity, 0);
        setQuantityTotalProducts(totalQuantity);
    };

    const deleteAllProductsCart = () => {
        setCart({ products: [] });
        setQuantityTotalProducts(0);
    };

    const updateQuantityProduct = (productId, newQuantity) => {
        const updatedCart = {
            ...cart,
            products: cart.products.map((product) =>
                product._id === productId ? { ...product, quantity: newQuantity } : product
            )
        };

        setCart(updatedCart);
        const totalQuantity = updatedCart.products.reduce((total, p) => total + p.quantity, 0);
        setQuantityTotalProducts(totalQuantity);
    };

    const checkout = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products/chekout`, { cart }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setCart({ products: [] });
                setQuantityTotalProducts(0);
                return response.data;
            }

            return response.data;

        } catch (error) {
            const handledError = errorHandler(error)
            return handledError;
        }
    };

    return (
        <CartContext.Provider value={{ cart, quantityTotalProducts, addProductCart, deleteProductCart, deleteAllProductsCart, updateQuantityProduct, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };