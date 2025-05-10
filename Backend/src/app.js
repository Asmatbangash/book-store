import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config("./.env");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// user routes
import { userRoutes } from "./routes/User.routes.js";
app.use("/api/v1/user", userRoutes);

// book routes
import { bookRoutes } from "./routes/Book.route.js";
app.use("/api/v1/book", bookRoutes);

export default app;
