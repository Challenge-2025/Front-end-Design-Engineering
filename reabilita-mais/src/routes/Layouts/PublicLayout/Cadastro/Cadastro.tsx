// src/routes/Cadastro/index.tsx

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ajudaIcon from "../../../../img/ponto-de-interrogação-64.png";
import TituloSecao from "../../../../components/TituloSecao/TituloSecao"; 
import type { TipoEndereco } from "../../../../types/tipoEndereco";
import type { TipoPaciente } from "../../../../types/tipoPaciente";

const API_URL = import.meta.env.VITE_API_REABILITA;

type FormValues = {
  nomeCompleto: string;
  cpf: string;
  email: string;
  telefone: string;
  dataDeNascimento: string;
  pdc: string;
  endereco: TipoEndereco;
  senha?: string;
};

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    const payload: Omit<TipoPaciente, "id"> & { senha?: string; endereco: Omit<TipoEndereco, "idPaciente"> } = {
      nomeCompleto: data.nomeCompleto,
      cpf: data.cpf,
      email: data.email,
      dataDeNascimento: data.dataDeNascimento,
      telefone: data.telefone,
      pdc: data.pdc,
      endereco: {
        logradouro: data.endereco.logradouro,
        numeroLogradouro: data.endereco.numeroLogradouro,
        complemento: data.endereco.complemento ?? "",
        bairro: data.endereco.bairro,
        cidade: data.endereco.cidade,
        cep: data.endereco.cep,
      },
      senha: data.senha,
    };


    const criarPaciente = async (body: typeof payload): Promise<TipoPaciente | null> => {
      try {
        const resp = await fetch(`${API_URL}/pacientes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!resp.ok) {
          const text = await resp.text();
          throw new Error(text || "Falha ao criar paciente.");
        }

        const created: TipoPaciente = await resp.json();
        return created;
      } catch (err) {
        console.error("Erro ao criar paciente:", err);
        return null;
      }
    };

    (async () => {
      const result = await criarPaciente(payload);
      if (result) {
        alert("Cadastro realizado com sucesso!");
        navigate("/login");
      } else {
        alert("Falha ao cadastrar. Verifique os dados e tente novamente.");
      }
    })();
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-2 sm:px-4 py-10">
      <main
        className="
          w-full
          max-w-4xl
          h-auto
          bg-white/10
          backdrop-blur-xl
          p-4 sm:p-8 md:p-10 lg:p-12 xl:p-14
          rounded-3xl
          shadow-2xl
          border border-white/20
          transition-all duration-300
        "
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white drop-shadow">
          Crie sua conta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TituloSecao titulo="Dados Pessoais" /> 
            <div>
              <label htmlFor="nomeCompleto" className="block mb-2 text-sm font-medium text-white/80">Nome completo</label>
              <input type="text" id="nomeCompleto" {...register("nomeCompleto", { required: "Nome é obrigatório" })} placeholder="Seu nome"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.nomeCompleto && <p className="text-red-400 text-sm mt-1">{errors.nomeCompleto.message}</p>}
            </div>

            <div>
              <label htmlFor="cpf" className="block mb-2 text-sm font-medium text-white/80">CPF</label>
              <input type="text" id="cpf" {...register("cpf", { required: "CPF é obrigatório" })} placeholder="000.000.000-00"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.cpf && <p className="text-red-400 text-sm mt-1">{errors.cpf.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/80">E-mail</label>
              <input type="email" id="email" {...register("email", { required: "E-mail é obrigatório" })} placeholder="nome@dominio.com"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-white/80">Telefone</label>
              <input type="tel" id="telefone" {...register("telefone", { required: "Telefone é obrigatório" })} placeholder="(XX) XXXXX-XXXX"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.telefone && <p className="text-red-400 text-sm mt-1">{errors.telefone.message}</p>}
            </div>

            <div>
              <label htmlFor="dataDeNascimento" className="block mb-2 text-sm font-medium text-white/80">Data de nascimento</label>
              <input type="date" id="dataDeNascimento" {...register("dataDeNascimento", { required: "Data de nascimento é obrigatória" })}
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.dataDeNascimento && <p className="text-red-400 text-sm mt-1">{errors.dataDeNascimento.message}</p>}
            </div>

             <div>
              <label htmlFor="pdc" className="block mb-2 text-sm font-medium text-white/80">Possui deficiência?</label>
              <select id="pdc" {...register("pdc", { required: "Selecione uma opção" })}
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" defaultValue=""
              >
                <option value="" disabled className="text-gray-500">Selecione</option>
                <option value="SIM" className="text-gray-800">Sim</option>
                <option value="NAO" className="text-gray-800">Não</option>
              </select>
              {errors.pdc && <p className="text-red-400 text-sm mt-1">{errors.pdc.message}</p>}
            </div>
          </fieldset>
          
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TituloSecao titulo="Endereço" /> 
             <div>
              <label htmlFor="endereco.cep" className="block mb-2 text-sm font-medium text-white/80">CEP</label>
              <input type="text" id="endereco.cep" {...register("endereco.cep", { required: "CEP é obrigatório" })} placeholder="00000-000"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.endereco?.cep && <p className="text-red-400 text-sm mt-1">{errors.endereco?.cep?.message}</p>}
            </div>
            
            <div>
              <label htmlFor="endereco.logradouro" className="block mb-2 text-sm font-medium text-white/80">Logradouro</label>
              <input type="text" id="endereco.logradouro" {...register("endereco.logradouro", { required: "Logradouro é obrigatório" })} placeholder="Rua, Avenida, etc."
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.endereco?.logradouro && <p className="text-red-400 text-sm mt-1">{errors.endereco?.logradouro?.message}</p>}
            </div>

            <div>
              <label htmlFor="endereco.numeroLogradouro" className="block mb-2 text-sm font-medium text-white/80">Número</label>
              <input type="text" id="endereco.numeroLogradouro" {...register("endereco.numeroLogradouro", { required: "Número é obrigatório" })} placeholder="Ex: 123"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.endereco?.numeroLogradouro && <p className="text-red-400 text-sm mt-1">{errors.endereco?.numeroLogradouro?.message}</p>}
            </div>

            <div>
              <label htmlFor="endereco.complemento" className="block mb-2 text-sm font-medium text-white/80">Complemento</label>
              <input type="text" id="endereco.complemento" {...register("endereco.complemento")} placeholder="Apto, Bloco, etc. (Opcional)"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="endereco.bairro" className="block mb-2 text-sm font-medium text-white/80">Bairro</label>
              <input type="text" id="endereco.bairro" {...register("endereco.bairro", { required: "Bairro é obrigatório" })} placeholder="Seu bairro"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.endereco?.bairro && <p className="text-red-400 text-sm mt-1">{errors.endereco?.bairro?.message}</p>}
            </div>

            <div>
              <label htmlFor="endereco.cidade" className="block mb-2 text-sm font-medium text-white/80">Cidade</label>
              <input type="text" id="endereco.cidade" {...register("endereco.cidade", { required: "Cidade é obrigatória" })} placeholder="Sua cidade"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.endereco?.cidade && <p className="text-red-400 text-sm mt-1">{errors.endereco?.cidade?.message}</p>}
            </div>
          </fieldset>

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <TituloSecao titulo="Segurança" /> {/* <-- 2. USO DO COMPONENTE COM PROP */}
            <div>
              <label htmlFor="senha" className="block mb-2 text-sm font-medium text-white/80">Senha</label>
              <input type="password" id="senha" {...register("senha", { required: "Senha é obrigatória" })} placeholder="Crie uma senha"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.senha && <p className="text-red-400 text-sm mt-1">{errors.senha.message}</p>}
            </div>
          </fieldset>
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-purple-600/80 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold shadow transition-all duration-300"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-white/80">
          Já tem conta?{" "}
          <a href="/login" className="underline hover:text-purple-700 transition-colors">
            Clique aqui
          </a>
        </p>
      </main>

      <div className="mt-8 flex items-center justify-center gap-2">
        <a href="/ajuda" className="flex items-center underline hover:text-purple-700 transition-colors">
          Precisa de ajuda
          <img src={ajudaIcon} alt="botão de ajuda" className="h-6 ml-2" />
        </a>
      </div>
    </div>
  );
}