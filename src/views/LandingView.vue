<script setup lang="ts">
import HeroSection from '@/components/Landing/HeroSection.vue'
import FeaturesSection from '@/components/Landing/FeaturesSection.vue'
import WhyChoose from '@/components/Landing/WhyChoose.vue'
import TestimonialsSection from '@/components/Landing/TestimonialsSection.vue'
import FaqSection from '@/components/Landing/FAQSection.vue'
import CallToAction from '@/components/Landing/CallToAction.vue'
</script>

<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeaturesSection />

    <!-- why to choose -->
    <WhyChoose />

    <!-- testimonials -->
    <TestimonialsSection />

    <!-- faq -->
    <FaqSection />

    <!-- call to action  -->
    <CallToAction />
  </div>
</template>

<style scoped></style>
