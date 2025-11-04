import { useEffect, useState } from "react";
import type { TipoConsulta } from "../../../../../types/tipoConsulta";
import { useAuth } from "../../../../Layouts/Hook/useAuth";

const API_URL = import.meta.env.VITE_API_REABILITA;

export default function PaginaInicial() {
  const [consultas, setConsultas] = useState<TipoConsulta[]>([]);
  const { paciente } = useAuth();

  useEffect(() => {
    const fetchConsultas = async () => {
      if (!paciente) return;

      try {
        const response = await fetch(`${API_URL}/consultas/paciente/${paciente.id}/todas`);
        if (!response.ok) {
          console.error("Não foi possível realizar requisição");
          return;
        }

        const data: TipoConsulta[] = await response.json();
        setConsultas(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchConsultas();
  }, [paciente]);


  return (
    <main className="flex flex-col items-center text-black w-full " style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
    
        <aside>
            
        </aside>
      
    </main>
  );
}
