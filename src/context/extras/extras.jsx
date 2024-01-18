"use client"
import { createContext, useState } from 'react';

const ExtrasContext = createContext();

const ExtrasProvider = ({ children }) => {
    const [extras, setExtras] = useState([]);

    const getExtras = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/extras`, {
                withCredentials: true
            });

            if (response.status === 200) {
                setExtras(response.data.payload);
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

    const getExtraById = (extraId) => {
        const extra = extras.find((extra) => extra._id === extraId);
        return extra || null;
    };

    const deleteExtra = async (extraId) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/extras/${extraId}`, {
                withCredentials: true
            });

            if (response.status === 200) {
                setExtras((prevExtras) => prevExtras.filter((extra) => extra._id !== response.data.payload._id));
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

    const updateExtra = async (extraId, info) => {
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/extras/${extraId}`, { info }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setExtras(prevExtras => prevExtras.map(extra =>
                    extra._id === response.data.payload._id ? response.data.payload : extra
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

    const postExtra = async (info) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/extras`, { info }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setExtras((prevExtras) => [...prevExtras, response.data.payload]);

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
        <ExtrasContext.Provider value={{ extras, getExtras, getExtraById, deleteExtra, updateExtra, postExtra }}>
            {children}
        </ExtrasContext.Provider>
    );
};

export { ExtrasProvider, ExtrasContext };