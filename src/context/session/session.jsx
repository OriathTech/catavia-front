"use client"
import { createContext, useState } from 'react';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({});

  const loginJWT = async (info) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/session/login/jwt`, { info }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        setSession(response.data.payload);
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

  const register = async (info) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, { info }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        setSession(response.data.payload);
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

  const logout = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, { info }, {
        withCredentials: true
      });

      if (response.status === 200) {
        setSession({});
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
    <SessionContext.Provider value={{ session, loginJWT, register, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };