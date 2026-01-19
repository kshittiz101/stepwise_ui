<script setup lang="ts">
import heroImg from '@/assets/hero-img.jpeg'
</script>

<template>
  <section class="relative overflow-hidden px-6 py-20 lg:py-28">
    <!-- Background Elements -->
    <div
      class="absolute -top-[20%] -left-[10%] -z-10 size-[500px] rounded-full bg-primary/5 blur-3xl"
    ></div>
    <div
      class="absolute top-[20%] -right-[10%] -z-10 size-[500px] rounded-full bg-purple-500/5 blur-3xl"
    ></div>

    <div class="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
      <!-- Left Content -->
      <div class="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
        <!-- Badge -->
        <div
          class="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 transition-colors hover:bg-blue-100"
        >
          <span class="relative flex size-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"
            ></span>
            <span class="relative inline-flex size-2 rounded-full bg-blue-500"></span>
          </span>
          <span class="text-xs font-bold uppercase tracking-wide text-blue-600"
            >Trusted by 50,000+ Students</span
          >
        </div>

        <!-- Headline -->
        <h1
          class="mb-6 text-balance text-5xl font-black leading-[1.1] tracking-tight text-secondary md:text-6xl lg:text-7xl dark:text-white"
        >
          Transform Your Learning Goals Into
          <span class="text-primary">Actionable Plans</span>
        </h1>

        <!-- Subtext -->
        <p class="mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl">
          The all-in-one platform for Nepali students to crack competitive exams like Lok Sewa and
          CEE, and master high-demand career skills.
        </p>

        <!-- Buttons -->
        <div class="flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <button
            class="group flex h-14 cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-500/30"
          >
            Start Free Today
            <span
              class="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1"
              >arrow_forward</span
            >
          </button>
          <button
            class="flex h-14 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white px-8 text-base font-bold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Browse Courses
          </button>
        </div>
      </div>

      <!-- Right Image -->
      <div class="relative flex flex-1 items-center justify-center">
        <!-- Decoration Pattern -->
        <div
          class="absolute -right-4 top-0 -z-10 h-64 w-64 opacity-10"
          style="
            background-image: radial-gradient(circle, #3b82f6 2px, transparent 2.5px);
            background-size: 16px 16px;
          "
        ></div>

        <img
          :src="heroImg"
          alt="Students learning together"
          class="relative z-10 w-full max-w-2xl drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
        />

        <!-- Floating Badge -->
        <div
          class="absolute -bottom-6 right-8 z-20 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md dark:bg-black/80"
        >
          <div class="flex items-center gap-4">
            <div
              class="flex size-12 items-center justify-center rounded-full bg-green-100 text-green-600"
            >
              <span class="material-symbols-outlined text-2xl">check_circle</span>
            </div>
            <div>
              <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Success Rate</p>
              <p class="text-xl font-bold text-secondary dark:text-white">92% Exam Pass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
