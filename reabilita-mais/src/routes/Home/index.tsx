import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Doutora from "../../img/img-doutora.png"; // <-- A importação está correta
import type { TipoCliente } from "../../types/tipoClientes";

export default function Home() {
  const [cliente, setCliente] = useState<TipoCliente[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Usando try/catch para lidar com erros de conexão
      try {
        const response = await fetch("http://localhost:5000/cliente");
        if (!response.ok) {
          throw new Error("Falha ao buscar dados dos clientes.");
        }
        const data: TipoCliente[] = await response.json();
        setCliente(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center text-black w-full gap-16 py-10">
      
      {/* SEÇÃO "SOBRE NÓS" COMPLETA - USANDO A IMAGEM DA DOUTORA */}
      <article className="w-full max-w-6xl px-4">
        <section className="flex flex-col lg:flex-row items-center gap-8 w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 transition-all duration-300">
          <img
            src={Doutora} // <-- A imagem é usada aqui
            alt="Imagem de uma doutora sorrindo"
            className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover shadow-lg"
          />
          <div className="text-white">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold text-white drop-shadow">
              Sobre nós
            </h1>
            <div className="flex flex-col gap-4 text-white/90">
              <p>
                A Reabilita+ é uma empresa especializada na oferta de serviços
                terceirizados para clínicas de reabilitação. Nosso foco está em atender pessoas com deficiência física —
                transitória ou definitiva — por meio de parcerias com instituições
                que compartilham do nosso compromisso com a excelência no cuidado.
              </p>
              <p>
                Contamos com uma equipe multidisciplinar altamente qualificada,
                formada por profissionais dedicados e apaixonados pelo que fazem.
                Trabalhamos nos bastidores para garantir que o cuidado chegue a
                quem precisa — com respeito, empatia e esperança.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* SEÇÃO DO MAPA */}
      <article className="w-full max-w-6xl px-4">
        <section className="w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 flex flex-col items-center gap-8">
          <header>
            <h2 className="text-white text-2xl md:text-3xl text-center font-bold drop-shadow">
              Encontre o posto mais próximo
            </h2>
          </header>
          <input
            type="text"
            placeholder="Digite seu CEP"
            className="w-full max-w-md px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/60 transition-all duration-300"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197545229066!2d-46.65881128502237!3d-23.56133908468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x2665c7f2725e840!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1628509899805!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="w-full h-[50vh] rounded-xl border-2 border-white/20"
            title="Mapa de localização"
          ></iframe>
        </section>
      </article>

      {/* SEÇÃO DE AVALIAÇÕES DOS CLIENTES */}
      <article className="w-full max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 drop-shadow">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cliente.map((c) => (
            <Link 
              to={`/cliente/${c.id}`} 
              key={c.id}
              className="bg-purple-800/50 backdrop-blur-md border-2 border-purple-400/50 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 hover:shadow-purple-400/50 transition-all duration-300"
            >
              <img
                src={c.foto_perfil}
                alt={`Foto de perfil de ${c.nome}`}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
              />
              <h3 className="text-white text-xl font-semibold mb-2">{c.nome}</h3>
              <p className="text-white/80 text-sm leading-relaxed flex-grow">
                "{c.descricao}"
              </p>
              <p className="text-lg font-bold text-yellow-400 mt-4">
                {c.avaliacao.toFixed(1)} ★
              </p>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}