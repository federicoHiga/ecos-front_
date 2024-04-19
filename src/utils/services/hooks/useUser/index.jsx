import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const useUser = () => {
  const { token, user, setUser } = useContext(AuthContext);

  const loadUserData = (data) => {
    setUser(data)
  }

  return {
    token,
    user,
    loadUserData
  };
};

export default useUser;
