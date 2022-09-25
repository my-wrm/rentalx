import fs from "fs";
import { parse } from "csv-parse";
import { CategoryRepository } from "../../repositories/category-repository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parsedFile = parse();
      stream.pipe(parsedFile);

      parsedFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    console.log(
      "🚀 ~ file: import-category-usecase.ts ~ line 30 ~ ImportCategoryUseCase ~ execute ~ categories",
      categories
    );
  }
}

export { ImportCategoryUseCase };
