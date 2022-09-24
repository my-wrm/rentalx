import { Category } from "../models/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoryRepository implements ICategoryRepository {
  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  findAll(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ description, name }: ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoryRepository };
