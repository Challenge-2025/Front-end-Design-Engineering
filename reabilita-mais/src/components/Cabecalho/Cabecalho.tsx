import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import LogoBranca from "../../img/logo-branca-reabilita-sem-fundo.png";
import MenuSanduiche from "../Menu/MenuSanduiche";

export default function Cabecalho() {
  return (
    <header className="flex items-center w-[94%] lg:w-[80%] 2xl:w-[85%] border-b-[2px] sm:gap-[1.5rem] justify-between md:text-[1rem] ">
      <Link to="/">
        <img src={LogoBranca}
          alt="Logo Reabilita Mais" className="2xl:w-[9rem] md:w-[9rem] md:h-[7.5em] sm:w-[8.5rem] lg:w-[8.9rem]"/>
      </Link>
      <Menu />
      <MenuSanduiche/>
    </header>
  );
}
