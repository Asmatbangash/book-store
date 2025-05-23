import React, { useContext } from "react";
import { Button, Card } from "../components/index.js";
import { BookStoreContext } from "../context/BookStoreContex.jsx";
import AddBookForm from "../components/AddBookForm.jsx";

function Books() {
  const { books } = useContext(BookStoreContext);
  return (
    <div className="w-screen-full min-h-screen dark:bg-slate-900 dark:text-white">
      <div className="flex justify-center items-center flex-col my-25">
        <h1 className="text-3xl font-bold mb-5 text-center">
          We are delighted to have you{" "}
          <span className="text-pink-600">Here!</span>😊
        </h1>
        <p className="text-center px-10">
          Whether you're a passionate reader, a casual browser, or searching for
          your next favorite book, you've come to the right place. Our platform
          offers a wide collection of genres, authors, and bestsellers to
          explore. We are committed to providing a seamless, enjoyable shopping
          experience with user-friendly navigation, personalized
          recommendations, and secure checkout. From timeless classics to the
          latest releases, there's something for everyone. Thank you for
          choosing us as your reading companion. Happy browsing, and we hope you
          discover a story that stays with you forever!
        </p>
        <Button
          text="add-book"
          className="bg-pink-600 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal mt-7"
          onClick={() => document.getElementById("addBook").showModal()}
        />
        <AddBookForm />
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {books.data?.map((data) => (
          <Card
            data={data}
            key=""
            className="mx-4 dark:bg-slate-900 dark:text-white dark:border-1 "
          />
        ))}
      </div>
    </div>
  );
}

export default Books;
