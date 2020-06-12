function counterEl() {
  return `<div class="container text-light">
  <div class="row">
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
      <div class="card">
        <div class="card-body font-weight-bolder">
          <div class="row">
            <div class="col-12"><h1 data-target="120" class="c">0</h1></div>
            <div class="col-12"><p>Total Downloads</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
      <div class="card">
        <div class="card-body font-weight-bolder">
          <div class="row">
            <div class="col-12"><h1 data-target="11" class="c">0</h1></div>
            <div class="col-12"><p>Positive Reviews</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
      <div class="card">
        <div class="card-body font-weight-bolder">
          <div class="row">
            <div class="col-12"><h1 data-target="54" class="c">0</h1></div>
            <div class="col-12"><p>Daily Visitors</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
      <div class="card">
        <div class="card-body font-weight-bolder">
          <div class="row">
            <div class="col-12"><h1 data-target="0.2">0.02%</h1></div>
            <div class="col-12"><p>Uninstallation Rate</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

export function counter(id) {
  document.getElementById(id).innerHTML = counterEl();

  // counter
  const counters = document.querySelectorAll(".c");
  const speed = 20;

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
}
