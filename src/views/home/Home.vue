<template>
  <home-carousel :films="films" />
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import HomeCarousel from "./components/HomeCarousel.vue";
import { useStore } from "vuex";

const store = useStore();
const films = computed(() => store.getters["cinema/filteredFilmsByRating"]);

onMounted(async () => {
  await store.dispatch("cinema/fetchFilms");
});
</script>
