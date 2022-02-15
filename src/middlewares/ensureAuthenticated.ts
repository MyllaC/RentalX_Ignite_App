import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // Bearer iuacfobaoba(token) -> vem dentro do header

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  // desestruturar o header [0] = bearer [1] = token
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "cfe275a5908b5650488e0b0342c2d6cc",
    ) as IPayload;
    console.log(sub);

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
