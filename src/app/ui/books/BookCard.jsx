import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <Link
      className="flex flex-col col-span-1 items-center rounded-xl bg-gray-50 p-2 m-2 shadow-sm"
      href={`/store/${book.id}`}
    >
      <div className="flex flex-col col-span-1 items-center">
        <div className="mb-2 h-13">
          <Image
            className="mr-2 rounded-md"
            src={book.cover}
            alt={book.title}
            width={150}
            height={100}
            style={{ height: "200px", width: "auto" }}
            priority={true}
          />
        </div>
        <h2 className="text-black">{book.title}</h2>
      </div>
    </Link>
  );
};

export default BookCard;
