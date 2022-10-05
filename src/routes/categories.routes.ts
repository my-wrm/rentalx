import { Router } from "express";
import multer from "multer";

import { listCategoriesController } from "../modules/cars/usecases";
import { CreateCategoryController } from "../modules/cars/usecases/create-category/create-category-controller";
import { ImportCategoryController } from "../modules/cars/usecases/import-category/import-category-controller";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
