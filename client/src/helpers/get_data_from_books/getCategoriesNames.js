import books_data from '../books_data/books_data';

function getCategoriesNames() {
  return Object.keys(books_data);
}

export default getCategoriesNames;
