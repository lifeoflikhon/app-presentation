export function footerEl() {
  return `<footer class="footer bg-dark py-5 text-white">
  <div class="container footer__container">
    <div class="row footer__row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <p class="footer__copyright">
          All Right Reserved 2016 © WolfThemes.
        </p>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="float-right list-inline">
          <a
            href="#"
            class="footer__social__link mx-2 bg-white rounded-circle p-3 text-dark text-center"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            class="footer__social__link mx-2 bg-white rounded-circle p-3 text-dark text-center"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            class="footer__social__link mx-2 bg-white rounded-circle p-3 text-dark text-center"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  </footer>`;
}

export function footer() {
  const footer = document.getElementById("footer");
  footer.innerHTML = footerEl();
}
