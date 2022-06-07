import books_data from '../books_data/books_data';

function getLessonsNames(categoryUrl, bookUrl, chapterIndex) {
  const names = [];
  if (books_data[categoryUrl]?.books[bookUrl]?.chapters[chapterIndex]?.lessons) {
    for (let i = 0; i < books_data[categoryUrl].books[bookUrl].chapters[chapterIndex].lessons.length; i++) {
      names.push(books_data[categoryUrl].books[bookUrl].chapters[chapterIndex].lessons[i].lessonHeader);
    }
    return names;
  }
}

export default getLessonsNames;
