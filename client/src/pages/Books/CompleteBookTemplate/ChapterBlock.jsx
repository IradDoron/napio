import books_data from '../../../helpers/books_data/books_data';

function ChapterBlock({ categoryUrl, bookUrl, chapterIndex }) {
  console.log();
  return (
    <>
      <h1>
        פרק מספר {chapterIndex} -{' '}
        {books_data[categoryUrl]?.books[bookUrl]?.chapters[Number(chapterIndex)]?.chapterHeader}
      </h1>
    </>
  );
}

export default ChapterBlock;
