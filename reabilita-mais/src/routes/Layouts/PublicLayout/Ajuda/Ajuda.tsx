import { useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";


type FaqItemProps = {
  title: string;
  children: ReactNode;
};

function FaqItem({ title, children }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-white/10 transition-colors duration-300"
      >
        <span className="font-medium text-white/90">{title}</span>
        {/* Ícone de seta que gira com a animação */}
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ⌄
        </span>
      </button>
      {/* O conteúdo só aparece se isOpen for true, com uma animação suave */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 text-white/80 bg-black/10">
          {children}
        </div>
      </div>
    </div>
  );
}


export default function Ajuda() {
  const [motivo, setMotivo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [contato, setContato] = useState("");
  const navigate = useNavigate();

  const faqs = [
    {
      question: "O que é a Reabilita+?",
      answer: "A Reabilita+ é uma plataforma que conecta pacientes a clínicas de reabilitação, oferecendo serviços terceirizados para otimizar o atendimento. Nossa missão é cuidar do presente para que nossos clientes tenham um futuro com mais autonomia e qualidade de vida."
    },
    {
      question: "Como posso encontrar um posto de saúde mais próximo?",
      answer: "Na nossa página inicial, você encontrará uma seção com um mapa. Basta inserir seu CEP para localizar os postos de saúde mais próximos de você e obter informações de contato."
    },
    {
      question: "Como faço para entrar em contato com a Reabilita+?",
      answer: "Você pode entrar em contato conosco através do formulário de ajuda nesta página. Basta selecionar o motivo do contato, descrever sua dúvida ou problema, e fornecer seu e-mail para que possamos responder."
    },
    {
      question: "Meus dados estão seguros na plataforma?",
      answer: "Sim, a segurança dos seus dados é nossa prioridade. Utilizamos protocolos de segurança modernos para garantir que suas informações pessoais e de saúde sejam mantidas em sigilo e protegidas contra acessos não autorizados."
    },
  ];

  function handleAjuda(e: React.FormEvent) {
    e.preventDefault();

    if (!motivo || !mensagem) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    alert("Ticket enviado com sucesso! Em breve entraremos em contato.");
    setMotivo("");
    setMensagem("");
    setContato("");

    navigate("/");
  }

  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center justify-center gap-16 px-2 sm:px-4 py-10">     
      {/* SEÇÃO DO FAQ - ADICIONADA AQUI */}
      <section
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
          p-4 sm:p-6 md:p-8
          rounded-3xl
          shadow-2xl
          border border-white/20
        "
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white drop-shadow">
          Perguntas Frequentes
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FaqItem key={index} title={faq.question}>
              <p>{faq.answer}</p>
            </FaqItem>
          ))}
        </div>
      </section>

      {/* SEÇÃO DO FORMULÁRIO - SEU CÓDIGO ORIGINAL ABAIXO */}
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
          Ainda precisa de ajuda?
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