<script setup lang="ts"></script>

<template>
  <div class="about-page">
    <!-- Hero Section with Gradient -->
    <section class="relative w-full overflow-hidden bg-gradient-to-br from-background-light via-white to-primary/5 dark:from-background-dark dark:via-secondary/50 dark:to-primary/10">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 size-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div class="absolute top-20 -left-20 size-60 rounded-full bg-accent/10 blur-3xl"></div>
        <div class="absolute bottom-20 right-1/4 size-40 rounded-full bg-primary/5 blur-2xl"></div>
      </div>

      <div class="relative flex w-full justify-center px-6 py-24 lg:px-40 pt-20">
        <div class="flex max-w-8xl flex-1 flex-col items-center text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20">
            <span class="material-symbols-outlined text-lg">star</span>
            Trusted by 15,000+ +2 Students
          </div>
          <h1 class="text-5xl font-black tracking-tight text-text-primary md:text-6xl dark:text-white">
            About <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">StepWise</span>
          </h1>
          <p class="mt-6 max-w-2xl text-xl text-text-secondary dark:text-slate-400">
            Your AI-powered study companion for +2 Board Exams. Master Physics, Chemistry,
            Biology, and English with personalized daily learning plans designed for NEB success.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <button class="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              <span class="material-symbols-outlined">school</span>
              Start Learning Free
            </button>
            <button class="flex items-center gap-2 rounded-xl border-2 border-border bg-white px-6 py-3 text-base font-bold text-text-primary transition-all hover:bg-background-light dark:border-border dark:bg-surface dark:text-white dark:hover:bg-secondary">
              <span class="material-symbols-outlined">play_circle</span>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Cards with Hover Effects -->
    <section class="flex w-full justify-center px-6 py-20 lg:px-40 -mt-8">
      <div class="flex max-w-8xl flex-1 flex-col">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            class="group relative rounded-2xl bg-surface p-8 shadow-lg border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 dark:bg-surface dark:border-border"
          >
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div
              class="relative mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30"
            >
              <span class="material-symbols-outlined text-3xl">rocket_launch</span>
            </div>
            <h2 class="relative mb-3 text-2xl font-bold text-text-primary dark:text-white">Our Mission</h2>
            <p class="relative text-text-secondary leading-relaxed dark:text-slate-400">
              To help +2 students in Nepal excel in their board exams with AI-powered personalized
              study plans, making quality education accessible to every student.
            </p>
          </div>

          <div
            class="group relative rounded-2xl bg-surface p-8 shadow-lg border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 dark:bg-surface dark:border-border"
          >
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div
              class="relative mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-emerald-600 text-white shadow-lg shadow-accent/30"
            >
              <span class="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h2 class="relative mb-3 text-2xl font-bold text-text-primary dark:text-white">Our Vision</h2>
            <p class="relative text-text-secondary leading-relaxed dark:text-slate-400">
              To become Nepal's most trusted +2 study platform, helping students achieve top
              scores in board exams and build a strong foundation for higher education.
            </p>
          </div>

          <div
            class="group relative rounded-2xl bg-surface p-8 shadow-lg border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 dark:bg-surface dark:border-border"
          >
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div
              class="relative mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30"
            >
              <span class="material-symbols-outlined text-3xl">school</span>
            </div>
            <h2 class="relative mb-3 text-2xl font-bold text-text-primary dark:text-white">For +2 Students</h2>
            <p class="relative text-text-secondary leading-relaxed dark:text-slate-400">
              Specifically designed for NEB +2 students studying Science, Management, or Humanities.
              Focus on your board exam success with our proven study methods.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section with Animated Counter Effect -->
    <section class="relative w-full bg-secondary overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div class="relative max-w-8xl mx-auto px-6 py-20 lg:px-40">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div class="group text-center">
            <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary/20 text-primary transition-transform duration-300 group-hover:scale-110">
              <span class="material-symbols-outlined text-3xl">group</span>
            </div>
            <div class="text-5xl font-black text-white">15,000+</div>
            <div class="mt-2 text-gray-400">+2 Students</div>
          </div>
          <div class="group text-center">
            <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
              <span class="material-symbols-outlined text-3xl">quiz</span>
            </div>
            <div class="text-5xl font-black text-white">500+</div>
            <div class="mt-2 text-gray-400">Practice Questions</div>
          </div>
          <div class="group text-center">
            <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary/20 text-primary transition-transform duration-300 group-hover:scale-110">
              <span class="material-symbols-outlined text-3xl">menu_book</span>
            </div>
            <div class="text-5xl font-black text-white">50+</div>
            <div class="mt-2 text-gray-400">Chapter Notes</div>
          </div>
          <div class="group text-center">
            <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
              <span class="material-symbols-outlined text-3xl">grade</span>
            </div>
            <div class="text-5xl font-black text-white">92%</div>
            <div class="mt-2 text-gray-400">A+ Achievers</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Section with Glassmorphism Cards -->
    <section class="relative w-full py-24 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-secondary/20">
      <div class="max-w-8xl mx-auto px-6 lg:px-40">
        <div class="mb-16 text-center">
          <span class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">Comprehensive Coverage</span>
          <h2 class="mt-4 text-4xl font-black text-text-primary dark:text-white">Subjects We Cover</h2>
          <p class="mt-4 text-lg text-text-secondary dark:text-slate-400">
            Complete coverage of all major +2 subjects with AI-powered study plans
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Physics -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-surface/80 p-8 shadow-lg border border-border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-surface/50 dark:border-border"
          >
            <div class="absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20"></div>
            <div class="relative">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              >
                <span class="material-symbols-outlined text-3xl">science</span>
              </div>
              <h3 class="mb-4 text-2xl font-bold text-text-primary dark:text-white">Physics</h3>
              <ul class="space-y-3 text-text-secondary dark:text-slate-400">
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Mechanics & Waves
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Thermodynamics
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Electromagnetism
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Optics & Modern Physics
                </li>
              </ul>
            </div>
          </div>

          <!-- Chemistry -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-surface/80 p-8 shadow-lg border border-border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-surface/50 dark:border-border"
          >
            <div class="absolute -right-10 -top-10 size-40 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20"></div>
            <div class="relative">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-emerald-600 text-white shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              >
                <span class="material-symbols-outlined text-3xl">biotech</span>
              </div>
              <h3 class="mb-4 text-2xl font-bold text-text-primary dark:text-white">Chemistry</h3>
              <ul class="space-y-3 text-text-secondary dark:text-slate-400">
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Physical Chemistry
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Organic Chemistry
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Inorganic Chemistry
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Chemical Calculations
                </li>
              </ul>
            </div>
          </div>

          <!-- Biology -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-surface/80 p-8 shadow-lg border border-border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-surface/50 dark:border-border"
          >
            <div class="absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20"></div>
            <div class="relative">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              >
                <span class="material-symbols-outlined text-3xl">eco</span>
              </div>
              <h3 class="mb-4 text-2xl font-bold text-text-primary dark:text-white">Biology</h3>
              <ul class="space-y-3 text-text-secondary dark:text-slate-400">
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Botany & Zoology
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Human Physiology
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Genetics & Evolution
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Ecology & Environment
                </li>
              </ul>
            </div>
          </div>

          <!-- English -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-surface/80 p-8 shadow-lg border border-border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-surface/50 dark:border-border"
          >
            <div class="absolute -right-10 -top-10 size-40 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20"></div>
            <div class="relative">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-emerald-600 text-white shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              >
                <span class="material-symbols-outlined text-3xl">translate</span>
              </div>
              <h3 class="mb-4 text-2xl font-bold text-text-primary dark:text-white">English</h3>
              <ul class="space-y-3 text-text-secondary dark:text-slate-400">
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Grammar & Usage
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Literature Sections
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Writing Skills
                </li>
                <li class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                  <span class="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <span class="material-symbols-outlined text-xs">check</span>
                  </span>
                  Comprehension
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works with Step Indicators -->
    <section class="relative w-full bg-background-light py-24 dark:bg-background-dark">
      <!-- Decorative Line -->
      <div class="absolute left-1/2 top-1/2 hidden h-1 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary via-accent to-primary lg:block opacity-20"></div>

      <div class="relative max-w-8xl mx-auto px-6 lg:px-40">
        <div class="mb-16 text-center">
          <span class="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">Simple Process</span>
          <h2 class="mt-4 text-4xl font-black text-text-primary dark:text-white">How StepWise Works</h2>
          <p class="mt-4 text-lg text-text-secondary dark:text-slate-400">
            Your personalized +2 exam preparation journey in three simple steps
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="relative text-center">
            <div
              class="relative mx-auto mb-8 flex size-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-xl shadow-primary/30 transition-all duration-500 hover:scale-110 hover:rotate-3"
            >
              <span class="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-accent text-sm font-bold shadow-lg">1</span>
              <span class="material-symbols-outlined text-4xl">menu_book</span>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-text-primary dark:text-white">Select Your Stream</h3>
            <p class="text-text-secondary dark:text-slate-400">
              Choose your +2 stream - Science (Physics, Chemistry, Biology/Maths),
              Management, or Humanities and start your personalized journey.
            </p>
          </div>

          <div class="relative text-center">
            <div
              class="relative mx-auto mb-8 flex size-24 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-emerald-600 text-white shadow-xl shadow-accent/30 transition-all duration-500 hover:scale-110 hover:rotate-3"
            >
              <span class="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold shadow-lg">2</span>
              <span class="material-symbols-outlined text-4xl">auto_awesome</span>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-text-primary dark:text-white">AI Creates Your Plan</h3>
            <p class="text-text-secondary dark:text-slate-400">
              Our AI generates a daily study plan based on your syllabus, weak areas,
              and exam timeline. Complete chapter notes, videos, and exercises.
            </p>
          </div>

          <div class="text-center">
            <div
              class="relative mx-auto mb-8 flex size-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-xl shadow-primary/30 transition-all duration-500 hover:scale-110 hover:rotate-3"
            >
              <span class="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-accent text-sm font-bold shadow-lg">3</span>
              <span class="material-symbols-outlined text-4xl">emoji_events</span>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-text-primary dark:text-white">Ace Your Exams</h3>
            <p class="text-text-secondary dark:text-slate-400">
              Practice with mock tests, track your progress, and walk into your
              board exams with confidence and proper preparation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section with Icon Features -->
    <section class="flex w-full justify-center px-6 py-24 lg:px-40">
      <div class="flex max-w-8xl flex-1 flex-col">
        <div
          class="relative overflow-hidden rounded-3xl bg-surface p-10 shadow-xl border border-border dark:bg-surface"
        >
          <!-- Background Decoration -->
          <div class="absolute -right-20 -top-20 size-60 rounded-full bg-primary/5 blur-3xl"></div>
          <div class="absolute -bottom-20 -left-20 size-60 rounded-full bg-accent/5 blur-3xl"></div>

          <div class="relative">
            <div class="mb-12 text-center">
              <span class="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">Why Us</span>
              <h2 class="mt-4 text-4xl font-black text-text-primary dark:text-white">
                Why +2 Students Choose StepWise?
              </h2>
            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div class="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-primary/5">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30"
                >
                  <span class="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h3 class="mb-2 text-lg font-bold text-text-primary dark:text-white">
                    NEB Syllabus Aligned
                  </h3>
                  <p class="text-text-secondary dark:text-slate-400">
                    All content is carefully aligned with the National Examination Board (+2) curriculum
                  </p>
                </div>
              </div>

              <div class="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-accent/5">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-emerald-600 text-white shadow-lg shadow-accent/30"
                >
                  <span class="material-symbols-outlined">description</span>
                </div>
                <div>
                  <h3 class="mb-2 text-lg font-bold text-text-primary dark:text-white">
                    Chapter-wise Notes
                  </h3>
                  <p class="text-text-secondary dark:text-slate-400">
                    Comprehensive notes for every chapter with important formulas, diagrams, and concepts
                  </p>
                </div>
              </div>

              <div class="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-primary/5">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30"
                >
                  <span class="material-symbols-outlined">quiz</span>
                </div>
                <div>
                  <h3 class="mb-2 text-lg font-bold text-text-primary dark:text-white">
                    Daily Practice Questions
                  </h3>
                  <p class="text-text-secondary dark:text-slate-400">
                    Regular MCQs and practice problems to reinforce learning and track improvement
                  </p>
                </div>
              </div>

              <div class="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-accent/5">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-emerald-600 text-white shadow-lg shadow-accent/30"
                >
                  <span class="material-symbols-outlined">monitoring</span>
                </div>
                <div>
                  <h3 class="mb-2 text-lg font-bold text-text-primary dark:text-white">
                    Progress Tracking
                  </h3>
                  <p class="text-text-secondary dark:text-slate-400">
                    Monitor your preparation with detailed analytics and performance insights
                  </p>
                </div>
              </div>

              <div class="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-primary/5">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30"
                >
                  <span class="material-symbols-outlined">target</span>
                </div>
                <div>
                  <h3 class="mb-2 text-lg font-bold text-text-primary dark:text-white">
                    Exam-focused Approach
                  </h3>
                  <p class="text-text-secondary dark:text-slate-400">
                    Study methods designed specifically for NEB board exam success
                  </p>
                </div>
              </div>

              <div class="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-accent/5">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-emerald-600 text-white shadow-lg shadow-accent/30"
                >
                  <span class="material-symbols-outlined">lock_open</span>
                </div>
                <div>
                  <h3 class="mb-2 text-lg font-bold text-text-primary dark:text-white">
                    Free Access
                  </h3>
                  <p class="text-text-secondary dark:text-slate-400">
                    All study materials and resources available completely free for all +2 students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section with Gradient -->
    <section class="relative w-full overflow-hidden bg-gradient-to-r from-primary to-blue-600 py-24">
      <!-- Decorative Elements -->
      <div class="absolute -left-20 top-0 size-60 rounded-full bg-white/10 blur-3xl"></div>
      <div class="absolute -right-20 bottom-0 size-60 rounded-full bg-white/10 blur-3xl"></div>

      <div class="relative max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-black text-white">Ready to Excel in Your +2 Exams?</h2>
        <p class="mt-6 text-xl text-white/90">
          Join thousands of +2 students preparing smarter with StepWise
        </p>
        <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            class="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Start Learning Free
            <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
          <button
            class="flex items-center gap-2 rounded-2xl border-2 border-white/50 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
          >
            <span class="material-symbols-outlined">visibility</span>
            View Subjects
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  scroll-behavior: smooth;
}
</style>
