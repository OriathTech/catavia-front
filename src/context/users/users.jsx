"use client"
import { createContext, useState } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
                withCredentials: true
            });

            if (response.status === 200) {
                setUsers(response.data.payload);
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

    const getUserById = (userId) => {
        const user = users.find((user) => user._id === userId);
        return user || null;
    };

    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`, {
                withCredentials: true
            });

            if (response.status === 200) {
                setUsers((prevUsers) => prevUsers.filter((user) => user._id !== response.data.payload._id));
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

    const updateUser = async (userId, info) => {
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`, { info }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setUsers(prevUsers => prevUsers.map(user =>
                    user._id === response.data.payload._id ? response.data.payload : user
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
        <UsersContext.Provider value={{ users, getUsers, getUserById, deleteUser, updateUser }}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersProvider, UsersContext };