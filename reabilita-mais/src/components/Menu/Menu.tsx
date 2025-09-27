import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center px-4 py-6 gap-4 sm:gap-8">
      {/* Navegação principal */}
      <nav className="flex flex-wrap justify-center sm:justify-start items-center gap-6 text-base sm:text-lg font-medium">
        <Link
          to="/"
          className="hover:text-[#793996] transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/participantes"
          className="hover:text-[#793996] transition-all duration-300"
        >
          Participantes
        </Link>
      </nav>

      {/* Botões de login/cadastro */}
      <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-base sm:text-lg font-medium">
        <Link
          to="/login"
          className="py-2 px-6 bg-[#793996] rounded-xl text-white hover:bg-transparent hover:text-[#793996] hover:border-2 border-[#793996] transition-all duration-300"
        >
          Login
        </Link>
        <Link
          to="/cadastro"
          className="py-2 px-6 bg-[#931896] rounded-xl text-white hover:bg-transparent hover:text-[#931896] hover:border-2 border-[#931896] transition-all duration-300"
        >
          Cadastrar
        </Link>
      </nav>
    </div>
  );
}
