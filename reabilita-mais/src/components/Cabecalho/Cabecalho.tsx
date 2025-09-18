import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import LogoBranca from "../../img/logo-branca-reabilita-sem-fundo.png";

export default function Cabecalho(){

    return(
        <header className="flex  w-[94%] h-[6.6rem] bg-[#000]">
            <Link to="/"><img src={LogoBranca} alt="Logo Reabilita Mais" className="w-[7rem] h-[7rem]" /></Link>
            <Menu/>
        </header>
    );
}