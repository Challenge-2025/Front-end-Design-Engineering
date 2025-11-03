import { useEffect, useState } from "react";
import type { TipoConsulta } from "../../../../../types/tipoConsulta";
import { useAuth } from "../../../../Layouts/Hook/useAuth";

const API_URL = import.meta.env.VITE_API_REABILITA;

export default function PaginaInicial() {
  const [consultas, setConsultas] = useState<TipoConsulta[]>([]);
  const { paciente } = useAuth(); // pega o paciente logado do contexto

  useEffect(() => {
    const fetchConsultas = async () => {
      if (!paciente) return; // se ainda não estiver logado

      try {
        const response = await fetch(`${API_URL}/consultas/paciente/${paciente.idPaciente}/todas`);
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
    <main className="flex flex-col justify-center items-center text-black w-full gap-16 py-10">
      <h1>Bem-vindo, {paciente?.nomeCompleto}</h1>

      
    </main>
  );
}
