const { bookModel } = require("@/models/book-model");

async function getAllBooks() {
  const allBooks = await bookModel.find().lean();
  console.log(allBooks);
  return allBooks;
}

export { getAllBooks };
