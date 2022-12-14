import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUsecase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification already exists!");

    await this.specificationRepository.create({
      description,
      name,
    });
  }
}

export { CreateSpecificationUsecase };
