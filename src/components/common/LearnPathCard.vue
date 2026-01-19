<script setup lang="ts">
interface LearnPathCardProps {
  title: string
  description: string
  icon: string
  links: string
  bgClass: string
  iconColorClass: string
}

const props = defineProps<LearnPathCardProps>()
</script>

<template>
  <section
    class="group cursor-pointer space-y-4 rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
  >
    <div :class="['flex size-14 items-center justify-center rounded-lg', props.bgClass]">
      <span :class="['material-symbols-outlined text-4xl', props.iconColorClass]">
        {{ props.icon }}
      </span>
    </div>
    <h3 class="text-2xl font-black text-secondary">{{ props.title }}</h3>
    <p class="text-sm leading-relaxed text-gray-600">
      {{ props.description }}
    </p>
    <a
      class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:gap-3"
      :href="props.links"
    >
      Explore Program
      <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </a>
  </section>
</template>
