import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./create-category-usecase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const { name, description } = request.body;
    await createCategoryUseCase.execute({ description, name });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
