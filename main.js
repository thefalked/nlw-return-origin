function onScroll() {
  const nav = document.querySelector("#navbar");

  if (window.scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

onScroll();

document.addEventListener("scroll", onScroll);

const showNavBar = document.querySelectorAll(
  "#show-navbar, #hide-navbar, #navbar .menu a"
);

function toggleNavBar() {
  const body = document.querySelector("body");

  body.classList.toggle("menu-expanded");
}

showNavBar.forEach((element) => {
  element.addEventListener("click", toggleNavBar);
});

ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about-us header,
  #about-us .content p,
  #about-us .content img
`);
