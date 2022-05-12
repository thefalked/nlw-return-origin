function toggleScrollNavBar() {
  const navbar = document.querySelector("#navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
}

function toggleBackToTopButton() {
  const backToTopButton = document.querySelector("#back-to-top-button");

  if (window.scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function onScroll() {
  toggleScrollNavBar();
  toggleBackToTopButton();
}

onScroll();

document.addEventListener("scroll", onScroll);

function toggleNavBar() {
  const body = document.querySelector("body");

  body.classList.toggle("menu-expanded");
}

const showNavBar = document.querySelectorAll(
  "#show-navbar, #hide-navbar, #navbar .menu a"
);

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
  #about-us,
  #about-us header,
  #about-us .content p,
  #about-us .content img,
  #contact,
  #contact header,
  #contact .content ul,
  #contact a,
  #contact img,
  #footer,
  #footer .logo,
  #footer p,
  #footer .social-links
`);
