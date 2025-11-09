import { useAuth } from "../../../routes/Layouts/Hook/useAuth";
import { AlignJustify } from "lucide-react"; // Apenas o Hamburger

type TopbarProps = {
  toggleSidebar: () => void;
};

export default function CabecalhoDeAltenticidade({
  toggleSidebar,
}: TopbarProps) {
  const { paciente } = useAuth();

  return (
    <div
      className="h-20 w-full flex items-center justify-between p-4 md:p-6 
                 border-b border-white/20 bg-white/5 shadow-lg 
                 sticky top-0 z-10" // z-10 (atrás da sidebar)
    >
      <div className="flex items-center gap-4">
        {/* CORREÇÃO: Este é SOMENTE o botão de ABRIR (Hamburger) */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg text-white hover:bg-white/10 lg:hidden" // Só aparece no mobile
          aria-label="Abrir menu"
        >
          <AlignJustify size={24} />
        </button>

        <p className="text-[#D9D9D9] font-bold text-lg md:text-xl">
          Bem-vindo(a), {paciente?.nomeCompleto.split(" ")[0]}
        </p>
      </div>
    </div>
  );
}