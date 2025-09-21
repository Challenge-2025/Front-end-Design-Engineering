import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuSanduiche() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden flex items-center justify-center">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#793996] transition"
        onClick={() => setOpen(true)}>
        <span className="flex flex-col gap-[4px]">
          <div className="w-[1.37rem] h-[2px] rounded-full bg-[#510369]"></div>
          <div className="w-[1.37rem] h-[2px] rounded-full bg-[#510369]"></div>
          <div className="w-[1.37rem] h-[2px] rounded-full bg-[#510369]"></div>
        </span>
      </button>

      <nav
  className={`fixed top-0 right-0 w-64 h-[50vh] rounded-l-lg bg-gradient-to-br from-[#902AC0] via-[#a153c5] to-[#a153c5] flex flex-col p-5 transition-all duration-500 ${
    open
      ? "translate-x-0 opacity-100"
      : "translate-x-full opacity-0"
  }`}
>
  <ul className="flex flex-col gap-6 text-[#D9D9D9] text-xl list-none mt-10">
    <li><Link to="/" className="hover:text-[#3B2E41]">Inicio</Link></li>
    <li><Link to="/participantes" className="hover:text-[#3B2E41]">Participantes</Link></li>
    <li><Link to="/faleConosco">Fale Conosco</Link></li>
  </ul>

  <button
    onClick={() => setOpen(false)}
    className="mt-auto self-center w-10 h-10 flex items-center justify-center text-white"
  >
    ✕
  </button>
</nav>
    </div>
  );
}
