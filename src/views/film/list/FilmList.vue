<template>
  <div class="container mx-auto py-5">
    <h1 class="text-2xl font-bold mb-8">Фильмы</h1>
    <div class="flex flex-wrap gap-5 w-full" ref="filmContainer">
      <template v-if="loading">
        <Skeleton
          v-for="n in 10"
          :key="n"
          class="w-1/6 h-[20rem] flex-auto"
        ></Skeleton>
      </template>
      <template v-else>
        <film-card
          v-for="movie in filteredFilms"
          :key="movie.id"
          :movie="movie"
          class="w-1/6 flex-auto"
          v-memo="[filteredFilms, movie]"
        />
      </template>
    </div>

    <div class="mt-12">
      <Paginator
        :rows="10"
        :totalRecords="response.pages"
        :first="firstRow"
        @page="fetchByPage"
      ></Paginator>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Skeleton from "primevue/skeleton";

const store = useStore();
const route = useRoute();
const router = useRouter();

const loading = ref(false);
const firstRow = ref(0);

const filteredFilms = computed(() => store.getters["cinema/filteredFilms"]);
const response = computed(() => store.state.cinema.response);

const fetchByPage = async (event: { page: number }) => {
  loading.value = true;
  await store.dispatch("cinema/getFilmsByPage", event.page + 1);
  router.push({
    name: "film-list",
    query: {
      page: event.page + 1,
    },
  });
  firstRow.value = event.page * 10;
  loading.value = false;
};
</script>

<!-- 
      TODO: Add genres to select
  -->
