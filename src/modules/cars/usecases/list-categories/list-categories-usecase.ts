import { Category } from "../../entities/category";
import { ICategoryRepository } from "../../repositories/implementations/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.findAll();
    return categories;
  }
}

export { ListCategoriesUseCase };
