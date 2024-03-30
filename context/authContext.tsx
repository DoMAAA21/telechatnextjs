"use client"
import React, {useEffect} from 'react';
import { createContext, useContext, useState } from 'react';
import jsonwebtoken from "jsonwebtoken";
import { getCookie } from 'cookies-next';

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (credentials: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = getCookie('token');
    console.log(document.cookie);
    console.log(token)
    if (token) {
      try {
        const decodedToken = jsonwebtoken.decode(token);
        setUser(decodedToken);
        setIsAuthenticated(true);
      } catch (error) {
        // Handle invalid token
        console.error('Invalid token:', error);
      }
    }
  }, []);

  const login = (credentials: User) => {
    setIsAuthenticated(true);
    setUser(credentials);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
