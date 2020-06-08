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

// counter
const counters = document.querySelectorAll(".counter_h1");
const speed = 10;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = `${(count + inc).toFixed(0)}`;
      setTimeout(updateCount, 100);
    } else {
      counter.innerText = `${target.toFixed(0)}K+`;
    }
  };
  updateCount();
});

// misc
const displaySectionHeading = document.getElementById("displaySectionHeading");
displaySectionHeading.style.textTransform = "capitalize";
