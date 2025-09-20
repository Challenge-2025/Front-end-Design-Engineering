import { Link } from "react-router-dom";
import BtnPesquisa from "../../img/search.png";

export default function Menu() {
  return (
    <div className="flex w-[100%] h-auto">
      <nav className="flex font-medium w-[59%] justify-start items-center gap-[25px]">
        <Link
          to="/"
          className="hover:text-xl hover:text-[#793996] transition-all duration-350 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/faleConosco"
          className="hover:text-xl hover:text-[#793996] transition-all duration-350 ease-linear"
        >
          Fale Conosco
        </Link>
        <Link
          to="/participantes"
          className="hover:text-xl hover:text-[#793996] transition-all duration-350 ease-linear"
        >
          Participantes
        </Link>
      </nav>
      <nav className="flex font-medium w-[59%] justify-start items-center gap-[25px]">
        <Link
          to="/login"
          className="py-[0.4rem] px-[1.9rem] bg-[#793996] rounded-[1rem] hover:bg-transparent hover:text[#793996] hover:border-[2px] transition-all ease-linear duration-350 "
        >
          Login
        </Link>
        <Link
          to="/cadastro"
          className="py-[0.4rem] px-[1.9rem] bg-[#931896] rounded-[1rem] hover:bg-transparent hover:text[#931896] hover:border-[2px] transition-all ease-linear duration-350 "
        >
          Cadastrar
        </Link>
      </nav>
      <section className="input-container">
        <form className="input group flex items-center justify-center h-[1.9rem] bg-[#400759] rounded-full p-1 relative">
          <input
            type="text"
            placeholder="Busca"
            className="pesquisa w-0 group-hover:w-[9.4rem] h-full rounded-full bg-transparent border-none text-white font-bold px-2 transition-all duration-400 ease-in-out placeholder-white"
          />
          <button
            type="submit"
            className="btn-pesquisa flex justify-center items-center w-8 h-8 rounded-full ml-2"
          >
            <img src={BtnPesquisa} alt="pesquisar" className="w-[1.5rem] h-[1.5rem]" />
          </button>
        </form>
      </section>
    </div>
  );
}
