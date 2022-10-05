import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./create-specification-usecase";

class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );

    createSpecificationUseCase.execute({
      description,
      name,
    });
    return response.status(201).send();
  }
}

export { CreateSpecificationController };
