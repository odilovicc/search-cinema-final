<template>
  <div class="container mx-auto py-5">
    <navigation />
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <Footer v-once/>
</template>
<script setup lang="ts">
import Navigation from "@/components/ui/navigation/Navigation.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import Footer from '@/components/Footer.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('cinema/fetchFilms')
})
</script>
