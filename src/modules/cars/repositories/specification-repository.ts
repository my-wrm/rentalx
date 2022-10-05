import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./implementations/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const speficiation = this.repository.create({
      name,
      description,
    });
    await this.repository.save(speficiation);
  }

  async findAll(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      where: {
        name,
      },
    });
    return specification;
  }
}

export { SpecificationRepository };
