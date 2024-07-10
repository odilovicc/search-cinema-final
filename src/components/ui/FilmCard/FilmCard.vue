<template>
  <router-link :to="{ name: 'film', params: { id: movie.id } }">
    <div
      class="w-full h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 relative card"
      :style="{ backgroundImage: `url(${movie.poster.url})` }"
    >
      <div
        class="flex justify-between flex-col p-5 absolute w-full h-full bg-[rgba(0,0,0,0.8)] overlay"
      >
        <Tag :value="movie.rating.imdb" class="w-max" />
        <div>
          <h1 class="text-xl text-white font-bold mb-4">
            {{ movie.name || movie.alternativeName }}
          </h1>
          <span>{{ movie.year }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Film } from "@/types";

defineProps<{
  movie: Film;
}>();
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
}
.card .overlay {
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}
.card:hover .overlay {
  opacity: 1;
}
.card:hover {
  transform: scale(1.05);
}
</style>
