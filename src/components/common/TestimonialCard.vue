<script setup lang="ts">
interface Props {
  name: string
  role: string
  image: string
  rating?: number
  quote: string
}

withDefaults(defineProps<Props>(), {
  rating: 5,
})
</script>

<template>
  <div
    class="bg-surface p-8 rounded-2xl shadow-sm border border-border/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
  >
    <div class="flex items-center gap-4 mb-6">
      <div
        class="size-14 rounded-full bg-center bg-cover border-2 border-primary/10 shrink-0"
        :style="{ backgroundImage: `url('${image}')` }"
        :aria-label="`Portrait of ${name}`"
      ></div>
      <div>
        <h4 class="font-bold text-lg text-text-primary">{{ name }}</h4>
        <p class="text-xs text-text-muted uppercase font-semibold">{{ role }}</p>
      </div>
    </div>
    <div class="flex gap-1 mb-4 text-amber-500">
      <span
        v-for="i in 5"
        :key="i"
        class="material-symbols-outlined fill-[1] text-xl"
        :class="{ 'text-text-muted': i > rating }"
      >
        star
      </span>
    </div>
    <p class="text-base text-text-secondary leading-relaxed italic flex-grow">"{{ quote }}"</p>
  </div>
</template>
