import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./list-categories-usecase";

class ListCategoriesController {
  constructor(private listCategoriesRepositoryUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesRepositoryUseCase.execute();
    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
