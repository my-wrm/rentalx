import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUsecase } from "./list-categories-usecase";

class ListCategoriesController {
  handle(request: Request, response: Response): Response {
    const listCategoriesRepositoryUsecase = container.resolve(
      ListCategoriesUsecase
    );
    const categories = listCategoriesRepositoryUsecase.execute();
    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
