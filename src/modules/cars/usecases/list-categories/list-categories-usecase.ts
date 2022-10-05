import { Category } from "../../entities/category";
import { ICategoryRepository } from "../../repositories/implementations/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  async execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.findAll();
    return categories;
  }
}

export { ListCategoriesUseCase };
