<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const isDarkMode =
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  isDark.value = isDarkMode

  applyTheme(isDarkMode)
})

const applyTheme = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-header-dark border-b border-border transition-all duration-300"
  >
    <div class="max-w-[1248px] mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div
          class="size-9 sm:size-10 flex items-center justify-center bg-primary rounded-xl text-white"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
            />
          </svg>
        </div>
        <h2 class="text-lg sm:text-xl font-black tracking-tight text-text-primary dark:text-white">StepWise</h2>
      </div>

      <nav class="hidden lg:flex items-center gap-8">
        <a
          class="text-sm font-semibold text-text-secondary hover:text-primary transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full dark:text-slate-300 dark:hover:text-primary"
          href="#"
        >
          Courses
        </a>
        <a
          class="text-sm font-semibold text-text-secondary hover:text-primary transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full dark:text-slate-300 dark:hover:text-primary"
          href="#"
        >
          How It Works
        </a>
        <a
          class="text-sm font-semibold text-text-secondary hover:text-primary transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full dark:text-slate-300 dark:hover:text-primary"
          href="#"
        >
          Success Stories
        </a>
      </nav>

      <div class="flex items-center gap-2 sm:gap-4">
        <button
          @click="toggleTheme"
          class="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-surface-alt text-text-secondary hover:bg-primary hover:text-white transition-all duration-300 dark:bg-surface-alt dark:text-slate-300 dark:hover:bg-primary dark:hover:text-white"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <span class="material-symbols-outlined text-xl sm:text-2xl">
            {{ isDark ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>

        <button
          class="hidden sm:block text-sm font-semibold text-text-primary hover:text-primary transition-colors px-3 py-2 dark:text-white dark:hover:text-primary"
        >
          Log In
        </button>

        <button
          class="bg-primary text-white px-4 sm:px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-hover transition-all duration-300 dark:bg-primary dark:hover:bg-primary-hover"
        >
          Get Started
        </button>
      </div>
    </div>
  </header>
</template>
