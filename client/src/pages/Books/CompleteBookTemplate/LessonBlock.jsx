import books_data from '../../../helpers/books_data/books_data';
import RenderPage from '../RenderPage/RenderPage';

function LessonBlock({ categoryUrl, bookUrl, chapterIndex, lessonIndex }) {
  return (
    <>
      <RenderPage
        pageData={
          books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.lessons[Number(lessonIndex)]
            ?.lessonElements
        }
      />
    </>
  );
}

export default LessonBlock;
