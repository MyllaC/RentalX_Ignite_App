import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // usuario existe
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email ou password incorrect");
    }

    // senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email ou password incorrect");
    }

    // gerar jsonwebtoken
    const token = sign({}, "cfe275a5908b5650488e0b0342c2d6cc", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IRespose = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };