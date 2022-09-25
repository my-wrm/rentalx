import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./create-category-usecase";

class CreateCategoryController {
  constructor(private createCategoryRepositoryUseCase: CreateCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    this.createCategoryRepositoryUseCase.execute({ description, name });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
