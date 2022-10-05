import { Router } from "express";
import multer from "multer";

import { listCategoriesController } from "../modules/cars/usecases";
import { importCategoryController } from "../modules/cars/usecases/import-category";
import createCategoryController from "../modules/cars/usecases/create-category";
const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
