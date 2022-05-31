import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import Book from '../Book';
import abcTunes from '../../../data/abcTunes';

function BookTemplate() {
  const params = useParams();
  const { book, category } = params;
  return (
    <>
      <h2>קטגוריה: {abcTunes[category].name}</h2>
      <h2>ספר: {abcTunes[category].books[book].name}</h2>
      <Book category={category} book={book} />
    </>
  );
}

export default BookTemplate;
