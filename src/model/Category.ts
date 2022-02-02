import { v4 as uuidV4 } from "uuid";

class Category {
  id?: string;

  name: string;

  description: string;

  created_at: Date;

  constructor() {
    // Assim, a repsonsabilidade de criar o ID não fica na rota categories
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
