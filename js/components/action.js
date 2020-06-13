function actionEl() {
  return `<div class="container my-5">
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-5">
      <div class="card">
        <div class="card-body">
          <h1>
            Don't just take Our Word for it, see what it in
            <span class="underliner"
              >Action</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            class="btn btn-warning rounded-pill py-2 px-4 text-light"
            >Learn More</a
          >
        </div>
      </div>
    </div>
    <div
      class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-5 align-self-center"
    >
      <a href="#">
        <video
          src="./img/short-video.mp4"
          autoplay
          loop
          muted
          class="w-100"
        ></video>
      </a>
    </div>
  </div>
</div>`;
}

export function action() {
  const action = document.getElementById("action");
  action.innerHTML = actionEl();
}
