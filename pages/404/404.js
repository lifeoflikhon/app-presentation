const bigNav = document.getElementById("big-nav");
const bigNavItem = document.getElementById("big-nav-items");
const displaySection = document.querySelector(".display-section");
const navTog = document.querySelector(".navbar-toggler");
const smallNavItem = document.getElementById("small-nav-items");
const x = document.querySelector(".small-nav-items");
const h3 = document.createElement("h3");

h3.textContent = "X";
x.appendChild(h3);

function hideNSeek(element, cancelButton) {
  if (element.style.display == "") {
    element.style.display = "flex";
    cancelButton.addEventListener("click", () => {
      element.style.display = "";
      cancelButton.style.cursor = "default";
    });
  }
}

navTog.addEventListener("click", () => {
  hideNSeek(smallNavItem, h3);
});

bigNav.addEventListener("click", () => {
  hideNSeek(bigNavItem, displaySection);
});
