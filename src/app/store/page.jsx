import React from "react";
import { getAllBooks } from "../lib/fake-data";
import BookList from "../ui/books/BookList";

const BookListpage = () => {
  const books = getAllBooks();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <BookList books={books} />
    </div>
  );
};

export default BookListpage;
