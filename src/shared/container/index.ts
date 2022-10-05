import { container } from "tsyringe";
import { CategoryRepository } from "../../modules/cars/repositories/category-repository";
import { ICategoryRepository } from "../../modules/cars/repositories/implementations/ICategoriesRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
