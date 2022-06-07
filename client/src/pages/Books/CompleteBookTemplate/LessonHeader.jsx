import books_data from '../../../helpers/books_data/books_data';

function LessonHeader({ categoryUrl, bookUrl, chapterIndex, lessonIndex }) {
  if (lessonIndex) {
    return (
      <>
        <h1>
          פרק {Number(chapterIndex)} {' - '}
          {books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.chapterHeader}
        </h1>
        <h2>
          שיעור {Number(lessonIndex) + 1} -{' '}
          {
            books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.lessons[Number(lessonIndex)]
              ?.lessonHeader
          }
        </h2>
      </>
    );
  } else {
    return null;
  }
}

export default LessonHeader;
