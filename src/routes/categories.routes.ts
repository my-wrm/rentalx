import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/category-repository";
import { CreateCategoryService } from "../modules/cars/services/create-category-service";

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createCategory = new CreateCategoryService(categoryRepository);
  createCategory.execute({ description, name });
  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const categories = categoryRepository.findAll();
  return res.status(200).json(categories);
});

export { categoriesRoutes };
