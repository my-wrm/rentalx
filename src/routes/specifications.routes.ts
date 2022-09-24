import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecification = new CreateSpecificationService(
    specificationRepository
  );
  createSpecification.execute({ description, name });
  return res.status(201).send();
});

specificationsRoutes.get("/", (req, res) => {
  const specifications = specificationRepository.findAll();
  return res.status(200).json(specifications);
});

export { specificationsRoutes };
