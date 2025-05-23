import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { usuarioAutenticado } = useAuth();

  return usuarioAutenticado ? children : <Navigate to="/login" />;
}