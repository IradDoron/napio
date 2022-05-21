import Category from './Category/Category';

import abcTunes from '../../data/abcTunes';
import BookTemplate from './BookTemplate/BookTemplate';
import { Outlet, Routes, Route, useParams } from 'react-router-dom';

function Books() {
  const categories = Object.keys(abcTunes);

  return (
    <>
      <h1>Books page</h1>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <Category category={abcTunes[category]} />
          </div>
        );
      })}
      <Outlet />
    </>
  );
}

export default Books;
