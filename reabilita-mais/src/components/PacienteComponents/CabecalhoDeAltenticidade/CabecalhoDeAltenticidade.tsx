import { useAuth } from "../../../routes/Layouts/Hook/useAuth";

export default function CabecalhoDeAltenticidade(){
    const { paciente } = useAuth();

    return(
        <div className="h-[10vh] w-[100%] flex items-center p-[1rem] ">
        <p className="text-[#D9D9D9] font-bold text-[1.3rem]">Bom-vindo(a), {paciente?.nomeCompleto}</p>
        
        </div>
    );
}