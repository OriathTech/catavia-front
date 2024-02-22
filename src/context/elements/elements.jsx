"use client"
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ElementsContext = createContext();

const ElementsProvider = ({ children }) => {
    const [ingredients, setIngredients] = useState([]);

    const [extras, setExtras] = useState([]);

    const getElements = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/elements`, {
                withCredentials: true
            });

            if (response.status === 200) {
                setIngredients(response.data.payload.ingredients);
                setExtras(response.data.payload.extras)
                return response.data;
            }

            return response.data;

        } catch (error) {
            console.error('Error en el Context:', error);
            return {
                status: "error",
                message: "Error en el Context",
                error: error
            };
        }
    };

    useEffect(() => {
        getElements();
    }, []);

    const getIngredientById = (elementId) => {
        const element = ingredients.find((element) => element._id === elementId);
        return element || null;
    };

    const getExtraById = (elementId) => {
        const element = extras.find((element) => element._id === elementId);
        return element || null;
    };

    const deleteElement = async (elementId) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/elements/${elementId}`, {
                withCredentials: true
            });

            if (response.status === 200) {
                if (response.data.payload.category === "extra") {
                    setExtras((prevElements) => prevElements.filter((element) => element._id !== response.data.payload._id));
                }

                if (response.data.payload.category === "ingredient") {
                    setIngredients((prevElements) => prevElements.filter((element) => element._id !== response.data.payload._id));
                }

                return response.data;
            }

            return response.data;

        } catch (error) {
            console.error('Error en el Context:', error);
            return {
                status: "error",
                message: "Error en el Context",
                error: error
            };
        }
    };

    const updateElement = async (elementId, info) => {
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/elements/${elementId}`, { info }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                if (response.data.payload.category === "extra") {
                    setExtras(prevElements => prevElements.map(element =>
                        element._id === response.data.payload._id ? response.data.payload : element
                    ));
                }

                if (response.data.payload.category === "ingredient") {
                    setIngredients(prevElements => prevElements.map(element =>
                        element._id === response.data.payload._id ? response.data.payload : element
                    ));
                }
                return response.data;
            }

            return response.data;

        } catch (error) {
            console.error('Error en el Context:', error);
            return {
                status: "error",
                message: "Error en el Context",
                error: error
            };
        }
    };

    const postElement = async (info) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/elements`, { info }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                if (response.data.payload.category === "extra") {
                    setExtras((prevElements) => [...prevElements, response.data.payload]);
                }

                if (response.data.payload.category === "ingredient") {
                    setIngredients((prevElements) => [...prevElements, response.data.payload]);
                }
                return response.data;
            }

            return response.data;

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
        <ElementsContext.Provider value={{ ingredients, extras, getElements, getExtraById, getIngredientById, deleteElement, updateElement, postElement }}>
            {children}
        </ElementsContext.Provider>
    );
};

export { ElementsProvider, ElementsContext };