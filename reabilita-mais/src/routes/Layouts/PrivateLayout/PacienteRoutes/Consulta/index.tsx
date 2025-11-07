import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { TipoConsulta } from "../../../../../types/tipoConsulta";

const PACIENTE_ID_LOGADO = 1;

export default function MinhasConsultas() {
  const [consultas, setConsultas] = useState<TipoConsulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para formatar a data
  const formatarData = (dataISO: string) => {
    const data = new Date(dataISO);
    const dia = data.toLocaleDateString("pt-BR", { day: '2-digit', month: '2-digit', year: 'numeric' });
    const hora = data.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
    return `${dia} às ${hora}`;
  };

  useEffect(() => {
    const fetchConsultas = async () => {
      setLoading(true);
      setError(null);
      try {
         const response = await fetch(`http://localhost:5000/consultas?pacienteId=${PACIENTE_ID_LOGADO}`);
        
        if (!response.ok) {
          throw new Error("Falha ao buscar suas consultas.");
        }
        
        const data: TipoConsulta[] = await response.json();
        
        // Ordena as consultas pela data (mais recentes primeiro)
        data.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
        
        setConsultas(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchConsultas();
  }, []);

  const consultasRecentes = consultas.slice(0, 3);

  if (loading) {
    return <div className="text-white text-2xl">Carregando consultas...</div>;
  }

  if (error) {
    return <div className="text-red-400 text-2xl">Erro: {error}</div>;
  }

  return (  );
}