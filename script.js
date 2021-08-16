
let toggle = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let userImage = document.querySelector(".user");

toggle.addEventListener("click", () => {
  userImage.classList.toggle("fade");
});

function toggleMenu() {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}
