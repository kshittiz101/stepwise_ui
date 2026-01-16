<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="about-page">
    <AppHeader />

    <section class="flex w-full justify-center px-6 py-20 lg:px-40 pt-16">
      <div class="flex max-w-[1200px] flex-1 flex-col">
        <div class="mb-12">
          <h1 class="text-4xl font-black tracking-tight text-text-primary md:text-5xl">About StepWise</h1>
          <p class="mt-4 text-lg text-text-secondary">
            Empowering the next generation of Nepali students through quality education and accessible skill-building.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-2xl bg-surface p-6 shadow-sm border border-border/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
            <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span class="material-symbols-outlined text-2xl">school</span>
            </div>
            <h2 class="mb-2 text-xl font-bold text-text-primary">Our Mission</h2>
            <p class="text-text-secondary leading-relaxed">
              To provide world-class educational resources and mentorship to students across Nepal, making quality education accessible to everyone.
            </p>
          </div>

          <div class="rounded-2xl bg-surface p-6 shadow-sm border border-border/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
            <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <span class="material-symbols-outlined text-2xl">emoji_events</span>
            </div>
            <h2 class="mb-2 text-xl font-bold text-text-primary">Our Vision</h2>
            <p class="text-text-secondary leading-relaxed">
              To become Nepal's leading educational platform that bridges the gap between traditional learning and modern career opportunities.
            </p>
          </div>

          <div class="rounded-2xl bg-surface p-6 shadow-sm border border-border/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
            <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <span class="material-symbols-outlined text-2xl">groups</span>
            </div>
            <h2 class="mb-2 text-xl font-bold text-text-primary">Our Community</h2>
            <p class="text-text-secondary leading-relaxed">
              A vibrant community of 50,000+ students, mentors, and educators working together to achieve academic and career success.
            </p>
          </div>
        </div>

        <div class="mt-16 rounded-2xl bg-surface p-8 shadow-sm border border-border/20">
          <h2 class="mb-8 text-3xl font-black text-text-primary">Why Choose StepWise?</h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="flex items-start gap-4">
              <div class="mt-1 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white">
                <span class="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h3 class="mb-1 text-lg font-bold text-text-primary">Expert Mentors</h3>
                <p class="text-text-secondary leading-relaxed">
                  Learn from industry professionals and top performers in competitive exams
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="mt-1 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white">
                <span class="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h3 class="mb-1 text-lg font-bold text-text-primary">Comprehensive Resources</h3>
                <p class="text-text-secondary leading-relaxed">
                  Complete study materials, mock tests, and video lessons all in one place
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="mt-1 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white">
                <span class="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h3 class="mb-1 text-lg font-bold text-text-primary">Personalized Learning</h3>
                <p class="text-text-secondary leading-relaxed">
                  AI-powered analytics to identify and strengthen your weak areas
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="mt-1 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white">
                <span class="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h3 class="mb-1 text-lg font-bold text-text-primary">Affordable Pricing</h3>
                <p class="text-text-secondary leading-relaxed">
                  High-quality education at prices that won't break the bank
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<style scoped></style>
