<script setup lang="ts"></script>

<template>
  <section class="px-6 py-16 lg:px-40">
    <div class="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
      <!-- Left Content -->
      <div class="flex-1 space-y-6">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
          <span class="text-xs font-semibold uppercase tracking-wide text-primary"
            >Trusted by 50,000+ Nepali Students</span
          >
        </div>

        <!-- Headline -->
        <h1 class="text-5xl font-black leading-tight tracking-tight text-secondary lg:text-6xl">
          Transform Your Learning Goals Into Actionable Plans
        </h1>

        <!-- Subtext -->
        <p class="text-lg text-gray-600">
          The all-in-one platform for Nepali students to crack competitive exams like Lok Sewa and
          CEE, and master high-demand career skills.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4">
          <button
            class="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-all hover:bg-primary/90"
          >
            Start Free Today
          </button>
          <button
            class="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-secondary transition-all hover:border-gray-400"
          >
            Browse Courses
          </button>
        </div>
      </div>

      <!-- Right Image -->
      <div class="relative flex-1">
        <img src="/src/assets/hero-illustration.png" alt="Students collaborating" class="w-full" />

        <!-- Floating Badge -->
        <div
          class="absolute -bottom-4 right-8 flex items-center gap-3 rounded-lg bg-white px-5 py-3 shadow-xl"
        >
          <div class="flex size-10 items-center justify-center rounded-full bg-green-100">
            <svg
              class="size-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <div>
            <p class="text-xs text-gray-500">Success Rate</p>
            <p class="text-lg font-black text-secondary">92% Exam Pass</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
