<script setup lang="ts"></script>

<template>
  <div class="about-page">
    <section class="flex w-full justify-center px-6 py-20 lg:px-40 pt-16">
      <div class="flex max-w-8xl flex-1 flex-col">
        <div class="mb-12">
          <h1
            class="text-4xl font-black tracking-tight text-text-primary md:text-5xl dark:text-white"
          >
            About StepWise
          </h1>
          <p class="mt-4 text-lg text-text-secondary">
            Empowering the next generation of Nepali students through quality education and
            accessible skill-building.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="rounded-2xl bg-surface p-6 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all duration-300 dark:bg-surface"
          >
            <div
              class="mb-4 flex size-12 items-center justify-center rounded-xl bg-icon-bg-light text-primary dark:bg-icon-bg-dark"
            >
              <span class="material-symbols-outlined text-2xl">school</span>
            </div>
            <h2 class="mb-2 text-xl font-bold text-text-primary dark:text-white">Our Mission</h2>
            <p class="text-text-secondary leading-relaxed dark:text-slate-400">
              To provide world-class educational resources and mentorship to students across Nepal,
              making quality education accessible to everyone.
            </p>
          </div>

          <div
            class="rounded-2xl bg-surface p-6 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all duration-300 dark:bg-surface"
          >
            <div
              class="mb-4 flex size-12 items-center justify-center rounded-xl bg-icon-bg-light text-accent dark:bg-icon-bg-dark"
            >
              <span class="material-symbols-outlined text-2xl">emoji_events</span>
            </div>
            <h2 class="mb-2 text-xl font-bold text-text-primary dark:text-white">Our Vision</h2>
            <p class="text-text-secondary leading-relaxed">
              To become Nepal's leading educational platform that bridges the gap between
              traditional learning and modern career opportunities.
            </p>
          </div>

          <div
            class="rounded-2xl bg-surface p-6 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all duration-300 dark:bg-surface"
          >
            <div
              class="mb-4 flex size-12 items-center justify-center rounded-xl bg-icon-bg-light text-primary dark:bg-icon-bg-dark"
            >
              <span class="material-symbols-outlined text-2xl">groups</span>
            </div>
            <h2 class="mb-2 text-xl font-bold text-text-primary dark:text-white">Our Community</h2>
            <p class="text-text-secondary leading-relaxed">
              A vibrant community of 50,000+ students, mentors, and educators working together to
              achieve academic and career success.
            </p>
          </div>
        </div>

        <div
          class="mt-16 rounded-2xl bg-surface p-8 shadow-sm border border-border dark:bg-surface"
        >
          <h2 class="mb-8 text-3xl font-black text-text-primary dark:text-white">
            Why Choose StepWise?
          </h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="flex items-start gap-4">
              <div
                class="mt-1 flex size-6 items-center justify-center rounded-full bg-primary text-white"
              >
                <span class="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h3 class="mb-1 text-lg font-bold text-text-primary dark:text-white">
                  Expert Mentors
                </h3>
                <p class="text-text-secondary leading-relaxed dark:text-slate-400">
                  Learn from industry professionals and top performers in competitive exams
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="mt-1 flex size-6 items-center justify-center rounded-full bg-primary text-white"
              >
                <span class="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h3 class="mb-1 text-lg font-bold text-text-primary dark:text-white">
                  Comprehensive Resources
                </h3>
                <p class="text-text-secondary leading-relaxed dark:text-slate-400">
                  Complete study materials, mock tests, and video lessons all in one place
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="mt-1 flex size-6 items-center justify-center rounded-full bg-primary text-white"
              >
                <span class="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h3 class="mb-1 text-lg font-bold text-text-primary dark:text-white">
                  Personalized Learning
                </h3>
                <p class="text-text-secondary leading-relaxed dark:text-slate-400">
                  AI-powered analytics to identify and strengthen your weak areas
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="mt-1 flex size-6 items-center justify-center rounded-full bg-primary text-white"
              >
                <span class="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h3 class="mb-1 text-lg font-bold text-text-primary dark:text-white">
                  Affordable Pricing
                </h3>
                <p class="text-text-secondary leading-relaxed dark:text-slate-400">
                  High-quality education at prices that won't break the bank
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
