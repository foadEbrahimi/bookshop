let Btnclose = document.getElementById("btn-close");
let BtnShow = document.getElementById("btn-show");
let NavbarInside = document.getElementById("navbar-inside");

BtnShow.addEventListener("click", function () {
  NavbarInside.classList.add("show-nav-side");
});
Btnclose.addEventListener("click", function () {
  NavbarInside.classList.remove("show-nav-side");
});
