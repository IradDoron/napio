import books_data from '../../../helpers/books_data/books_data';

function BookBlock({ categoryUrl, bookUrl }) {
  return (
    <>
      <h1>{books_data[categoryUrl]?.books[bookUrl]?.name}</h1>
    </>
  );
}

export default BookBlock;
