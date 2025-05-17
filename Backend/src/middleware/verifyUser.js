import { User } from "../models/User.model.js";
import { apiError } from "../utils/apiError.utils.js";
import { appCrashHandler } from "../utils/appCrashHandler.utils.js";
import jwt from "jsonwebtoken";

const verifyUser = appCrashHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authurization")?.replace("Bearare ", "");
  console.log(token);

  if (!token) {
    throw new apiError(401, "un-authorized request!");
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE);

  const user = await User.findById(decodedToken?._id).select(
    "-password -refreshToken"
  );

  req.user = user;
  next();
});

export { verifyUser };
