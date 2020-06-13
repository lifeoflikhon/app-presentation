function meEl() {
  return `<div class="container">
  <div class="row align-items-center justify-content-center">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <img src="./img/1.jpg" alt="phone" />
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="card">
        <div class="card-body">
          <h1>
            <span class="underliner"
              >About</span
            > Me
          </h1>
          <p>
          Proin faucibus arcu quis ante. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nulla sit amet est. Aenean vulputate eleifend tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.
          </p>
          <p>
          Quisque ut nisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ullamcorper ultricies nisi. Nunc nec neque. Duis leo.          </p>
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
            <li class="list-group-item">
              <i class="fas fa-hand-point-right mr-2 text-warning"></i>
              Augue at pellentesque
            </li>
          </ul>
          <a
            href="#"
            class="btn btn-info rounded-circle text-light"
            ><i class="lni lni-facebook"></i></a
          >
          <a
            href="#"
            class="btn btn-info rounded-circle text-light mx-2"
            ><i class="lni lni-twitter"></i></a
          >
          <a
            href="#"
            class="btn btn-info rounded-circle text-light"
            ><i class="lni lni-instagram"></i></a
          >
        </div>
      </div>
    </div>
  </div>
</div>`;
}

export function me(id) {
  document.getElementById(id).innerHTML = meEl();
}
