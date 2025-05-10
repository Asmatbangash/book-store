import { Router } from "express";
import { addBook } from "../controllers/Book.controller.js";

const bookRoutes = Router();

bookRoutes.route("/add-book").post(addBook);

export { bookRoutes };
