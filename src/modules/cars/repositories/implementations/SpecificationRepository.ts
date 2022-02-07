import { Specification } from "../../model/Specification";

import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecificationDTO): Specification {
    const newSpecification = new Specification();

    Object.assign(newSpecification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(newSpecification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );
    return specification;
  }
}

export { SpecificationsRepository };
