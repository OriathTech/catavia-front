"use client"
import { createContext, useState, useEffect } from 'react';

const IngredientsContext = createContext();

const IngredientsProvider = ({ children }) => {
    const [ingredients, setIngredients] = useState([]);

    const getingredients = async () => {
        //GET INGREDIENTS: en back y front
    };

    const getingredientById = async (ingredientId) => {
        //GET INGREDIENT: en front
    };

    const deleteingredient = async (ingredientId) => {
        //DELETE INGREDIENT: en back y front
    };

    const updateingredient = async (ingredientId, info) => {
        //PUT INGREDIENT: en back y front
    };

    return (
        <IngredientsContext.Provider value={{ingredients, getingredients, getingredientById, deleteingredient, updateingredient}}>
            {children}
        </IngredientsContext.Provider>
    );
};

export { IngredientsProvider, IngredientsContext };