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
  <section class="mx-auto mb-24 max-w-7xl px-6">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-black text-secondary dark:text-white md:text-4xl">
        Frequently Asked Questions
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-500">
        Everything you need to know about StepWise, our mission, and how we help you succeed.
      </p>
    </div>

    <div class="mx-auto max-w-7xl space-y-4">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-white/5"
        :class="{ 'ring-2 ring-primary/5': openIndex === index }"
      >
        <button
          @click="toggle(index)"
          class="flex w-full cursor-pointer items-center justify-between p-6 text-left focus:outline-none"
        >
          <span
            class="pr-8 text-lg font-bold transition-colors duration-300"
            :class="openIndex === index ? 'text-primary' : 'text-secondary dark:text-white'"
          >
            {{ faq.question }}
          </span>
          <div
            class="flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300"
            :class="
              openIndex === index
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-400 dark:bg-white/10'
            "
          >
            <span
              class="material-symbols-outlined text-xl transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === index }"
            >
              {{ openIndex === index ? 'remove' : 'add' }}
            </span>
          </div>
        </button>
        <div
          class="grid transition-all duration-300 ease-in-out"
          :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
        >
          <div class="overflow-hidden">
            <p class="px-6 pb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
