<template>
  <home-carousel v-memo="[films]" :films="films" />
  <by-category-buttons />

  <div class="flex flex-col gap-10">
    <h1 class="text-2xl font-bold container mx-auto">Лучшие</h1>
    <carousel-by-filter :films="films" />

    <h1 class="text-2xl font-bold container mx-auto">Новинки</h1>
    <carousel-by-filter :films="newFilms" />
  </div>

  <about-us v-once />
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted } from "vue";
import { useStore } from "vuex";
import ByCategoryButtons from "./components/ByCategoryButtons.vue";
import AboutUs from "@/components/AboutUs.vue";

const store = useStore();

const films = computed(() => store.getters["cinema/filteredFilmsByRating"]);
const newFilms = computed(() => store.getters["cinema/filteredFilmsByYear"]);
const popularFilms = computed(
  () => store.getters["cinema/filteredFilmsByPopularity"]
);

const HomeCarousel = defineAsyncComponent({
  loader: () => import("./components/HomeCarousel.vue"),
  delay: 200,
});
const CarouselByFilter = defineAsyncComponent({
  loader: () => import("./components/CarouselByFilter.vue"),
  delay: 200,
  loadingComponent: () => `<Skeleton width="full" height="20rem"/>`,
});

onMounted(() => {
  store.dispatch("cinema/fetchFilms")
})
</script>

<!-- TODO: Add skeleton to carousel -->, onMounted
