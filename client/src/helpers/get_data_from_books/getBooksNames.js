import books_data from '../books_data/books_data';

function getBooksNames(categoryUrl) {
  if (books_data[categoryUrl]?.books) {
    return Object.keys(books_data[categoryUrl].books);
  }
}

export default getBooksNames;
