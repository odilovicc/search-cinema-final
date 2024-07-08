<template>
  <div class="h-[50rem] flex justify-center items-center">
    <swiper
      :pagination="{ clickable: true }"
      :space-between="50"
      :slides-per-view="3"
      class="h-full my-auto"
    >
      <swiper-slide
        v-for="movie in films"
        :key="movie.id"
        :style="{ backgroundImage: `url(${movie.poster.previewUrl})` }"
        class="rounded-xl"
      >
        <router-link
          class="absolute top-0 left-0 w-full h-full"
          :to="{ name: 'film', params: { id: movie.id } }"
        />
        <div class="px-4 py-2 w-full">
          <h1 class="text-xl mb-2 font-bold">
            {{ movie.name || movie.alternativeName }}
          </h1>
          <div class="flex items-center gap-2">
            <tag
              :severity="movie.rating.imdb > 5 ? 'success' : 'danger'"
              :value="movie.rating.imdb"
            />
            <p class="text-sm">{{ movie.year }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Film } from "@/types";

defineProps<{
  films: Film[];
}>();
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  height: 100%;
  position: relative;
}
</style>
