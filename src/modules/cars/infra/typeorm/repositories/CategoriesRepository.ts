import { getRepository, Repository } from "typeorm";

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "@modules/cars/repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

// DTO -> Data Transfer Object: criar um objeto que vai ser responsavel pela tranferencia de dados entre uma classe e outra

// singleton -> padrão de projeto, tem como definição criar a penas uma instacia de uma classe

class CategoriesRepository implements ICategoriesRepository {
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

  async list(): Promise<Category[]> {
    // pare ter o retorno da nossa lista de categorias
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // Select * from categories where name = "name"
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
