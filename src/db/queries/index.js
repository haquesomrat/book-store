import { replaceMongoIdArray, replaceMongoIdInObject } from "@/utils/data-util";

const { bookModel } = require("@/models/book-model");

async function getAllBooks() {
  const allBooks = await bookModel.find().lean();
  return replaceMongoIdArray(allBooks);
}

async function getBookById(id) {
  const book = await bookModel.findById(id).lean();
  return replaceMongoIdInObject(book);
}

export { getAllBooks, getBookById };
