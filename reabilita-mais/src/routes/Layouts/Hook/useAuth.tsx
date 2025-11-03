import { useContext } from "react";
import { AuthContext } from "../../Layouts/TemporaryBox/AuthProvider";

export function useAuth() {
  return useContext(AuthContext);
}
