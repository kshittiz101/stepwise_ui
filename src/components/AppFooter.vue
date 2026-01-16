<script setup lang="ts">
</script>

<template>
  <footer class="bg-surface border-t border-border py-16 text-sm dark:bg-surface-alt dark:border-border">
    <div class="max-w-[1248px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-primary p-2 rounded-xl">
              <span class="material-symbols-outlined text-white text-2xl">school</span>
            </div>
            <span class="text-2xl font-black tracking-tight text-text-primary dark:text-white">StepWise</span>
          </div>
          <p class="leading-relaxed mb-6 text-text-muted max-w-sm">
            Empowering the next generation of Nepali leaders through quality education and accessible skill-building.
          </p>
        </div>

        <div>
          <h3 class="font-bold text-primary uppercase tracking-wider mb-6 text-xs dark:text-primary">Courses</h3>
          <ul class="space-y-4">
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Lok Sewa Preparation</a></li>
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Medical Entrance</a></li>
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Engineering Prep</a></li>
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Web Development</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-primary uppercase tracking-wider mb-6 text-xs dark:text-primary">Company</h3>
          <ul class="space-y-4">
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">About Us</a></li>
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Contact</a></li>
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Careers</a></li>
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-primary uppercase tracking-wider mb-6 text-xs dark:text-primary">Legal</h3>
          <ul class="space-y-4">
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Terms of Service</a></li>
            <li><a href="#" class="text-text-secondary hover:text-primary transition-colors dark:text-slate-400 dark:hover:text-primary">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 dark:border-border">
        <p class="text-xs text-text-muted dark:text-slate-500">&copy; 2024 StepWise Nepal. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300 dark:bg-surface dark:text-slate-400 dark:hover:bg-primary dark:hover:text-white">
            <span class="material-symbols-outlined text-xl">public</span>
          </a>
          <a href="#" class="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300 dark:bg-surface dark:text-slate-400 dark:hover:bg-primary dark:hover:text-white">
            <span class="material-symbols-outlined text-xl">mail</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
