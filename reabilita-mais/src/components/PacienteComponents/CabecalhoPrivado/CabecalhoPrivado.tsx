import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoReabilita from "../../../img/logo-branca-reabilita-sem-fundo.png";
import { useAuth } from "../../../routes/Layouts/Hook/useAuth";
import {
  LayoutDashboard,
  ClipboardList,
  Settings,
  LogOut,
  ChevronFirst,
  ChevronLast,
  X, // O 'X' está aqui
} from "lucide-react";

// --- COMPONENTE INTERNO: NavItem ---
type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  onClick?: () => void;
};

const NavItem = ({ to, icon, text, isOpen, onClick }: NavItemProps) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative flex items-center py-3 px-4 my-1 
       rounded-md cursor-pointer transition-colors duration-200 group
      ${
        isActive
          ? "bg-white text-[#4e017a] font-semibold shadow-lg"
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }`
    }
  >
    {icon}
    <span
      className={`overflow-hidden whitespace-nowrap transition-all ${
        isOpen ? "w-auto ml-4" : "w-0" // w-auto é a chave
      }`}
    >
      {text}
    </span>
    {!isOpen && ( // Tooltip (Desktop fechado)
      <div
        className="absolute left-full rounded-md px-2 py-1 ml-6 
                   bg-purple-800 text-white text-sm 
                   opacity-0 -translate-x-3 transition-all 
                   group-hover:opacity-100 group-hover:translate-x-0
                   pointer-events-none z-50"
      >
        {text}
      </div>
    )}
  </NavLink>
);

// --- COMPONENTE INTERNO: LogoutButton ---
const LogoutButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="relative flex items-center py-3 px-4 my-1 
               rounded-md cursor-pointer transition-colors duration-200 group
               text-red-400 hover:bg-red-600/50 hover:text-white"
  >
    <LogOut size={24} />
    {/* CORREÇÃO DO "SAIR" VAZANDO: w-auto e whitespace-nowrap */}
    <span
      className={`overflow-hidden whitespace-nowrap transition-all ${
        isOpen ? "w-auto ml-4" : "w-0"
      }`}
    >
      Sair
    </span>
    {!isOpen && ( // Tooltip (Desktop fechado)
      <div
        className="absolute left-full rounded-md px-2 py-1 ml-6 
                   bg-red-800 text-white text-sm 
                   opacity-0 -translate-x-3 transition-all 
                   group-hover:opacity-100 group-hover:translate-x-0
                   pointer-events-none z-50"
      >
        Sair
      </div>
    )}
  </div>
);

// --- COMPONENTE PRINCIPAL ---
export type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function CabecalhoPrivado({ isOpen, toggleSidebar }: SidebarProps) {
  const { logout } = useAuth();

  const handleLogoutAndClose = () => {
    if (window.innerWidth < 1024) {
      toggleSidebar(); // Fecha o menu mobile
    }
    logout();
  };

  return (
    <>
      {/* 1. Sidebar para Desktop (FIXA) */}
      <aside
        className={`hidden lg:flex flex-col h-screen p-4 fixed top-0 left-0 z-40
                   bg-[#6403a5] border-r border-white/20 shadow-lg
                   transition-all duration-300 ease-in-out
                   ${isOpen ? "w-64" : "w-20"}`} // Controla largura no desktop
      >
        {/* ... (Conteúdo da sidebar desktop, que já estava bom) ... */}
        <div className="flex items-center justify-between pb-4 border-b border-white/20">
          <Link to="/pagina-inicial">
            <img
              src={LogoReabilita}
              alt="Logo Reabilita Mais"
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "w-32" : "w-0"
              }`}
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Minimizar menu"
          >
            {isOpen ? <ChevronFirst size={24} /> : <ChevronLast size={24} />}
          </button>
        </div>
        <nav className="flex-grow mt-4">
          <NavItem
            to="/pagina-inicial"
            icon={<LayoutDashboard size={24} />}
            text="Dashboard"
            isOpen={isOpen}
          />
          <NavItem
            to="/consulta"
            icon={<ClipboardList size={24} />}
            text="Consultas"
            isOpen={isOpen}
          />
          <NavItem
            to="/configuracao"
            icon={<Settings size={24} />}
            text="Meus Dados"
            isOpen={isOpen}
          />
        </nav>
        <div className="border-t border-white/20 pt-4">
          <LogoutButton isOpen={isOpen} onClick={logout} />
        </div>
      </aside>

      {/* 2. Sidebar para Mobile (FLUTUANTE) */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full p-4 z-50 w-64
                   bg-gradient-to-br from-[#902AC0] to-[#6403a5] shadow-lg
                   overflow-hidden transition-transform duration-300 ease-in-out
                   ${isOpen ? "translate-x-0" : "-translate-x-full"}`} // CORREÇÃO: Sem w-0, só translate
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/20">
          <Link to="/pagina-inicial" onClick={toggleSidebar}>
            <img
              src={LogoReabilita}
              alt="Logo Reabilita Mais"
              className="w-32"
            />
          </Link>
          {/* O 'X' está AQUI, dentro do menu que desliza */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-white"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Os NavItem aqui sempre estão 'isOpen={true}' */}
        <nav className="flex-grow mt-4">
          <NavItem
            to="/pagina-inicial"
            icon={<LayoutDashboard size={24} />}
            text="Dashboard"
            isOpen={true}
            onClick={toggleSidebar}
          />
          <NavItem
            to="/consulta"
            icon={<ClipboardList size={24} />}
            text="Consultas"
            isOpen={true}
            onClick={toggleSidebar}
          />
          <NavItem
            to="/configuracao"
            icon={<Settings size={24} />}
            text="Meus Dados"
            isOpen={true}
            onClick={toggleSidebar}
          />
        </nav>

        <div className="border-t border-white/20 pt-4">
          <LogoutButton isOpen={true} onClick={handleLogoutAndClose} />
        </div>
      </aside>
    </>
  );
}