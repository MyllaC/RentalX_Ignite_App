/* eslint-disable import/prefer-default-export */
import { Category } from "../model/Category";

// DTO -> Data Transfer Object: criar um objeto que vai ser responsavel pela tranferencia de dados entre uma classe e outra

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
    // responsável por cadastrar nossa categoria. Usa o void para falar que não tem retorno

    const category = new Category();

    Object.assign(category, {
      // função do JS . consegue passar um objeto pra ele, consegue passar o satributos que eu quero para esse o objeto(category)
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
