import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUsecase } from "./import-category-usecase";

class ImportCategoryController {
  handle(request: Request, response: Response): Response {
    const { file } = request;
    const importCategoryUsecase = container.resolve(ImportCategoryUsecase);
    importCategoryUsecase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
