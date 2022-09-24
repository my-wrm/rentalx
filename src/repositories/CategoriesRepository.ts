import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category: Category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  findAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const categoryByName = this.categories.find(
      (category) => category.name === name
    );

    return categoryByName;
  }
}

export { CategoriesRepository };
