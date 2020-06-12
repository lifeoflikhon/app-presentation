function counterEl() {
  return `<div class="container text-light">
  <div class="row">
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
      <div class="card">
        <div class="card-body font-weight-bolder">
          <div class="row">
            <div class="col-12"><h1 data-target="1000">0</h1></div>
            <div class="col-12"><p>Total Downloads</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
      <div class="card">
        <div class="card-body font-weight-bolder">
          <div class="row">
            <div class="col-12"><h1 data-target="1000">0</h1></div>
            <div class="col-12"><p>Positive Reviews</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
      <div class="card">
        <div class="card-body font-weight-bolder">
          <div class="row">
            <div class="col-12"><h1 data-target="1000">0</h1></div>
            <div class="col-12"><p>Daily Visitors</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
      <div class="card">
        <div class="card-body font-weight-bolder">
          <div class="row">
            <div class="col-12"><h1 data-target="1000">0</h1></div>
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
}
