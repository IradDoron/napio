import books_data from './books_data/books_data';

function searchBook(book) {
  // for example: the_middle_octave
  const categories = Object.keys(books_data);
  console.log(categories);
  for (let i = 0; i < categories.length; i++) {
    if (books_data[categories[i]].books[book]) {
      return books_data[categories[i]].books[book];
    }
  }
}

export default searchBook;
