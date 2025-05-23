import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  function login() {
    setUsuarioAutenticado(true);
  }

  function logout() {
    setUsuarioAutenticado(false);
  }

  return (
    <AuthContext.Provider value={{ usuarioAutenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}