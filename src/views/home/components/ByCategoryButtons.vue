<template>
  <div class="container mx-auto py-10">
    <div class="flex items-center justify-center gap-4">
      <router-link
        v-for="category in categories"
        :key="category.label"
        :to="{ name: 'film-list', query: { category: category.query } }"
      >
        <Button outlined :label="category.label">
          <template #icon>
            <span class="material-symbols-outlined">
              {{ category.icon }}
            </span>
          </template>
        </Button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IButtonCategories } from "@/types";
import { ref } from "vue";

const categories = ref(<IButtonCategories[]>[
  {
    label: "Лучшие",
    icon: "trophy",
    query: "best",
  },
  {
    label: "Новинки",
    icon: "new_releases",
    query: "new",
  },
  {
    label: "Драмы",
    icon: "theater_comedy",
    query: "drama",
  },
  {
    label: "Комедии",
    icon: "comedy_mask",
    query: "comedy",
  },
  {
    label: "Мультфильмы",
    icon: "live_tv",
    query: "mult",
  },
]);
</script>
