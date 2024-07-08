<template>
  <menubar :model="links">
    <template #start>
      <h1 class="text-xl font-bold">
        Search<span class="text-[--p-primary-color]">Cinema</span>
      </h1>
    </template>
    <template #end>
      <Button text icon="pi pi-search" @click="$emit('click:search')" />
    </template>
  </menubar>
</template>
<script setup lang="ts">
import { INavLinks } from "@/types";

const links: INavLinks[] = [
  {
    label: "Главная",
    url: "/",
  },
  {
    label: "Фильмы",
    url: "/films",
  },
  {
    label: "Сериалы",
    url: "/serials",
  },
];
</script>
<style scoped>
.p-menubar.p-component {
  border: none !important;
  background: none !important;
  padding: 0;
}
.p-menubar-root-list {
  margin: 0 auto !important;
}
</style>
