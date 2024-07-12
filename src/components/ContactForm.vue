<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Fale conosco
        </h6>
        <h1 class="mb-5">Estamos aqui para você!</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <h5>Olá!</h5>
          <p class="mb-4">
            Estamos aqui para ajudar! Clique nos botões abaixo para falar
            diretamente conosco pelo WhatsApp. Nossa equipe está pronta para
            fornecer informações detalhadas sobre nossos cursos, orientação
            personalizada e qualquer suporte que você precise. Não hesite em
            entrar em contato!
          </p>
          <div class="d-flex align-items-center mb-3">
            <div
              class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style="width: 50px; height: 50px"
            >
              <i class="fa fa-map-marker-alt text-white"></i>
            </div>
            <div class="ms-3">
              <h5 class="text-primary">Escritório</h5>
              <p class="mb-0">Av. Leopoldino de Oliveira, 1833. Uberaba-MG</p>
            </div>
          </div>
          <div class="d-flex align-items-center mb-3">
            <div
              class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style="width: 50px; height: 50px"
            >
              <i class="fa fa-phone-alt text-white"></i>
            </div>
            <div class="ms-3">
              <h5 class="text-primary">Contato</h5>
              <p class="mb-0">(34) 99915-6624</p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style="width: 50px; height: 50px"
            >
              <i class="fa fa-envelope-open text-white"></i>
            </div>
            <div class="ms-3">
              <h5 class="text-primary">Email</h5>
              <p class="mb-0">oi@delfoseducacional.edu.br</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <h5>&nbsp;</h5>
          <a
            class="whatsapp-btn"
            href="https://api.whatsapp.com/send?phone=55999999999&text=Falar com setor específico"
            ><div>Ainda não sou aluno</div>
            <i class="fab fa-whatsapp"></i>
          </a>
          <a
            class="whatsapp-btn"
            href="https://api.whatsapp.com/send?phone=55999999999&text=Falar com setor específico"
            ><div>Financeiro</div>
            <i class="fab fa-whatsapp"></i>
          </a>
          <a
            class="whatsapp-btn"
            href="https://api.whatsapp.com/send?phone=55999999999&text=Falar com setor específico"
            ><div>Suporte acadêmico</div>
            <i class="fab fa-whatsapp"></i
          ></a>
          <a
            class="whatsapp-btn"
            href="https://api.whatsapp.com/send?phone=55999999999&text=Falar com setor específico"
            ><div>Administrativo</div>
            <i class="fab fa-whatsapp"></i
          ></a>
          <a
            class="whatsapp-btn"
            href="https://api.whatsapp.com/send?phone=55999999999&text=Falar com setor específico"
            ><div>Dúvidas gerais</div>
            <i class="fab fa-whatsapp"></i
          ></a>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <iframe
            class="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.0270744638956!2d-47.92285532392407!3d-19.754004281595165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bacfd8604eae4d%3A0x56733d5fa42e3d03!2sAv.%20Leopoldino%20de%20Oliveira%2C%201833%20-%20Estados%20Unidos%2C%20Uberaba%20-%20MG%2C%2038081-040!5e0!3m2!1spt-BR!2sbr!4v1720740018140!5m2!1spt-BR!2sbr"
            frameborder="0"
            style="min-height: 300px; border: 0"
            allowfullscreen="false"
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.whatsapp-btn {
  background-color: #25d366;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  display: block;
  color: white;
  position: relative;
  overflow: hidden;
}

.whatsapp-btn i {
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 80px;
  opacity: 0.6;
}
</style>
