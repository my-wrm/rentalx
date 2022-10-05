import { Router } from "express";
import multer from "multer";

import { listCategoriesController } from "../modules/cars/usecases";
import { CreateCategoryController } from "../modules/cars/usecases/create-category/create-category-controller";
import { importCategoryController } from "../modules/cars/usecases/import-category";
const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
