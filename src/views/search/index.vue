<template>
  <section class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-5">Поиск</h1>
    <input-group>
      <input-text
        :disabled="isLoading"
        class="w-full"
        v-model="query"
        placeholder="Введите название фильма"
        @keyup.enter="search"
      />
      <Button icon="pi pi-search" :loading="isLoading" @click="search" />
    </input-group>
  </section>
  <div class="flex gap-2 items-center flex-wrap container mx-auto">
    <template v-for="found in foundFilm.docs" :key="found.id">
      <film-card :movie="found" class="flex-auto w-1/6" />
    </template>
    <template v-if="typeof foundFilm === 'string'">
      <p>{{ foundFilm }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from "vue";
import { useStore } from "vuex";

const query: Ref<String> = ref("");
const store = useStore();
const foundFilm = computed(() => store.state.cinema.foundFilm);
const isLoading = computed(() => store.state.cinema.loading);

const search = async () => {
  try {
    store.dispatch("cinema/searchFilms", query.value);
  } catch (e) {
    console.error(e);
  } finally {
    query.value = "";
  }
};
</script>
