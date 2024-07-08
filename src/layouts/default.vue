<template>
  <div class="container mx-auto py-5">
    <navigation />
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
import Navigation from "@/components/ui/navigation/Navigation.vue";
</script>
