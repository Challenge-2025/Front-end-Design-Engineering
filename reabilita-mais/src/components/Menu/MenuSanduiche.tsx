import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MenuSanduiche() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative lg:hidden flex items-center justify-center z-50">
      {/* Botão do menu */}
      <button
        aria-label="Abrir menu"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#793996] transition"
        onClick={() => setOpen(true)}
      >
        <span className="flex flex-col gap-[4px]">
          <div className="w-[1.37rem] h-[2px] rounded-full bg-[#510369]" />
          <div className="w-[1.37rem] h-[2px] rounded-full bg-[#510369]" />
          <div className="w-[1.37rem] h-[2px] rounded-full bg-[#510369]" />
        </span>
      </button>

      {/* Fundo escurecido */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" />
      )}

      {/* Menu lateral */}
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 w-64 h-[30vh] rounded-l-lg bg-gradient-to-br from-[#902AC0] via-[#a153c5] to-[#a153c5] flex flex-col p-5 transition-all duration-500 ease-in-out z-50 ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 text-[#D9D9D9] text-xl list-none mt-10">
          <li>
            <Link
              to="/"
              className="hover:text-[#3B2E41] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/participantes"
              className="hover:text-[#3B2E41] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Participantes
            </Link>
          </li>
        </ul>

        {/* Botão de fechar */}
        <button
          onClick={() => setOpen(false)}
          className="mt-auto self-center w-10 h-10 flex items-center justify-center text-white hover:text-[#3B2E41] transition"
          aria-label="Fechar menu"
        >
          ✕
        </button>
      </nav>
    </div>
  );
}
