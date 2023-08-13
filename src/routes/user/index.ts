import { Router } from "express";
import { createUserController } from "./instance/CreateUser";
import { listUserByIdController } from "./instance/ListUserById";
import { deleteUserController } from "./instance/DeleteUser";
import { deleteManyUsersController } from "./instance/DeleteManyUsers";
import { listAllUsersController } from "./instance/ListAllUsers";
import { getGithubAccessToken } from "../../modules/middlewares/auth/getGithubAccessToken";
import { getGithubUser } from "../../modules/middlewares/auth/getGithubUser"; 
import { checkGithubToken } from "../../modules/middlewares/auth/checkGithubToken";

const userRoute = Router();
userRoute.post("/login/:code", getGithubAccessToken,
  getGithubUser, (req, res) => 
    createUserController.handle(req, res));

userRoute.get("/", checkGithubToken, (req, res) =>
  listAllUsersController.handle(req, res));

userRoute.get("/user/:id/list", checkGithubToken, (req, res) =>
  listUserByIdController.handle(req, res));

userRoute.delete("/user/:id", checkGithubToken, (req, res) =>
  deleteUserController.handle(req, res));

userRoute.delete("/", checkGithubToken, (req, res) =>
  deleteManyUsersController.handle(req, res));

export { userRoute };
