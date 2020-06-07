const bigNav = document.getElementById("big-nav");
const bigNavItem = document.getElementById("big-nav-items");
const displaySection = document.querySelector(".display-section");

bigNav.addEventListener("click", () => {
  if (bigNavItem.style.display == "") {
    bigNavItem.style.display = "flex";
    displaySection.style.cursor = "url('./../img/delete-sign.png'), auto";
    displaySection.addEventListener("click", () => {
      bigNavItem.style.display = "";
      displaySection.style.cursor = "default";
    });
  }
});

// counter
const counters = document.querySelectorAll(".counter_h1");
const speed = 10;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    console.log(count);
    if (count < target) {
      counter.innerText = `${(count + inc).toFixed(0)}`;
      setTimeout(updateCount, 100);
    } else {
      counter.innerText = `${target.toFixed(0)}K+`;
    }
  };
  updateCount();
});

// img animation
