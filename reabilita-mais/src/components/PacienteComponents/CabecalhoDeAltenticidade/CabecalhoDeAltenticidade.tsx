import { useAuth } from "../../../routes/Layouts/Hook/useAuth";

export default function CabecalhoDeAltenticidade(){
    const { paciente } = useAuth();

    return(
        <div className="h-[10vh] w-[100%] flex items-center p-[1rem] border-t border-white/10 hover:bg-white/5 transition-colors rounded-3xl shadow-2xl border border-white/20">
        <p className="text-[#D9D9D9] font-bold text-[1.3rem]">Bom-vindo(a), {paciente?.nomeCompleto}</p>
        
        </div>
    );
}