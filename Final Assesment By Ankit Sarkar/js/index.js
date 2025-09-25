let navbar = document.getElementById("navbar");

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

let toggler = document.querySelector(".navbar-toggler");

function changeNavbarBg() {
  if (navbar.classList.contains("navbar-open")) {
    navbar.classList.remove("navbar-open");
  } else {
    navbar.classList.add("navbar-open");
  }
}

toggler.addEventListener("click", changeNavbarBg);