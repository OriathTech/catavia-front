"use client"
import { createContext, useState, useEffect } from 'react';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState([]);

  const login = async (data) => {
    //LOGIN: en back y front
  };

  const register = async (data) => {
    //REGISTER: en back y front
  };

  const logout = async () => {
    //LOGOUT: en back y front
  };


  return (
    <SessionContext.Provider value={{ session, login, register, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };