import { useEffect, useState } from "react";
import type { TipoConsulta } from "../../../../../types/tipoConsulta";
import { useAuth } from "../../../../Layouts/Hook/useAuth";
import Engrenagem from "../../../../../img/engrenagem.png"
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_REABILITA;

export default function PaginaInicial() {
  const [consultas, setConsultas] = useState<TipoConsulta[]>([]);
  const { paciente } = useAuth();

  useEffect(() => {
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
      className="flex items-center w-full text-[#49015f] gap-[2rem]"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <aside></aside>
      <aside className=" bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/20 flex flex-col text-center gap-[1rem]">
        <h2 className="text-[1.5rem] font-bold">Consultas</h2>
        <table className="table-auto rounded-3xl shadow-2xl border border-white/20 p-[0.4rem] text-center">
          <thead className=" rounded-3xl shadow-2xl border border-white/20 p-[0.4rem]">
            <tr>
              <th className="px-4 py-2">DATA</th>
              <th className="px-4 py-2">STATUS</th>
              <th className="px-4 py-2">PACIENTE</th>
              <th className="px-4 py-2">Editar</th>
            </tr>
          </thead>

          <tbody>
            {consultas.map((consulta, indice) => (
              <tr
                key={indice}
                className="border-t border-white/10 hover:bg-white/5 transition-colors"
              >
                <td className="px-4 py-2">
                  {new Date(consulta.dataConsulta).toLocaleDateString("pt-br")}
                </td>
                <td className="px-4 py-2">{consulta.status}</td>
                <td className="px-4 py-2">{consulta.idPaciente}</td>
                <td className="px-4 py-2 text-purple-400 cursor-pointer hover:text-purple-300">
                  ✏️
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="bg-white/10 font-semibold">
            <tr>
              <td colSpan={5} className="px-4 py-2 text-center">
                Total de Consultas: {consultas.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </aside>

      <aside className=" bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/20 flex flex-col text-center gap-[1rem]">
        <div className=" bg-white/10 backdrop-blur-xl sm:p-10 rounded-3xl shadow-2xl border border-white/20 flex flex-col text-center gap-[1rem]">
          <h2 className="text-[1.5rem] font-bold">Dados</h2>
          <div className="text-start font-bold">
            <p>Nome: {paciente?.nomeCompleto}</p>
          <p>CPF: {paciente?.cpf}</p>
          <p>
            Data de Nascimento:{new Date(paciente?.dataDeNascimento).toLocaleDateString("pt-br")}
          </p>
          <p>
            Idade:{" "}
            {paciente?.dataDeNascimento
              ? new Date().getFullYear() -
                new Date(paciente.dataDeNascimento).getFullYear()
              : "—"}
          </p>
          <p>Endereço: {paciente?.endereco.logradouro}</p>
          <p>Num. Logradouro: {paciente?.endereco.numeroLogradouro}</p>
          <div className="flex w-full h[2vh] justify-end"><Link to="/configuracao"><img src={Engrenagem} alt="Botão de configurações" className="w-[2.5rem]"/></Link></div>
          </div>
        </div>
      </aside>
    </main>
  );
}
