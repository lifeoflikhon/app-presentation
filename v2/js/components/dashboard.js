function dashboardEl() {
  return `<div class="container text-light">
        <div class="row">
          <div
            class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-0 dash__img px-5"
          >
            <div class="w-100">
            <img src="./img/phone-1.png" alt="phone-1" class="img-1" />
            <img src="./img/phone-2.png" alt="phone-2" class="img-2" />
            </div>
          </div>
          <div
            class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-1 dash__text px-5"
          >
            <div class="card my-auto h-100">
              <div
                class="card-body d-flex align-items-center justify-content-center flex-column"
              >
                <h1>
                  Transform Your Phone Into a
                  <span class="underliner">Dashboard</span>
                </h1>
                <p>
                  Connect your phone via bluetooth to display instant real life
                  data on your screen.
                </p>
                <div class="row imgs">
                  <img src="./img/app-store-logo.png" alt="" class="col-6" />
                  <img src="./img/play-store-logo.png" alt="" class="col-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
}

export function dashboard(id) {
  document.getElementById(id).innerHTML = dashboardEl();
}
