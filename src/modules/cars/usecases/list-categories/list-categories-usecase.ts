import { Category } from "../../models/category";
import { ICategoryRepository } from "../../repositories/interfaces/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.findAll();
    return categories;
  }
}

export { ListCategoriesUseCase };
