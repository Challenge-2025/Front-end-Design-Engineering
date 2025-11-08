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

  return ( 
    <main className="w-full max-w-6xl text-white flex flex-col items-center px-4 py-10 gap-12">
      
      {/* Botão de Agendamento */}
      <div className="w-full">
        <Link 
          to="/agendar-consulta"
          className="
            w-full block text-center px-8 py-4 
            bg-purple-600 hover:bg-purple-700 
            text-white text-lg font-bold rounded-xl shadow-lg 
            transition-all duration-300"
        >
          Agendar Nova Consulta
        </Link>
      </div>

      {/* Seção Dashboard (3 Mais Recentes) */}
      <section className="w-full bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-white drop-shadow">
          Suas Próximas Consultas
        </h2>
        
        {consultasRecentes.length > 0 ? (
          <div className="space-y-4">
            {consultasRecentes.map((consulta) => (
              <div key={consulta.id} className="p-4 bg-black/20 rounded-lg border border-white/10 flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg">{consulta.especialidade}</p>
                  <p className="text-sm text-white/80">com {consulta.medico}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{formatarData(consulta.data)}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    consulta.status === 'Agendada' ? 'bg-green-500/80' : 'bg-gray-500/80'
                  }`}>
                    {consulta.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/70">Você não possui consultas recentes.</p>
        )}
      </section>

      {/* Seção Lista Completa */}
      <section className="w-full bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-white drop-shadow">
          Histórico de Consultas
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead className="border-b border-white/30">
              <tr>
                <th className="p-3">Data</th>
                <th className="p-3">Especialidade</th>
                <th className="p-3">Médico(a)</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {consultas.length > 0 ? (
                consultas.map((consulta) => (
                  <tr key={consulta.id} className="border-b border-white/10 hover:bg-white/10">
                    <td className="p-3">{formatarData(consulta.data)}</td>
                    <td className="p-3">{consulta.especialidade}</td>
                    <td className="p-3">{consulta.medico}</td>
                    <td className="p-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        consulta.status === 'Agendada' ? 'bg-green-500/80' : 
                        consulta.status === 'Realizada' ? 'bg-gray-500/80' : 'bg-red-500/80'
                      }`}>
                        {consulta.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-3 text-center text-white/70">
                    Nenhuma consulta encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

    </main>
   );
}