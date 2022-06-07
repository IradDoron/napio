import books_data from './books_data/books_data';

function getCategoryFromCategoryUrl(categoryUrl) {
  return books_data[categoryUrl];
}

export default getCategoryFromCategoryUrl;
