<template>
  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="text-center">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Depoimentos
        </h6>
        <h1 class="mb-5">Histórias dos Nossos Alunos</h1>
      </div>
      <carousel
        class="testimonial-carousel"
        :wrapAround="true"
        :breakpoints="carouselBreakpoints"
      >
        <slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-item text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              :src="testimonial.image"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">{{ testimonial.clientName }}</h5>
            <p>{{ testimonial.profession }}</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">{{ testimonial.text }}</p>
            </div>
          </div>
        </slide>
        <template #addons="{ slidesCount }">
          <Navigation v-if="slidesCount > 1" />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
const base = import.meta.env.BASE_URL;

const carouselBreakpoints = {
  1200: {
    itemsToShow: 3,
  },
  800: {
    itemsToShow: 2,
  },
  600: {
    itemsToShow: 1,
  },
};

const getImagePath = (imageName: string) => {
  console.log("Base", base);
  if (imageName.startsWith("http") || imageName.startsWith(base)) {
    return imageName;
  }
  return `${base}/${imageName}`;
};

const testimonials = ref([
  {
    clientName: "Aluno da Costa 1",
    profession: "Enfermeiro 1",
    image: getImagePath("/img/testimonial-1.jpg"),
    text: "Os cursos aqui são realmente práticos e aplicáveis no dia a dia. Estou muito satisfeito com o aprendizado e suporte oferecido!",
  },
  {
    clientName: "Aluno da Costa 2",
    profession: "Enfermeiro 2",
    image: getImagePath("/img/testimonial-2.jpg"),
    text: "Os professores são muito qualificados e acessíveis. Aprendi muito e me sinto preparado para minha carreira graças aos cursos daqui.",
  },
  {
    clientName: "Aluno da Costa 3",
    profession: "Enfermeiro 3",
    image: getImagePath("/img/testimonial-3.jpg"),
    text: "A plataforma é fácil de usar e os materiais são excelentes. Com certeza recomendaria para quem busca aprender de forma eficiente e flexível.",
  },
  {
    clientName: "Aluno da Costa 4",
    profession: "Enfermeiro 4",
    image: getImagePath("/img/testimonial-4.jpg"),
    text: "O suporte ao aluno é excepcional. Sempre que precisei, fui prontamente atendido. Uma experiência de aprendizado realmente enriquecedora.",
  },
]);
</script>

<style scoped>
.carousel {
  display: flex;
  overflow: hidden;
}
.slide {
  flex: 0 0 auto;
}
</style>
