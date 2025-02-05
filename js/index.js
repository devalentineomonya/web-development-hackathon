const navbar = document.getElementById("navbar");
const navbarContainer = document.getElementById("navbarContainer");
const hamburger = document.getElementById("hamburger");
const closeButton = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  navbarContainer.classList.add("open");
  navbarContainer.classList.remove("closing");
});

closeButton.addEventListener("click", () => {
  navbarContainer.classList.add("closing");
  setTimeout(() => {
    navbarContainer.classList.remove("open", "closing");
  }, 600)
});
