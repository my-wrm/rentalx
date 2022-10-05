import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./create-category-usecase";

class CreateCategoryController {
  constructor(private createCategoryRepositoryUseCase: CreateCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    await this.createCategoryRepositoryUseCase.execute({ description, name });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
