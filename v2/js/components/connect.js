function connectEl() {
  return `<div class="container">
  <div class="row align-items-center justify-content-center">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <img src="./img/phone-fly.png" alt="phone" />
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="card">
        <div class="card-body">
          <h1>
            <span class="underliner"
              >Connect<span class="underline"></span></span
            >Your Phone in Just One Click!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="list-group">
            <li class="list-group-item">
              <i class="fas fa-hand-point-right mr-2 text-warning"></i>
              Quisque id odio
            </li>
            <li class="list-group-item">
              <i class="fas fa-hand-point-right mr-2 text-warning"></i>
              Nunc egestas
            </li>
            <li class="list-group-item">
              <i class="fas fa-hand-point-right mr-2 text-warning"></i>
              Augue at pellentesque
            </li>
          </ul>
          <a
            href="#"
            class="btn btn-warning rounded-pill text-light px-4 py-2"
            >Learn More</a
          >
        </div>
      </div>
    </div>
  </div>
</div>`;
}

export function connect(id) {
  document.getElementById(id).innerHTML = connectEl();
}
