import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import LogoBranca from "../../img/logo-branca-reabilita-sem-fundo.png";

export default function Cabecalho() {
  return (
    <header>
      <Link to="/">
        <img
          src={LogoBranca}
          alt="Logo Reabilita Mais"
          className="w-[6.9rem] h-[6.6rem]"
        />
      </Link>
      <Menu />
    </header>
  );
}
