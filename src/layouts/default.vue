<template>
  <div class="flex flex-col min-h-screen">
    <div class="container mx-auto py-5">
      <navigation />
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Footer v-once class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/ui/navigation/Navigation.vue";
import { onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useToast } from "primevue/usetoast";
import Footer from "@/components/Footer.vue";
import router from "@/router";

const store = useStore();
const toast = useToast();


watch(
  () => store.state.cinema.errors,
  (newErrors) => {
    if (newErrors.length > 0) {
      router.push({
        name: "error-page",
      });
    }
  },
  { immediate: true }
);
</script>
