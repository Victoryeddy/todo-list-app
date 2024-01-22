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
  <carousel :items-to-show="2.5" autoplay="3000" wrapAround="true" class="mt-6">
    <slide v-for="slide in pictures" :key="slide" class="shadow-lg" >
     <v-img :src="require(`../assets/${slide}`)" class="w-100 h-100"></v-img>
    </slide>

    <template #addons >
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

  data(){
    return{
      pictures:["IMG_20191204_125919_595.jpg","IMG_20200427_184049.jpg", "IMG_20200427_184052.jpg", "IMG_20200427_184055.jpg", "photo-1547930021-87cf2913d809.jpeg", "photo-1554412655-a39393b82e65.jpeg", "photo-1500087350143-69a9e170092a.jpeg"]
    }
  }
}
</script>

<style>

/* *{
  outline:1px solid green;
} */
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
} 

.carousel__track {
  transform-style: preserve-3d;
} 

.carousel__slide--sliding {
  transition: 0.5s;
} 

 .carousel__slide {
  opacity: 0.9;
  transform: rotateY(20deg) scale(0.9);
} 

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(5deg) scale(0.9);
}

 .carousel__slide--prev {
  opacity: 0.8;
  transform: rotateY(-10deg) scale(0.95);
}  

 .carousel__slide--next {
  opacity: 0.8;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
} 
</style>
