<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useCategoryStore } from "@/stores/category";
import { storeToRefs } from "pinia";
import CategoriesCard from "@/components/Cards/CategoriesCard.vue";

const store = useCategoryStore();
const { categories, loading, error } = storeToRefs(store);
const searchQuery = ref("");

const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories.value;
  const query = searchQuery.value.toLowerCase();
  return categories.value.filter(cat =>
    cat.name.toLowerCase().includes(query) ||
    cat.description.toLowerCase().includes(query)
  );
});

onMounted(() => {
  if (categories.value.length === 0) {
    store.fetchCategories();
  }
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-white">
      <!-- Background pattern -->
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#359EFF] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base font-semibold leading-7 text-primary">Browse Content</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Categories</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Explore our wide range of courses and resources to help you succeed in your academic and professional
            journey.
          </p>

          <!-- Search Bar -->
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <div class="relative w-full max-w-lg">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <input v-model="searchQuery" type="text"
                class="block w-full rounded-full border-0 py-4 pl-11 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow hover:ring-gray-400"
                placeholder="Search categories..." />
            </div>
          </div>
        </div>
      </div>

      <!-- Background pattern (bottom) -->
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#359EFF] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]">
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">

      <!-- Loading State (Skeleton) -->
      <div v-if="loading"
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div v-for="i in 8" :key="i" class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div class="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 animate-pulse"></div>
          <div class="mt-4 h-5 w-3/4 bg-gray-100 rounded animate-pulse"></div>
          <div class="mt-2 h-4 w-full bg-gray-100 rounded animate-pulse"></div>
          <div class="mt-1 h-4 w-2/3 bg-gray-100 rounded animate-pulse"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12 bg-red-50 rounded-xl">
        <h3 class="mt-2 text-sm font-semibold text-red-800">Error loading categories</h3>
        <p class="mt-1 text-sm text-red-600">{{ error }}</p>
        <div class="mt-6">
          <button @click="store.fetchCategories()" type="button"
            class="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
            Retry
          </button>
        </div>
      </div>

      <!-- Categories Grid -->
      <div v-else>
        <!-- No Results -->
        <div v-if="filteredCategories.length === 0" class="text-center py-20">
          <div class="mx-auto h-12 w-12 text-gray-400">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="mt-2 text-sm font-semibold text-gray-900">No categories found</h3>
          <p class="mt-1 text-sm text-gray-500">We couldn't find anything matching "{{ searchQuery }}". Try adjusting
            your search.</p>
          <div class="mt-6">
            <button @click="searchQuery = ''" type="button"
              class="text-sm font-semibold text-primary hover:text-blue-500">
              Clear search
            </button>
          </div>
        </div>

        <!-- Results Grid -->
        <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CategoriesCard v-for="category in filteredCategories" :key="category.slug" :category="category" />
        </div>
      </div>
    </main>
  </div>
</template>
