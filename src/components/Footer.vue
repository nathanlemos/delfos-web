<template>
  <a
    href="https://api.whatsapp.com/send?phone=55999999999&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
    class="float"
    target="_blank"
  >
    <i class="fab fa-whatsapp my-float"></i>
  </a>
  <div
    class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Mais</h4>
          <a class="btn btn-link" href="">Quem somos</a>
          <a class="btn btn-link" href="">Fale conosco</a>
          <a class="btn btn-link" href="">Políticas de privacidade</a>
          <a class="btn btn-link" href="">Termos e condições</a>
          <a class="btn btn-link" href="">Ajuda</a>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Contato</h4>
          <p class="mb-2">
            <i class="fa fa-map-marker-alt me-3"></i>Av. Leopoldino de Oliveira,
            1833. Uberaba-MG
          </p>
          <p class="mb-2">
            <i class="fa fa-phone-alt me-3"></i>(34) 99915-6624
          </p>
          <p class="mb-2">
            <i class="fa fa-envelope me-3"></i>oi@delfoseducacional.edu.br
          </p>
          <div class="d-flex pt-2">
            <a class="btn btn-outline-light btn-social" href=""
              ><i class="fab fa-twitter"></i
            ></a>
            <a class="btn btn-outline-light btn-social" href=""
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a class="btn btn-outline-light btn-social" href=""
              ><i class="fab fa-youtube"></i
            ></a>
            <a class="btn btn-outline-light btn-social" href=""
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Instagram</h4>
          <div class="row g-2 pt-2">
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="/img/course-1.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="/img/course-2.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="/img/course-3.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="/img/course-2.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="/img/course-3.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="/img/course-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Newsletter</h4>
          <p>Receba nossas novidades em primeira mão</p>
          <div class="position-relative mx-auto" style="max-width: 400px">
            <input
              class="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="E-mail"
            />
            <button
              type="button"
              class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#">Delfos Educacional</a>,
            Todos os direitos reservados.
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              <a href="">Início</a>
              <a href="">Cookies</a>
              <a href="">Ajuda</a>
              <a href="">Perguntas frequentes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}

.my-float {
  margin-top: 16px;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
