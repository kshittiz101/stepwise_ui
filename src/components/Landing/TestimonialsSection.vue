<script setup lang="ts">
import TestimonialCard from '@/components/common/TestimonialCard.vue'

type Testimonial = {
  id: number
  rating: number
  quote: string
  name: string
  title: string
  avatar: string
  alt: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote:
      '"StepWise was a game-changer for my Lok Sewa prep. The GK modules are so well-organized compared to heavy books. I finally cleared my Section Officer exams this year!"',
    name: 'Anup Sharma',
    title: 'Section Officer, Gov of Nepal',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6JBYSGVrY6y4QxE9Xkf-vHOota-cNRzaZVpT0Waf7PclxV-JWfj9froamfHR3I6gn91HfqoEvC7FenZa8fM1vZPPkEfyYvIsl6C1VKZJA1MTLjVyC5jKUk_fsQPKQvEqSM-kFXorUgnbbw4vkTV7GOJ8beFrU6-rpA8qW2fSAhGlS8VdFSeosexRAN6gGSMG6YW-EAcl7L09evVM7LDRR1d2eZEBXcZcY3dGBqqnwosDSZOFWQcchDwnEWntn6OyusQcVyV3NrW2p',
    alt: 'Profile photo of a young Nepali man',
  },
  {
    id: 2,
    rating: 5,
    quote:
      '"The Medical Entrance course here is fantastic. The daily mock tests felt exactly like the real CEE. The biological diagrams and explanations were very easy to follow."',
    name: 'Priya Adhikari',
    title: 'MOE Scholarship Recipient, IOM',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6MIn0SQb8xiFhuqJ_-KxnpPyvBxlG_iisdd9C3KObDouimg9UDVkYQmobCdMQcWJqMj5FHDfy9fwkRLtA-XgOwYeufXMXWuGSqvPbguTcGzP5d7puxJBcbGkNNLDPJ-kt7kHMGF125mgc-fBjf4v4QR589wx4ldcY8xfAxmIWUdxbeUrotyCCQU1Gnj1c_0_8mbx8OIQPnfU6oRhMAHD9Z-8maJB2_1axj8YEsc3BjbH0eBOnk4Ov_D4zeGX-yVA262joOQwzx7Xg',
    alt: 'Profile photo of a young Nepali woman',
  },
  {
    id: 3,
    rating: 5,
    quote:
      '"I used StepWise for my +2 Science revision and it saved me so much time. The quizzes after each chapter showed me exactly where I was weak, and my final results improved a lot!"',
    name: 'Suman Karki',
    title: '+2 Science Student, Kathmandu',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
    alt: 'Profile photo of a young Nepali student',
  },
]
</script>

<template>
  <section class="py-24 px-6 lg:px-40 lg:py-32">
    <div class="mx-auto max-w-[1200px]">
      <div class="mb-16 flex flex-col items-center text-center">
        <h2 class="text-3xl font-black text-navy-custom dark:text-white md:text-4xl">
          Student Success Stories
        </h2>
        <p class="mt-4 text-gray-500">
          Real stories from students across Nepal who reached their goals with StepWise.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div v-for="testimonial in testimonials" :key="testimonial.id">
          <TestimonialCard
            :quote="testimonial.quote"
            :name="testimonial.name"
            :title="testimonial.title"
            :avatar="testimonial.avatar"
            :alt="testimonial.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
