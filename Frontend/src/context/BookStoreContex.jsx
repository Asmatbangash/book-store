import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const BookStoreContext = createContext({
  books: [],
});

function BookStoreProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5050/api/v1/book/get-books"
        );
        setBooks(response.data);
      } catch (error) {
        console.log("there are some error to fetch data", error);
      }
    };
    getBooks();
  }, []);

  return (
    <BookStoreContext.Provider value={{ books }}>
      {children}
    </BookStoreContext.Provider>
  );
}

export default BookStoreProvider;
