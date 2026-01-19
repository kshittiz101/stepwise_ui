<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
  <section class="w-full bg-white">
    <AppHeader />

    <main class="w-full min-h-screen bg-white text-black">
      <router-view></router-view>
    </main>

    <AppFooter />
  </section>
</template>

<style scoped></style>
