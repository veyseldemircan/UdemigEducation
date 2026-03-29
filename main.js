const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".nav-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
