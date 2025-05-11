import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    catogory: {
      type: String,
      required: true,
      enum: ["Free", "Premium"],
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
