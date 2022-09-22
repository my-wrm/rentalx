import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(401).json({
      error: "Category already exists.",
    });
  }

  categoryRepository.create({
    description,
    name,
  });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const categories = categoryRepository.getAll();

  return res.status(200).json(categories);
});

export { categoriesRoutes };
