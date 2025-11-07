import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hook/useAuth";

export default function RotaPrivada() {
  const { paciente } = useAuth();

  // Se não estiver logado, redireciona para /login
  if (!paciente) {
    return <Navigate to="/login" replace />;
  }

  // Se estiver logado, renderiza normalmente
  return <Outlet />;
}
