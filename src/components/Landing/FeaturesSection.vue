<script setup lang="ts">
import LearnPathCard from '@/components/common/LearnPathCard.vue'

const listOfLearningPath = [
  {
    title: 'Medical Entrance',
    description:
      'Prepare for the Common Entrance Examination (CEE) with quality mock tests and biology deep-dives led by top doctors.',
    icon: 'medical_services',
    links: '#',
    bgClass: 'bg-blue-100',
    iconColorClass: 'text-primary',
  },
  {
    title: 'Lok Sewa',
    description:
      'Comprehensive resources for Civil Service exams. Covers GK, IQ, and specialized paper preparation for Kharidar to Gazetted.',
    icon: 'gavel',
    links: '#',
    bgClass: 'bg-purple-100',
    iconColorClass: 'text-purple-600',
  },
  {
    title: 'Coding & Skills',
    description:
      'Master modern career skills. From Web Development and MERN stack to Python for Data Science and Digital Marketing.',
    icon: 'code',
    links: '#',
    bgClass: 'bg-green-100',
    iconColorClass: 'text-green-600',
  },
]
</script>

<template>
  <section class="bg-white px-6 py-16 lg:px-40">
    <div class="mx-auto max-w-[1200px]">
      <!-- Title -->
      <h2 class="mb-12 text-center text-4xl font-black tracking-tight text-secondary">
        Choose Your Learning Path
      </h2>

      <!-- Cards Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Medical Entrance Card -->
        <div v-for="path in listOfLearningPath" :key="path.title">
          <LearnPathCard
            :title="path.title"
            :description="path.description"
            :icon="path.icon"
            :links="path.links"
            :bg-class="path.bgClass"
            :icon-color-class="path.iconColorClass"
          />
        </div>
      </div>
    </div>
  </section>
</template>
