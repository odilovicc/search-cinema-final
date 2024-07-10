<template>
  <div class="container mx-auto py-5">
    <p class="text-red-500">{{ error }}</p>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const error = computed(() => store.state.cinema.errors);
</script>
