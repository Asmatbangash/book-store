import { User } from "../models/User.model.js";
import { apiError } from "../utils/apiError.utils.js";
import { apiResponse } from "../utils/apiResponse.utils.js";
import { appCrashHandler } from "../utils/appCrashHandler.utils.js";

const option = {
  httpOnly: true,
  secure: true,
};

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new apiError(404, "User not found");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new apiError(401, "there are some error to generate tokens");
  }
};

const userRegister = appCrashHandler(async (req, res, next) => {
  // get the data from req.body
  // check the data that is truly come
  // check the user in db that is already exist or not
  // if user already exist throw error and if not exist then creat user
  // register the user

  const { name, email, password, address } = req.body;

  if ([name, email, password, address].some((field) => field.trim() === "")) {
    throw new apiError(400, "all fields are required");
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new apiError(401, "this email arlready existed!");
  }

  const user = await User.create({
    name: name,
    email: email,
    password: password,
    address: address,
  }).select("-password");

  return res
    .status(200)
    .json(new apiResponse(200, user, "user register successfully!"));
});

const userLogin = appCrashHandler(async (req, res, next) => {
  // get data from req.body
  // check data is truly come
  // check the email and password is valid
  // if not valid throw error and if valid then user login successfully

  const { email, password } = req.body;

  if (!(email && password)) {
    throw new apiError(401, "all fields are required!.");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new apiError(401, "Invalid email.");
  }

  const isPasswordValid = user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new apiError(401, "invalid password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );
  const loggedUser = await User.findById(user._id);

  return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(
      new apiResponse(
        200,
        {
          user: loggedUser,
          accessToken,
          refreshToken,
        },
        "user login successfully!."
      )
    );
});

const userLogOut = appCrashHandler(async (req, res, next) => {
  await User.findByIdAndUpdate(
    req.user?._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option)
    .json(new apiResponse(200, {}, "user logOut Sucessfully!"));
});

export { userRegister, userLogin, userLogOut };
