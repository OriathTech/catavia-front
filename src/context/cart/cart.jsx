"use client"
import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ products: [] });
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
        <CartContext.Provider value={{ cart, quantityTotalProducts, addProductCart, deleteProductCart, deleteAllProductsCart, updateQuantityProduct, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };