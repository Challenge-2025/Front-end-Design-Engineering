import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Hook/useAuth";
import { Loader2 } from "lucide-react";
import type { TipoEndereco } from "../../../../../types/tipoEndereco";

const API_URL = import.meta.env.VITE_API_REABILITA;

type FormDadosPaciente = {
  id: number;
  nomeCompleto: string;
  cpf: string;
  email: string;
  dataDeNascimento: string;
  telefone: string;
  pdc: string;
  endereco: TipoEndereco;
};

export default function Configuracoes() {
  const { paciente, setPaciente } = useAuth();
  const { register, handleSubmit, reset } = useForm<FormDadosPaciente>();
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  // Quando carregar a página, preenche os campos
  useEffect(() => {
    if (paciente) {
      reset({
        nomeCompleto: paciente.nomeCompleto,
        email: paciente.email,
        telefone: paciente.telefone,
        dataDeNascimento: paciente.dataDeNascimento,
        pdc: paciente.pdc,
      });
    }
  }, [paciente, reset]);

  // Função para atualizar dados
  const onSubmit = async (dados: FormDadosPaciente) => {
    if (!paciente) return;
    setLoading(true);
    setMensagem("");

    try {
      const response = await fetch(
        `${API_URL}/pacientes/${paciente.idPaciente}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        }
      );

      if (!response.ok) throw new Error("Erro ao atualizar dados");

      const pacienteAtualizado = await response.json();
      setPaciente(pacienteAtualizado);
      setMensagem("✅ Dados atualizados com sucesso!");
    } catch (error) {
      console.error(error);
      setMensagem("❌ Erro ao salvar alterações.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6 w-full">
      <main className="w-full sm:w-[450px] bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
        <h2 className="text-2xl font-bold text-center mb-6">
          Configurações do Paciente
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className=" grid grid-cols-1">
            <div className="flex">
              <div>
                <div>
                  <label className="block mb-1 font-bold text-sm text-white/80 font-bold">
                    Nome completo
                  </label>
                  <input
                    {...register("nomeCompleto")}
                    className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold text-sm text-white/80 font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold text-sm text-white/80">
                    Telefone
                  </label>
                  <input
                    {...register("telefone")}
                    className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label className="block mb-1 font-bold text-sm text-white/80">
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    {...register("dataDeNascimento")}
                    className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold text-sm text-white/80">
                    PDC
                  </label>
                  <input
                    {...register("pdc")}
                    className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold text-sm text-white/80">
                    CPF
                  </label>
                  <input
                    {...register("cpf")}
                    className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>
            </div>

            <div></div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 py-2 rounded-lg font-semibold transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600/80 hover:bg-purple-700"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Salvando...
              </>
            ) : (
              "Salvar Alterações"
            )}
          </button>
        </form>

        {mensagem && (
          <p
            className={`text-center mt-4 font-medium ${
              mensagem.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {mensagem}
          </p>
        )}
      </main>
    </div>
  );
}
