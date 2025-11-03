// src/context/AuthContext.tsx

import { createContext, useState, useEffect, type ReactNode } from "react";
import type { TipoPaciente } from "../../../types/tipoPaciente";

type AuthContextType = {
  paciente: TipoPaciente | null;
  setPaciente: (p: TipoPaciente | null) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  paciente: null,
  setPaciente: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [paciente, setPaciente] = useState<TipoPaciente | null>(() => {
    const saved = localStorage.getItem("paciente");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (paciente) {
      localStorage.setItem("paciente", JSON.stringify(paciente));
    } else {
      localStorage.removeItem("paciente");
    }
  }, [paciente]);

  function logout() {
    setPaciente(null);
    localStorage.removeItem("paciente");
  }

  return (
    <AuthContext.Provider value={{ paciente, setPaciente, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
