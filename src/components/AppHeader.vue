<script setup lang="ts"></script>

<template>
  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-50 w-full bg-secondary px-6 py-4 shadow-lg lg:px-40">
    <div class="mx-auto flex max-w-8xl items-center justify-between">
      <!-- Logo (Left) -->
      <div class="flex items-center gap-3 text-white">
        <div class="flex size-10 items-center justify-center rounded-full bg-primary">
          <span class="material-symbols-outlined text-white">school</span>
        </div>
        <h2 class="text-xl font-black tracking-tight">StepWise</h2>
      </div>

      <!-- Nav Links (Center) -->
      <nav class="hidden flex-1 justify-center gap-10 md:flex">

        <!-- home -->

          <router-link to="/" class="text-base font-semibold text-gray-300 hover:text-white transition-colors">Home</router-link>

        <!-- about -->
        <router-link to="/about" class="text-base font-semibold text-gray-300 hover:text-white transition-colors">About</router-link>

        <!-- categories -->
        <router-link to="/categories" class="text-base font-semibold text-gray-300 hover:text-white transition-colors">Categories</router-link>
      </nav>

      <!-- Auth Buttons (Right) -->
      <div class="flex items-center gap-4">
        <button class="hidden text-base font-semibold text-white md:block">Log in</button>
        <button
          class="flex min-w-[100px] cursor-pointer items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-base font-bold text-white transition-all hover:bg-primary/90"
        >
          Join Free
        </button>
      </div>
    </div>
  </header>
</template>
