import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Hook/useAuth";

export default function RotaPrivada() {
  const { paciente } = useAuth();

  if (!paciente) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
