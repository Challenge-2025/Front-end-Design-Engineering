import { useEffect, useState } from "react";
import Doutora from "../../img/img-doutora.png";
import type { TipoCliente } from "../../types/tipoClientes";

export default function Home() {
  const [cliente, setCliente] = useState<TipoCliente[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/cliente");
      const data: TipoCliente[] = await response.json();
      setCliente(data);
    };

    fetchData();
  }, []);

  console.log(cliente);
  return (
    <main className="flex flex-col justify-center items-center text-black">
      <article className="flex flex-col xl:flex-row justify-center items-center w-full max-w-[1200px] mx-auto p-4 sm:p-6 md:p-8 lg:p-12 gap-6 xl:gap-8">
        <section className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-4 sm:p-8 md:p-10 lg:p-12 xl:p-14 transition-all duration-300">
          <img
            src={Doutora}
            alt="Imagem de doutora olhando para a câmera"
            className="w-[12rem] sm:w-[16rem] lg:w-[20rem] 2xl:w-[30rem] rounded-2xl mb-4 sm:mb-0 object-cover"
          />
          <div>
            <h1 className="mb-4 text-[1.43rem] sm:text-[2rem] font-bold text-[#3B2E41] 2xl:text-[2.5rem]">
              Sobre nós
            </h1>
            <div className="flex flex-col gap-2.5 text-base sm:text-lg 2xl:text-[1.2rem] 2xl:w-[80%]">
              <p>
                A Reabilita+ é uma empresa especializada na oferta de serviços
                terceirizados para clínicas de reabilitação em múltiplas áreas.
                Nosso foco está em atender pessoas com deficiência física —
                transitória ou definitiva — por meio de parcerias com instituições
                que compartilham do nosso compromisso com a excelência no cuidado.
                Nossa missão é clara: cuidar do presente para que nossos clientes
                tenham um futuro longe de suas dificuldades. Acreditamos no
                potencial de cada indivíduo para evoluir, superar barreiras e
                reconquistar sua autonomia — e é com esse propósito que apoiamos
                clínicas e profissionais da área em sua atuação diária.
              </p>

              <p>
                Contamos com uma equipe multidisciplinar altamente qualificada,
                formada por profissionais dedicados e apaixonados pelo que fazem.
                Nossos serviços são pensados para integrar-se de forma eficiente
                às rotinas das instituições parceiras, oferecendo atendimentos
                humanizados e personalizados, sempre respeitando as necessidades
                de cada paciente. Na Reabilita+, cada avanço alcançado pelos
                pacientes das clínicas que atendemos também é a nossa vitória.
                Trabalhamos nos bastidores para garantir que o cuidado chegue a
                quem precisa — com respeito, empatia e esperança.
              </p>
            </div>
          </div>
        </section>
      </article>

      <article className="w-full flex flex-col justify-center items-center mt-8">
        <section className="
    w-[90%]
    bg-white/10 backdrop-blur-xl
    rounded-3xl shadow-2xl border border-white/20
    p-4 sm:p-8 md:p-10 lg:p-12 xl:p-14
    flex flex-col items-center justify-center gap-8
    transition-all duration-300
  ">
          <header>
            <h2 className="text-[#3B2E41] text-[2rem] sm:text-[1.7rem] lg:text-[2.3rem] text-center font-bold">
              Informe seu CEP e te ajudamos a encontrar o posto mais próximo
            </h2>
          </header>
          <input
            type="text"
            placeholder="Digite seu CEP"
            className="w-full max-w-xs px-4 py-2 rounded-xl bg-white/20 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-black/60 transition-all duration-300"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.14386865456!2d-46.92495573160536!3d-23.682063556622076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1746765966396!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="w-full h-[50vh] rounded-xl"
            title="Mapa de localização"
          ></iframe>
        </section>
      </article>

      <article className="w-[90%] flex gap-[7rem] items-center justify-center xl:flex-row sm:flex-col">
        {cliente.map((c, idc) => (
          <div
            key={idc}
            className="bg-[#793996] border-[2px] border-[#5e1580] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg h-[50vh] w-[25%] justify-between sm:w-[80%] 2xl:h-[60vh]"
          >
            <img
              src={c.foto_perfil}
              alt={`Foto de perfil de ${c.nome}`}
              className="md:w-[5rem] md:h-[5rem] 2xl:w-[7rem] 2xl:h-[7rem] rounded-full object-cover mb-4 border-2 border-white"
            />
            <h3 className="text-[#D9D9D9] font-semibold mb-2 2xl:text-[2rem] md:text-[1rem]">
              {c.nome}
            </h3>
            <p className="text-[#D9D9D9] w-full 2xl:text-[1.5rem] md:text-[1rem] break-words leading-relaxed line-clamp-7">
              {c.descricao}
            </p>
            <p className="text-[1.2rem] font-bold text-[#D9D9D9] 2xl:text-[1.5rem] md:text-[1rem]">
              {c.avaliacao}
            </p>
          </div>
        ))}
      </article>
    </main>
  );
}
