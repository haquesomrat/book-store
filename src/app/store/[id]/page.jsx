import { getBookById } from "@/app/lib/fake-data";
import React from "react";

const BookDetailsPage = ({ params: { id } }) => {
  const book = getBookById(id);
  return <div>{book.title}</div>;
};

export default BookDetailsPage;
