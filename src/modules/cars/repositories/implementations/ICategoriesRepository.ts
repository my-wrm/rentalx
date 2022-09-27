import { Category } from "../../entities/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  findAll(): Category[];
  create({ description, name }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };
