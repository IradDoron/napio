import Book from '../../components/Book';
import BOOKS_NAMES from '../../data/BOOKS_NAMES';

function Books() {
  return (
    <>
      <h1>Books page</h1>
      <Book book={BOOKS_NAMES.NOTEBOOK_FOR_ANNA_MAGDALENA_BACH} />
      <Book book={BOOKS_NAMES.LITTLE_EXERCISES_BOOK_01} />
      <Book book={BOOKS_NAMES.REPEATED_NOTE_BOOK_01} />
    </>
  );
}

export default Books;
