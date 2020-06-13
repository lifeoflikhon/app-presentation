function footerEl() {
  return `<footer>
  <div class="container text-light">
    <div class="row top">
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5><span class="underliner">Milu</span></h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5>Quick Links</h5>
            <ul class="list-group">
              <li class="list-group-item">
                <i class="lni lni-chevron-right-circle"></i> About Us
              </li>
              <li class="list-group-item">
                <i class="lni lni-chevron-right-circle"></i> FAQ
              </li>
              <li class="list-group-item">
                <i class="lni lni-chevron-right-circle"></i> Blog
              </li>
              <li class="list-group-item">
                <i class="lni lni-chevron-right-circle"></i> Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5>Last Tweet</h5>
            <div class="row">
              <div class="col-2"><i class="lni lni-twitter"></i></div>
              <div class="col-10">
                <p class="text-muted">About 2 Minutes Ago</p>
                <p>
                  New Theme Available! Dedicated to Print-On-Demand
                  E-Commerce: 'Staaw' Available here:
                  https://t.co/5B8L5lyacH https://t.co/xljXItwbgC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5>Download Our App</h5>
            <p>Available on Google Play and App Store</p>
            <div class="row">
              <img
                src="./../../img/app-store-logo.png"
                alt=""
                class="col-12 w-50"
              /><img
                src="./../../img/play-store-logo.png"
                alt=""
                class="col-12 w-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row bottom mt-5 mx-4">
      <p class="col-md-6 col-sm-12">
        © Copyright WolfThemes
      </p>
      <div class="col-md-6 col-sm-12">
        <div class="icons">
          <i
            class="lni lni-facebook rounded-circle bg-light text-dark p-1"
          ></i>
          <i
            class="lni lni-twitter rounded-circle bg-light text-dark mx-10 p-1"
          ></i>
          <i
            class="lni lni-instagram rounded-circle bg-light text-dark p-1"
          ></i>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}

export function footer(id) {
  document.getElementById(id).innerHTML = footerEl();
}
