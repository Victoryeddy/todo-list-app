<!-- <template>
<vueper-slides
  class="shadow"
  :visible-slides="3"
  :slide-ratio="1 / 4"
  :dragging-distance="70"
  >
  <template v-slot:arrow-left>
    <button style="position: relative; left:5rem;">Left Arrow</button>
 </template>
 <template v-slot:arrow-right>
    <button>Right Arrow</button>
 </template>
  <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" class="border-slate-500 shadow-lg" />
</vueper-slides>

<vueper-slides
  class="no-shadow"
  :visible-slides="3"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />
</vueper-slides>
</template>
<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
</script>
<style>

/* *{
    outline:2px solid green;
} */
</style> -->


<template>
  <carousel :items-to-show="2.5" >
    <slide v-for="slide in 10" :key="slide" class="shadow-lg h-64" autoplay>
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <!-- <pagination /> -->
    </template>
  </carousel>


 
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<style>
.carousel__slide {
  padding: 5px;
}

/* .carousel__viewport {
  perspective: 2000px;
} */

/* .carousel__track {
  transform-style: preserve-3d;
} */

/* .carousel__slide--sliding {
  transition: 0.5s;
} */

/* .carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
} */

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(5deg) scale(0.9);
}

/* .carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}  */

/* .carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
} */
</style>
