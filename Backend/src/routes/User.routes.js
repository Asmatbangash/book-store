import { Router } from "express";
import { userLogin, userRegister } from "../controllers/User.controller.js";

const userRoutes = Router();

userRoutes.route("/register").post(userRegister);
userRoutes.route("/login").post(userLogin);

export { userRoutes };
