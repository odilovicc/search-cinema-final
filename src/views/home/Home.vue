<template>
  <home-carousel v-memo="[films]" :films="films" />
  <by-category-buttons/>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import { shuffle } from "@/utils/shuffle";
import ByCategoryButtons from "./components/ByCategoryButtons.vue";

const store = useStore();
const films = computed(() => shuffle(store.getters["cinema/filteredFilmsByRating"]));

const HomeCarousel = defineAsyncComponent({
  loader: () => import("./components/HomeCarousel.vue"),
  delay: 200,
});
</script>

<!-- TODO: Add skeleton to carousel -->