import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ childeren }) => {
  return <AuthContext.Provider>{childeren}</AuthContext.Provider>;
};
