import { Link } from "react-router-dom";
import LogoReabilita from "../../../img/logo-branca-reabilita-sem-fundo.png"

export default function CabecalhoPrivado(){
    return(
        <header className=" bg-[#6e027c86] h-[100vh] w-[15rem] flex flex-col items-center rounded-e-3xl border-r-[1px] border-b-[1px]
        border-t-[1px] gap-[1rem]">
            <Link to="pagina-inicial">
                <img src={LogoReabilita} alt="Logo Reabilita Mais" className="w-[7rem]"/>
            </Link>
            <nav className="text-[1.08rem] flex flex-col text-center gap-[1rem] font-bold">
                <Link to="/pagina-principal">Página Principal</Link>
                <Link to="/consulta">Consulta</Link>
                <Link to="/pergunta">Perguntas Frequentes</Link>
            </nav>
        </header>
    );
}