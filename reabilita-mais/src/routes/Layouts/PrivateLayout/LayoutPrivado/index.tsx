import { Outlet } from "react-router-dom";
import CabecalhoPrivado from "../../../../components/PacienteComponents/CabecalhoPrivado/CabecalhoPrivado";
import Rodape from "../../../../components/Rodape/Rodape";
import CabecalhoDeAltenticidade from "../../../../components/PacienteComponents/CabecalhoDeAltenticidade/CabecalhoDeAltenticidade";

export default function LayoutPrivado() {
  return (
    <div
      className="min-h-screen flex bg-[linear-gradient(139deg,#450d73_0%,#e99fed_52%,#f7f2f7_98%)] text-[#D9D9D9]"
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <CabecalhoPrivado />

      
      <div className="flex flex-col flex-grow w-full gap-[2rem]">
        <CabecalhoDeAltenticidade />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Rodape />
      </div>
    </div>
  );
}
