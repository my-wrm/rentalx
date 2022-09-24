import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const create = new CreateCategoryService(categoryRepository);

  create.execute({ description, name });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const categories = categoryRepository.findAll();

  return res.status(200).json(categories);
});

export { categoriesRoutes };
