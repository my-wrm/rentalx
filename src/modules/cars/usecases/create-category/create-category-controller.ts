import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./create-category-usecase";

class CreateCategoryController {
  constructor(private categoryRepositoryUseCase: CreateCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    this.categoryRepositoryUseCase.execute({ description, name });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
