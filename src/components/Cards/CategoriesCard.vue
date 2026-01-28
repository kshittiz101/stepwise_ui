<script setup lang="ts">
interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

const props = defineProps<{
  category: Category;
}>();

</script>

<template>

  <section
    class="category-card group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
    <div class="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[16/10]">
      <img :src="props.category.image || 'https://placehold.co/600x400?text=No+Image'" :alt="props.category.name"
        class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col pt-4">
      <h3 class="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
        <a href="#">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {{ props.category.name }}
        </a>
      </h3>
      <p class="mt-2 text-sm text-gray-500 line-clamp-3 leading-relaxed">
        {{ props.category.description }}
      </p>

      <div
        class="mt-auto pt-4 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Explore Category <span class="ml-1">&rarr;</span>
      </div>
    </div>
  </section>
</template>
