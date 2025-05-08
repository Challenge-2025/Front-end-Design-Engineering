const btnAbrirMenu = document.querySelector(".btn-menu-sanduiche");
const menu = document.querySelector(".menu");
const btnFecharMenu = document.querySelector(".btn-fechar-menu");

btnAbrirMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  void menu.offsetWidth;
  menu.classList.add("mostrando");
});

btnFecharMenu.addEventListener("click", () => {
  menu.classList.remove("mostrando");
  setTimeout(() => {
    menu.style.display = "none";
  }, 400);
});
