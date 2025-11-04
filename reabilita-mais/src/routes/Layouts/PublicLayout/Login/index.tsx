import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ajudaIcon from "../../../../img/ponto-de-interrogação-64.png";
import { useAuth } from "../../../Layouts/Hook/useAuth";
import type { TipoPaciente } from "../../../../types/tipoPaciente";

const API_URL = import.meta.env.VITE_API_REABILITA;

type LoginFormValues = {
  email: string;
  senha: string;
};

export default function Login() {
  const { setPaciente } = useAuth();
  const navigate = useNavigate();

  async function loginPaciente(email: string, senha: string): Promise<TipoPaciente | null> {
    try {
      const response = await fetch(`${API_URL}/pacientes/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        throw new Error("Falha no login");
      }

      const data: TipoPaciente = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return null;
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      alert("Email inválido.");
      return;
    }

    const pacienteLogado = await loginPaciente(data.email, data.senha);

    if (pacienteLogado) {
      setPaciente(pacienteLogado);
      navigate("/pagina-inicial");
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-2 sm:px-4">
      <main className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/20 transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white drop-shadow">
          Acesse sua conta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/80">
              Digite seu Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "O email é obrigatório",
              })}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-purple-400 placeholder-white/60"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="senha" className="block mb-2 text-sm font-medium text-white/80">
              Digite sua Senha
            </label>
            <input
              type="password"
              id="senha"
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" },
              })}
              placeholder="Senha"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-purple-400 placeholder-white/60"
            />
            {errors.senha && <p className="text-red-400 text-sm">{errors.senha.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600/80 hover:bg-purple-700 text-white py-2 rounded-xl font-semibold shadow transition-all duration-300"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/80">
          Não tem conta?{" "}
          <Link to="/cadastro" className="underline hover:text-purple-700">
            Clique aqui
          </Link>
        </p>
      </main>

      <div className="mt-6 flex items-center justify-center gap-2">
        <Link to="/ajuda" className="flex items-center gap-2 underline hover:text-purple-700">
          <img src={ajudaIcon} alt="Ajuda" className="h-6" /> Precisa de ajuda
        </Link>
      </div>
    </div>
  );
}
