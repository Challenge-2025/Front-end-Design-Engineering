import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Ajuda() {
  const [motivo, setMotivo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [contato, setContato] = useState("");
  const navigate = useNavigate();

  function handleAjuda(e: React.FormEvent) {
    e.preventDefault();

    if (!motivo || !mensagem) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    alert("Ticket enviado com sucesso! Em breve entraremos em contato.");
    setMotivo("");
    setMensagem("");
    setContato("");

    navigate("/");
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-2 sm:px-4">
      <main
        className="
          w-full
          sm:w-[400px]
          md:w-[500px]
          lg:w-[600px]
          xl:w-[700px]
          2xl:w-[800px]
          h-auto
          bg-white/10
          backdrop-blur-xl
          p-4
          sm:p-8
          md:p-10
          lg:p-12
          xl:p-14
          rounded-3xl
          shadow-2xl
          border border-white/20
          transition-all duration-300
        "
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white drop-shadow">
          Central de Ajuda
        </h2>

        <form onSubmit={handleAjuda} className="flex flex-col gap-6">
            <div className="relative">
            <select
                id="motivo"
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="
                w-full px-4 py-3 rounded-xl
                bg-white/20 text-white
                border border-white/30
                focus:outline-none focus:ring-2 focus:ring-purple-400
                appearance-none
                transition-all duration-300
                cursor-pointer
                "
            >
                <option value="" className="text-gray-800">Selecione um motivo</option>
                <option value="login" className="text-gray-800">Problema no Login</option>
                <option value="cadastro" className="text-gray-800">Problema no Cadastro</option>
                <option value="erro" className="text-gray-800">Erro no site</option>
                <option value="duvida" className="text-gray-800">Dúvida Geral</option>
                <option value="outro" className="text-gray-800">Outro</option>
            </select>

            {/* Ícone seta */}
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                ⌄
            </span>
            </div>


          <div>
            <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-white/80">
              Descrição *
            </label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Explique sua dúvida ou problema..."
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 
                         focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 
                         transition-all duration-300 min-h-[120px] resize-y"
            />
          </div>

          <div>
            <label htmlFor="contato" className="block mb-2 text-sm font-medium text-white/80">
              E-mail 
            </label>
            <input
              type="text"
              id="contato"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              placeholder="nome@dominio.com"
              className="w-full px-3 sm:px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 
                         focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 
                         transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600/80 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold 
                       shadow transition-all duration-300"
          >
            Enviar Ticket
          </button>
        </form>
      </main>
    </div>
  );
}
