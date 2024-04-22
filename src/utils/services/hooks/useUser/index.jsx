import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const useUser = () => {
  const { setToken, token, user, setUser } = useContext(AuthContext);

  const initializeUser = (userData) => {
    setUser(userData);
  }

  const initializeToken = (tokenData) => {
    setToken(tokenData)
  }

  return {
    token,
    user,
    initializeUser,
    initializeToken
  };
};

export default useUser;
