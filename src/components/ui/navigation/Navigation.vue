<template>
  <menubar :model="links">
    <template #start>
      <router-link to="/" class="text-xl font-bold">
        Search<span class="text-[--p-primary-color]">Cinema</span>
      </router-link>
    </template>
    <template #item="{ item, props }">
      <router-link v-slot="{ href, navigate }" :to="item.to" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span class="">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
    <template #end>
      <Button
        text
        icon="pi pi-search"
        @click="
          router.push({
            name: 'search',
          })
        "
      />
    </template>
  </menubar>
</template>
<script setup lang="ts">
import { INavLinks } from "@/types";
import { useRouter } from "vue-router";

const router = useRouter();

const links: INavLinks[] = [
  {
    label: "Главная",
    to: "/",
  },
  {
    label: "Фильмы",
    to: "/films",
  },
  {
    label: "Сериалы",
    to: "/serials",
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
