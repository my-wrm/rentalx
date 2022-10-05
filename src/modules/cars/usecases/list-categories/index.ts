import { CategoryRepository } from "../../repositories/category-repository";
import { ListCategoriesController } from "./list-categories-controller";
import { ListCategoriesUsecase } from "./list-categories-usecase";

const categoryRepository = null;
const listCategoriesUsecase = new ListCategoriesUsecase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUsecase
);

export { listCategoriesController };
