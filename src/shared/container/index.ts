import { container } from "tsyringe";
import { CategoryRepository } from "../../modules/cars/repositories/category-repository";
import { ICategoryRepository } from "../../modules/cars/repositories/implementations/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/implementations/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/specification-repository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);
