import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUsecase } from "./create-category-usecase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategoryUsecase = container.resolve(CreateCategoryUsecase);

    const { name, description } = request.body;
    await createCategoryUsecase.execute({ description, name });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
