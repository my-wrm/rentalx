import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUsecase } from "./import-category-usecase";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryUsecase = container.resolve(ImportCategoryUsecase);
    await importCategoryUsecase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
