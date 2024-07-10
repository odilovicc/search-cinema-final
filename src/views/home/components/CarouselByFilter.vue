<template>
  <div class="h-max flex justify-center items-center">
    <swiper
      :pagination="{ clickable: true }"
      :space-between="50"
      :slides-per-view="5"
      class="h-full my-auto"
    >
      <swiper-slide v-for="movie in films" :key="movie.id">
        <film-card :movie="movie" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import type { Film } from "@/types";
import { Swiper, SwiperSlide } from "swiper/vue";

defineProps<{
  films: Film[];
}>();
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
</style>
