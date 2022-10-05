import { Category } from "../../entities/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Promise<Category>;
  findAll(): Promise<Category[]>;
  create({ description, name }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRepository, ICreateCategoryDTO };
