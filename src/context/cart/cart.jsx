"use client"
import { createContext, useState, useEffect } from 'react';
import { errorHandler } from '@/utils/errorHandler';
import { getDeliveryDate } from '@/utils/getDeliveryDate';
import axios from 'axios';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({
        products: [],
        deliveryDate: null
    });
    const [quantityTotalProducts, setQuantityTotalProducts] = useState(0);

    useEffect(() => {
        setCart((prevCart) => ({
            ...prevCart,
            deliveryDate: getDeliveryDate()
        }));
    }, []);

    useEffect(() => {
        console.log(cart)
        setQuantityTotalProducts(cart.products.reduce((total, p) => total + p.quantity, 0));
    }, [cart]);

    const addDeliveryDate = (deliveryDate) => {
        setCart((prevCart) => ({
            ...prevCart,
            deliveryDate: deliveryDate
        }));
    };

    const addProductCart = async (product, quantity) => {

        const indexProductCart = cart.products.findIndex((p) => p.productId === product._id);

        if (indexProductCart !== -1) {
            const updatedCart = { ...cart };
            updatedCart.products[indexProductCart].quantity = quantity;
            setCart(updatedCart);
        } else {
            const productToAdd = {
                productId: product._id,
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
    };

    const deleteProductCart = (productId) => {
        const updatedCart = {
            ...cart,
            products: cart.products.filter((product) => product._id !== productId),
        };

        setCart(updatedCart);
    };

    const deleteAllProductsCart = () => {
        setCart((prevCart) => ({
            ...prevCart,
            products: []
        }));
        setQuantityTotalProducts(0);
    };

    const updateQuantityProduct = (productId, newQuantity) => {
        const updatedCart = {
            ...cart,
            products: cart.products.map((product) =>
                product.productId === productId ? { ...product, quantity: newQuantity } : product
            )
        };

        setCart(updatedCart);
    };

    const checkout = async (cart) => {
        try {
            console.log(JSON.stringify(cart))
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products/checkout`, cart, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setCart((prevCart) => ({
                    ...prevCart,
                    products: []
                }));
                return response.data;
            }

            return response.data;

        } catch (error) {
            const handledError = errorHandler(error)
            return handledError;
        }
    };

    return (
        <CartContext.Provider value={{ cart, quantityTotalProducts, addProductCart, deleteProductCart, deleteAllProductsCart, updateQuantityProduct, checkout, addDeliveryDate }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };