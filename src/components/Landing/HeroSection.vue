<script setup lang="ts">
import { ref } from 'vue'

const selectedGoal = ref<string | null>(null)

const goals = [
  {
    id: 'medical',
    icon: 'medical_services',
    title: 'Medical Entrance',
    description:
      'Prepare for the Common Entrance Examination (CEE) with daily mock tests and biology deep-dives led by top doctors.',
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 'loksewa',
    icon: 'gavel',
    title: 'Lok Sewa',
    description:
      'Comprehensive resources for Civil Service exams. Covers GK, IQ, and specialized paper preparation for Kharidar to Section Officer.',
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 'coding',
    icon: 'code',
    title: 'Coding & Skills',
    description:
      'Master modern career skills. From Web Development with MERN stack to Python for Data Science and Digital Marketing.',
    color: 'bg-accent/10 text-accent',
  },
]
</script>

<template>
  <section class="max-w-[1248px] mx-auto px-6 py-12 lg:py-20 relative">
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-60"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-60"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
      <div class="space-y-8 relative">
        <div class="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-1.5 text-primary text-xs font-bold uppercase tracking-wider shadow-sm">
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Trusted by 50,000+ Nepali Students
        </div>

        <h1 class="text-4xl xs:text-5xl md:text-6xl font-black text-text-primary leading-[1.1] tracking-tight">
          Transform Your
          <span class="text-primary">Learning Goals</span>
          <br />into Actionable Plans
        </h1>

        <p class="text-lg text-text-muted leading-relaxed max-w-lg">
          The all-in-one platform for Nepali students to crack competitive exams like Lok Sewa and CEE, and master high-demand career skills.
        </p>

        <div class="flex flex-wrap gap-4">
          <button
            class="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-all shadow-sm"
          >
            Start Free Today
          </button>
          <button
            class="px-8 py-3.5 bg-surface border-2 border-border hover:border-primary text-text-primary rounded-xl font-bold transition-all cursor-pointer"
          >
            Browse Courses
          </button>
        </div>
      </div>

      <div class="relative">
        <div class="w-full aspect-square bg-surface-alt rounded-[3rem] overflow-hidden relative border border-border shadow-xl">
          <img
            src="https://img.freepik.com/free-vector/library-concept-illustration_114360-2788.jpg"
            alt="Students learning"
            class="w-full h-full object-cover mix-blend-multiply opacity-90"
          />
        </div>

        <div class="absolute -bottom-6 -left-6 bg-surface p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-border backdrop-blur-sm max-w-xs animate-float-delayed">
          <div class="size-14 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1">check_circle</span>
          </div>
          <div>
            <p class="text-xs text-text-muted font-bold uppercase tracking-wide">Success Rate</p>
            <p class="text-2xl font-black text-text-primary">92% Exam Pass</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mb-16">
      <h2 class="text-3xl font-black text-text-primary mb-4">Choose Your Learning Path</h2>
      <div class="w-16 h-1.5 bg-primary mx-auto rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="goal in goals"
        :key="goal.id"
        class="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:border-primary hover:shadow-md transition-all duration-300 group text-left"
      >
        <div :class="['size-14 rounded-xl flex items-center justify-center mb-6', goal.color]">
          <span class="material-symbols-outlined text-2xl">{{ goal.icon }}</span>
        </div>
        <h3 class="text-xl font-bold text-text-primary mb-3">{{ goal.title }}</h3>
        <p class="text-text-muted text-sm leading-relaxed mb-6">
          {{ goal.description }}
        </p>
        <a
          href="#"
          class="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all"
        >
          Explore Program
          <span class="material-symbols-outlined text-lg">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>
