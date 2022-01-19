let menu = document.querySelector(".nav__menu");
menu.addEventListener("click", handleMenu);

function handleMenu() {
  let menu = document.querySelector(".nav__content");
  let hero = document.querySelector(".hero");
  menu.classList.toggle("close");
  hero.classList.toggle("close");
}

window.addEventListener("resize", resizeMenu);

function resizeMenu() {
  if (window.innerWidth < 992) {
    console.log(window.innerWidth);
    let menu = document.querySelector(".nav__content");
    let hero = document.querySelector(".hero");
    menu.classList.remove("close");
    hero.classList.remove("close");
  }
}
