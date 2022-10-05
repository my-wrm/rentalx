import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/usecases";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
