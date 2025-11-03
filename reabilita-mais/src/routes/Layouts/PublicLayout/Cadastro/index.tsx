// src/routes/Cadastro/index.tsx

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ajudaIcon from "../../../../img/ponto-de-interrogação-64.png";
import TituloSecao from "../../../../components/TituloSecao/TituloSecao"; 

type FormValues = {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  nascimento: string;
  senha: string;
  confirmarSenha: string;
  deficiencia: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
};

export default function Cadastro() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();

  const senha = watch("senha");

  const onSubmit = (data: FormValues) => {
    console.log("Dados do formulário:", data); 
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
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
              <label htmlFor="nome" className="block mb-2 text-sm font-medium text-white/80">Nome completo</label>
              <input type="text" id="nome" {...register("nome", { required: "Nome é obrigatório" })} placeholder="Seu nome"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.nome && <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>}
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
              <label htmlFor="nascimento" className="block mb-2 text-sm font-medium text-white/80">Data de nascimento</label>
              <input type="date" id="nascimento" {...register("nascimento", { required: "Data de nascimento é obrigatória" })}
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.nascimento && <p className="text-red-400 text-sm mt-1">{errors.nascimento.message}</p>}
            </div>

             <div>
              <label htmlFor="deficiencia" className="block mb-2 text-sm font-medium text-white/80">Possui deficiência?</label>
              <select id="deficiencia" {...register("deficiencia", { required: "Selecione uma opção" })}
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" defaultValue=""
              >
                <option value="" disabled className="text-gray-500">Selecione</option>
                <option value="SIM" className="text-gray-800">Sim</option>
                <option value="NAO" className="text-gray-800">Não</option>
              </select>
              {errors.deficiencia && <p className="text-red-400 text-sm mt-1">{errors.deficiencia.message}</p>}
            </div>
          </fieldset>
          
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TituloSecao titulo="Endereço" /> 
             <div>
              <label htmlFor="cep" className="block mb-2 text-sm font-medium text-white/80">CEP</label>
              <input type="text" id="cep" {...register("cep", { required: "CEP é obrigatório" })} placeholder="00000-000"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.cep && <p className="text-red-400 text-sm mt-1">{errors.cep.message}</p>}
            </div>
            
            <div>
              <label htmlFor="logradouro" className="block mb-2 text-sm font-medium text-white/80">Logradouro</label>
              <input type="text" id="logradouro" {...register("logradouro", { required: "Logradouro é obrigatório" })} placeholder="Rua, Avenida, etc."
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.logradouro && <p className="text-red-400 text-sm mt-1">{errors.logradouro.message}</p>}
            </div>

            <div>
              <label htmlFor="numero" className="block mb-2 text-sm font-medium text-white/80">Número</label>
              <input type="text" id="numero" {...register("numero", { required: "Número é obrigatório" })} placeholder="Ex: 123"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.numero && <p className="text-red-400 text-sm mt-1">{errors.numero.message}</p>}
            </div>

            <div>
              <label htmlFor="complemento" className="block mb-2 text-sm font-medium text-white/80">Complemento</label>
              <input type="text" id="complemento" {...register("complemento")} placeholder="Apto, Bloco, etc. (Opcional)"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="bairro" className="block mb-2 text-sm font-medium text-white/80">Bairro</label>
              <input type="text" id="bairro" {...register("bairro", { required: "Bairro é obrigatório" })} placeholder="Seu bairro"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.bairro && <p className="text-red-400 text-sm mt-1">{errors.bairro.message}</p>}
            </div>

            <div>
              <label htmlFor="cidade" className="block mb-2 text-sm font-medium text-white/80">Cidade</label>
              <input type="text" id="cidade" {...register("cidade", { required: "Cidade é obrigatória" })} placeholder="Sua cidade"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.cidade && <p className="text-red-400 text-sm mt-1">{errors.cidade.message}</p>}
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

            <div>
              <label htmlFor="confirmarSenha" className="block mb-2 text-sm font-medium text-white/80">Confirmar senha</label>
              <input type="password" id="confirmarSenha" {...register("confirmarSenha", { 
                required: "Confirmação de senha é obrigatória",
                validate: value => value === senha || "As senhas não coincidem"
              })} placeholder="Repita a senha"
                className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              />
              {errors.confirmarSenha && <p className="text-red-400 text-sm mt-1">{errors.confirmarSenha.message}</p>}
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