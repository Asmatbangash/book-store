import { Router } from "express";
import {
  userLogin,
  userLogOut,
  userRegister,
} from "../controllers/User.controller.js";
import { verifyUser } from "../middleware/verifyUser.js";

const userRoutes = Router();

userRoutes.route("/register").post(userRegister);
userRoutes.route("/login").post(userLogin);
userRoutes.route("/logOut").post(verifyUser, userLogOut);

export { userRoutes };
