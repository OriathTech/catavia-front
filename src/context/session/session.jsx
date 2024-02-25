"use client"
import { createContext, useState } from 'react';
import axios from 'axios';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState();

  const loginJWT = async (info) => {
    try {
      console.log(info)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/session/login/jwt`, info, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        console.log(response.data)
        setSession(response.data.payload);
        console.log(session)
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

  const register = async (info) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/session/register`, info, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        setSession(response.data.payload);
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

  const logout = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/session/logout`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        setSession({});
        return response.data;
      }

    } catch (error) {
      return {
        status: "error",
        message: "Error en el Context",
        error: error
      };
    }
  };


  return (
    <SessionContext.Provider value={{ session, loginJWT, register, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };