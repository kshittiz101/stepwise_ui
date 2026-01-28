<script setup lang="ts">
interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatar: string
  alt: string
}

const props = defineProps<TestimonialCardProps>()
</script>

<template>
  <div
    class="flex h-full flex-col gap-6 rounded-3xl bg-white p-10 shadow-lg transition-all hover:shadow-xl dark:bg-white/5"
  >
    <div class="flex gap-1 text-primary">
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
    </div>
    <p class="flex-1 text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
      "{{ props.quote }}"
    </p>
    <div class="flex items-center gap-4 border-t border-gray-100 pt-6 dark:border-white/10">
      <div
        class="size-12 rounded-full bg-cover bg-center"
        :style="{ backgroundImage: `url('${props.avatar}')` }"
        :aria-label="props.alt"
      ></div>
      <div>
        <p class="font-bold text-navy-custom dark:text-white">{{ props.name }}</p>
        <p class="text-sm text-gray-500">{{ props.title }}</p>
      </div>
    </div>
  </div>
</template>
