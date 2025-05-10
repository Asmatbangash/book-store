import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config("./.env");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// user routes
import { userRoutes } from "./routes/User.routes.js";
app.use("/api/v1/user", userRoutes);

export default app;
