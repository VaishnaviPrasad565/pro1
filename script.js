// Selecting elements from the DOM
const closeIcon = document.querySelector(".close");
const menuIcon = document.querySelector(".ham");
const menu = document.querySelector(".menu");

// Event listener for closing the menu
closeIcon.addEventListener("click", () => {
  menu.style.visibility = "hidden"; // Hides the menu
  menu.style.opacity = "0"; // Smooth transition for hiding the menu
});

// Event listener for opening the menu
menuIcon.addEventListener("click", () => {
  menu.style.visibility = "visible"; // Shows the menu
  menu.style.opacity = "1"; // Smooth transition for showing the menu
});
