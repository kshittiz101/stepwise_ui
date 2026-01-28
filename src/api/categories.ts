import { Action } from "@/api/actions";
import { api } from "@/api";

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

class CategoryApi {
  /**
   * Fetch all categories
   */
  public async getAll() {
    return api.get<Category[]>(Action.CATEGORIES);
  }

  /**
   * Fetch single category by slug
   */
  public async getBySlug(slug: string) {
    return api.get<Category>(`${Action.CATEGORIES}${slug}/`);
  }
}

export default new CategoryApi();
