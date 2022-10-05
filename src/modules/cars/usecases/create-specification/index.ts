import { SpecificationRepository } from "../../repositories/specification-repository";
import { CreateSpecificationController } from "./create-specification-controller";
import { CreateSpecificationUseCase } from "./create-specification-usecase";

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
