import { Specification } from "../../entities/specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findByName(name: string): Specification;
  findAll(): Specification[];
  create({ description, name }: ICreateSpecificationDTO): void;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
