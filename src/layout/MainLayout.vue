<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
  <section class="w-full  bg-primary/5 h-full">
    <AppHeader />

    <main class="w-full min-h-screen  text-black  bg-primary/5 ">
      <router-view></router-view>
    </main>

    <AppFooter />
  </section>
</template>

<style scoped></style>
