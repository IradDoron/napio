import Category from './Category/Category';
import PageHeader from '../../components/PageHeader/PageHeader';

import abcTunes from '../../data/abcTunes';
import BookTemplate from './BookTemplate/BookTemplate';
import { Outlet, Routes, Route, useParams } from 'react-router-dom';

function Books() {
  const categories = Object.keys(abcTunes);

  return (
    <>
      <PageHeader>ספרים</PageHeader>
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
