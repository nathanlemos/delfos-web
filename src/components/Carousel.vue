<script setup lang="ts">
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
const base = import.meta.env.BASE_URL;

const getImagePath = (imageName: string) => {
  console.log("Base", base);
  if (imageName.startsWith("http") || imageName.startsWith(base)) {
    return imageName;
  }
  return `${base}/${imageName}`;
};

const items = ref([
  {
    image: getImagePath("/img/slide_ed_fisica.jpg"),
    alt: "img1",
    title: "Transforme vidas através da educação física",
    heading: "DOCÊNCIA EM EDUCAÇÃO FÍSICA",
    description:
      "Prepare-se para inspirar e formar a próxima geração de profissionais de educação física. Aprenda as melhores práticas pedagógicas, técnicas de ensino e desenvolvimento de currículo para criar aulas envolventes e eficazes.",
    readMoreLink: "",
    joinNowLink: "",
  },
  {
    image: getImagePath("/img/slide_nutricao_esporte.jpg"),
    alt: "img2",
    title: "Maximize o potencial dos atletas com a nutrição certa",
    heading: "NUTRIÇÃO APLICADA AO ESPORTE",
    description:
      "Descubra como a nutrição pode potencializar o desempenho esportivo e promover a saúde dos atletas. Nosso curso oferece conhecimentos essenciais para personalizar dietas e otimizar resultados, com foco em estratégias nutricionais baseadas em evidências científicas.",
    readMoreLink: "",
    joinNowLink: "",
  },
]);

const responsiveOptions = ref({
  0: {
    items: 1,
  },
  600: {
    items: 3,
  },
  1000: {
    items: 5,
  },
});
</script>

<style scoped>
.owl-carousel-item {
  position: relative;
}

.owl-carousel-item img {
  width: 100%;
  height: auto;
}
</style>

<template>
  <div class="container-fluid p-0 mb-5">
    <carousel
      :loop="true"
      :nav="true"
      :responsive="responsiveOptions"
      :wrapAround="true"
    >
      <template #slides>
        <slide
          class="owl-carousel-item position-relative"
          v-for="(item, index) in items"
          :key="index"
        >
          <img class="img-fluid" :src="item.image" :alt="item.alt" />
          <div
            class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style="background: rgba(24, 29, 56, 0.7)"
          >
            <div class="container text-left">
              <div class="row justify-content-start">
                <div class="col-sm-10 col-lg-8">
                  <h5
                    class="text-primary text-uppercase mb-3 animated slideInDown"
                  >
                    {{ item.title }}
                  </h5>
                  <h1 class="display-3 text-white animated slideInDown">
                    {{ item.heading }}
                  </h1>
                  <p class="fs-5 text-white mb-4 pb-2">
                    {{ item.description }}
                  </p>
                  <a
                    :href="item.readMoreLink"
                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >Quero me inscrever</a
                  >
                  <a
                    :href="item.joinNowLink"
                    class="btn btn-light py-md-3 px-md-5 animated slideInRight"
                    >Me conte mais</a
                  >
                </div>
              </div>
            </div>
          </div>
        </slide>
      </template>
      <template #addons="{ slidesCount }">
        <Navigation v-if="slidesCount > 1" />
      </template>
    </carousel>
  </div>
</template>
<style>
.carousel {
  text-align: left;
}

.carousel__prev,
.carousel__next {
  color: white;
}

@media (max-width: 768px) {
  .owl-carousel-item {
    position: relative;
    min-height: 500px;
  }

  .owl-carousel-item img {
    position: absolute;
    width: 100%;
    height: 100% !important;
    object-fit: cover;
  }

  .owl-carousel-item h5,
  .owl-carousel-item p {
    font-size: 16px !important;
  }

  .owl-carousel-item h1 {
    font-size: 26px;
  }

  .carousel__prev,
  .carousel__next {
    top: 92%;
  }

  .carousel__prev {
    right: 80px;
    left: auto;
  }
}
</style>
