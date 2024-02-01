import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { personalStories, savedStories } from "../../data/temp-stories-data";

const AuthContext = createContext();

// TODO: replace with user data from api
// Data from api should be in this format:
const tempUser = {
  name: "Temp User",
  email: "s_arina@gmail.com",
  password: "sarina123",
  isAuthenticated: false,
  imageUrl: "",
  personalStories,
  savedStories,
  interestedTopics: [
    "Mental Health & Wellbeing",
    "Resilience and Coping",
    "Self Discovery",
    "Vices",
    "Unhealthy Habits",
  ],
  challenges: [
    "Self Discovery",
    "Self Discovery",
    "Self Discovery",
    "Self Discovery",
    "Self Discovery",
    "Self Discovery",
  ],
};

const AuthProvider = ({ children }) => {
  const storedUser = sessionStorage.getItem("tempUser");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;
  const [user, setUser] = useState({ ...tempUser, ...initialUser });
  const isAuthenticated = user.isAuthenticated;

  useEffect(() => {
    sessionStorage.setItem("tempUser", JSON.stringify(user));
  }, [user]);

  const handleRegister = (data) => {
    // Perform register logic here

    // Set the user and isAuthenticated properties accordingly
    setUser((prevUser) => ({
      ...prevUser,
      name: data.username,
      password: data.password,
      email: data.email,
      isAuthenticated: true,
    }));
  };

  const handleLogin = (data) => {
    // Perform login logic here

    // Set the user and isAuthenticated properties accordingly
    setUser((prevUser) => ({
      ...prevUser,
      email: data.email,
      password: data.password,
      isAuthenticated: true,
    }));
  };

  const logout = () => {
    // Perform logout logic here
    // Reset the user and isAuthenticated properties
    setUser(null);
  };

  const authContextValue = {
    user,
    isAuthenticated,
    setUser,
    handleRegister,
    handleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
