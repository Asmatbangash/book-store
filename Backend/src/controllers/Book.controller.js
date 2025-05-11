import { appCrashHandler } from "../utils/appCrashHandler.utils.js";
import { Book } from "../models/Book.model.js";
import { apiResponse } from "../utils/apiResponse.utils.js";
import { apiError } from "../utils/apiError.utils.js";

const addBook = appCrashHandler(async (req, res, next) => {
  const { title, desc, price } = req.body;
  if ([title, desc, price].some((data) => data.trim() === "")) {
    throw new apiError(401, "all field are required!...");
  }

  const book = await Book.create({
    title: title,
    desc: desc,
    price: price,
    catogory: price > 0 ? "Premium" : "Free",
  });

  return res
    .status(200)
    .json(new apiResponse(200, book, "book stored successfully!."));
});

const getBooks = appCrashHandler(async (req, res, next) => {
  const books = await Book.find();

  return res
    .status(200)
    .json(new apiResponse(200, books, "books fetched successfully!."));
});

export { addBook, getBooks };
