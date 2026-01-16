<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
  <AppHeader />

  <main class="min-h-screen bg-background text-text-primary pt-24">
    <router-view></router-view>
  </main>

  <AppFooter />
</template>

<style scoped></style>
