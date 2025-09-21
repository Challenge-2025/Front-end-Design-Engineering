import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ajudaIcon from "../../img/ponto-de-interrogação-64.png";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  function handleCadastro(e: React.FormEvent) {
    e.preventDefault();

    if (!nome || !cpf || !email || !telefone || !nascimento || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-2 sm:px-4">
      <main
        className="
          w-full
          sm:w-[400px]
          md:w-[500px]
          lg:w-[600px]
          xl:w-[700px]
          2xl:w-[800px]
          h-auto
          bg-white/10
          backdrop-blur-xl
          p-4
          sm:p-8
          md:p-10
          lg:p-12
          xl:p-14
          rounded-3xl
          shadow-2xl
          border border-white/20
          transition-all duration-300
        "
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white drop-shadow">
          Crie sua conta
        </h2>

        <form onSubmit={handleCadastro} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nome" className="block mb-2 text-sm font-medium text-white/80">
              Nome completo
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="cpf" className="block mb-2 text-sm font-medium text-white/80">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/80">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nome@dominio.com"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-white/80">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(XX) XXXXX-XXXX"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="nascimento" className="block mb-2 text-sm font-medium text-white/80">
              Data de nascimento
            </label>
            <input
              type="date"
              id="nascimento"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block mb-2 text-sm font-medium text-white/80">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Crie uma senha"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="block mb-2 text-sm font-medium text-white/80">
              Confirmar senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Repita a senha"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
            />
          </div>
        </form>

        <div className="mt-8">
          <button
            type="submit"
            onClick={handleCadastro}
            className="w-full bg-purple-600/80 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold shadow transition-all duration-300"
          >
            Cadastrar
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-white/80">
          Já tem conta?{" "}
          <a href="/login" className="text-purple-300 underline hover:text-purple-700">
            Faça login
          </a>
        </p>
      </main>

      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
        <a
          href="/ajuda"
          className="flex items-center underline hover:text-purple-700 transition-colors"
        >
          Precisa de ajuda
          <img src={ajudaIcon} alt="botão de ajuda" className="h-6 mr-2" />
        </a>
      </div>
    </div>
  );
}
