// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // Store registered users

  const register = (newUser) => {
    // Check if user already exists
    const userExists = users.some((user) => user.email === newUser.email);
    if (userExists) {
      return { error: "User already exists" };
    }
    // Add new user
    setUsers((prevUsers) => [...prevUsers, newUser]);
    return { success: true };
  };

  const login = (loginData) => {
    const foundUser = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      return { success: true };
    } else {
      return { error: "Invalid credentials" };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
