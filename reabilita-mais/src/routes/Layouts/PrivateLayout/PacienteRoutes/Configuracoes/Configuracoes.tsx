import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Hook/useAuth";
import { Loader2 } from "lucide-react";
import type { TipoEndereco } from "../../../../../types/tipoEndereco";

const API_URL = import.meta.env.VITE_API_REABILITA;

type FormDadosPaciente = {
  nomeCompleto: string;
  cpf: string;
  email: string;
  telefone: string;
  dataDeNascimento: string;
  pdc: string;
  endereco: TipoEndereco;
  senha?: string;
};

export default function Configuracoes() {
  const { paciente, setPaciente } = useAuth();
  const { register, handleSubmit, reset } = useForm<FormDadosPaciente>();
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  // preenche o form com os dados do paciente
  useEffect(() => {
    if (paciente) reset(paciente);
  }, [paciente, reset]);

  const onSubmit = async (dados: FormDadosPaciente) => {
    if (!paciente) return;
    setMensagem("");

    // 👉 Verifica se a senha foi informada
    if (!dados.senha || dados.senha.trim() === "") {
      setMensagem(
        "⚠️ É necessário informar a senha para salvar as alterações."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/pacientes`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dados, id: paciente.id }),
      });

      if (!response.ok) {
        const erroTexto = await response.text();
        throw new Error(`Erro ${response.status}: ${erroTexto}`);
      }

      const pacienteAtualizado = await response.json();
      setPaciente(pacienteAtualizado);
      setMensagem("✅ Dados atualizados com sucesso!");
    } catch (error: any) {
      console.error(error);
      setMensagem("❌ Erro ao salvar alterações.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center text-white p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6">Editar Dados</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        /* * MUDANÇA AQUI: Trocado 'grid-cols-2' por 'grid-cols-1 md:grid-cols-2'
         * Isso força 1 coluna no mobile e 2 colunas no desktop.
        */
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px] bg-white/10
          backdrop-blur-xl
          p-4 sm:p-8
          rounded-3xl
          shadow-2xl
          border border-white/20
          transition-all duration-300"
      >
        {/* MUDANÇA AQUI: Trocado 'col-span-1' por 'col-span-1 md:col-span-1' para clareza */}
        <div className="col-span-1 md:col-span-1">
          <label>Nome completo</label>
          <input
            {...register("nomeCompleto")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>

        {/* MUDANÇA AQUI: Trocado 'col-span-2' por 'col-span-1 md:col-span-2' */}
        <div className="col-span-1 md:col-span-2">
          <label>CPF</label>
          <input
            {...register("cpf")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30 text-gray-400 cursor-not-allowed"
            readOnly
          />
          <p className="text-xs text-red-400 mt-1">
            ⚠️ Não é possível editar o CPF. Entre em contato com o suporte.
          </p>
        </div>

        <div className="col-span-1 md:col-span-1">
          <label>E-mail</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>

        <div className="col-span-1 md:col-span-1">
          <label>Telefone</label>
          <input
            {...register("telefone")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>

        <div className="col-span-1 md:col-span-1">
          <label>Data de nascimento</label>
          <input
            type="date"
            {...register("dataDeNascimento")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>

        <div className="col-span-1 md:col-span-1">
          <label>Possui deficiência?</label>
          <select
            {...register("pdc")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          >
            <option value="">Selecione</option>
            <option value="SIM">Sim</option>
            <option value="NAO">Não</option>
          </select>
        </div>

        {/* Endereço */}
        <div className="col-span-1 md:col-span-1">
          <label>CEP</label>
          <input
            {...register("endereco.cep")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <label>Logradouro</label>
          <input
            {...register("endereco.logradouro")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <label>Número</label>
          <input
            {...register("endereco.numeroLogradouro")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <label>Complemento</label>
          <input
            {...register("endereco.complemento")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <label>Bairro</label>
          <input
            {...register("endereco.bairro")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <label>Cidade</label>
          <input
            {...register("endereco.cidade")}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>

        {/* Senha */}
        <div className="col-span-1 md:col-span-2">
          <label>Senha (Obrigatória para salvar)</label>
          <input
            type="password"
            {...register("senha")}
            placeholder="Digite sua senha para confirmar"
            className="w-full p-2 rounded-lg bg-white/20 border border-white/30"
          />
        </div>

        <div className="col-span-1 md:col-span-2 mt-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
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

          {mensagem && (
            <p
              className={`text-center mt-4 font-medium ${
                mensagem.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {mensagem}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}