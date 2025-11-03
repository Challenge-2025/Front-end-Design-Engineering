import { Link } from "react-router-dom";
import LogoReabilita from "../../../img/logo-branca-reabilita-sem-fundo.png"

export default function CabecalhoPrivado(){
    return(
        <header className=" bg-[#6e027c] h-[100vh] w-[12rem] flex flex-col items-center rounded-e-3xl">
            <Link to="pagina-inicial">
                <img src={LogoReabilita} alt="Logo Reabilita Mais" className="w-[7rem]"/>
            </Link>
            <nav className="text-[1.2rem] flex flex-col text-center">
                <Link to="/Consulta">Consulta</Link>
            </nav>
        </header>
    );
}