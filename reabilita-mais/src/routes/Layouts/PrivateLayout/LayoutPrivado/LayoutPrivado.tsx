import { Outlet } from "react-router-dom";
import CabecalhoPrivado from "../../../../components/PacienteComponents/CabecalhoPrivado/CabecalhoPrivado";
import Rodape from "../../../../components/Rodape/Rodape";
import CabecalhoDeAltenticidade from "../../../../components/PacienteComponents/CabecalhoDeAltenticidade/CabecalhoDeAltenticidade";
import { useState } from "react";

export default function LayoutPrivado() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div
      className="w-full min-h-screen bg-[linear-gradient(139deg,#450d73_0%,#e99fed_52%,#f7f2f7_98%)] text-[#D9D9D9]"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* 1. Sidebar (fixa no desktop, flutuante no mobile) */}
      <CabecalhoPrivado
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* 2. OVERLAY (Para fechar o menu no mobile) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden" // z-30 (abaixo da sidebar)
        />
      )}

      {/* 3. CONTEÚDO PRINCIPAL (com margem para a sidebar fixa) */}
      <div
        className={`flex flex-col flex-grow min-h-screen
                    transition-all duration-300
                    ${
                      isSidebarOpen
                        ? "lg:ml-64" // Margem ABERTA
                        : "lg:ml-20" // Margem FECHADA
                    }`}
      >
        <CabecalhoDeAltenticidade toggleSidebar={toggleSidebar} />

        {/* O <main> cresce e empurra o Rodapé para baixo */}
        <main className="flex-grow p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>

        <Rodape />
      </div>
    </div>
  );
}