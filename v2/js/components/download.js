function downloadEl() {
  return `<div class="container">
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <h3 class="text-white font-weight-bolder">
        Start Creating your Website Now with Milu!
      </h3>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="row text-center clearfix">
        <img
          src="./img/app-store-logo.png"
          alt=""
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 img-fluid"
        />
        <img
          src="./img/play-store-logo.png"
          alt=""
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 img-fluid"
        />
      </div>
    </div>
  </div>
</div>`;
}

export function download() {
  const download = document.getElementById("download");
  download.innerHTML = downloadEl();
}
