import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex w-[100%] h-auto sm:gap-[4rem]">
      <nav className="flex font-medium w-[59%] justify-start items-center gap-[25px] lg:flex sm:hidden block 2xl:text-[1.2rem] md:text-[1rem]">
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
      <nav className="flex font-medium w-[59%] justify-start items-center gap-[25px] md:text-[1rem]">
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
    </div>
  );
}
