import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/category-repository";
import { createCategoryController } from "../modules/cars/usecases/create-category";

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoryRepository.findAll();
  return response.status(200).json(categories);
});

export { categoriesRoutes };
