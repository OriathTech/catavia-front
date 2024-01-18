"use client"
import { createContext, useState } from 'react';

const IngredientsContext = createContext();

const IngredientsProvider = ({ children }) => {
    const [ingredients, setIngredients] = useState([]);

    const getIngredients = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients`, {
                withCredentials: true
            });

            if (response.status === 200) {
                setIngredients(response.data.payload);
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

    const getIngredientById = (ingredientId) => {
        const ingredient = ingredients.find((ingredient) => ingredient._id === ingredientId);
        return ingredient || null;
    };

    const deleteIngredient = async (ingredientId) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients/${ingredientId}`, {
                withCredentials: true
            });

            if (response.status === 200) {
                setIngredients((prevIngredients) => prevIngredients.filter((ingredient) => ingredient._id !== response.data.payload._id));
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

    const updateIngredient = async (ingredientId, info) => {
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients/${ingredientId}`, { info }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setIngredients(prevIngredients => prevIngredients.map(ingredient =>
                    ingredient._id === response.data.payload._id ? response.data.payload : ingredient
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

    const postIngredient = async (info) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients`, { info }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setIngredients((prevIngredients) => [...prevIngredients, response.data.payload]);

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
        <IngredientsContext.Provider value={{ingredients, getIngredients, getIngredientById, deleteIngredient, updateIngredient, postIngredient}}>
            {children}
        </IngredientsContext.Provider>
    );
};

export { IngredientsProvider, IngredientsContext };