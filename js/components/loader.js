function loaderEl() {
  return `
  <div class="cube-wrapper">
    <div class="cube-folding">
      <span class="leaf1"></span>
      <span class="leaf2"></span>
      <span class="leaf3"></span>
      <span class="leaf4"></span>
    </div>
  </div>`;
}

export function loader(id) {
  document.getElementById(id).innerHTML = loaderEl();
  const backgroundEl = document.getElementById("background");

  setInterval(() => {
    document.getElementById(id).style.display = "none";
    backgroundEl.style.height = "0";
  }, 4000);
}
