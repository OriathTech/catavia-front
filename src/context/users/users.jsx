"use client"
import { createContext, useState, useEffect } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        //GET USERS: en front y bck
    };

    const deleteUser = async (userId) => {
        //DELETE USER: en back y front
    };

    const updateUser = async (userId) => {
        //DELETE USER: en back y front
    };

    return (
        <UsersContext.Provider value={{ users, getUsers, deleteUser, updateUser }}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersProvider, UsersContext };