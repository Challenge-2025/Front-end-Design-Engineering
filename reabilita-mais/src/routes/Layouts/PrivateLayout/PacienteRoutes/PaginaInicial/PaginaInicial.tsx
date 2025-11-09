import { useEffect, useState } from "react";
import type { TipoConsulta } from "../../../../../types/tipoConsulta";
import { useAuth } from "../../../../Layouts/Hook/useAuth";
import Engrenagem from "../../../../../img/engrenagem.png";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_REABILITA;

export default function PaginaInicial() {
  const [consultas, setConsultas] = useState<TipoConsulta[]>([]);
  const { paciente } = useAuth();

  useEffect(() => {
    // ... (seu fetch de dados continua igual) ...
    const fetchConsultas = async () => {
      if (!paciente) return;
      try {
        const response = await fetch(
          `${API_URL}/consultas/paciente/${paciente.id}/todas`
        );
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
    <main
      // CORREÇÃO: flex-col (mobile) e lg:flex-row (desktop)
      className="flex flex-col lg:flex-row items-start w-full text-[#49015f] gap-6"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* Card de Consultas */}
      <aside className="w-full lg:w-2/3 bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 flex flex-col gap-4">
        <h2 className="text-[1.5rem] font-bold">Consultas</h2>
        {/* CORREÇÃO: Permite que a tabela role horizontalmente no mobile */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[400px] table-auto rounded-3xl shadow-2xl border border-white/20 p-2 text-center">
            <thead className="border-b border-white/30">
              <tr>
                <th className="px-4 py-2 text-sm">DATA</th>
                <th className="px-4 py-2 text-sm">STATUS</th>
                <th className="px-4 py-2 text-sm">PACIENTE</th>
              </tr>
            </thead>
            <tbody>
              {consultas.length > 0 ? (
                consultas.map((consulta) => (
                  <tr
                    key={consulta.idConsulta}
                    className="border-t border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-2">
                      {new Date(
                        consulta.dataConsulta ?? new Date()
                      ).toLocaleDateString("pt-br")}
                    </td>
                    <td className="px-4 py-2">{consulta.status}</td>
                    <td className="px-4 py-2">{consulta.idPaciente}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-4 py-2 italic text-white/70">
                    Nenhuma consulta encontrada.
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot className="bg-white/10 font-semibold">
              <tr>
                <td colSpan={5} className="px-4 py-2 text-center">
                  Total de Consultas: {consultas.length}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </aside>

      {/* Card de Dados do Paciente */}
      <aside className="w-full lg:w-1/3 bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 flex flex-col gap-4">
        <div className="bg-white/10 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/20 flex flex-col gap-2">
          <h2 className="text-[1.5rem] font-bold text-center">Dados</h2>
          <div className="text-start font-bold space-y-2">
            <p>
              Nome:{" "}
              <span className="font-normal">{paciente?.nomeCompleto}</span>
            </p>
            <p>
              CPF: <span className="font-normal">{paciente?.cpf}</span>
            </p>
            <p>
              Nascimento:{" "}
              <span className="font-normal">
                {new Date(
                  paciente?.dataDeNascimento ?? ""
                ).toLocaleDateString("pt-br")}
              </span>
            </p>
            <p>
              Idade:{" "}
              <span className="font-normal">
                {paciente?.dataDeNascimento
                  ? new Date().getFullYear() -
                    new Date(paciente.dataDeNascimento).getFullYear()
                  : "—"}
              </span>
            </p>
            <p>
              Endereço:{" "}
              <span className="font-normal">
                {paciente?.endereco.logradouro}
              </span>
            </p>
            <p>
              Número:{" "}
              <span className="font-normal">
                {paciente?.endereco.numeroLogradouro}
              </span>
            </p>
            <div className="flex w-full justify-end pt-2">
              <Link
                to="/configuracao"
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <img
                  src={Engrenagem}
                  alt="Botão de configurações"
                  className="w-8 h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}