import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/specification-repository";
import { createSpecificationController } from "../modules/cars/usecases/create-specification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
