import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "./implementations/ICategoriesRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({
      where: {
        name,
      },
    });
    return category;
  }
}

export { CategoryRepository };
