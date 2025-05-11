import React, { useState } from "react";
import { InputBox, Button } from "../components";
import axios from "axios";

function AddBookForm() {
  const [data, setData] = useState({
    title: "",
    desc: "",
    price: "",
  });

  const handlSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: data.title,
      desc: data.desc,
      price: data.price,
    };
    try {
      const response = axios.post(
        "http://localhost:5050/api/v1/book/add-book",
        newBook
      );
    } catch (error) {
      console.log("there are some error to add new book", error);
    }
    setData({ title: "", desc: "", price: "" });
    window.location.reload();
  };

  return (
    <>
      <dialog id="addBook" className="modal">
        <div className="modal-box dark:bg-slate-900">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm bg-black text-white btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form
            onSubmit={handlSubmit}
            className="flex justify-center items-center flex-col gap-3 "
          >
            <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm dark:bg-slate-900 dark:text-white">
              <h2 className="text-black dark:text-white font-bold text-lg">
                Add your book
              </h2>

              <div className="mt-4 w-screen-full">
                <label className="text-black dark:text-white" for="name">
                  Title
                </label>
                <InputBox
                  placeholder="title"
                  className="w-full dark:text-white dark:bg-slate-900 dark:border-2 bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  type="text"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>

              <div className="mt-4">
                <label className="text-black dark:text-white" for="desc">
                  Description
                </label>
                <textarea
                  placeholder="description"
                  className="w-full dark:text-white dark:bg-slate-900 dark:border-2 bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="desc"
                  value={data.desc}
                  onChange={(e) => setData({ ...data, desc: e.target.value })}
                  required
                ></textarea>
              </div>

              <div className="mt-4 flex flex-row space-x-2">
                <div className="flex-1">
                  <label className="text-black dark:text-white" for="price">
                    Price
                  </label>
                  <InputBox
                    placeholder="$ 00.0"
                    className="w-full dark:text-white dark:bg-slate-900 dark:border-2 bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    id="price"
                    type="number"
                    value={data.price}
                    onChange={(e) =>
                      setData({ ...data, price: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900"
                  type="submit"
                  text="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default AddBookForm;
