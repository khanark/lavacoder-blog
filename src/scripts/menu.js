document.querySelector(".hamburger").addEventListener("click", () => {
  console.log("Button is clicked");
  document.querySelector(".nav-links").classList.toggle("expanded");
});
