import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";

import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository,
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificantionAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificantionAlreadyExists) {
      throw new AppError("Specification already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
