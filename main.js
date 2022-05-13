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

function toggleClassOnNavLink() {
  const menus = Array.from(
    document.querySelectorAll("#navbar .menu ul:first-child li a")
  ).map((menu) => menu.getAttribute("href"));

  const sectionElements = document.querySelectorAll(`${menus.join(", ")}`);
  const navbarHeight = document.querySelector("#navbar").offsetHeight;

  sectionElements.forEach((sectionElement, index) => {
    const sectionTop = sectionElement.offsetTop;
    const sectionBottom = sectionTop + sectionElement.offsetHeight;

    const menu = menus[index];

    const screenShowsMoreSection = window.scrollY > sectionTop - navbarHeight;
    const screenShowsLessSection =
      window.scrollY < sectionBottom - navbarHeight;

    if (screenShowsMoreSection && screenShowsLessSection) {
      document
        .querySelector(`#navbar .menu a[href="${menu}"]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`#navbar .menu a[href="${menu}"]`)
        .classList.remove("active");
    }
  });
}

function onScroll() {
  toggleScrollNavBar();
  toggleBackToTopButton();
  toggleClassOnNavLink();
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
  if (window.matchMedia("(max-width: 1024px)").matches) {
    element.addEventListener("click", toggleNavBar);
  }
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
