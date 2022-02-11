/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

// DTO -> Data Transfer Object: criar um objeto que vai ser responsavel pela tranferencia de dados entre uma classe e outra

// singleton -> padrão de projeto, tem como definição criar a penas uma instacia de uma classe

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      // função do JS . consegue passar um objeto pra ele, consegue passar o satributos que eu quero para esse o objeto(category)
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    // pare ter o retorno da nossa lista de categorias
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoriesRepository };