import imgPedro from "../../../../img/ferreira foto.jpg";
import imgBiel from "../../../../img/gabrielfoto.jpg";
import linkedin from "../../../../img/linkedin-icon.png";
import github from "../../../../img/github-icon.png";

export default function Participantes() {
  return (
    <main className="
      min-h-screen flex flex-col items-center justify-center
      bg-white/10 backdrop-blur-xl
      px-2 sm:px-6 py-10
      transition-all duration-300
      rounded-[2.5rem]
    ">
      <article className="w-full max-w-5xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-[#ffffff] drop-shadow-lg">
          Participantes
        </h1>
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
          {/* Pedro */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 sm:p-8 w-full max-w-xs transition-all duration-300">
            <img
              src={imgPedro}
              alt="Imagem do participante Pedro Ferreira Gomes"
              className="w-40 h-40 object-cover rounded-full border-4 border-purple-700 shadow mb-4"
            />
            <h3 className="text-xl font-bold text-[#3B2E41] mb-2">Pedro Ferreira Gomes</h3>
            <p className="font-bold text-white">RM565824</p>
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
                  className="w-7 h-7"
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
                  className="w-7 h-7"
                />
                <span className="hidden sm:inline text-sm font-semibold">GitHub</span>
              </a>
            </div>
          </div>
          {/* Gabriel */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 sm:p-8 w-full max-w-xs transition-all duration-300">
            <img
              src={imgBiel}
              alt="Imagem do participante Gabriel Bebé Silva"
              className="w-40 h-40 object-cover rounded-full border-4 border-purple-700 shadow mb-4"
            />
            <h3 className="text-xl font-bold text-[#3B2E41] mb-2">Gabriel Bebé Silva</h3>
            <p className="font-bold text-white">RM562012</p>
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
                  className="w-7 h-7"
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
                  className="w-7 h-7"
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