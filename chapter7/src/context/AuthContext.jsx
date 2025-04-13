import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [idKey, setIdKey] = useState("");
  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, userName, setUserName, idKey, setIdKey }}
    >
      {children}
    </AuthContext.Provider>
  );
};
