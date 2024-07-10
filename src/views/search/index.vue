<template>
  <section class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-5">Поиск</h1>
    <input-group>
      <input-text class="w-full" v-model="query" placeholder="Введите название фильма" @keyup.enter="search" />
      <Button icon="pi pi-search" @click="search" />
    </input-group>
  </section>
  <pre>
    {{ foundFilm }}
  </pre>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import { useStore } from 'vuex';

const query: Ref<String> = ref("")
const store = useStore()
const foundFilm = computed(() => store.state.cinema.foundFilm)

const search = async () => {
    console.log(query.value)
    store.dispatch("cinema/searchFilms", query.value)
}
</script>
