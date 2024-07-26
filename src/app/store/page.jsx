import React from "react";
import BookList from "../ui/books/BookList";
import { getAllBooks } from "@/db/queries";

const BookListpage = async () => {
  const books = await getAllBooks();
  console.log(books);

  return <BookList books={books} />;
};

export default BookListpage;
