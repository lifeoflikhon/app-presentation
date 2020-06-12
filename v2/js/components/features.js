function featuresEl() {
  return `<div class="top">
  <div class="col-12 text-center text-light">
    <h1>
      <span class="underliner"
        >Unique<span class="underline"></span
      ></span>
      Features
    </h1>
  </div>
  <div class="col-12 text-center text-light">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsa
      quas doloremque earum quae laborum.
    </p>
  </div>
</div>
<div class="bottom">
  <div class="container">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-body">
            <div class="text-center text-warning display-4">
              <i class="lni lni-dashboard"></i>
            </div>
            <div class="text-center text-light">
              <h3>Live Data</h3>
            </div>
            <div class="text-center text-light">
              <p>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-body">
            <div class="text-center text-warning display-4">
              <i class="lni lni-pulse"></i>
            </div>
            <div class="text-center text-light">
              <h3>Diagonstic</h3>
            </div>
            <div class="text-center text-light">
              <p>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-body">
            <div class="text-center text-warning display-4">
              <i class="lni lni-invention"></i>
            </div>
            <div class="text-center text-light">
              <h3>Information</h3>
            </div>
            <div class="text-center text-light">
              <p>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-body">
            <div class="text-center text-warning display-4">
              <i class="lni lni-gift"></i>
            </div>
            <div class="text-center text-light">
              <h3>Surprise</h3>
            </div>
            <div class="text-center text-light">
              <p>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-body">
            <div class="text-center text-warning display-4">
              <i class="lni lni-code"></i>
            </div>
            <div class="text-center text-light">
              <h3>Code</h3>
            </div>
            <div class="text-center text-light">
              <p>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-body">
            <div class="text-center text-warning display-4">
              <i class="lni lni-slideshare"></i>
            </div>
            <div class="text-center text-light">
              <h3>Share</h3>
            </div>
            <div class="text-center text-light">
              <p>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

export function features(id) {
  document.getElementById(id).innerHTML = featuresEl();
}
