import imgPedro from "../../img/ferreira foto.jpg";
import imgBiel from "../../img/gabrielfoto.jpg";
import linkedin from "../../img/linkedin-icon.png";
import github from "../../img/github-icon.png";

export default function Participantes() {
  return (
    <main>
      <article className=" flex flex-col ">
        <h1 className="text-[3rem] text-3xl sm:text-4xl font-bold mb-8 text-center text-white drop-shadow">
          Participantes
        </h1>
        <div className="flex gap-[3rem] font-bold lg:flex-col">
          <div className="px-3 sm:px-4 py-2 rounded-2xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-purple-400 text-center">
            <h3>Pedro Ferreira Gomes</h3>
            <img
              src={imgPedro}
              alt="Imagem do participante Pedro Ferreira Gomes"
              className="2xl:w-[20rem]"
            />
            <h3 className="text-xl font-bold text-[#3B2E41] mb-2">Pedro Ferreira Gomes</h3>
            <div className="flex gap-6 mt-2">
              <a
                href="https://www.linkedin.com/in/pedro-ferreira-a762532bb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-700/80 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition"
              >
                <img
                  src={linkedin}
                  alt="Logo linkedin Pedro Ferreira"
                  className="2xl:w-[4rem]"
                />
                <span className="hidden sm:inline text-sm font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Ferreira2120"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-700/80 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition"
              >
                <img
                  src={github}
                  alt="Logo GitHub Pedro Ferreira"
                  className="2xl:w-[4rem]"
                />
                <span className="hidden sm:inline text-sm font-semibold">GitHub</span>
              </a>
            </div>
          </div>
          {/* Gabriel */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 sm:p-8 w-full max-w-xs transition-all duration-300">
            <img
              src={imgBiel}
              alt="Imagem do participante Pedro Ferreira Gomes"
              className="2xl:w-[20rem]"
            />
            <h3 className="text-xl font-bold text-[#3B2E41] mb-2">Gabriel Bebé Silva</h3>
            <div className="flex gap-6 mt-2">
              <a
                href="https://www.linkedin.com/in/gabriel-bebé-298815238"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-700/80 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition"
              >
                <img
                  src={linkedin}
                  alt="Logo linkedin Gabriel Bebé"
                  className="2xl:w-[4rem]"
                />
                <span className="hidden sm:inline text-sm font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Gabriel24701"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-700/80 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition"
              >
                <img
                  src={github}
                  alt="Logo GitHub Gabriel Bebé"
                  className="2xl:w-[4rem]"
                />
                <span className="hidden sm:inline text-sm font-semibold">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}