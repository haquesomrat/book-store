import { getBookById } from "@/app/lib/fake-data";
import Image from "next/image";
import React from "react";

const BookDetailsPage = ({ params: { id } }) => {
  const book = getBookById(id);
  return (
    <div className="flex flex-col items-center gap-2 max-w-3xl">
      <Image
        className="mr-2 rounded-md"
        src={book.cover}
        alt={book.title}
        width={150}
        height={100}
        style={{ height: "400px", width: "auto" }}
        priority={true}
      />
      <h2 className="text-2xl">
        {book.title} by {book.author}
      </h2>
      <p>{book.description}</p>
      <h5 className="text-lg font-medium">
        {book.genre} - {book.pages} pages - {book.stock} pieces are in stock
      </h5>
      <div className="flex flex-wrap gap-5 mt-3">
        <div className="text-center  space-y-2">
          <button className="px-3 py-1.5 bg-purple-400 rounded">
            Buy this book for {book.sellPrice} BDT
          </button>
          {book.sold > 1 ? (
            <p className="text-sm">{book.sold} copies sold already</p>
          ) : (
            ""
          )}
        </div>
        <div className="text-center space-y-2">
          <button className="px-3 py-1.5 bg-purple-400 rounded">
            Rent this book for {book.rentPrice} BDT/pm
          </button>
          <p className="text-sm">Be the first one to rent this book</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
