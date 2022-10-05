import { CategoryRepository } from "../../repositories/category-repository";
import { ListCategoriesController } from "./list-categories-controller";
import { ListCategoriesUseCase } from "./list-categories-usecase";

const categoryRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
