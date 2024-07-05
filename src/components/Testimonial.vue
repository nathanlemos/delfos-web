<template>
  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="text-center">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 class="mb-5">Our Students Say!</h1>
      </div>
      <carousel
        class="testimonial-carousel"
        :wrapAround="true"
        :itemsToShow="3"
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

const getImagePath = (imageName: string) => {
  console.log("Base", base);
  if (imageName.startsWith("http") || imageName.startsWith(base)) {
    return imageName;
  }
  return `${base}/${imageName}`;
};

const testimonials = ref([
  {
    clientName: "Client Name 1",
    profession: "Profession 1",
    image: getImagePath("/img/testimonial-1.jpg"),
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    clientName: "Client Name 2",
    profession: "Profession 2",
    image: getImagePath("/img/testimonial-2.jpg"),
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    clientName: "Client Name 3",
    profession: "Profession 3",
    image: getImagePath("/img/testimonial-3.jpg"),
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    clientName: "Client Name 4",
    profession: "Profession 4",
    image: getImagePath("/img/testimonial-4.jpg"),
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
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
