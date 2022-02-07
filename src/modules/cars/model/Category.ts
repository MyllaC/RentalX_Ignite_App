import { v4 as uuidV4 } from "uuid";

class Category {
  id?: string;

  name: string;

  description: string;

  // eslint-disable-next-line camelcase
  created_at: Date;

  constructor() {
    // Assim, a repsonsabilidade de criar o ID não fica na rota categories
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { Category };
