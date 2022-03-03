import { Router } from "express";
import multer from "multer";

import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const upload = multer({
  dest: "./avatar",
});

const createUserController = new CreateUserController();
const updateUserAcatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  upload.single("file"),
  updateUserAcatarController.handle,
);

export { usersRoutes };
