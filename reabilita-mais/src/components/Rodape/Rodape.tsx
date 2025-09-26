export default function Rodape() {
  return (
    <footer className="
      w-full
      bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500
      text-white
      flex flex-col items-center justify-center
      py-6
      px-4
      shadow-inner
      border-t border-white/20
      rounded-t-3xl
    ">
      <div className="flex items-center gap-2 mb-2">
        <img
          src="/src/img/logo-branca-reabilita-sem-fundo.png"
          alt="Logo Reabilita+"
          className="h-8"
        />
        <span className="font-bold text-lg tracking-wide">Reabilita+</span>
      </div>
      <p className="text-sm text-white/80">
        &copy; Todos os direitos reservados - 2025. Meu App
      </p>
      <div className="mt-2 flex gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/img/github-icon.png"
            alt="GitHub"
            className="h-6 hover:scale-110 transition"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/img/insta-icon.png"
            alt="Instagram"
            className="h-6 hover:scale-110 transition"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/img/linkedin-icon.png"
            alt="LinkedIn"
            className="h-6 hover:scale-110 transition"
          />
        </a>
      </div>
    </footer>
  );
}
