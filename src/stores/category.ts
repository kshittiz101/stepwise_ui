import { defineStore } from 'pinia';
import categoryApi, { type Category } from '@/api/categories';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as Category[],
    loading: false,
    error: "" as string | null,
  }),

  getters: {
    // We can filter by slug or other properties here if needed
    getCategoryBySlug: (state) => (slug: string) => {
      return state.categories.find((c) => c.slug === slug);
    },
  },

  actions: {
    async fetchCategories() {
      this.loading = true;
      this.error = null;
      try {
        this.categories = await categoryApi.getAll();
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || "Failed to load categories";
        console.error("Store Error:", err);
      } finally {
        this.loading = false;
      }
    },
  },
});
