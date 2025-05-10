import { Router } from "express";
import { addBook, getBooks } from "../controllers/Book.controller.js";

const bookRoutes = Router();

bookRoutes.route("/add-book").post(addBook);
bookRoutes.route("/get-books").get(getBooks);

export { bookRoutes };
