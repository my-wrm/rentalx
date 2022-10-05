import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/category";
import { ICategoryRepository } from "../../repositories/implementations/ICategoriesRepository";

@injectable()
class ListCategoriesUsecase {
  constructor(
    @inject("CategoryRepository")
    private categoriesRepository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.findAll();
    return categories;
  }
}

export { ListCategoriesUsecase };
