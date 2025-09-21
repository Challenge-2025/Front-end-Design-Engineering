import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div className="bg-[linear-gradient(139deg,#450d73_0%,#e99fed_52%,#f7f2f7_98%)] h-auto w-[100%] flex-col text-[#D9D9D9] flex items-center justify-center gap-[8rem] overflow-auto" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}
