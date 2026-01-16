<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  {
    question: 'Is StepWise really free for everyone?',
    answer:
      'Yes, StepWise is 100% free for all students. Our mission is to provide quality education resources to every student in Nepal without any financial barriers. We believe that access to exam preparation tools should be a right, not a privilege.',
  },
  {
    question: 'Does it follow the latest NEB curriculum?',
    answer:
      'Absolutely. Our content is regularly updated to align strictly with the latest NEB curriculum and exam patterns for all covered subjects.',
  },
  {
    question: 'Can I use StepWise on my mobile phone?',
    answer:
      'Yes! StepWise is fully responsive and optimized for mobile devices, allowing you to learn on the go from your smartphone or tablet.',
  },
  {
    question: 'How does AI-powered feedback work?',
    answer:
      'Our AI analyzes your practice test performance to identify weak areas and generate personalized study recommendations to improve your scores efficiently.',
  },
]

const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 mb-24">
    <h2 class="text-3xl font-black text-text-primary mb-8 text-left dark:text-white">Frequently Asked Questions</h2>
    <div class="space-y-4">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="bg-surface rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary"
        :class="{ 'shadow-md': openIndex === index }"
      >
        <button
          @click="toggle(index)"
          class="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none group"
        >
          <span class="font-bold text-text-primary text-lg pr-4 dark:text-white">{{ faq.question }}</span>
          <span
            class="material-symbols-outlined text-text-muted transition-transform duration-300 group-hover:text-primary"
            :class="{ 'rotate-180 text-primary': openIndex === index }"
          >
            expand_more
          </span>
        </button>
        <div
          class="grid transition-all duration-300 ease-in-out"
          :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
        >
          <div class="overflow-hidden">
            <p class="px-6 pb-6 text-text-muted leading-relaxed dark:text-slate-400">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
