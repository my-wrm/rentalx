import { Request, Response } from "express";
import { ListCategoriesUsecase } from "./list-categories-usecase";

class ListCategoriesController {
  constructor(private listCategoriesRepositoryUsecase: ListCategoriesUsecase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesRepositoryUsecase.execute();
    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
