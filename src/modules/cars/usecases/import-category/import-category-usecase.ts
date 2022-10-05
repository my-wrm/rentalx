import fs from "fs";
import { parse } from "csv-parse";
import { CategoryRepository } from "../../repositories/category-repository";
import { inject, injectable } from "tsyringe";

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUsecase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: CategoryRepository
  ) {}

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
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async (category) => {
      const { name, description } = category;

      const alreadyHasCategory = this.categoryRepository.findByName(name);

      if (!alreadyHasCategory) {
        this.categoryRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUsecase };
