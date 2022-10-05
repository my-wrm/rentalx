import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUsecase } from "./list-categories-usecase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesRepositoryUsecase = container.resolve(
      ListCategoriesUsecase
    );
    const categories = await listCategoriesRepositoryUsecase.execute();
    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
