import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import LogoBranca from "../../img/logo-branca-reabilita-sem-fundo.png";
import MenuSanduiche from "../Menu/MenuSanduiche";

export default function Cabecalho() {
  return (
    <header className="flex justify-center items-center w-[94%] border-b-[2px] gap-[35px] sm:gap-[1.5rem] sm:justify-between">
      <Link to="/">
        <img
          src={LogoBranca}
          alt="Logo Reabilita Mais"
          className="w-[6.9rem] h-[6.6rem] sm:w-[8.5rem]"
        />
      </Link>
      <Menu />
      <MenuSanduiche/>
    </header>
  );
}
