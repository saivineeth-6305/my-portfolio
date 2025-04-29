let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    // Show header when at the top of the page
    header.classList.remove("hidden");
  } else {
    // Hide header when not at the top
    header.classList.add("hidden");
  }
});
