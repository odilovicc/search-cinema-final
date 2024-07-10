<template>
  <div class="container mx-auto py-5">
    <h1 class="text-2xl font-bold">Фильмы</h1>
    <div class="my-8 flex items-center gap-5">
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Жанры"
        class="w-full md:w-56"
      />
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Рейтинг"
        class="w-full md:w-56"
      />
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Годы выхода"
        class="w-full md:w-56"
      />
    </div>

    <div class="flex flex-wrap gap-5 w-full" v-memo="[filteredFilms]" ref="filmContainer">
      <film-card
        v-for="movie in filteredFilms"
        :key="movie.id"
        :movie="movie"
        class="w-1/6 flex-auto"
      />
    </div>

    <div class="mt-12">
      <Paginator :rows="10" :totalRecords="120"></Paginator>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useInfiniteScroll } from "@vueuse/core";


const store = useStore();
const route = useRoute();
const router = useRouter();

const filmContainer = ref<HTMLElement | null>(null)
const selectedCity = ref();

const filteredFilms = computed(() => store.getters["cinema/filteredFilms"]);

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

onBeforeMount(() => {
  if (!route.query.page) {
    router.push({
      name: "film-list",
      query: {
        page: 1,
      },
    });
  }
});

onMounted(() => {
  console.log(store.state.cinema.response);
});
</script>

<!-- 
      TODO: Add genres to select
  -->
