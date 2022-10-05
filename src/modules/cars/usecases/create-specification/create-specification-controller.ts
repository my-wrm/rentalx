import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUsecase } from "./create-specification-usecase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpecificationUsecase = container.resolve(
      CreateSpecificationUsecase
    );

    await createSpecificationUsecase.execute({
      description,
      name,
    });
    return response.status(201).send();
  }
}

export { CreateSpecificationController };
