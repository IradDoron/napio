import books_data from '../books_data/books_data';

function getChapterNames(categoryUrl, bookUrl) {
  const names = [];
  if (books_data[categoryUrl]?.books[bookUrl]?.chapters) {
    for (let i = 0; i < books_data[categoryUrl].books[bookUrl].chapters.length; i++) {
      names.push(books_data[categoryUrl].books[bookUrl].chapters[i].chapterHeader);
    }
    return names;
  }
}

export default getChapterNames;
