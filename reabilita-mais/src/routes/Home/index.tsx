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
      <article className="flex justify-center items-center w-[80%] border-b-[3px] 2xl:border-b-[0.35rem] border-b-[#793996] rounded-[60px] p-8 md:p-16 gap-8 xl:h-[80vh] 2xl:h-[80vh] 2xl:w-[80%] md-[60vh]">
        <img
          src={Doutora}
          alt="Imagem de doutora olhando para a câmera"
          className="lg:w-[20rem] 2xl:w-[30rem] xl:flex sm:hidden block 
             [mask-image:linear-gradient(to_bottom,white_90%,transparent)] 
             [mask-repeat:no-repeat] [mask-size:100%]"
        />
        <section>
          <div>
            <h1 className="w-[90%] h-[3.12rem] mb-0 text-[1.43rem] sm:text-[2rem] font-bold text-[#3B2E41] 2xl:text-[2.5rem]">
              Sobre nós
            </h1>
          </div>
          <div className="flex flex-col gap-2.5 2xl:text-[1.2rem] 2xl:w-[80%]">
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
        </section>
      </article>

      <article className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
        <section className="text-[2rem] font-bold flex flex-col items-center justify-center gap-[3rem] 2xl:w-[90%] 2xl:h-[70vh]">
          <header>
            <h2 className="text-[#3B2E41] sm:text-[1.7rem] lg:text-[2.3] sm:text-center">
              Informe seu CEP e te ajudamos a encontrar o posto mais próximo
            </h2>
          </header>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.14386865456!2d-46.92495573160536!3d-23.682063556622076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1746765966396!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="w-[90%] h-[50vh]"
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
              className="md:w-[5rem]  md:h-[5rem] 2xl:w-[7rem] 2xl:h-[7rem] rounded-full object-cover mb-4 border-2 border-white"
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
