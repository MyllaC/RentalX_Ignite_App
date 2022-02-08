/* eslint-disable no-useless-constructor */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { parse as csvParse } from "csv-parse";
import fs from "fs"; // modo nativo do node = file system
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path); // essa função que permite a leitura do arquivo em parter

      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile); // o pipe pega oq esta sendo lido do stream e joga para o lugar q a gente determinar

      parseFile
        .on("data", async line => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", err => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    console.log(categories);
  }
}

export { ImportCategoryUseCase };
