"use client"
import { createContext, useState, useEffect } from 'react';
import { errorHandler } from '@/utils/errorHandler';
import axios from 'axios';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState();

  useEffect(() => {
    logout()
  }, []);

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
      } else {
        response.data;
      }

      return response.data;

    } catch (error) {
      const handledError = errorHandler(error)
      return handledError;
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
      const handledError = errorHandler(error)
      return handledError;
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
      const handledError = errorHandler(error)
      return handledError;
    }
  };


  return (
    <SessionContext.Provider value={{ session, loginJWT, register, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };