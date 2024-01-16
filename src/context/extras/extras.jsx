"use client"
import { createContext, useState, useEffect } from 'react';

const ExtrasContext = createContext();

const ExtrasProvider = ({ children }) => {
    const [extras, setExtras] = useState([]);

    const getExtras = async () => {
        //GET EXTRAS: en back y front
    };

    const getExtraById = async (extraId) => {
        //GET EXTRA: en front
    };

    const deleteExtra = async (extraId) => {
        //DELETE EXTRA: en back y front
    };

    const updateExtra = async (extraId, info) => {
        //PUT EXTRA: en back y front
    };

    return (
        <ExtrasContext.Provider value={{ extras, getExtras, getExtraById, deleteExtra, updateExtra }}>
            {children}
        </ExtrasContext.Provider>
    );
};

export { ExtrasProvider, ExtrasContext };