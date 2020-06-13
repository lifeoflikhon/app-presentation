function postsEl() {
  return `<div class="container text-light">
  <div class="row text-center my-5">
    <div class="col-12"><h1>Latest <span class="underliner">Posts</span></span></h1></div>
    <div class="col-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="row my-5">
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 my-3">
      <div class="card">
        <div class="card-img-top">
          <img src="./img/blog-1.jpg" alt="img" width="100%" />
        </div>
        <div class="card-body">
          <h3>Hello World</h3>
          <p class="small">April 29, 2019 · lifeoflikhon</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            iure voluptatem quae saepe. Corporis, sit. Nobis cupiditate
            minus aliquam expedita...
          </p>
          <a href="./blog/#" class="btn btn-dark text-uppercase"
            >Read More <i class="fas fa-angle-right"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 my-3">
      <div class="card">
        <div class="card-img-top">
          <img src="./img/blog-2.jpg" alt="img" width="100%" />
        </div>
        <div class="card-body">
          <h3>The Blue Night</h3>
          <p class="small">April 29, 2019 · lifeoflikhon</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            iure voluptatem quae saepe. Corporis, sit. Nobis cupiditate
            minus aliquam expedita...
          </p>
          <a href="./blog/#" class="btn btn-dark text-uppercase"
            >Read More <i class="fas fa-angle-right"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 my-3">
      <div class="card">
        <div class="card-img-top">
          <img src="./img/blog-3.jpg" alt="img" width="100%" />
        </div>
        <div class="card-body">
          <h3>Image</h3>
          <p class="small">April 29, 2019 · lifeoflikhon</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            iure voluptatem quae saepe. Corporis, sit. Nobis cupiditate
            minus aliquam expedita...
          </p>
          <a href="./blog/#" class="btn btn-dark text-uppercase"
            >Read More <i class="fas fa-angle-right"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <div class="row text-center">
    <div class="col-12">
      <a href="./blog/blog-posts.html" class="btn btn-dark text-uppercase"
        >View More Post <i class="fas fa-angle-right"></i
      ></a>
    </div>
  </div>
</div>`;
}

export function posts() {
  const posts = document.getElementById("posts");
  posts.innerHTML = postsEl();
}
