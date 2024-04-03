import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const useUser = () => {
  const { token, user } = useContext(AuthContext);

  return {
    token,
    user,
  };
};

export default useUser;
