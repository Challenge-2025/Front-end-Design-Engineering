import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ajudaIcon from "../../img/ponto-de-interrogação-64.png";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function validarCPF(cpf: string) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let digito1 = 11 - (soma % 11);
    if (digito1 > 9) digito1 = 0;
    if (parseInt(cpf.charAt(9)) !== digito1) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    let digito2 = 11 - (soma % 11);
    if (digito2 > 9) digito2 = 0;
    if (parseInt(cpf.charAt(10)) !== digito2) return false;

    return true;
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!cpf || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!validarCPF(cpf)) {
      alert("CPF inválido. Verifique e tente novamente.");
      return;
    }

    alert("Login feito com sucesso!");
    navigate("/");
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
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-white drop-shadow">
          Acesse sua conta
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="cpf"
              className="block mb-1 sm:mb-2 text-sm font-medium text-white/80"
            >
              Digite seu CPF
            </label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="CPF"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              autoComplete="on"
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block mb-1 sm:mb-2 text-sm font-medium text-white/80"
            >
              Digite sua Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
              autoComplete="off"
            />
          </div>

          <div className="text-right text-sm">
            <a
              href="/esqueceu-senha"
              className="underline hover:text-purple-700 transition-colors"
            >
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600/80 hover:bg-purple-700 text-white py-2 rounded-xl font-semibold shadow transition-all duration-300"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 sm:mt-6 text-center text-sm text-white/80">
          Não tem conta?{" "}
          <a
            href="/cadastro"
            className="underline hover:text-purple-700 transition-colors"
          >
            Clique aqui
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
