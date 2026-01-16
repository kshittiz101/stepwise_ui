<script setup lang="ts">
import TestimonialCard from '@/components/common/TestimonialCard.vue'
</script>

<template>
  <section class="mb-24 bg-gradient-to-br from-primary/5 via-surface to-accent/5 rounded-3xl py-16 px-6 md:px-12 border border-border/10">
    <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div class="text-left">
        <span class="text-primary text-sm font-bold uppercase tracking-widest">Real Results</span>
        <h2 class="text-3xl font-black mt-2">Results &amp; Success Stories</h2>
        <p class="text-text-muted mt-2">
          Hear from students across Nepal who aced their exams with StepWise.
        </p>
      </div>
      <div class="flex gap-2">
        <button
          class="w-10 h-10 rounded-xl border-2 border-border hover:border-primary flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
        >
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          class="w-10 h-10 rounded-xl border-2 border-border hover:border-primary flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
        >
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <TestimonialCard
        name="Suman"
        role="Engineering Aspirant"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCrrnnTMPv9LWf_3HmcP7spsnTcdmebgqYJYd58MyKoHwnXmuZ3kI0sRhyCpVzWPYxm705AMnaaN1mHvlDglHFMma7-5uGN4tzQjxNNHlDF8fzCGd4sv0999KV6L3bXl814CkT3jRoYPMUMsTTXpmuMf6VhSzn-DVIluG4xZVcgLE3MUQ8_c4BISWMCvSKDHwTbf7P9TkvbKYdtloL_0RoYFadeVcy77Nif84adg0O0Y9E1NN5Q_CoD2-bmn3LUhMEMMxV0IUwD2dNk"
        quote="StepWise helped me crack my engineering entrance with ease. The AI plans are a game changer! It organized my chaos into a clear daily goal."
      />
      <TestimonialCard
        name="Anjali"
        role="NEB Grade 12"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBtMMyPK-zEWG31LbKz53Xt9J0EeNSap-ZTl26JD4zvR6vgSO9xv7EbS5DgC5qZ4wtCy-NmGbGXz0yGxMu3SaeAfxgBtjmGTU6zHc7yQ6pDEQrpa7erN9PB8EqKNn7T-IWnSmggmAmzOQ0LOOOM5_XlqRt0CiqGvqlvStPHOD7YHFcV158xEUlInp_GZAMX_YX61tmJ1gyXx-nVya4RjgBGP-l4nlIn58MTf4g__8NlXZktOCvyQvazs81G3xOQxUAKWCLUCGauythV"
        quote="I love the daily MCQs. They kept me consistent throughout my NEB preparation. The breakdown of complex Physics concepts was exactly what I needed."
      />
      <TestimonialCard
        name="Ram"
        role="SEE Graduate"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDjugEgzmz6L5Gsfj6Z5bRxK36soZ7y5uBD10L1PXaoC7TPda9PwDjRb7LJZ0JPEgTL68Xq4nSVbaVvbkBxoEjNKcY3H_hUmzUZxkvbYKyt4PDeAziJ0APi8irQY-sEcwdLkgfMKNirQYBkXeGHL4qHk27NqD4FDxlFVAmZKfwOf_WASKQ6dGxXRfDfESFrSby5WWXPJokG9vcpu1OHRIfY2D6RIczhRbUUGzsw1G21BuOUqSZGPgNihlkav9oa1za0_Tobkva696wi"
        quote="The previous year questions are so well organized. It's the best platform for Nepali students. I improved my GPA by 0.5 points using their mock tests."
      />
    </div>
  </section>
</template>
