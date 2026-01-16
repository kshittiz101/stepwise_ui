<script setup lang="ts">
import HeroSection from '@/components/Landing/HeroSection.vue'
import ProcessSection from '@/components/Landing/ProcessSection.vue'
import FeaturesSection from '@/components/Landing/FeaturesSection.vue'
import TestimonialsSection from '@/components/Landing/TestimonialsSection.vue'
import FAQSection from '@/components/Landing/FAQSection.vue'
import CallToAction from '@/components/Landing/CallToAction.vue'
</script>

<template>
  <div class="landing-page">
    <HeroSection />

    <main class="flex-1 max-w-[1248px] mx-auto w-full px-6 py-12">
      <ProcessSection />
      <TestimonialsSection />
      <FeaturesSection />
      <FAQSection />
      <CallToAction />
    </main>
  </div>
</template>

<style scoped></style>
