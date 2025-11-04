import { Link, NavLink } from "react-router-dom";
import LogoReabilita from "../../../img/logo-branca-reabilita-sem-fundo.png";

export default function CabecalhoPrivado() {
  return (
    <header
      className=" bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 h-[100vh] w-[15rem] flex flex-col items-center rounded-e-3xl border-r-[1px] border-b-[1px]
        border-t-[1px] gap-[1rem]"
    >
      <Link to="pagina-inicial">
        <img
          src={LogoReabilita}
          alt="Logo Reabilita Mais"
          className="w-[7rem]"
        />
      </Link>
      <nav className="text-[1.08rem] flex flex-col text-center gap-[1rem] font-bold">
        <NavLink
          to="/pagina-inicial"
          className={({ isActive }) =>
            `w-full text-center py-2 transition-colors duration-200 
          ${
            isActive
              ? "rounded-[3rem] bg-[#dbdbdb] p-[2rem] border-white  font-semibold bg-[#7e1b8c33] text-[#4e017a]"
              : " hover:text-[#4e017a]"
          }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/consulta"
          className={({ isActive }) =>
            `w-full text-center py-2 transition-colors duration-200 
          ${
            isActive
              ? "rounded-[3rem] bg-[#dbdbdb] p-[2rem] border-white  font-semibold bg-[#7e1b8c33] text-[#4e017a]"
              : " hover:text-[#4e017a]"
          }`
          }
        >
          Consultas
        </NavLink>
      </nav>
    </header>
  );
}
