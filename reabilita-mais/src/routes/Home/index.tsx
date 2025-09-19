import Doutora from "../../img/img-doutora.png";

export default function Home() {
  return (
    <main className="flex justify-center items-center text-black">
      <article className="flex justify-center items-center w-[80%] ">
        <img
          src={Doutora}
          alt="Imagem de doutora olhando para a câmera"
          className="w-[20rem]"
        />

        <section>
          <div>
            <h1 className="w[90%] h-[3.12rem] mb-0 text-[1.43rem] font-bold">
              Sobre nós
            </h1>
          </div>
          <section className="flex flex-col gap-2.5">
            <p>
              A Reabilita+ é uma empresa especializada na oferta de serviços
              terceirizados para clínicas de reabilitação em múltiplas áreas.
              Nosso foco está em atender pessoas com deficiência física —
              transitória ou definitiva — por meio de parcerias com instituições
              que compartilham do nosso compromisso com a excelência no
              cuidado.Nossa missão é clara: cuidar do presente para que nossos
              clientes tenham um futuro longe de suas dificuldades. Acreditamos
              no potencial de cada indivíduo para evoluir, superar barreiras e
              reconquistar sua autonomia — e é com esse propósito que apoiamos
              clínicas e profissionais da área em sua atuação diária.
            </p>

            <p>
              Contamos com uma equipe multidisciplinar altamente qualificada,
              formada por profissionais dedicados e apaixonados pelo que fazem.
              Nossos serviços são pensados para integrar-se de forma eficiente
              às rotinas das instituições parceiras, oferecendo atendimentos
              humanizados e personalizados, sempre respeitando as necessidades
              de cada paciente.Na Reabilita+, cada avanço alcançado pelos
              pacientes das clínicas que atendemos também é a nossa vitória.
              Trabalhamos nos bastidores para garantir que o cuidado chegue a
              quem precisa — com respeito, empatia e esperança.
            </p>
          </section>
        </section>
      </article>
    </main>
  );
}
